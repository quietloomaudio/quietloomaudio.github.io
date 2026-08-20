# Quietloom website and discovery checklist

Use this checklist for every public Quietloom Audio long-form release. The goal is to make the site, the YouTube upload, and social profiles one connected listener path rather than separate destinations.

## Before publishing

- Create a dedicated root-level watch page at `/<search-intent-slug>/` using the existing soundscape-page pattern.
- Include one prominent, crawlable YouTube `<iframe>` and one natural outbound YouTube link.
- Write 300–600 words of original, useful copy. Cover what the listener hears, suitable use cases, runtime, comfortable-volume guidance, and who may prefer a different texture. Do not make medical, therapeutic, or guaranteed-performance claims.
- Add a unique `VideoObject` JSON-LD block. Keep `name`, description, thumbnail, duration, upload date, canonical page URL, and YouTube `embedUrl` truthful and consistent with the page and upload.
- Add two or three relevant internal links from the page, and link to the new page from the home catalogue plus at least one relevant guide.
- Add the canonical page to `sitemap.xml`. Add a matching `<video:video>` entry using the same stable thumbnail URL and embed URL.

## YouTube and social linking

- Put the dedicated Quietloom watch-page URL near the top of the YouTube description, directly after the opening listener-oriented sentence. Keep the link descriptive, for example: `Learn how this soundscape is made and find related listening: https://quietloomaudio.github.io/brown-noise-for-sleep/`.
- Add the site URL to the YouTube channel profile links, Instagram bio link, and TikTok bio website field. The public destination should eventually be the branded domain, not a social-profile shortener.
- Keep YouTube as the canonical place to play the long-form video. The website's job is context, discovery, and related-path navigation.

## Search Console launch handoff

These steps need an owner signed in to the Quietloom Google account:

1. Open [Google Search Console](https://search.google.com/search-console/), add `https://quietloomaudio.github.io/` as a URL-prefix property, and complete verification.
2. Submit `https://quietloomaudio.github.io/sitemap.xml` in the Sitemaps report.
3. Use URL Inspection to request indexing for the home page, every new watch page, and every guide page. Do not repeatedly request the same unchanged URL.
4. Monitor the Video indexing report, Video rich result report, and Performance report with the Videos appearance filter. Record useful search queries and the pages earning impressions before changing page intent or titles.

## Branded-domain migration

When `quietloomaudio.com` is ready, configure it as the GitHub Pages custom domain with HTTPS before changing content URLs. Then replace every `quietloomaudio.github.io` canonical, Open Graph, JSON-LD, sitemap, and robots reference in one release; add the domain property to Search Console; submit the updated sitemap; and use Search Console's Change of Address only if the move qualifies for it. Preserve redirects where the host supports them.
