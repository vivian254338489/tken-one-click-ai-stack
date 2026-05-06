# CORS Error

CORS errors happen in browser clients when the server does not allow the browser origin.

## Fix

If you control the gateway, set:

```env
CORS_ORIGIN=https://your-site.example
```

For local testing, a wildcard can be convenient, but avoid wildcard CORS for production traffic.

If you do not control the gateway, call it from your backend instead of directly from the browser.
