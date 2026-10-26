# Study Reader

A static, textbook-styled study helper. You type a question in the toolbar search field and the answer is laid out as a textbook section (headings, prose, KaTeX math). AI answers are labelled "AI-generated study notes".

## Run locally
Open `index.html` in a browser, or serve the folder: `python3 -m http.server 8000` and open http://localhost:8000.

## Publish on GitHub Pages
1. Push these files to the root of a repo (or into `/docs`).
2. Go to Settings → Pages → Deploy from branch → `main`, folder `/` (or `/docs`).
3. Open `https://<user>.github.io/<repo>/`.

## API key
Click **⋮** in the toolbar, then paste an OpenAI-compatible key, base URL, and model, and click Save.

| Provider | Get a key | Base URL | Example model |
|---|---|---|---|
| OpenAI | https://platform.openai.com/api-keys (needs prepaid credit) | `https://api.openai.com/v1` | `gpt-4o-mini` |
| Groq (free tier) | https://console.groq.com/keys | `https://api.groq.com/openai/v1` | `llama-3.3-70b-versatile` |
| OpenRouter | https://openrouter.ai/keys | `https://openrouter.ai/api/v1` | `openai/gpt-4o-mini` |
 The key stays in your browser's localStorage and is sent only to that API. Never commit a key to the repo.

## Notes
- No build step. KaTeX, marked, and DOMPurify load from the jsDelivr CDN.
- The provider must allow browser (CORS) requests. OpenAI does.
- `content.js` holds the chapter outline (generic topic titles) and short original stub notes. All section text is original, not copied from any textbook.
- Searched answers appear in a labelled "AI-generated study notes" box, between short related context sections.
