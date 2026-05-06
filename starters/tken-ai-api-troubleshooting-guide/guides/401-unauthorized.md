# 401 Unauthorized

Most 401 errors are caused by one of these:

- missing `Authorization` header
- wrong API key
- using the local gateway key where the upstream key is expected
- using the upstream key where the local gateway key is expected

## Check

```bash
curl https://www.tken.shop/v1/models \
  -H "Authorization: Bearer $TKEN_API_KEY"
```

## Fix

Use:

```text
Authorization: Bearer your_api_key
```

Do not include quotes around the key in the header.
