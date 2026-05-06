# Model Routing

Use low-cost model routes for simple tasks and premium GPT routes for complex work.

| Task | Route |
| --- | --- |
| Extraction | Free or low-cost route |
| Formatting | Free or low-cost route |
| Drafting | Low-cost route |
| Coding | Premium GPT route |
| Complex reasoning | Premium GPT route |
| Final critical answer | Premium route or reviewed low-cost route |

Example route names in this starter:

- `free-model`
- `premium-gpt`

Map them in `.env`:

```env
FREE_MODEL=your_free_or_low_cost_model
PREMIUM_MODEL=your_premium_gpt_model
DEFAULT_ROUTE=free-model
MODEL_ROUTES={"qwen-fast":"your_qwen_model","deepseek-chat":"your_deepseek_model"}
```

`MODEL_ROUTES` is optional JSON. Keys are public local route names. Values are upstream model IDs.
