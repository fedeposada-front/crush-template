import type { ReactNode } from "react";
import {
  Block,
  CoffeeBadge,
  CTA,
  Eyebrow,
  Highlight,
  LogoLockup,
  MediaFrame,
  Rule,
  ScreenshotFrame,
  TargetMark,
  type Treatment,
} from "./brand";

/* ------------------------------------------------------------------ *
 * Crush Interactive — Compositions & Format frame
 * A Composition is an abstract layout contract: named zones + what is
 * fixed vs. free. Each primitive supports several content families
 * (Founder POV, Quick Audit, Project Reveal, Cafecito, before/after)
 * rather than being a locked template. The same composition renders
 * under either treatment and any format ratio.
 * ------------------------------------------------------------------ */

export type Format = "square" | "portrait" | "story";
type Field = "auto" | "orange";

const RATIO: Record<Format, string> = {
  square: "1 / 1",
  portrait: "4 / 5",
  story: "9 / 16",
};

export const FORMAT_LABEL: Record<Format, string> = {
  square: "1:1 · 1080×1080",
  portrait: "4:5 · 1080×1350",
  story: "9:16 · 1080×1920",
};

/* The post surface: a flat field (cream / near-black / flat orange). No
   gradients, no default grain or line-mask. `flush` removes padding for
   full-bleed photography. */
export function PostFrame({
  treatment,
  format,
  field = "auto",
  flush = false,
  children,
  width = 340,
}: {
  treatment: Treatment;
  format: Format;
  field?: Field;
  flush?: boolean;
  children: ReactNode;
  width?: number;
}) {
  return (
    <div
      data-treatment={treatment}
      data-field={field === "orange" ? "orange" : undefined}
      className="relative overflow-hidden"
      style={{
        width,
        aspectRatio: RATIO[format],
        background: "var(--surface)",
        color: "var(--on-surface)",
      }}
    >
      {flush ? children : <div className="flex h-full w-full flex-col p-[8%]">{children}</div>}
    </div>
  );
}

/* 1 — STATEMENT: typography-led. Big confident headline with a skewed
   orange highlight, a single geometric accent, and restrained supporting
   copy. Supports thought-leadership (Founder POV) and, with `field="orange"`
   + a checklist, educational content (Quick Audit). */
export function StatementPost({
  treatment,
  format,
  width,
  field = "auto",
  eyebrow = "The Crush POV / 01",
  lines = ["Your website", "isn't old."],
  highlight = "It's underselling you.",
  sub = "A better first impression starts with clarity.",
  meta = "Strategy · Design · Technology",
  checklist,
  cta = "Read the POV",
  showTarget = true,
}: {
  treatment: Treatment;
  format: Format;
  width?: number;
  field?: Field;
  eyebrow?: string;
  lines?: string[];
  highlight?: string;
  sub?: string;
  meta?: string;
  checklist?: string[];
  cta?: string;
  showTarget?: boolean;
}) {
  const scale = format === "story" ? 0.92 : format === "square" ? 0.66 : 0.8;
  const orange = field === "orange";
  return (
    <PostFrame treatment={treatment} format={format} field={field} width={width}>
      <div className="flex items-start justify-between">
        <LogoLockup size={format === "square" ? 18 : 22} tone={treatment === "dark" ? "white" : "ink"} />
        {showTarget && !checklist && (
          <TargetMark
            className="w-[16%] shrink-0"
            color={orange ? "rgba(20,20,20,0.14)" : "var(--accent)"}
          />
        )}
      </div>

      <div className="mt-[9%] flex flex-1 flex-col">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          className="mt-[5%] font-bold uppercase leading-[0.98] tracking-[-0.01em]"
          style={{ fontSize: `${3.1 * scale}rem` }}
        >
          {lines.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </h2>
        {highlight && (
          <div className="mt-[5%] font-bold uppercase leading-[1.05]" style={{ fontSize: `${2.7 * scale}rem` }}>
            <Highlight tone={orange ? "ink" : "onOrange"}>{highlight}</Highlight>
          </div>
        )}

        {checklist && (
          <div className="mt-[7%] rounded-lg p-[6%]" style={{ background: "#f4f1ea", color: "#141414" }}>
            <p
              className="font-semibold uppercase"
              style={{ fontSize: "0.62rem", letterSpacing: "0.14em", opacity: 0.55 }}
            >
              Can visitors quickly tell
            </p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {checklist.map((c) => (
                <li key={c} className="flex items-center gap-2.5">
                  <span
                    className="grid h-5 w-5 place-items-center rounded-sm text-[0.7rem] font-bold text-white"
                    style={{ background: "#141414" }}
                  >
                    ✓
                  </span>
                  <span className="font-semibold" style={{ fontSize: "0.95rem" }}>
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-[8%]">
          {!checklist && <Rule className="mb-[6%]" />}
          {sub && !checklist && (
            <p className="font-semibold" style={{ fontSize: `${0.95 * scale}rem` }}>
              {sub}
            </p>
          )}
          {meta && !checklist && (
            <p className="mt-2 font-medium" style={{ fontSize: "0.72rem", opacity: 0.55 }}>
              {meta}
            </p>
          )}
          <div className="mt-[7%] flex items-center justify-between">
            <CTA variant="dark">{cta}</CTA>
            <span
              className="font-semibold uppercase"
              style={{ fontSize: "0.66rem", letterSpacing: "0.1em", opacity: 0.55 }}
            >
              @crushinteractive
            </span>
          </div>
        </div>
      </div>
    </PostFrame>
  );
}

/* 2 — PHOTO-LED: photography is the protagonist (Cafecito). Full-bleed
   image, type interacts with the photo, a small series band anchors it. */
export function PhotoLedPost({
  treatment,
  format,
  src,
  width,
  series = "Cafecito with Crush",
  lines = ["Good coffee.", "Smarter", "conversations."],
  guestLabel = "Meet",
  guest = "A Crush guest",
  guestSub = "Miami business owner",
}: {
  treatment: Treatment;
  format: Format;
  src: string;
  width?: number;
  series?: string;
  lines?: string[];
  guestLabel?: string;
  guest?: string;
  guestSub?: string;
}) {
  const scale = format === "story" ? 1 : format === "square" ? 0.72 : 0.82;
  return (
    <PostFrame treatment={treatment} format={format} flush width={width}>
      <div className="relative flex h-full w-full flex-col">
        <div className="relative flex-1 overflow-hidden">
          <MediaFrame src={src} alt="Warm candid portrait of a Crush guest over coffee" className="h-full w-full" />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-[7%]">
            <div>
              <LogoLockup size={20} tone="white" />
              <div className="mt-4">
                <Eyebrow>{series}</Eyebrow>
              </div>
            </div>
            <span className="h-1.5 w-14 shrink-0" style={{ background: "#f58026" }} />
          </div>
          <div
            className="absolute inset-x-0 bottom-0 p-[7%]"
            style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.55), transparent)" }}
          >
            <h2 className="font-bold uppercase leading-[0.98] text-white" style={{ fontSize: `${1.9 * scale}rem` }}>
              {lines.map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </h2>
          </div>
        </div>
        {/* series band */}
        <div className="flex items-center justify-between px-[7%] py-[6%]" style={{ background: "#141414" }}>
          <div>
            <Eyebrow>{guestLabel}</Eyebrow>
            <p className="mt-1 font-bold uppercase text-white" style={{ fontSize: `${1.35 * scale}rem`, lineHeight: 1 }}>
              {guest}
            </p>
            <p
              className="mt-1.5 font-medium uppercase"
              style={{ fontSize: "0.62rem", letterSpacing: "0.08em", color: "#8f8378" }}
            >
              {guestSub}
            </p>
          </div>
          <CoffeeBadge size={format === "square" ? 40 : 52} className="shrink-0" />
        </div>
      </div>
    </PostFrame>
  );
}

/* 3 — MEDIA SHOWCASE: the designed website is the hero (Project Reveal).
   Prefers a dark editorial field with a single orange corner block. */
export function ShowcasePost({
  treatment,
  format,
  width,
  eyebrow = "Project Reveal / Website",
  lines = ["A stronger", "first impression."],
  cta = "View the work",
}: {
  treatment: Treatment;
  format: Format;
  width?: number;
  eyebrow?: string;
  lines?: string[];
  cta?: string;
}) {
  const scale = format === "story" ? 0.86 : format === "square" ? 0.6 : 0.74;
  return (
    <PostFrame treatment={treatment} format={format} width={width}>
      {/* orange corner block */}
      <Block className="absolute right-0 top-0 h-[22%] w-[26%]" />
      <LogoLockup size={format === "square" ? 18 : 22} tone={treatment === "dark" ? "white" : "ink"} />
      <div className="mt-[8%]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          className="mt-[5%] font-bold uppercase leading-[0.98] tracking-[-0.01em]"
          style={{ fontSize: `${2.9 * scale}rem` }}
        >
          {lines.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </h2>
      </div>
      <div className="my-auto py-[8%]">
        <ScreenshotFrame className="rotate-[-2deg]" variant={treatment === "dark" ? "light" : "dark"} />
      </div>
      <div className="flex items-end justify-between">
        <CTA variant="orange">{cta}</CTA>
        <span
          className="font-semibold uppercase"
          style={{ fontSize: "0.62rem", letterSpacing: "0.12em", opacity: 0.5 }}
        >
          Before / After
        </span>
      </div>
    </PostFrame>
  );
}

/* 4 — SPLIT: message + media, editorially composed (not a mechanical
   two-column). Type column is dominant; the image is cropped and reaches
   past the padding, anchored by an orange block. */
export function SplitPost({
  treatment,
  format,
  src,
  width,
  eyebrow = "Before Crush / After Crush",
  lines = ["New look.", "Same great", "company."],
  cta = "See the transformation",
}: {
  treatment: Treatment;
  format: Format;
  width?: number;
  src: string;
  eyebrow?: string;
  lines?: string[];
  cta?: string;
}) {
  const stack = format === "story";
  const scale = format === "story" ? 0.82 : format === "square" ? 0.56 : 0.7;
  return (
    <PostFrame treatment={treatment} format={format} width={width}>
      <LogoLockup size={format === "square" ? 18 : 22} tone={treatment === "dark" ? "white" : "ink"} />
      <div className={`mt-[7%] flex flex-1 gap-[7%] ${stack ? "flex-col" : "flex-row items-stretch"}`}>
        <div className={`relative flex flex-col ${stack ? "" : "w-[52%] shrink-0"}`}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            className="mt-[6%] font-bold uppercase leading-[0.96] tracking-[-0.01em]"
            style={{ fontSize: `${2.6 * scale}rem` }}
          >
            {lines.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </h2>
          <div className="mt-auto pt-[10%]">
            <CTA variant="link">{cta}</CTA>
          </div>
        </div>
        {/* image reaches past the padding for a controlled crop; orange block anchors it */}
        <div className={`relative ${stack ? "h-1/2 w-full" : "-mr-[8%] -my-[8%] flex-1"}`}>
          <Block className="absolute -left-3 -top-3 z-10 h-10 w-10" />
          <MediaFrame src={src} alt="Designed website work presented in context" className="h-full w-full" />
        </div>
      </div>
    </PostFrame>
  );
}
