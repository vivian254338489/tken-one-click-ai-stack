async function loadConfig() {
  const response = await fetch("/config/public");
  return response.json();
}

function createMessage(role, content) {
  const item = document.createElement("div");
  item.className = `message ${role}`;
  item.textContent = content;
  return item;
}

async function sendChat({ messages, model, apiKey }) {
  const response = await fetch("/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, messages }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message || `Request failed: ${response.status}`);
  }
  return data.choices?.[0]?.message?.content || JSON.stringify(data, null, 2);
}

async function bootChat(options) {
  const config = await loadConfig();
  const form = document.querySelector("#chat-form");
  const input = document.querySelector("#prompt");
  const messagesEl = document.querySelector("#messages");
  const modelEl = document.querySelector("#model");
  const keyEl = document.querySelector("#local-key");

  for (const model of config.models) {
    const option = document.createElement("option");
    option.value = model.id;
    option.textContent = model.label;
    modelEl.appendChild(option);
  }

  modelEl.value = config.defaultModel || config.models[0]?.id || "free-model";
  keyEl.value = localStorage.getItem("tken_local_key") || "local-dev-key";
  const demo = createMessage("assistant", "Demo mode works without an upstream API key. Send a message to test the UI. For production, set UPSTREAM_API_KEY in .env.");
  messagesEl.appendChild(demo);

  const messages = [
    { role: "system", content: options.systemPrompt },
  ];

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const prompt = input.value.trim();
    if (!prompt) return;

    const apiKey = keyEl.value.trim();
    localStorage.setItem("tken_local_key", apiKey);

    input.value = "";
    messages.push({ role: "user", content: prompt });
    messagesEl.appendChild(createMessage("user", prompt));
    const pending = createMessage("assistant", "Thinking...");
    messagesEl.appendChild(pending);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    try {
      const answer = await sendChat({ messages, model: modelEl.value, apiKey });
      pending.textContent = answer;
      messages.push({ role: "assistant", content: answer });
    } catch (error) {
      pending.textContent = `Error: ${error.message}`;
    }
    messagesEl.scrollTop = messagesEl.scrollHeight;
  });
}

window.bootChat = bootChat;
