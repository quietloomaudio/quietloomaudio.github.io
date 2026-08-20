# Gentle Rain Thumbnail

Date: 2026-08-13
Status: HTML cover v1 built; pending final user approval

## Reusable system

Build the final cover from the approved Quietloom thumbnail system:

- `../../2026-08-12-pink-noise-deep-work/thumbnail/index.html`
- `../../2026-08-12-pink-noise-deep-work/thumbnail/thumbnail.css`
- `../../../../templates/youtube-thumbnail/base.css`
- `../../../../templates/youtube-thumbnail/icons.svg`

Keep the Quietloom lockup, duration badge, title stack, feature row, tagline, and seal as editable HTML/SVG components. The selected AI image is a background plate only.

## Generated plate concepts

- `plates/concepts/A-sheltered-terrace.png` — closest to the approved video scene; two chairs and wet-deck reflections.
- `plates/concepts/B-intimate-warm-retreat.png` — cleanest copy field and strongest warm/cool split; changes the location most.
- `plates/concepts/C-strong-rain-story.png` — clearest rainfall at browse size; strongest category signal.
- `plates/concepts/D-cinematic-rainforest-outlook.png` — closest overall framing and most restrained premium mood.

All concepts were generated in reference-guided image mode using the approved 16:9 terrace plate for scene continuity. The common art direction requires a near-black left 45 percent, a dark upper-right badge zone, cool midnight-blue/forest-teal scenery, sparse amber highlights, physically plausible rain, and no text or graphic overlays.

## Next gate

Plate A (`plates/concepts/A-sheltered-terrace.png`) was selected.

AI visual-direction mockup:

- `mockups/focus-audio-002_rain-thumbnail-ai-mockup-v1.png`
- Headline direction: `GENTLE / NIGHT / RAIN`
- Accent: cool cyan-blue on `NIGHT`, icons, rules, and `AUDIO`
- Palette exclusion: no pink, rose, coral, magenta, lilac, or purple
- Duration: `3 HOURS`

The mockup is an approval artifact only. After approval, rebuild it with the exact Quietloom SVG logo, the existing HTML/CSS component system, deterministic copy, and consistent repo-native SVG icons. Verify at both 1280 × 720 and 320 × 180.

## HTML cover v1

- Editable source: `index.html` and `thumbnail.css`
- Refined plate: `assets/rainforest-terrace-plate-a-soft-left-v2.png`
- Optimized web plate: `assets/rainforest-terrace-plate-a-soft-left-v2.jpg`
- Cyan logo variant: `assets/quietloom-audio-lockup-cyan.svg`
- Full-size review: `qc/thumbnail-html-pass-1-soft-left.png`
- Browse-size review: `qc/thumbnail-html-pass-1-soft-left-320x180.png`
- Export: `../deliverables/focus-audio-002_youtube-thumbnail_v1.png`

The left-side shade was softened at both source and CSS levels. Faint rainforest detail now remains visible under the title. The CSS veil uses a broad low-opacity radial fade rather than an opaque linear panel. The 1280 × 720 bounds audit found every component inside the canvas, and the browser console reported no warnings or errors.

## Cross-platform safe-area revision

A real messaging-app preview showed that the earlier `38px` edge placement was too aggressive and that the lower-right seal could conflict with YouTube branding overlays. The cover now inherits the global safe-area placement contract from `templates/youtube-thumbnail/base.css`.

- Full-size review: `qc/thumbnail-html-pass-2-global-safe-area.png`
- Browse-size review: `qc/thumbnail-html-pass-2-global-safe-area-320x180.png`
- Current export: `../deliverables/focus-audio-002_youtube-thumbnail_v2.png`
- SHA-256: `2F074D74609022230B0101BD6FBAEEBFFC6AEC5F1E1054FEC4A2E7BB1121BD91`

The public YouTube video `7yEvYSazKsM` was updated to use v2.
