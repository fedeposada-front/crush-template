# Crush Interactive — Social Content System · Phase 1 Architecture Plan

## Context

This is a **planning-only deliverable**, not a build. The prompt (`crush-social-system-analysis.md`) defines Phase 1 as *source analysis + system architecture* for a flexible Crush Interactive social-content design system, and explicitly forbids producing components, templates, layouts, finished posts, UI kits, or design-system pages. The goal is to analyze the source material, ground every conclusion in evidence, and hand back one practical, reviewable architecture that minimizes future rework before the build phase begins.

Every conclusion below is tagged:
- **ESTABLISHED** — directly supported by the official Brand Guidelines PDF.
- **OBSERVED** — clearly visible across the provided Crush references.
- **PROPOSED** — a system decision recommended from the evidence.
- **HYPOTHESIS** — a plausible reading that still needs human validation.

Source priority applied throughout: **Brand Guidelines > visual references > brief.** The brief is treated as a working document, not an existing system.

---

## 1. Executive Summary

Crush Interactive has a strong, well-documented brand identity (color, typography, logo, image treatments, graphic elements) but **no existing social-post layout system**. The four "territories" handed to us are not four systems — they are, on the evidence, **one core visual language expressed through different visual treatments and content series.**

Recommendation: build **one flexible social system** with a deliberately shallow architecture — Foundations → Brand Elements → Media → Content Blocks → Compositions → (light) Visual Treatments → Format Adaptations. Skip a heavy Templates layer and skip per-content variants. Treat **Black Design** as a *visual treatment* of the core language and **Social Post ("Cafecito with Crush_")** as a *content series*, not separate systems. Keep **Adapted Design (client palettes/co-branding) entirely out of V1** — it is the single largest identity risk and needs its own controlled adaptation layer later.

The non-negotiable Crush signature to preserve across all flexibility: the **CRUSH_ wordmark, the orange (#F58026) core, Montserrat, warm candid people photography, and confident editorial hierarchy.**

> ⚠️ **BLOCKING QUESTION FOR HUMAN CONFIRMATION — Typography.** The Brand Guidelines are internally contradictory on type: nearly every page uses **Montserrat (Semibold + Medium)**, but the type-scale sub-page lists **"Quelat Soft / SF Compact Display / Altair Regular"** with placeholder text ("Happier Consumer / AtomicSport"). This looks like an unedited template artifact, and this plan proceeds on **Montserrat as authoritative** — but the foundation cannot be locked until a human confirms. This is the one item that must be resolved before Phase 2 begins (see §22, §23).

---

## 2. Source Analysis

| Source | Role | Weight | What it gives us |
|---|---|---|---|
| Brand Guidelines PDF (~52pp) | Authority for identity | 1 (highest) | Colors, typography, logo rules, image treatment, graphic elements (Gradients, Line Masks, Doodles, Stroke Text), social applications (Covers, Banners, Feed, Merch, Web) |
| 4 visual references (Original / Black / Social Post / Adapted) | Evidence of practice | 2 | How the identity is actually composed into posts |
| `CRUSH_INTERACTIVE_SOCIAL_SYSTEM_BRIEF.md` | Working proposals | 3 (lowest) | Candidate content blocks, flexibility levels, format list, token ideas — **hypotheses, not rules** |

Note: the reference frames imported into the project are **PNG image exports** (reference only), consistent with their status as evidence, not buildable source.

---

## 3. Established Brand Rules (from Brand Guidelines — ESTABLISHED)

- **Core colors:** Crush Orange `#F58026`, Dark Grey `#5B5C5B`, Light Grey `#919295`.
- **Secondary palette:** purples `#330F4C / #4D125C / #8F1B6E`; blue/teal/green `#111454 / #03465B / #01532B`; Peach Orange `#FFAF52`.
- **Typography:** **Montserrat Semibold** (headings, titles, buttons) + **Montserrat Medium** (body, lists). *(See §22 for the Quelat/SF/Altair contradiction on the type-scale page.)*
- **Logo:** "CRUSH_" wordmark + "interactive"; Variations 1 & 2, plus tagline "WEB DESIGN & DIGITAL MARKETING". Treatments: Original / Greyscale / Positive / Negative. Min size 70px. Clear space = X. Incorrect uses: stroke-only wordmark, drop shadows, off-palette color.
- **Image guidelines:** warm-temperature filter; happy, candid, real people.
- **Signature effects:** *Overlapping* (text + image blend) and *B&W photo + selective orange highlight*.
- **Gradients:** orange gradient is the base for heroes, banners, and social elements.
- **Graphic elements:** **Line Masks** (wireframe grids for depth in headers/banners/social), **Doodles** (hand-drawn arrows/circles/underlines/sparkles for creative accent), **Stroke Text** (outline type mixed with filled type for weight balance).
- **Documented social applications:** Covers (FB/LinkedIn/X), Banners (paid/organic ads), Feed (grid mixing Portfolio / Lifestyle / Design content), plus Merch, Documentation, Web.

---

## 4. Observed Visual Patterns (across references — OBSERVED)

- Orange gradient field appears repeatedly as background (heroes, covers, banners, black-frame accents).
- Large Montserrat Semibold headline dominates; short supporting body beneath.
- Doodle accents (circled word, curved arrow, oversized "!") recur on hero/marketing frames.
- Photography is warm, candid, group/lifestyle; sometimes B&W with orange accent.
- Logo lockup ("CRUSH_ interactive") consistently placed as an anchor, often top or corner.
- Stroke-vs-filled repeated wordmark used as a graphic/rhythm device.
- Feed alternates full-orange tiles with photo tiles — deliberate grid rhythm, not random.

---

## 5. Core Crush Visual Language (CORE / OPTIONAL / PROJECT-SPECIFIC)

**CORE / recurring (must persist across every execution):**
- CRUSH_ wordmark presence and correct treatment. *(ESTABLISHED)*
- Orange (#F58026) as the identity anchor, usually via gradient. *(ESTABLISHED/OBSERVED)*
- Montserrat Semibold headline + Medium body hierarchy. *(ESTABLISHED)*
- Warm, candid, human photography. *(ESTABLISHED)*
- Confident editorial hierarchy: one dominant message per frame. *(OBSERVED)*

**OPTIONAL / contextual (identity-safe, use when they serve the message):**
- Doodles, Line Masks, Stroke Text. *(ESTABLISHED as elements; OBSERVED as optional)*
- B&W + orange highlight; Overlapping text/image. *(ESTABLISHED)*
- Dark (near-black) background field. *(OBSERVED — the "Black Design" treatment)*

**PROJECT-SPECIFIC (do not treat as system rules):**
- Client color palettes / co-branding (Adapted Design). *(OBSERVED — belongs to a future adaptation layer)*
- "Cafecito with Crush_" coffee-cup lockup and documentary series styling. *(OBSERVED — a content series, not a global rule)*

---

## 6. Analysis of Original Design (OBSERVED)

- **What it does:** the default, most brand-forward expression — orange gradient, big Montserrat headline, doodle accents, warm photography, editorial/collage layout.
- **Distinct:** highest energy; most doodle usage; orange-dominant.
- **Shared:** wordmark, orange, Montserrat, warm photos, single-message hierarchy — i.e. all CORE traits.
- **Unique:** density of doodle/collage accents.
- **Reusable:** essentially the baseline composition + brand-element vocabulary for the whole system.
- **Classification (HYPOTHESIS):** the **default Visual Treatment** ("Original"/light-orange), and the reference the composition library should be derived from.

---

## 7. Analysis of Black Design (OBSERVED)

- **What it does:** dark grainy background, large white/orange Montserrat type, quotes/stats, often 4:5.
- **Distinct:** dark field replaces orange field; more editorial/quote-driven and restrained.
- **Shared:** wordmark, Montserrat hierarchy, orange as accent, single dominant message.
- **Unique:** the dark background + grain; orange demoted to accent rather than field.
- **Reusable:** yes — it is the *same compositions* with a different surface.
- **Classification (HYPOTHESIS):** a **Visual Treatment** ("Dark") of the core language — **not** a separate system or template family. Strong candidate for V1 as a second treatment because it reuses the same blocks/compositions.

---

## 8. Analysis of Social Post — "Cafecito with Crush_" (OBSERVED)

- **What it does:** documentary photography series, recurring CRUSH_ + coffee-cup lockup, typically 1:1; human/behind-the-scenes tone.
- **Distinct:** consistent recurring lockup + photo-led, low-graphic styling.
- **Shared:** wordmark, warm human photography, Montserrat captions.
- **Unique:** the coffee-cup motif and series naming — tied to a specific campaign.
- **Reusable:** the *pattern* (recurring series lockup + photo-dominant composition) is reusable; the *coffee-cup motif itself* is project/campaign-specific.
- **Classification (HYPOTHESIS):** a **Content Series** built on a photo-dominant composition — not a global template. V1 should support the *photo-led composition*; the specific series branding stays optional.

---

## 9. Analysis of Adapted Design (OBSERVED — NOT for V1)

- **What it does:** applies client palettes/co-branding (e.g. green "SHOVEL CONSTRUCTION") over Crush compositions.
- **What changes:** color palette, co-branded logo pairing, sometimes photography tone.
- **Could become:** a future **Adaptation Layer** — controlled overrides of accent color + partner logo slot on top of locked Crush structure.
- **Must stay controlled:** wordmark presence, Montserrat, layout structure, minimum contrast — never fully replaced by a client's system.
- **Risks:** most likely direction to dilute Crush identity; unbounded color/logo swaps break recognizability and QC.
- **NOT supported in V1:** client palette theming, co-branding slots, per-client treatments.

---

## 10. What Is Shared Across All References (OBSERVED)

CRUSH_ wordmark · orange as identity color · Montserrat Semibold/Medium hierarchy · warm candid human photography · one dominant message per frame · confident editorial spacing. These six are the **invariant core** and the backbone of the flexibility model.

---

## 11. What Is Context-Specific (OBSERVED)

Background surface (orange gradient vs dark) · doodle density · presence of Line Masks/Stroke Text · B&W+orange highlight · the coffee-cup series motif · client palette/co-branding · specific format ratio.

---

## 12. Recommended System Architecture (PROPOSED — ONE architecture)

A deliberately shallow stack. Each layer earns its place by providing real reuse:

1. **Foundations** — color tokens, type styles (Montserrat), spacing scale, safe-area rules. *(from §3)*
2. **Brand Elements** — logo lockups, doodles, line masks, stroke-text, gradient fills. *(from §3)*
3. **Media** — photo frame, screenshot frame, B&W+orange treatment, overlapping treatment. *(§14)*
4. **Content Blocks** — small set of message/media building blocks. *(§13)*
5. **Compositions** — the smallest useful set of reusable layouts. *(§15)*
6. **Visual Treatments** — a thin surface layer: "Original/Light-orange" (default) and "Dark". *(§7)*
7. **Format Adaptations** — 1:1, 4:5, 9:16 rules (not scaling). *(§17)*

**Composition vs. Template (resolved distinction):** these are *not* the same layer and must not be conflated.
- A **Composition** is an *abstract layout contract* — named zones, dominance rules, and what stays fixed vs. free (e.g. "Statement": one dominant headline zone + wordmark anchor). It carries no locked content and no treatment. There are exactly four (§15).
- A **Template** would be a *pre-filled, ready-to-post instance* of a composition (specific copy, specific image, specific treatment, specific format). We are **not** building a template *library* in V1 — that is the high-maintenance/low-reuse trap. Instead, V1 ships a small number of **starter examples** (one worked instance per composition, in the Playground page) purely to demonstrate usage. Examples are disposable references, not maintained components.

This keeps the reuse in the compositions (few, stable, abstract) and keeps volatile specifics out of the component tree.

**Explicitly dropped:** a maintained **Templates** library and an **Adaptation/Client-theming** layer (deferred — §9). Content/Story "Types" are handled as *content* selection, not as separate structural layers.

---

## 13. Recommended Components (PROPOSED — only meaningful reuse)

Configurable via props, **not** cloned into per-content variants. Variants only where *structural behavior* differs.

- **Logo Lockup** — problem: consistent, correct wordmark placement. Configurable: treatment (Original/Greyscale/Positive/Negative), size (≥70px), position. Fixed: proportions, clear space. Variants: treatment only.
- **Headline / Message Block** — Montserrat Semibold headline + optional Medium sub. Configurable: text, alignment, optional stroke-text emphasis, optional doodle accent. Fixed: font family/weights, hierarchy. No per-topic variants.
- **Media Frame** — holds photo or screenshot. Configurable: source, crop, treatment (full-color / B&W+orange / overlapping). Variant: *photo* vs *website-screenshot* (different dominance rules — §14).
- **Doodle Accent** — decorative arrows/circles/underline/sparkle. Configurable: which mark, placement. Fixed: hand-drawn style, single accent color.
- **Line-Mask Background** — wireframe depth field. Configurable: which mask, opacity over gradient. Fixed: subtlety (background only).
- **CTA / Tag** — small button/label ("CONTACT US", "REAL RESULTS:"). Configurable: text. Fixed: shape/type.

Rejected as components: per-content-type blocks (Testimonial, Before/After, Result/Proof, etc. from the brief) — these are *content configurations of the blocks above*, not distinct components. *(brief items = HYPOTHESIS)*

---

## 14. Recommended Media System (PROPOSED)

- **Photography:** warm, candid, human — the default media. *(ESTABLISHED)*
- **Website screenshots:** supported, but **the website must remain visually dominant when it is the subject** (per prompt §8). Screenshot frame keeps chrome minimal and lets the site fill the frame; brand graphics recede.
- **Treatments:** full-color (default) · B&W + orange highlight · Overlapping (text/image blend). *(ESTABLISHED)*
- **Genuinely reusable:** single-photo frame, single-screenshot frame, B&W+orange treatment.
- **Deferred (not enough reuse for V1):** multi-screen device stacks, before/after sliders, client-supplied imagery pipelines — these are HYPOTHESIS from the brief and lack multi-reference evidence.

---

## 15. Recommended Composition System (PROPOSED — smallest useful set)

Four compositions, each supporting multiple content types:

1. **Statement** — large headline on gradient/dark field, optional doodle. Supports: intro, quote, stat, CTA, announcement. Constant: single dominant message + wordmark.
2. **Photo-Led** — photography dominant, short caption/lockup overlay. Supports: human/social ("Cafecito"), lifestyle, testimonial-with-face. Constant: warm photo + minimal type.
3. **Media Showcase** — screenshot/website dominant with supporting caption. Supports: website showcase, portfolio, result/proof. Constant: media dominance (§14).
4. **Split** — message on one side, media on the other. Supports: context, before/after, testimonial, feature highlight. Constant: clear two-zone balance.

Each: *what can change* = text, image, treatment, accents; *what stays constant* = wordmark, Montserrat hierarchy, orange presence, one dominant idea. All four are supported by the references (§6–8) and the guidelines' banner/cover/feed examples.

---

## 16. Content Structure (PROPOSED classification of brief's content ideas)

- **Supported by evidence:** Intro/Statement, Highlight, Website/Portfolio Showcase, Human/Social, CTA — all map to compositions above and appear in references/guidelines.
- **Possible future content:** Before/After, Testimonial, Result/Proof — plausible within Split/Media Showcase; can be produced today by configuring an existing composition, and only warrant dedicated attention once real content examples exist.
- **Not enough evidence:** rigid multi-slide carousels, content-calendar-driven templates — out of scope (not a social strategy — prompt §10).

**Content types are guidance, not gates.** No content type is a mandatory template and none is *forbidden* — each is simply a *configuration* of one of the four compositions. The list above orders where the evidence is strongest, not what is permitted; a designer can map new content to the nearest composition without waiting for a new structure. The system constrains *identity* (§10/§18), not *subject matter*.

---

## 17. Format Strategy (PROPOSED — adapt, don't scale)

- **1:1 (1080×1080):** balanced; feed default; good for Photo-Led and Statement.
- **4:5 (1080×1350):** more vertical real estate; favors Statement/Split and the Dark treatment (matches Black Design references).
- **9:16 (1080×1920):** stories/reels; single message, generous safe margins top/bottom, larger type, media fills frame.
- **Rules:** re-flow hierarchy and re-balance zones per ratio rather than uniformly scaling; keep wordmark and headline legible at each ratio; define safe areas (esp. 9:16). Composition identity is preserved; proportions and emphasis adapt.

---

## 18. Flexibility Model (PROPOSED — bounded)

Mapped to the prompt's five axes:

| Axis | Allowed to change | Must stay constant |
|---|---|---|
| **Content** | text, images, screenshots, messages | wordmark, type styles |
| **Story** | which block is emphasized | one dominant message rule |
| **Composition** | choose among the 4 compositions | the composition's fixed zones |
| **Visual Treatment** | Original (light-orange) ↔ Dark; doodle/line-mask/stroke on/off | orange presence, Montserrat, contrast/legibility |
| **Format** | 1:1 / 4:5 / 9:16 | safe areas, hierarchy integrity |

**Boundary (the hard line):** flexibility never touches the invariant core (§10). Client palettes and co-branding are **outside** the model in V1.

---

## 19. V1 Scope (PROPOSED)

- Foundations (tokens, Montserrat type styles, spacing, safe areas).
- Brand Elements (logo lockups, doodles, line masks, stroke text, gradient).
- Media: photo frame + screenshot frame + B&W/orange + overlapping.
- The 6 core components (§13).
- The 4 compositions (§15).
- Two Visual Treatments: **Original (light-orange)** + **Dark**.
- Format adaptation for 1:1, 4:5, 9:16.
- Content configurations for the evidence-supported types (§16).
- Bounded flexibility model (§18).

---

## 20. Explicitly Out of Scope (per prompt §12)

Adapted Design / client palette theming / co-branding · unlimited client customization · the "Cafecito" coffee-cup motif as a global rule · multi-screen/before-after media pipelines · web UI · WordPress · frontend / web components · content calendars · publishing workflows · analytics · a large template library · social-media *strategy*.

---

## 21. Recommended Figma Organization (PROPOSED — structure only, not built)

- **Pages (top level):** `00 Cover` · `01 Foundations` · `02 Brand Elements` · `03 Media` · `04 Components` · `05 Compositions` · `06 Treatments` · `07 Format Reference` · `08 Playground/Examples`.
- **Naming:** `Category/Component, Property=Value` (e.g. `Media/Frame, Type=Screenshot`). Kebab or Title consistently; prefix pages with numbers for order.
- **Components:** one component per §13 item; group by category frame.
- **Variants:** only for structural difference (Media type; Logo treatment). Not for text/content.
- **Variables/tokens (simplified):** keep the token surface small and semantic rather than exhaustive. One `color` collection holding only what the guidelines establish (core orange, dark/light grey, the named secondary set) plus a handful of **semantic** aliases (`surface`, `on-surface`, `accent`) — the semantic aliases are what components reference, so a treatment change reassigns three aliases instead of touching every layer. Reuse Figma's built-in text styles for the two Montserrat weights rather than a parallel type-token collection. Use a single small `space` scale; **no separate `radius` collection** in V1 (radii are few and can live on components). Treatment (Light-orange / Dark) is a **mode** on the color collection driving only the semantic aliases — that mode switch is the entire treatment mechanism, so no duplicated components and no sprawling token tree.
- **Components ↔ compositions:** compositions assemble components; treatment is a variable mode applied to a composition — avoids duplicating layouts per treatment.

---

## 22. Risks / Ambiguities / Contradictions

- **Typography contradiction (must resolve):** the guidelines' type-scale sub-page shows "Quelat Soft / SF Compact Display / Altair Regular" with placeholder text ("Happier Consumer / AtomicSport"), while the rest of the document consistently establishes **Montserrat Semibold + Medium**. This reads as a leftover template artifact. **Treat Montserrat as authoritative** pending confirmation. *(Contradiction)*
- **Territory misread risk:** treating Black Design / Social Post / Adapted as four separate systems would multiply maintenance and fragment identity. This plan treats them as treatment/series/deferred-layer instead. *(HYPOTHESIS needing sign-off)*
- **Adapted Design pressure:** stakeholders may want client theming in V1; doing so unbounded is the top identity risk.
- **Brief over-reach:** the brief proposes many content blocks/compositions; adopting them wholesale would create low-reuse variants. Treated here as HYPOTHESIS.
- **References are PNGs:** exact spacing/type sizes can't be measured from them; foundations must come from the guidelines, not pixel-measuring the references.

---

## 23. Decisions That Require Human Validation

1. **(BLOCKING)** Confirm **Montserrat** as the sole type system (resolve the Quelat/SF/Altair artifact). Foundations cannot be locked until this is answered.
2. Approve treating **Black Design as a Visual Treatment** and **Social Post as a Content Series** (vs separate systems).
3. Approve **two treatments (Original + Dark)** for V1.
4. Confirm **Adapted Design is deferred** to a later controlled adaptation layer.
5. Approve the **4-composition set** as the complete V1 layout vocabulary.
6. Confirm the three formats (1:1, 4:5, 9:16) and their priority.
7. Confirm which content types from §16 are locked for V1 vs. deferred.

---

## 24. Recommended Next Step

Human review of this plan and sign-off on the §23 decisions. Once approved, this document becomes the direct blueprint for **Phase 2 (build)**: begin with Foundations + Brand Elements + the 6 components, then the 4 compositions, then wire the two treatments as variable modes and validate across the three formats — **but no building until this plan is approved.**
