# 502 Gateway Error

502 usually means the gateway could not reach the upstream provider.

## Common Causes

- upstream base URL is wrong
- upstream API key is missing
- provider is temporarily unavailable
- network or firewall is blocking the request
- request body is too large

## Fix

Check:

```env
UPSTREAM_BASE_URL=https://www.tken.shop/v1
UPSTREAM_API_KEY=your_real_key
```

Then test `/v1/models` before sending chat requests.
