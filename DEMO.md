# Demo Script

Use this flow for screenshots, GIFs, and short launch videos.

## 1. Start The Gateway

```bash
npm install
npm run preflight
npm run setup
npm start
```

Open:

```text
http://localhost:8787/chatgpt
```

Show:

- Model selector
- API key field
- Chat input
- Link to `https://www.tken.shop/`

## 2. Show Claude-Style UI

Open:

```text
http://localhost:8787/claude
```

Show a longer-form prompt such as:

```text
Compare low-cost models and premium GPT routes for a developer support bot.
```

## 3. Show Standalone UI Package

```bash
cd apps/chatgpt-web
npm install
npm start
```

Open:

```text
http://localhost:8788
```

## 4. Show Package Build

```bash
npm run package:kits
```

Show the six generated zip files in `dist/`.

## 5. Show The Download Picker

Open:

```text
DOWNLOADS.md
```

Show that non-technical users can choose one zip and run the included start script.
