# Soft Pink Noise Thumbnail

Date: 2026-08-12
Status: Approved and exported

## Source files

- `index.html` — editable thumbnail content and inline SVG symbol use.
- `thumbnail.css` — project-specific placement overrides.
- `../../../../templates/youtube-thumbnail/base.css` — reusable brand system.
- `../../../../templates/youtube-thumbnail/icons.svg` — reusable icon library.

Logo source: `../channel/logo/quietloom-audio-lockup.svg`.

## Background plate

- Working plate: `assets/pink-particle-wave-plate-v1.jpg`
- Preserved generated source: `assets/pink-particle-wave-plate-source-v1.png`
- Generator: built-in image generation workflow
- Role of attached reference: palette, atmosphere, and composition reference only

### Final plate prompt

Create a premium abstract 16:9 YouTube thumbnail background plate with a deep charcoal-black matte field on the left transitioning into a soft dusty-rose atmosphere on the right. A graceful flowing wave made from thousands of extremely fine rose-gold luminous particles and translucent fabric-like ridges sweeps across the lower-right and middle-right. Keep the left 45 percent dark and low-detail for copy and preserve a dark upper-right area for a duration badge. Restrained luxury editorial lighting, warm blush/coral glow, near-black shadows, subtle film grain. Background only: no text, letters, numbers, logos, icons, borders, badges, dividers, watermarks, UI, recognizable objects, blue, purple, neon magenta, stars, nebula, or lens flare.

## Copy adaptation

- Main: `SOFT / PINK / NOISE`
- Duration: `60 MINUTES`
- Loop note: `SEAMLESS LOOP`
- Tagline: `CALM MIND. BETTER FOCUS. DEEP REST.`
- Feature 1: `PINK NOISE / BALANCED`
- Feature 2: `HEADPHONES / OPTIMIZED`
- Feature 3: `SLEEP | STUDY / RELAX | WORK`

## Iteration record

1. Established reference-faithful hierarchy and 16:9 composition.
2. Increased utility-row readability and replaced the placeholder seal with curved SVG typography.
3. Verified the design at 320x180 browse size; the main title remains dominant and legible.
4. Audited every positioned element against the 1280x720 canvas; all remain inside the safe composition. Browser console audit returned no errors or warnings.

5. Enlarged the title from 112px to 137px, tightened its line height, and reduced the measured title-to-rule gap to 33px.
6. Enlarged the three feature icons to 43px so each is taller than its adjacent two-line label.
7. Enlarged the lower-right seal to 142px; its circular lettering is warm white while the ring and waveform remain pink, matching the reference contrast treatment.
8. Rechecked the revised composition at 320x180. The larger title, `60 MINUTES` badge, and seal retain clear visual hierarchy.

Current review screenshot: `qc/thumbnail-html-pass-3.png`.
Reduced-size check: `qc/thumbnail-html-pass-3-320x180.png`.

9. Combined the title, rule, and tagline into a single `.copy-stack` component and vertically centered that component with `top: 50%` plus `translateY(-50%)`. Its measured center is exactly 360px on the 720px canvas, so future copy changes remain centered automatically.

Centered review screenshot: `qc/thumbnail-html-pass-4-centered.png`.
Centered reduced-size check: `qc/thumbnail-html-pass-4-centered-320x180.png`.

10. Replaced the legacy `PURE AMBIENCE` signature with the selected Quietloom Audio four-thread SVG mark and horizontal wordmark lockup.

Quietloom logo review: `qc/thumbnail-html-pass-5-quietloom-logo.png`.
Quietloom browse-size check: `qc/thumbnail-html-pass-5-quietloom-logo-320x180.png`.

11. Rejected the initial simplified SVG because it did not match Draft C. Rebuilt the mark by tracing the actual Draft C silhouette and topology rather than loosely redrawing it.

Corrected traced-logo review: `qc/thumbnail-html-pass-8-quietloom-logo-c-traced.png`.

12. Rebalanced the thumbnail lockup: reduced the icon, enlarged the name, and placed `QUIETLOOM AUDIO` on one line with `AUDIO` in pink.

Balanced single-line review: `qc/thumbnail-html-pass-10-logo-single-line-balanced.png`.
Balanced browse-size check: `qc/thumbnail-html-pass-10-logo-single-line-balanced-320x180.png`.

13. Increased the tagline tracking so `CALM MIND. BETTER FOCUS. DEEP REST.` spans the full 540px rule length.

The user approved the updated cover on 2026-08-13.

- Current export: `deliverables/focus-audio-001_youtube-thumbnail_v2.png`
- Dimensions: 1280x720
- SHA-256: `2DBC0986E23A1F45B6C3EC52DA79D18C25DAB126C2281F98D14291741C4167F0`

## Final approval and export

The user approved the centered HTML composition on 2026-08-12.

- Export: `deliverables/focus-audio-001_youtube-thumbnail_v1.png`
- Dimensions: 1280x720
- SHA-256: `8B50CAF40B0549D802C707CF584E3F46DAEFE6F53CC811667E0898868437FF70`

## Cross-platform safe-area revision

A messaging-app link preview exposed edge crowding and lower-overlay conflicts in the original shared layout. Placement is now inherited from the global safe-area contract in `templates/youtube-thumbnail/base.css` instead of duplicated in this project's CSS.

- Left/right critical-content inset: `64px`
- Top inset: `44px`
- Bottom utility inset: `52px`
- Lower-right seal inset: `90px`
- Full-size review: `qc/thumbnail-html-pass-12-global-safe-area.png`
- Browse-size review: `qc/thumbnail-html-pass-12-global-safe-area-320x180.png`
- Current export: `deliverables/focus-audio-001_youtube-thumbnail_v3.png`
- SHA-256: `10437D224651D504EE28FB6205F52AF7EBFF2859F71006FE3BF64D8DFF475C6A`

The public YouTube video `LuH9vQdq-iY` was updated to use v3.
