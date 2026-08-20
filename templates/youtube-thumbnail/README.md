# YouTube Thumbnail System

This folder contains the reusable visual language for the focus-audio thumbnail series.

## Shared files

- `base.css` — 1280x720 canvas, typography, palette tokens, background layers, duration card, feature row, icon rules, and quality seal.
- `icons.svg` — waveform, headphones, and moon symbols. Every icon inherits `--icon-stroke` from the CSS system.

## Reuse workflow

1. Copy an approved project thumbnail folder as the starting HTML structure.
2. Link `../../../../templates/youtube-thumbnail/base.css` from the project stylesheet.
3. Replace the background plate with a text-free 16:9 image.
4. Change the title, accent line, duration, tagline, and feature copy in HTML.
5. Override palette and content dimensions in the project stylesheet. Keep the shared safe-area anchors unless a reviewed platform requirement demands otherwise.
6. Review at both 1280x720 and 320x180 before export.
7. Highlight at most one product-defining headline word with the episode accent; keep the remaining headline words in the shared light neutral.

## Typography

- Display: `Arial Black` with `Arial` fallback. This is the closest installed match to the geometric heavy sans-serif in the reference.
- Utility copy: `Century Gothic` with `Arial` fallback. Its wide geometric forms and tracking closely match the reference's labels.

Using installed fonts keeps rendering deterministic and avoids network font dependencies.

Layout B always uses the shared `.display__layout-b-first` and `.display__layout-b-second` classes. Their locked sizes are `100px` and `124px`. Episode-specific first/second-line class names and size overrides are prohibited because they bypass global normalization.

## Core tokens

- Canvas: `1280x720`
- Light text: `#f5f1ef`
- Accent rose: `#eba5a7`
- Soft rose: `#f1beb9`
- Charcoal: `#111117`
- Shared SVG stroke: `1.8`

Episode palettes are derived from the approved plate while preserving the shared neutral text, charcoal cards, icon construction, and layout. Reuse one accent family across the highlighted word, logo detail, rules, icons, and seal. Examples include rose for pink noise, cyan for rain, and ember orange for wind/fireplace. Accent variation should make episodes distinct without making them look like different channels.

## Safe-area contract

## Frequency-series badge

Frequency-led releases replace the vertical duration card with the shared horizontal `.frequency-badge` component from `base.css`. Its locked structure is a solid accent-colored waveform tile attached directly to a compact dark value panel. The waveform is white, there is no internal divider, and the numeric value and `Hz` unit remain tightly paired. Change only the numeric value and short descriptor such as `Focus Frequency`. Do not recreate or override its geometry per episode without explicit system-level approval.

```html
<aside class="frequency-badge" aria-label="40 hertz focus frequency">
  <div class="frequency-badge__signal"><i></i><i></i><i></i><i></i><i></i></div>
  <div class="frequency-badge__copy">
    <span class="frequency-badge__value">40</span>
    <span class="frequency-badge__unit">Hz</span>
    <span class="frequency-badge__label">Focus Frequency</span>
  </div>
</aside>
```

Critical content uses shared anchors from `base.css`:

- Left/right inset: `64px` (5% of the 1280px canvas)
- Top inset: `44px`
- Bottom utility inset: `52px`
- Lower-right seal inset: `90px`

These values protect logos, headlines, badges, utility copy, and the seal from rounded preview crops, messaging-app padding, timestamps, play controls, and YouTube branding overlays. Project styles may change component width, font size, and palette, but should not redefine these positions casually.

For QA, temporarily add `thumbnail--debug-safe` to the root `.thumbnail` element. It draws the shared safe boundary and must be removed before export.

## Export gate

HTML remains the source of truth. Export a PNG only after the thumbnail composition is explicitly approved.

After approval, use:

```powershell
.\scripts\export-thumbnail.ps1 -HtmlPath <project-thumbnail-index.html> -OutputPath <approved-output.png>
```

The script selects installed Chrome or Edge and renders at a deterministic 1280x720 device scale. The fixed canvas is pinned to the page origin so a browser viewport mismatch cannot introduce blank margins or clip the opposite edge.

### Mandatory export-integrity checklist

Every item is blocking. Do not upload the thumbnail if any item fails.

1. Use `scripts/export-thumbnail.ps1`. Never promote a `*-browser.png`, ordinary browser screenshot, or manually cropped viewport capture.
2. Verify the release PNG is exactly `1280x720` and 16:9.
3. Open the exported PNG itself—not only the HTML preview.
4. Confirm the plate/artwork reaches all four canvas edges unless an intentional border is part of the approved design.
5. Confirm there is no unexplained black/blank band on any edge.
6. Confirm the right edge is intact: duration card, seal, background subject, and plate must not be cropped.
7. Confirm the left edge is intact: logo, headline, tagline, and feature row must remain in their approved positions.
8. Create and inspect a `320x180` reduction for feed-scale legibility and balance.
9. Compare both PNGs with the approved HTML composition. An approved HTML layout does not automatically approve a later export.
10. Copy only the verified release PNG into `deliverables/`, record that exact path in project metadata, and upload that exact file.

### Recorded failure: focus-audio-004 V2

On 2026-08-14, a viewport-origin capture centred the fixed canvas inside a wider browser viewport. The resulting 1280x720 file still had valid dimensions, but contained roughly 256 pixels of blank space on the left and clipped the right side. Dimension checks alone therefore do not prove export integrity. The permanent CSS safeguard pins the canvas to the page origin; the visual edge and 320x180 checks above remain mandatory defense in depth.
