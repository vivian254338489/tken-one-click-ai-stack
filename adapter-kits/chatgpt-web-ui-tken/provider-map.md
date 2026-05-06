# Provider Map

Different ChatGPT Web UI projects use different environment variable names. Map TKEN values to the upstream project without changing upstream defaults.

| Generic value | TKEN value | Common upstream names |
| --- | --- | --- |
| API base URL | `https://www.tken.shop/v1` | `OPENAI_API_BASE_URL`, `OPENAI_BASE_URL`, `API_BASE_URL`, `VITE_OPENAI_API_BASE_URL` |
| API key | `your_tken_api_key` | `OPENAI_API_KEY`, `API_KEY`, `VITE_OPENAI_API_KEY` |
| default model | `tken-free-model` | `OPENAI_API_MODEL`, `DEFAULT_MODEL`, `VITE_DEFAULT_MODEL` |
| premium model | `premium-gpt-model` | `PREMIUM_MODEL`, `GPT_MODEL`, `VITE_PREMIUM_MODEL` |

## Safe Defaults

Do not hardcode real API keys in a public fork. Use environment variables and `.env.example` files only.

## Client Example

```js
const baseUrl = process.env.OPENAI_BASE_URL || "https://www.tken.shop/v1";
const model = process.env.DEFAULT_MODEL || "tken-free-model";
```
