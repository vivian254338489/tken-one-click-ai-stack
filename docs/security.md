# Security Notes

- Do not commit real API keys.
- Use a strong `LOCAL_API_KEY`.
- Keep premium model routes behind authentication.
- Add rate limits before public production use.
- Do not log sensitive prompts unless users consent.
- Rotate API keys if they are exposed.
- Use HTTPS in production.
- Set `CORS_ORIGIN` to your own domain in production instead of `*` when the gateway is public.
- Treat `MODEL_ROUTES` as configuration, not user input.
