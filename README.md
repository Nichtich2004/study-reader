# Study Reader

A static, textbook-styled study helper. You type a question in the toolbar search field and the answer is laid out as a textbook section (headings, prose, KaTeX math). AI answers are labelled "AI-generated study notes".

## Run locally
Open `index.html` in a browser, or serve the folder: `python3 -m http.server 8000` and open http://localhost:8000.

## Publish on GitHub Pages
1. Push these files to the root of a repo (or into `/docs`).
2. Go to Settings → Pages → Deploy from branch → `main`, folder `/` (or `/docs`).
3. Open `https://<user>.github.io/<repo>/`.

## API key
Click **⋮** in the toolbar, then paste an OpenAI-compatible key, base URL, and model, and click Save. The key stays in your browser's localStorage and is sent only to that API. Never commit a key to the repo.

## Notes
- No build step. KaTeX, marked, and DOMPurify load from the jsDelivr CDN.
- The provider must allow browser (CORS) requests. OpenAI does.
- The sample section content is short original study notes.
