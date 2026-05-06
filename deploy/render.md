# Render Deployment

1. Create a new Web Service on Render.
2. Choose this repository.
3. Select Docker.
4. Add environment variables from `.env.example`.
5. Deploy.

Blueprint users can start from `render.yaml`.

Required values:

```env
UPSTREAM_BASE_URL=https://www.tken.shop/v1
UPSTREAM_API_KEY=your_tken_api_key
LOCAL_API_KEY=choose_a_local_gateway_key
DEFAULT_ROUTE=free-model
```

Get an upstream API key:

https://www.tken.shop/?utm_source=github&utm_medium=deploy_docs&utm_campaign=render_one_click_stack
