# API Base URL

OpenAI-compatible clients usually need a base URL that ends in `/v1`.

Use:

```text
https://www.tken.shop/v1
```

Then call:

```text
/chat/completions
/models
```

Do not accidentally duplicate `/v1`:

```text
https://www.tken.shop/v1/v1/chat/completions
```

Do not omit `/v1` if your client expects a base URL.
