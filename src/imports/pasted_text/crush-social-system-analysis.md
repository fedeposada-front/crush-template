CRUSH INTERACTIVE — SOCIAL SYSTEM
PHASE 1: SOURCE ANALYSIS + SYSTEM ARCHITECTURE

We are defining the foundation for a flexible visual system for Crush Interactive social content.

This is the FIRST planning phase.

DO NOT BUILD ANYTHING YET.

Do not create:
- Figma components
- templates
- finished Instagram posts
- final layouts
- UI kit
- design-system pages

Your task is to deeply analyze the provided source material and produce a concrete, practical architecture proposal that we can review before the build phase.

The objective is to minimize future redesign and restructuring.

---

SOURCE MATERIAL

You have been provided with:

1. Crush Interactive Brand Guidelines
2. Existing Crush visual references:
   - Original Design
   - Black Design
   - Social Post
   - Adapted Design
3. CRUSH_INTERACTIVE_SOCIAL_SYSTEM_BRIEF.md

Use these sources as the basis for your analysis.

SOURCE PRIORITY:

1. Crush Interactive Brand Guidelines
2. Existing Crush visual references
3. CRUSH_INTERACTIVE_SOCIAL_SYSTEM_BRIEF.md

The Brand Guidelines are the authority for established brand identity.

The visual references are evidence of existing visual practice.

The Social System Brief is a working document containing observations, proposals, and hypotheses.

Do not treat the brief as an existing design system.

---

IMPORTANT CLASSIFICATION

For every important conclusion, distinguish between:

ESTABLISHED
Directly supported by the official Brand Guidelines.

OBSERVED
Clearly visible in the provided Crush references.

PROPOSED
A system decision you recommend based on the evidence.

HYPOTHESIS
A possible interpretation that still needs validation.

Do not present PROPOSED or HYPOTHESIS information as an existing Crush rule.

---

## STEP 1 — UNDERSTAND THE EXISTING MATERIAL

Before proposing architecture, analyze the source material.

Identify:

- recurring visual characteristics;
- recurring typography behavior;
- recurring color behavior;
- recurring image treatments;
- recurring website screenshot treatments;
- recurring graphic elements;
- recurring composition patterns;
- recurring content structures;
- differences between the visual references;
- elements that appear only once or in a very specific context.

Do not assume that something is a system rule just because it appears in one reference.

Look for patterns across multiple references.

---

## STEP 2 — IDENTIFY THE CORE CRUSH VISUAL LANGUAGE

Determine what makes the different references feel like Crush Interactive.

Focus especially on characteristics that remain recognizable across different executions.

Identify:

- typography;
- color;
- contrast;
- imagery;
- photography;
- graphic elements;
- logo behavior;
- editorial characteristics;
- use of screenshots;
- composition principles;
- visual tone.

Separate:

CORE / RECURRING

from:

OPTIONAL / CONTEXTUAL

from:

PROJECT-SPECIFIC

This distinction is critical.

The goal is to discover the visual language underneath the individual posts.

---

## STEP 3 — ANALYZE THE FOUR VISUAL REFERENCES

Analyze these four territories independently:

1. Original Design
2. Black Design
3. Social Post
4. Adapted Design

For each one explain:

- what it is doing;
- what makes it visually distinct;
- which characteristics are shared with the other references;
- which characteristics are unique;
- which characteristics could be reusable;
- which characteristics appear project-specific.

IMPORTANT:

Do NOT automatically classify them as:

- systems;
- modes;
- templates;
- components;
- content series.

Determine the most appropriate classification from the evidence.

For example, a reference could ultimately be:

- a visual treatment;
- a content series;
- a composition family;
- a template family;
- a combination;
- or simply an example of execution.

Explain the reasoning.

---

## STEP 4 — ANALYZE FLEXIBILITY

Flexibility is a core requirement.

But flexibility must not mean unlimited customization.

Determine how the system should allow variation while preserving Crush identity.

Analyze flexibility across:

### CONTENT
Different text, images, screenshots, messages.

### STORY
Different things being emphasized.

### COMPOSITION
Different arrangements of the same visual language.

### VISUAL TREATMENT
Different expressions of the Crush identity.

### FORMAT
Different Instagram dimensions.

Determine what should remain consistent and what should be allowed to change.

Explicitly identify the boundaries of flexibility.

---

## STEP 5 — ANALYZE ADAPTED DESIGN

Analyze Adapted Design, but do NOT include it in the first build.

Use it only to understand the future flexibility question:

How much can a client/project influence the visual treatment without breaking the Crush identity?

Identify:

- what changes;
- what could eventually become an adaptation layer;
- what should remain controlled;
- what risks this direction creates;
- what should explicitly NOT be supported in V1.

Do not design the Adapted Design system.

---

## STEP 6 — DETERMINE THE RIGHT SYSTEM LEVELS

Only after completing the analysis, propose the architecture.

Do not assume that every level is necessary.

Determine which layers are actually useful.

Possible concepts include:

- Foundations
- Brand Elements
- Components
- Media
- Content Blocks
- Compositions
- Visual Treatments
- Content/Story Types
- Format Adaptations
- Templates

These are examples, NOT requirements.

If a layer does not provide meaningful reuse, remove it.

Avoid unnecessary complexity.

The final architecture should be as simple as possible while still supporting the required flexibility.

---

## STEP 7 — COMPONENT ANALYSIS

Identify only components that provide meaningful reuse.

For every proposed component, explain:

- what problem it solves;
- where it appears in the existing references;
- what should be configurable;
- what should remain fixed;
- whether it needs variants;
- whether it can support multiple content types.

Do not create variants just because content changes.

For example:

Different text does not automatically require a variant.

Different structural behavior may require a variant.

---

## STEP 8 — MEDIA SYSTEM

Analyze how Crush uses:

- photography;
- website screenshots;
- desktop screens;
- mobile screens;
- multiple screens;
- crops;
- before/after;
- client imagery;
- people/social photography.

Determine which media treatments are genuinely reusable.

Website screenshots are important, but the actual website should remain visually dominant when it is the subject of the content.

---

## STEP 9 — COMPOSITION SYSTEM

Identify the smallest useful set of reusable composition patterns.

Do not create a large catalogue.

Prioritize compositions that can support multiple content types.

For each proposed composition explain:

- what content it supports;
- what can change;
- what must remain consistent;
- which visual references support the pattern.

---

## STEP 10 — CONTENT

Review the content categories mentioned in the Social System Brief.

Do not create a social media strategy.

Instead determine which content structures are actually relevant to the visual system.

Separate:

SUPPORTED BY EVIDENCE

from:

POSSIBLE FUTURE CONTENT

from:

NOT ENOUGH EVIDENCE

Do not turn hypotheses into mandatory templates.

---

## STEP 11 — FORMAT

Analyze:

- 1080 × 1080
- 1080 × 1350
- 1080 × 1920

Determine how the system should adapt between formats.

Do not simply scale layouts.

Consider:

- hierarchy;
- text;
- image proportions;
- composition;
- safe areas;
- readability;
- visual balance.

---

## STEP 12 — DEFINE V1 BOUNDARIES

This is important.

After the analysis, define exactly what should be included in Version 1.

V1 should prioritize:

- core Crush visual language;
- reusable visual elements;
- reusable media treatments;
- a small set of useful compositions;
- the most relevant content structures;
- format adaptation;
- controlled flexibility.

V1 should NOT prioritize:

- Adapted Design;
- unlimited client customization;
- web UI;
- WordPress;
- frontend;
- web components;
- content calendars;
- publishing workflows;
- analytics;
- a huge template library.

---

## STEP 13 — RECOMMEND THE FIGMA ARCHITECTURE

Based on the analysis, propose how the future system should be organized inside Figma.

Keep it practical.

Explain:

- recommended page structure;
- hierarchy;
- naming principles;
- component organization;
- variant organization;
- variable/token organization;
- relationship between components and templates.

Do not create the actual Figma structure yet.

---

# REQUIRED OUTPUT

Return a structured planning document with these sections:

1. Executive Summary

2. Source Analysis

3. Established Brand Rules

4. Observed Visual Patterns

5. Core Crush Visual Language

6. Analysis of Original Design

7. Analysis of Black Design

8. Analysis of Social Post

9. Analysis of Adapted Design

10. What Is Shared Across All References

11. What Is Context-Specific

12. Recommended System Architecture

13. Recommended Components

14. Recommended Media System

15. Recommended Composition System

16. Content Structure

17. Format Strategy

18. Flexibility Model

19. V1 Scope

20. Explicitly Out of Scope

21. Recommended Figma Organization

22. Risks / Ambiguities / Contradictions

23. Decisions That Require Human Validation

24. Recommended Next Step

---

## QUALITY CONTROL

Before finishing your response, verify:

- Did you use the Brand Guidelines as the primary authority?
- Did you distinguish established rules from observations?
- Did you avoid inventing unsupported brand rules?
- Did you analyze all four visual references?
- Did you avoid automatically turning each reference into a separate system?
- Did you keep Adapted Design outside V1?
- Did you avoid importing web/UI concepts?
- Did you avoid creating unnecessary architectural layers?
- Did you identify what should NOT be reusable?
- Did you define concrete V1 boundaries?
- Did you avoid designing anything?
- Did you provide one recommended architecture rather than many competing architectures?

The final recommendation should be practical enough that, after human review, it can become the direct blueprint for the build phase.

Do not optimize for theoretical completeness.

Optimize for:

CLARITY
+
REUSE
+
FLEXIBILITY
+
CRUSH IDENTITY
+
LOW FUTURE MAINTENANCE

STOP AFTER THE PLAN.