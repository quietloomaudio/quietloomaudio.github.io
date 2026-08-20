# Quietloom Audio website

Public, dependency-free website for Quietloom Audio, built for GitHub Pages.

## Local preview

```powershell
python -m http.server 4173 --directory D:\dev\quietloom-audio-website
```

Open <http://127.0.0.1:4173/>.

## Structure

- `index.html` — semantic content, metadata, and structured data
- `styles.css` — responsive Quietloom visual system
- `assets/` — optimized brand and cover artwork
- `/<soundscape-slug>/` — dedicated YouTube watch page for each public release; includes the embedded video, original supporting copy, FAQs, internal links, and `VideoObject` markup
- `/<guide-slug>/` — intent and comparison guides that help listeners choose a soundscape
- `PUBLISHING_CHECKLIST.md` — required website, YouTube, social, and Search Console steps for each release

## Deployment

GitHub Pages publishes the `main` branch from the repository root.

The current canonical host is `https://quietloomaudio.github.io/`. Update every canonical URL, Open Graph URL, sitemap entry, `VideoObject.url`, thumbnail URL, and `robots.txt` sitemap URL together when moving to a branded domain.
