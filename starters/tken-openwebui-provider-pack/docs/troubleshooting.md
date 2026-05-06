# Troubleshooting

## 401 Unauthorized

Check that the API key is copied correctly and that the WebUI is sending it as a bearer token.

## 502 Gateway Error

Retry after a short wait. If the error continues, check whether the upstream route is enabled and has available balance.

## Model Not Found

Use route names that exist in your account, such as `free-model` or `premium-gpt`.

## Wrong API Base URL

Use:

```text
https://www.tken.shop/v1
```
