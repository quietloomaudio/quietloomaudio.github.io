# Focus Audio 005 thumbnail

Status: locked and approved for release.

## Direction

- Source plate: `../visuals/cover/source/focus-audio-005_cover-plate-original_v1.png` (untouched 1536x1024 user-supplied image).
- Canvas: deterministic 1280x720 HTML/CSS export.
- Main copy: `A380 CABIN` / `FULL FLIGHT`.
- Accent: approved Quietloom cyan `#65c9e8`, with soft cyan `#91d8ed`.
- Layout: centered brand and headline, cyan flight-path motif, compact `7 HOURS / FULL JOURNEY` badge, and a centered three-part utility rail.
- Distinction from prior covers: no left-aligned headline and no circular lower-right seal.

## Packaging implication

The user explicitly requested the aircraft-specific `A380 AIRCRAFT` cover copy, superseding the earlier unspecified-widebody cover direction. The audio remains a fictional mixed-source/composite soundscape; public metadata must not claim that it is a documentary recording of one real A380 flight.

## Files

- Editable HTML: `index.html`
- Project CSS: `thumbnail.css`
- Cyan brand lockup: `assets/quietloom-audio-lockup-cyan.svg`
- Full-size V4 review: `qc/focus-audio-005_cover-html-v4.png`
- Feed-size V4 review: `qc/focus-audio-005_cover-html-v4-320x180.png`

Do not create the release deliverable or upload a thumbnail until the exact HTML composition is approved and the standard edge/feed-size integrity gate passes.

## V2 refinement

Removed the subtitle top rule, bottom utility-rail top rule, and duration-card outline at the user''s request. The centered flight-path motif remains.

## V3 refinement

Centered the two-line heading block itself at exactly 50% of canvas height, moved the subtitle out of the heading flow, changed the copy to A380 CABIN / FULL FLIGHT, and converted the duration badge to warm white with dark navy type and cyan details.
## Project-local badge alternatives

Three reduced duration-badge mockups are isolated under `mockups/duration-badge/` and are not applied to the active V3 cover or shared thumbnail system:

- A: frosted light-gray lower quarter
- B: Quietloom-cyan lower quarter
- C: translucent dark-navy lower quarter

Each uses only `7` and `HOURS`. Review `duration-badge-variants-closeup.png` and `duration-badge-variants-comparison.png`. Selection is pending. These are episode-specific modifier candidates; the reusable historical duration component remains unchanged for future covers.
### Refined badge alternatives D-F

The selected cyan-footer direction was refined without modifying the active cover:

- D: pale frosted-glass upper field with dark number
- E: smoked navy-glass upper field with warm-white number (recommended)
- F: highly transparent midnight upper field with cyan number

All retain the cyan lower quarter and only the copy `7 / HOURS`. Review `mockups/duration-badge/duration-badge-refined-closeup.png` and `duration-badge-refined-comparison.png`. Selection remains pending; no variant is the new shared standard.
## V4 selected badge

The user approved refined variant E: smoked navy-glass upper field, warm-white `7`, and Quietloom-cyan lower quarter with `HOURS`. V4 applies it through the episode-local `duration--episode-minimal` modifier. The shared base component and prior-cover implementations remain unchanged.
## Locked release

- Approved by user: 2026-08-15
- Release file: `../deliverables/focus-audio-005_youtube-thumbnail_v1.png`
- SHA-256: `BEE9DCEF5A063ED3FF465720B60A580D42C10AA1AE75C873CDBDF3FAAB136397`
- Dimensions: 1280x720
- Size: 980,921 bytes
- Decode: pass
- Approved V4 checksum match: exact
- Feed-size review: `qc/focus-audio-005_youtube-thumbnail_v1-320x180.png` at 320x180

Do not modify or replace the locked release file without a new explicit user approval and a versioned export.
