import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ *
 * Crush Interactive — Brand Elements & Core Components (plan §13)
 * Each piece is configurable via props; variants only where the
 * structural behaviour differs. Colors resolve from the treatment's
 * semantic aliases (--on-field / --accent), never hard-coded.
 * ------------------------------------------------------------------ */

export type Treatment = "original" | "dark";
export type MediaTone = "color" | "bw" | "overlap";

/* ---------------------------- Logo Lockup --------------------------- */
export function LogoLockup({
  size = 28,
  tone = "field",
  className = "",
}: {
  size?: number;
  tone?: "field" | "surface";
  className?: string;
}) {
  const color = tone === "field" ? "var(--on-field)" : "var(--on-surface)";
  return (
    <div className={`inline-flex items-end gap-[0.35em] leading-none ${className}`} style={{ color }}>
      <span
        className="font-bold tracking-[-0.03em]"
        style={{ fontSize: size, lineHeight: 0.9 }}
      >
        CRUSH
        <span style={{ color: "var(--accent)" }}>_</span>
      </span>
      <span
        className="font-medium tracking-[0.02em] pb-[0.12em]"
        style={{ fontSize: size * 0.38, opacity: 0.9 }}
      >
        interactive
      </span>
    </div>
  );
}

/* --------------------------- Doodle Accent -------------------------- */
type DoodleKind = "circle" | "arrow" | "underline" | "spark" | "bang";

export function Doodle({
  kind,
  className = "",
  style,
  stroke = "var(--accent)",
}: {
  kind: DoodleKind;
  className?: string;
  style?: CSSProperties;
  stroke?: string;
}) {
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "circle":
      return (
        <svg viewBox="0 0 240 110" className={className} style={style} aria-hidden>
          <path
            {...common}
            d="M62 12c-40 6-64 34-48 62 18 31 118 34 168 14 42-17 40-56-8-70C130 6 92 7 62 12z"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 120 90" className={className} style={style} aria-hidden>
          <path {...common} d="M8 20c26 2 60-6 74 20 6 12-8 26-24 22" />
          <path {...common} d="M40 74l18-8 4 20" />
        </svg>
      );
    case "underline":
      return (
        <svg viewBox="0 0 220 26" className={className} style={style} aria-hidden>
          <path {...common} d="M6 16c50-10 150-14 208-6" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden>
          <path {...common} d="M30 6c3 14 10 21 24 24-14 3-21 10-24 24-3-14-10-21-24-24 14-3 21-10 24-24z" />
        </svg>
      );
    case "bang":
      return (
        <svg viewBox="0 0 40 120" className={className} style={style} aria-hidden>
          <path {...common} d="M16 8c4 2 10 4 8 12-3 12-6 40-8 64" />
          <circle cx="12" cy="104" r="6" fill={stroke} stroke="none" />
        </svg>
      );
  }
}

/* --------------------------- Headline Block ------------------------- */
export function HeadlineBlock({
  eyebrow,
  lines,
  emphasis,
  sub,
  align = "left",
  scale = 1,
}: {
  eyebrow?: string;
  lines: string[];
  emphasis?: string; // word rendered as stroke text
  sub?: string;
  align?: "left" | "center";
  scale?: number;
}) {
  return (
    <div
      className={`flex flex-col gap-[0.5em] ${align === "center" ? "items-center text-center" : "items-start"}`}
      style={{ color: "var(--on-field)" }}
    >
      {eyebrow && (
        <span
          className="font-semibold uppercase tracking-[0.22em]"
          style={{ fontSize: `${0.85 * scale}rem`, color: "var(--accent)" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-bold leading-[0.98] tracking-[-0.02em]"
        style={{ fontSize: `${3.1 * scale}rem` }}
      >
        {lines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
        {emphasis && (
          <span className="crush-stroke-text block" style={{ color: "var(--on-field)" }}>
            {emphasis}
          </span>
        )}
      </h2>
      {sub && (
        <p
          className="font-medium max-w-[42ch]"
          style={{ fontSize: `${1.05 * scale}rem`, opacity: 0.92, lineHeight: 1.45 }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ------------------------------ Tag / CTA --------------------------- */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-full text-[0.72rem]"
      style={{ background: "var(--accent)", color: "#fff" }}
    >
      {children}
    </span>
  );
}

export function CTA({ children }: { children: ReactNode }) {
  return (
    <button
      className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.12em] text-[0.8rem] px-5 py-2.5 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        background: "var(--on-field)",
        color: "var(--accent)",
        boxShadow: "0 6px 22px -10px rgba(0,0,0,0.5)",
      }}
    >
      {children}
      <span aria-hidden>→</span>
    </button>
  );
}

/* ------------------------------ Media Frame ------------------------- */
export function MediaFrame({
  src,
  alt,
  tone = "color",
  className = "",
  rounded = true,
}: {
  src: string;
  alt: string;
  tone?: MediaTone;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${rounded ? "rounded-2xl" : ""} ${
        tone === "bw" ? "crush-bw-hover" : ""
      } ${className}`}
      style={{ background: "var(--muted)" }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${tone === "bw" ? "crush-bw" : ""}`}
      />
      {tone === "overlap" && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(245,128,38,0) 30%, rgba(245,128,38,0.82) 100%)",
            mixBlendMode: "multiply",
          }}
        />
      )}
    </div>
  );
}

/* Website screenshot frame — keeps chrome minimal so the site stays
   dominant when it is the subject (plan §14). Renders whatever website
   content is passed as children; never a bare photograph dressed up as
   a site. Falls back to a neutral WebsiteMock. */
export function ScreenshotFrame({
  url = "crush-interactive.com",
  className = "",
  children,
}: {
  url?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-lg bg-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-black/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-[0.62rem] font-medium text-crush-light-grey">{url}</span>
      </div>
      {children ?? <WebsiteMock />}
    </figure>
  );
}

/* Neutral placeholder that reads unmistakably as a *website* built by
   Crush — no invented client, name, or metric. Communicates
   "Crush designs websites" through layout alone. */
export function WebsiteMock() {
  return (
    <div className="bg-white text-crush-ink">
      {/* site nav */}
      <div className="flex items-center justify-between px-3 py-1.5">
        <span className="text-[0.5rem] font-bold tracking-tight">
          CRUSH<span className="text-crush-orange">_</span>
        </span>
        <div className="flex gap-1.5">
          <span className="h-1 w-4 rounded-full bg-crush-ink/15" />
          <span className="h-1 w-4 rounded-full bg-crush-ink/15" />
          <span className="h-1 w-4 rounded-full bg-crush-ink/15" />
        </div>
      </div>
      {/* hero */}
      <div className="relative bg-gradient-to-br from-[#ff5f3d] via-crush-orange to-crush-peach px-3 py-4">
        <div className="h-1.5 w-10 rounded-full bg-white/70" />
        <div className="mt-1.5 h-2.5 w-3/4 rounded-sm bg-white/90" />
        <div className="mt-1 h-2.5 w-1/2 rounded-sm bg-white/90" />
        <div className="mt-2 h-2 w-12 rounded-full bg-white" />
      </div>
      {/* content rows */}
      <div className="grid grid-cols-3 gap-1.5 p-3">
        <div className="aspect-video rounded-sm bg-crush-ink/8" />
        <div className="aspect-video rounded-sm bg-crush-ink/8" />
        <div className="aspect-video rounded-sm bg-crush-ink/8" />
      </div>
    </div>
  );
}
