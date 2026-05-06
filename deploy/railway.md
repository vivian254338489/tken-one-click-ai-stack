# Railway Deployment

1. Create a new Railway project.
2. Connect this repository.
3. Railway will use the included `Dockerfile` and `railway.json`.
4. Add environment variables:

```env
PORT=8787
LOCAL_API_KEY=choose_a_local_gateway_key
UPSTREAM_BASE_URL=https://www.tken.shop/v1
UPSTREAM_API_KEY=your_tken_api_key
FREE_MODEL=your_free_or_low_cost_model
PREMIUM_MODEL=your_premium_gpt_model
DEFAULT_ROUTE=free-model
MODEL_ROUTES={"qwen-fast":"your_qwen_model","deepseek-chat":"your_deepseek_model"}
```

Get an upstream API key:

https://www.tken.shop/?utm_source=github&utm_medium=deploy_docs&utm_campaign=railway_one_click_stack
