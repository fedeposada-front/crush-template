import type { ReactNode } from "react";
import {
  CTA,
  Doodle,
  HeadlineBlock,
  LogoLockup,
  MediaFrame,
  ScreenshotFrame,
  type Treatment,
} from "./brand";

/* ------------------------------------------------------------------ *
 * Crush Interactive — Compositions (plan §15) & Format frame (§17)
 * A Composition is an abstract layout contract: named zones + what is
 * fixed vs. free. The same composition renders under either treatment
 * (a semantic-alias reassignment) and any format ratio.
 * ------------------------------------------------------------------ */

export type Format = "square" | "portrait" | "story";

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

/* The post surface: applies treatment, ratio, gradient/dark field,
   film grain (dark) and a subtle line-mask depth layer. */
export function PostFrame({
  treatment,
  format,
  children,
  width = 340,
}: {
  treatment: Treatment;
  format: Format;
  children: ReactNode;
  width?: number;
}) {
  return (
    <div
      data-treatment={treatment}
      className="crush-grain relative overflow-hidden rounded-[1.4rem] shadow-[0_30px_70px_-32px_rgba(0,0,0,0.6)]"
      style={{
        width,
        aspectRatio: RATIO[format],
        background: "var(--surface-field)",
        color: "var(--on-field)",
      }}
    >
      <div
        className="crush-linemask absolute inset-x-0 bottom-0 h-2/3 opacity-[0.18]"
        style={{ color: "var(--on-field)" }}
        aria-hidden
      />
      <div className="relative flex h-full w-full flex-col p-[7%]">{children}</div>
    </div>
  );
}

/* 1 — STATEMENT: one dominant headline on the field + wordmark anchor. */
export function StatementPost({
  treatment,
  format,
  width,
}: {
  treatment: Treatment;
  format: Format;
  width?: number;
}) {
  const scale = format === "story" ? 1.05 : format === "portrait" ? 0.92 : 0.8;
  return (
    <PostFrame treatment={treatment} format={format} width={width}>
      <LogoLockup size={22} />
      <div className="relative mt-auto">
        <Doodle
          kind="circle"
          className="absolute -top-[0.6em] -left-[0.4em] h-[2.4em] w-[7em]"
          stroke="var(--on-field)"
        />
        <HeadlineBlock
          eyebrow="Real results"
          lines={["Meet your", "new web"]}
          emphasis="agency"
          sub="When you speak to the right audience in the right tone, positive results are inevitable."
          scale={scale}
        />
        <Doodle kind="bang" className="absolute right-[8%] bottom-[18%] h-[3.2em] w-[1.1em]" />
      </div>
      <div className="mt-[6%]">
        <CTA>Contact us</CTA>
      </div>
    </PostFrame>
  );
}

/* 2 — PHOTO-LED: photography dominant, minimal caption + lockup. */
export function PhotoLedPost({
  treatment,
  format,
  src,
  width,
}: {
  treatment: Treatment;
  format: Format;
  src: string;
  width?: number;
}) {
  return (
    <PostFrame treatment={treatment} format={format} width={width}>
      <LogoLockup size={20} />
      {/* Photo fills the frame; type sits on the image, not above a card. */}
      <div className="crush-bw-hover relative -mx-[7%] -mb-[7%] mt-[5%] flex-1 overflow-hidden">
        <MediaFrame
          src={src}
          alt="Crush Interactive team sharing coffee and candid conversation"
          tone="bw"
          rounded={false}
          className="h-full w-full"
        />
        <span
          className="absolute left-[8%] top-[7%] font-semibold uppercase tracking-[0.18em] text-white/90"
          style={{ fontSize: "0.66rem" }}
        >
          Cafecito
        </span>
        <div
          className="absolute inset-x-0 bottom-0 p-[8%]"
          style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.72), transparent)" }}
        >
          <p className="font-bold leading-[0.95] text-white" style={{ fontSize: "1.7rem" }}>
            The people
            <br />
            behind the
            <br />
            <span className="text-crush-orange">pixels.</span>
          </p>
        </div>
      </div>
    </PostFrame>
  );
}

/* 3 — MEDIA SHOWCASE: the website itself is the dominant subject.
   Renders an actual webpage (WebsiteMock), never a photo in chrome. */
export function ShowcasePost({
  treatment,
  format,
  width,
}: {
  treatment: Treatment;
  format: Format;
  width?: number;
}) {
  return (
    <PostFrame treatment={treatment} format={format} width={width}>
      <div className="flex items-center justify-between">
        <LogoLockup size={20} />
        <span
          className="font-semibold uppercase tracking-[0.2em]"
          style={{ fontSize: "0.62rem", color: "var(--accent)" }}
        >
          Selected work
        </span>
      </div>
      {/* website dominates the frame */}
      <div className="mt-auto mb-[7%] -rotate-1">
        <ScreenshotFrame />
      </div>
      <div className="flex items-end justify-between gap-4">
        <HeadlineBlock lines={["We design", "websites."]} scale={format === "story" ? 0.72 : 0.5} />
        <span className="pb-1 font-medium" style={{ fontSize: "0.72rem", opacity: 0.8 }}>
          Explore the project →
        </span>
      </div>
    </PostFrame>
  );
}

/* 4 — SPLIT: message zone + media zone, editorially composed (not a
   mechanically equal two-column). Image is cropped and dominant. */
export function SplitPost({
  treatment,
  format,
  src,
  width,
}: {
  treatment: Treatment;
  format: Format;
  width?: number;
  src: string;
}) {
  const stack = format === "story";
  return (
    <PostFrame treatment={treatment} format={format} width={width}>
      <LogoLockup size={20} />
      <div className={`mt-[6%] flex flex-1 gap-[6%] ${stack ? "flex-col" : "flex-row items-stretch"}`}>
        <div className={`relative ${stack ? "" : "w-[46%] shrink-0"} flex flex-col`}>
          <span
            className="font-semibold uppercase tracking-[0.2em]"
            style={{ fontSize: "0.62rem", color: "var(--accent)" }}
          >
            Website project
          </span>
          <HeadlineBlock
            lines={["From", "idea to", "impact"]}
            scale={format === "square" ? 0.66 : 0.8}
          />
          <Doodle kind="arrow" className="mt-auto h-[2.4em] w-[3.4em]" />
        </div>
        {/* image reaches past the padding for controlled overlap + crop */}
        <MediaFrame
          src={src}
          alt="Candid collaboration between Crush Interactive and its clients"
          tone="overlap"
          className={stack ? "h-1/2 w-full" : "-mr-[7%] -my-[7%] flex-1"}
          rounded={!stack}
        />
      </div>
    </PostFrame>
  );
}
