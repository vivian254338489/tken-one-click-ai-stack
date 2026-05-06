const config = window.TKEN_WEB_CONFIG || {};
const modelSelect = document.getElementById("model");
const messages = document.getElementById("messages");
const form = document.getElementById("chat-form");
const promptInput = document.getElementById("prompt");
const keyInput = document.getElementById("api-key");

for (const model of config.models || []) {
  const option = document.createElement("option");
  option.value = model.id;
  option.textContent = model.label || model.id;
  if (model.id === config.defaultModel) option.selected = true;
  modelSelect.appendChild(option);
}

function addMessage(role, text) {
  const item = document.createElement("div");
  item.className = `message ${role}`;
  item.textContent = text;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const prompt = promptInput.value.trim();
  if (!prompt) return;

  addMessage("user", prompt);
  promptInput.value = "";

  try {
    const response = await fetch(`${config.apiBaseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${keyInput.value.trim()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: modelSelect.value,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const data = await response.json();
    addMessage("assistant", data.choices?.[0]?.message?.content || JSON.stringify(data, null, 2));
  } catch (error) {
    addMessage("assistant", `Request failed: ${error.message}`);
  }
});

addMessage("assistant", "Paste your API key, choose a route, and send a test message.");
