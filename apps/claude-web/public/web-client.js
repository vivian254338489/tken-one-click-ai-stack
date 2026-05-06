function getConfig() {
  return window.TKEN_WEB_CONFIG || {
    apiBaseUrl: "https://www.tken.shop/v1",
    defaultModel: "tken-free-model",
    models: [
      { id: "tken-free-model", label: "Low-cost model" },
      { id: "premium-gpt-model", label: "Premium GPT route" },
    ],
  };
}

function createMessage(role, content) {
  const item = document.createElement("div");
  item.className = `message ${role}`;
  item.textContent = content;
  return item;
}

async function sendChat({ apiBaseUrl, apiKey, model, messages }) {
  const response = await fetch(`${apiBaseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, messages }),
  });

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  if (!response.ok) {
    throw new Error(data?.error?.message || `Request failed: ${response.status}`);
  }

  return data?.choices?.[0]?.message?.content || (typeof data === "string" ? data : JSON.stringify(data, null, 2));
}

async function bootStandaloneChat(options) {
  const config = getConfig();
  const form = document.querySelector("#chat-form");
  const input = document.querySelector("#prompt");
  const messagesEl = document.querySelector("#messages");
  const modelEl = document.querySelector("#model");
  const keyEl = document.querySelector("#api-key");
  const baseEl = document.querySelector("#api-base");

  baseEl.value = localStorage.getItem("tken_api_base") || config.apiBaseUrl;
  keyEl.value = localStorage.getItem("tken_api_key") || "";
  messagesEl.appendChild(createMessage("assistant", "Paste your API key and send a message. If you are using the bundled gateway in demo mode, use local-dev-key as the local gateway key."));

  for (const model of config.models) {
    const option = document.createElement("option");
    option.value = model.id;
    option.textContent = model.label;
    modelEl.appendChild(option);
  }

  modelEl.value = localStorage.getItem("tken_model") || config.defaultModel || config.models[0]?.id;

  const messages = [{ role: "system", content: options.systemPrompt }];

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const prompt = input.value.trim();
    if (!prompt) return;

    const apiBaseUrl = baseEl.value.trim();
    const apiKey = keyEl.value.trim();
    const model = modelEl.value;

    localStorage.setItem("tken_api_base", apiBaseUrl);
    localStorage.setItem("tken_api_key", apiKey);
    localStorage.setItem("tken_model", model);

    input.value = "";
    messages.push({ role: "user", content: prompt });
    messagesEl.appendChild(createMessage("user", prompt));

    const pending = createMessage("assistant", "Thinking...");
    messagesEl.appendChild(pending);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    try {
      const answer = await sendChat({ apiBaseUrl, apiKey, model, messages });
      pending.textContent = answer;
      messages.push({ role: "assistant", content: answer });
    } catch (error) {
      pending.textContent = `Error: ${error.message}`;
    }

    messagesEl.scrollTop = messagesEl.scrollHeight;
  });
}

window.bootStandaloneChat = bootStandaloneChat;
