import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ *
 * Crush Interactive — Brand Elements & Core Components
 * The visual language is editorial and clean: flat surfaces, confident
 * Montserrat type, and geometric brand devices (target mark, orange
 * blocks, skewed highlight, thin rules). Hand-drawn doodles remain
 * available but are an optional accent, never a default.
 * Colors resolve from the treatment's semantic aliases.
 * ------------------------------------------------------------------ */

export type Treatment = "original" | "dark";
export type MediaTone = "color" | "bw" | "overlap";

/* ---------------------------- Logo Lockup --------------------------- *
 * CRUSH + orange period, "INTERACTIVE" tracked beneath. The dot is the
 * one always-orange element; the wordmark itself flips with the surface. */
export function LogoLockup({
  size = 30,
  tone = "ink",
  className = "",
}: {
  size?: number;
  tone?: "ink" | "white";
  className?: string;
}) {
  const color = tone === "white" ? "#f4f1ea" : "var(--on-surface)";
  return (
    <div className={`inline-flex flex-col leading-none ${className}`} style={{ color }}>
      <span className="font-bold tracking-[-0.02em]" style={{ fontSize: size, lineHeight: 0.92 }}>
        CRUSH<span style={{ color: "#f58026" }}>.</span>
      </span>
      <span
        className="font-semibold uppercase"
        style={{ fontSize: size * 0.235, letterSpacing: "0.34em", marginTop: size * 0.12 }}
      >
        Interactive
      </span>
    </div>
  );
}

/* --------------------------- Geometric devices ---------------------- *
 * These clean marks carry the creative energy instead of doodles. */

/* Concentric "target" — the signature Crush graphic accent. */
export function TargetMark({
  className = "",
  color = "var(--accent)",
  style,
}: {
  className?: string;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      <circle cx="50" cy="50" r="44" fill="none" stroke={color} strokeWidth="12" />
      <circle cx="50" cy="50" r="16" fill={color} />
    </svg>
  );
}

/* An orange block — corner interventions and image placeholders. */
export function Block({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return <div className={className} style={{ background: "var(--accent)", ...style }} aria-hidden />;
}

/* Skewed orange highlight sitting behind a headline line. */
export function Highlight({
  children,
  tone = "onOrange",
}: {
  children: ReactNode;
  tone?: "onOrange" | "ink";
}) {
  return (
    <span
      className="inline-block -rotate-1 origin-left px-[0.4em] py-[0.12em]"
      style={{ background: "#f58026", color: tone === "ink" ? "#141414" : "#ffffff" }}
    >
      {children}
    </span>
  );
}

/* Full-width hairline rule. */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{ background: "var(--on-surface)", opacity: 0.9 }}
      aria-hidden
    />
  );
}

/* --------------------------- Doodle Accent -------------------------- *
 * Retained per brand guidelines as an OPTIONAL accent — used sparingly,
 * never applied to a composition by default. */
type DoodleKind = "circle" | "arrow" | "underline";

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
          <path {...common} d="M62 12c-40 6-64 34-48 62 18 31 118 34 168 14 42-17 40-56-8-70C130 6 92 7 62 12z" />
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
  }
}

/* --------------------------- Eyebrow / Headline --------------------- */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`font-semibold uppercase ${className}`}
      style={{ fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--accent)" }}
    >
      {children}
    </span>
  );
}

/* ------------------------------ CTA / label ------------------------- */
export function CTA({
  children,
  variant = "dark",
}: {
  children: ReactNode;
  variant?: "dark" | "orange" | "link";
}) {
  if (variant === "link") {
    return (
      <span
        className="inline-flex items-center gap-2 font-semibold uppercase"
        style={{ fontSize: "0.72rem", letterSpacing: "0.14em", color: "var(--on-surface)" }}
      >
        {children}
        <span aria-hidden style={{ color: "var(--accent)" }}>
          →
        </span>
      </span>
    );
  }
  const dark = variant === "dark";
  return (
    <span
      className="inline-flex items-center font-semibold uppercase rounded-full px-6 py-2.5"
      style={{
        fontSize: "0.72rem",
        letterSpacing: "0.12em",
        background: dark ? "var(--on-surface)" : "#f58026",
        color: dark ? "var(--surface)" : "#ffffff",
      }}
    >
      {children}
    </span>
  );
}

/* Coffee-cup badge — the Cafecito series mark (orange disc, cup knockout). */
export function CoffeeBadge({ size = 56, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden>
      <circle cx="50" cy="50" r="50" fill="#f58026" />
      <g fill="none" stroke="#141414" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 40h32v18a12 12 0 0 1-12 12H42a12 12 0 0 1-12-12z" />
        <path d="M62 44h8a8 8 0 0 1 0 16h-8" />
        <path d="M34 26c0 4-3 5-3 8M46 26c0 4-3 5-3 8M58 26c0 4-3 5-3 8" />
      </g>
    </svg>
  );
}

/* ------------------------------ Media Frame ------------------------- */
export function MediaFrame({
  src,
  alt,
  tone = "color",
  className = "",
  rounded = false,
}: {
  src: string;
  alt: string;
  tone?: MediaTone;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${rounded ? "rounded-md" : ""} ${tone === "bw" ? "crush-bw-hover" : ""} ${className}`}
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
          style={{ background: "rgba(245,128,38,0.78)", mixBlendMode: "multiply" }}
        />
      )}
    </div>
  );
}

/* Website screenshot frame — a clean, tilted browser presenting designed
   work. Chrome is minimal so the site stays the subject. Renders a neutral
   WebsiteMock by default; never a photograph dressed up as a site. */
export function ScreenshotFrame({
  className = "",
  variant = "light",
  children,
}: {
  className?: string;
  variant?: "light" | "dark";
  children?: ReactNode;
}) {
  const dark = variant === "dark";
  return (
    <figure
      className={`overflow-hidden rounded-xl ${className}`}
      style={{
        background: dark ? "#1d1d1d" : "#ffffff",
        boxShadow: "0 30px 60px -30px rgba(0,0,0,0.5)",
      }}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-2.5"
        style={{ background: dark ? "#242424" : "#ede9e1" }}
      >
        <span className="h-2 w-2 rounded-full" style={{ background: "#f58026" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: dark ? "#4a4a4a" : "#c9c4b8" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: dark ? "#4a4a4a" : "#c9c4b8" }} />
      </div>
      {children ?? <WebsiteMock variant={variant} />}
    </figure>
  );
}

/* Neutral placeholder that reads unmistakably as designed website work — no
   invented client, name, or metric. Communicates "Crush designs websites"
   through clean geometric layout alone. */
export function WebsiteMock({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  const bar = dark ? "#3a3a3a" : "#d8d3c8";
  return (
    <div className="p-5" style={{ background: dark ? "#1d1d1d" : "#ffffff" }}>
      <div className="h-1.5 w-24 rounded-full" style={{ background: "#f58026" }} />
      <div className="mt-3 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="h-3 w-4/5 rounded-sm" style={{ background: dark ? "#f4f1ea" : "#141414" }} />
          <div className="mt-2 h-2 w-2/3 rounded-full" style={{ background: bar }} />
          <div className="mt-4 h-4 w-20 rounded-full" style={{ background: "#f58026" }} />
        </div>
        {/* image placeholder: orange block in a soft frame */}
        <div className="rounded-md p-2.5" style={{ background: dark ? "#3a2b1c" : "#fce6d0" }}>
          <div className="h-14 w-14 rounded-md" style={{ background: "#f58026" }} />
        </div>
      </div>
      <div className="mt-5 h-px w-full" style={{ background: bar }} />
      <div className="mt-3 h-2 w-1/2 rounded-full" style={{ background: bar }} />
    </div>
  );
}
