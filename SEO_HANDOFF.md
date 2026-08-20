# Quietloom SEO and publishing handoff

Last updated: 2026-08-20

## Live implementation

The GitHub Pages site is live at `https://quietloomaudio.github.io/`. The homepage catalogue is ordered newest first and its cards link to internal watch pages rather than directly to YouTube.

Nine public releases have dedicated watch pages. Each uses a prominent YouTube embed, original listener-focused copy, use cases, runtime, FAQs, related Quietloom pages, a natural YouTube link, and page-specific `VideoObject` JSON-LD:

- `/40hz-frequency-for-hyper-focus/` — latest release; YouTube ID `TZsToR9DSz0`; page copy is 459 words; accurate `PT11H59M50S` `VideoObject` duration.
- `/green-noise-for-study/`
- `/city-rain-and-distant-thunder/`
- `/brown-noise-for-sleep/`
- `/aircraft-cabin-sounds/`
- `/cold-night-wind-and-fireplace/`
- `/fan-noise-for-sleep/`
- `/rain-sounds-for-sleep/`
- `/pink-noise-for-sleep-focus/`

Six supporting intent pages are live: `/brown-vs-pink-vs-white-noise/`, `/best-noise-colors-for-sleep/`, `/background-noise-for-studying/`, `/rain-sounds-for-sleep-guide/`, `/fan-noise-vs-white-noise/`, and `/distant-thunder-vs-heavy-thunder/`.

`sitemap.xml` contains 16 page URLs and nine video entries. The 40 Hz and eight-hour Green Noise video entries deliberately omit the optional sitemap duration because their actual runtimes exceed Google's 28,800-second sitemap limit; their page-level `VideoObject` metadata remains accurate.

## Completed external actions

- The latest 40 Hz YouTube description links near the top to `https://quietloomaudio.github.io/40hz-frequency-for-hyper-focus/`.
- The `https://quietloomaudio.github.io/` URL-prefix property was verified in Google Search Console using the deployed HTML verification tag.
- The current sitemap was submitted in Google Search Console after the long-runtime duration correction.
- Indexing was requested for the new 40 Hz watch page; Search Console confirmed that it was added to the priority crawl queue.

## Next owner pass

Wait 24–72 hours for Search Console to refresh its sitemap result. Then:

1. Check **Sitemaps**. Investigate only if the current deployed sitemap still reports an error after Google has re-fetched it.
2. Check the **Video indexing** and **Video rich results** reports for valid video-page detection.
3. Review **Performance** with the Videos search-appearance filter after impressions accumulate; record useful queries before changing copy or titles.
4. Add the site URL to the YouTube channel profile, Instagram bio, and TikTok website field.
5. Add the relevant watch-page link near the top of the description whenever an existing or future long-form release is updated. The 40 Hz release is complete; the other legacy descriptions still need this migration.
6. When `quietloomaudio.com` is available, execute the branded-domain migration in `PUBLISHING_CHECKLIST.md` as one coordinated canonical/metadata/sitemap/Search Console release.

## Release rule

For every future long-form upload, create and deploy its watch page, sitemap entry, and internal links before or alongside publication; then add the page URL to the YouTube description and request indexing after the deployed page is reachable. Keep claims factual and do not imply medical or guaranteed-performance outcomes.
