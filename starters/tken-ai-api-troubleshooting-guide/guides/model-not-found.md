# Model Not Found

This happens when the model name your client sends is not available on the route.

## Fix

Use local route names from your gateway:

```text
free-model
premium-gpt
```

Or update your route mapping:

```env
FREE_MODEL=tken-free-model
PREMIUM_MODEL=premium-gpt-model
```

If your client hardcodes a model name, change it to one of the local routes.
