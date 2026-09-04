import { useState } from "react";
import {
  Block,
  CoffeeBadge,
  CTA,
  Highlight,
  LogoLockup,
  MediaFrame,
  Rule,
  ScreenshotFrame,
  TargetMark,
  type Treatment,
} from "./crush/brand";
import {
  FORMAT_LABEL,
  PhotoLedPost,
  ShowcasePost,
  SplitPost,
  StatementPost,
  type Format,
} from "./crush/compositions";

const U = (id: string, w = 900, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

const PHOTOS = {
  laughing: "1511988617509-a57c8a288659",
  outside: "1491438590914-bc09fcaaf77a",
  mountain: "1520880867055-1e30d1cb001c",
};

const TOKENS = [
  { name: "Crush Orange", val: "#F58026", cls: "bg-crush-orange", note: "identity anchor" },
  { name: "Ink", val: "#141414", cls: "bg-crush-ink", note: "dark surface / type" },
  { name: "Cream", val: "#F4F1EA", cls: "bg-[#F4F1EA] ring-1 ring-black/10", note: "light surface" },
  { name: "Dark Grey", val: "#5B5C5B", cls: "bg-crush-dark-grey", note: "secondary text" },
  { name: "Peach", val: "#FFAF52", cls: "bg-crush-peach", note: "accent tint" },
  { name: "Light Grey", val: "#919295", cls: "bg-crush-light-grey", note: "captions" },
  { name: "Plum", val: "#330F4C", cls: "bg-crush-plum", note: "secondary" },
  { name: "Teal", val: "#03465B", cls: "bg-crush-teal", note: "secondary" },
];

function Section({
  index,
  title,
  kicker,
  children,
}: {
  index: string;
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-black/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-semibold tabular-nums text-crush-orange">{index}</span>
            <h2 className="text-2xl font-bold uppercase tracking-[-0.01em] md:text-3xl">{title}</h2>
          </div>
          <p className="max-w-md font-medium text-crush-dark-grey text-sm">{kicker}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

const FAMILIES = [
  { n: "01", name: "Founder POV", best: "Thought leadership, strong opinions, Reels covers" },
  { n: "02", name: "Project Reveal", best: "Case studies, launches, before and after" },
  { n: "03", name: "Cafecito", best: "Relationships, community, guest spotlights" },
  { n: "04", name: "Quick Audit", best: "Educational carousels, polls, lead generation" },
];

export default function App() {
  const [treatment, setTreatment] = useState<Treatment>("original");
  const [format, setFormat] = useState<Format>("portrait");

  return (
    <div className="crush-scroll min-h-full overflow-y-auto bg-[#f4f1ea] text-crush-ink">
      {/* thin orange rule at the very top — a Crush signature */}
      <div className="h-2 w-full bg-crush-orange" />

      {/* Masthead */}
      <header className="mx-auto max-w-6xl px-6 pt-14 pb-8">
        <div className="flex items-center justify-between">
          <LogoLockup size={30} />
          <span className="font-semibold uppercase tracking-[0.2em] text-crush-dark-grey text-xs">
            Instagram Visual System · V1
          </span>
        </div>

        <div className="relative mt-16 mb-6">
          <TargetMark className="absolute -right-2 -top-10 hidden h-28 w-28 md:block" color="#F58026" />
          <h1 className="max-w-4xl text-5xl font-bold uppercase leading-[0.92] tracking-[-0.02em] md:text-8xl">
            One visual
            <br />
            language.
            <br />
            <span className="mt-2 inline-block text-4xl md:text-7xl">
              <Highlight>Four content families.</Highlight>
            </span>
          </h1>
        </div>
        <p className="max-w-2xl font-medium text-crush-dark-grey md:text-lg">
          A clean, editorial system for Crush Interactive on Instagram. Flat surfaces, confident
          Montserrat, and a small kit of geometric brand devices — four composition primitives that
          flex across treatments and formats while the Crush identity stays unmistakable.
        </p>
      </header>

      {/* 01 — Foundations */}
      <Section
        index="01"
        title="Foundations"
        kicker="Established palette and Montserrat — the fixed base every post inherits."
      >
        <div className="grid gap-10 md:grid-cols-[1.25fr_1fr]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {TOKENS.map((t) => (
              <div key={t.name}>
                <div className={`h-16 w-full rounded-md ${t.cls}`} />
                <p className="mt-2 text-sm font-semibold">{t.name}</p>
                <p className="font-mono text-[0.7rem] text-crush-light-grey">{t.val}</p>
                <p className="text-[0.7rem] font-medium text-crush-dark-grey">{t.note}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.16em] text-crush-light-grey text-xs">
              Montserrat · Bold + Medium
            </p>
            <p className="text-5xl font-bold uppercase leading-[0.95] tracking-[-0.01em]">
              Bold display
            </p>
            <p className="mt-2 text-lg font-medium text-crush-dark-grey">
              Medium for supporting copy and lists.
            </p>
            <Rule className="my-6 opacity-20" />
            <div className="flex items-end gap-6">
              <LogoLockup size={40} />
              <LogoLockup size={40} tone="white" className="rounded-md bg-crush-ink px-4 py-3" />
            </div>
            <p className="mt-4 text-[0.7rem] font-medium text-crush-light-grey">
              The CRUSH. wordmark flips with the surface; the period stays orange.
            </p>
          </div>
        </div>
      </Section>

      {/* 02 — Brand elements & components */}
      <Section
        index="02"
        title="Elements & components"
        kicker="Clean geometric devices carry the energy. Doodles remain an optional accent, never a default."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-5 rounded-lg bg-crush-ink py-12">
            <LogoLockup size={34} tone="white" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Logo lockup
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 rounded-lg bg-crush-orange py-12">
            <div className="flex items-center gap-5">
              <TargetMark className="h-12 w-12" color="#141414" />
              <Block className="h-12 w-12 rounded-sm" style={{ background: "#141414" }} />
              <span className="text-3xl font-bold text-crush-ink">→</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-crush-ink/50">
              Geometric devices
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white py-10">
            <div className="text-2xl font-bold uppercase">
              <Highlight>Highlight</Highlight>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <CTA variant="dark">Read the POV</CTA>
              <CTA variant="orange">View work</CTA>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-crush-light-grey">
              Highlight · CTA
            </span>
          </div>

          <div className="crush-bw-hover flex flex-col gap-3 rounded-lg bg-white p-3">
            <MediaFrame
              src={U(PHOTOS.outside, 600, 400)}
              alt="Warm candid moment between people"
              tone="bw"
              className="h-40 rounded-sm"
            />
            <span className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-crush-light-grey">
              Media · B&W → color
            </span>
          </div>

          <div className="flex flex-col gap-3 rounded-lg bg-white p-3 lg:col-span-2">
            <ScreenshotFrame variant="dark" />
            <span className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-crush-light-grey">
              Screenshot frame · designed work, not a photo in chrome
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white py-10">
            <CoffeeBadge size={56} />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-crush-light-grey">
              Cafecito series mark
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-white py-10">
            <div className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-sm bg-crush-orange" />
              <span className="h-4 w-4 rounded-sm bg-crush-ink" />
              <span className="h-4 w-4 rounded-sm bg-crush-dark-grey" />
              <span className="h-4 w-4 rounded-sm bg-[#f4f1ea] ring-1 ring-black/10" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-crush-light-grey">
              Four-mode palette
            </span>
          </div>
        </div>
      </Section>

      {/* 03 — Compositions */}
      <Section
        index="03"
        title="Compositions"
        kicker="Four primitives, each supporting several families. Toggle treatment and format — identity holds, expression flexes."
      >
        <div className="mb-10 flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-1 rounded-full bg-white p-1">
            {(["original", "dark"] as Treatment[]).map((t) => (
              <button
                key={t}
                onClick={() => setTreatment(t)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-colors ${
                  treatment === t ? "bg-crush-ink text-white" : "text-crush-dark-grey hover:text-crush-ink"
                }`}
              >
                {t === "original" ? "Light" : "Dark"}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white p-1">
            {(["square", "portrait", "story"] as Format[]).map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  format === f ? "bg-crush-orange text-white" : "text-crush-dark-grey hover:text-crush-ink"
                }`}
              >
                {FORMAT_LABEL[f].split(" · ")[0]}
              </button>
            ))}
          </div>
          <span className="font-mono text-xs text-crush-light-grey">{FORMAT_LABEL[format]}</span>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-14 md:justify-start">
          {[
            {
              label: "Statement",
              family: "Founder POV",
              node: <StatementPost treatment={treatment} format={format} />,
            },
            {
              label: "Media showcase",
              family: "Project Reveal",
              node: <ShowcasePost treatment={treatment} format={format} />,
            },
            {
              label: "Photo-led",
              family: "Cafecito",
              node: (
                <PhotoLedPost
                  treatment={treatment}
                  format={format}
                  src={U(PHOTOS.laughing)}
                  guest="Your next guest"
                  guestSub="Miami business owner"
                />
              ),
            },
            {
              label: "Statement · orange",
              family: "Quick Audit",
              node: (
                <StatementPost
                  treatment={treatment}
                  format={format}
                  field="orange"
                  eyebrow="Quick Website Audit · 01 / 04"
                  lines={["Does your", "homepage pass", "the 5-second", "test?"]}
                  highlight=""
                  checklist={["What you do", "Who it's for", "What to do next"]}
                  cta="Swipe for the test"
                />
              ),
            },
            {
              label: "Split",
              family: "Before / After",
              node: <SplitPost treatment={treatment} format={format} src={U(PHOTOS.mountain)} />,
            },
          ].map((c) => (
            <figure key={c.label} className="flex flex-col items-center gap-3">
              {c.node}
              <figcaption className="text-center">
                <span className="block text-sm font-semibold">{c.label}</span>
                <span className="block text-xs font-medium uppercase tracking-[0.12em] text-crush-light-grey">
                  {c.family}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 04 — Feed preview */}
      <Section
        index="04"
        title="On the grid"
        kicker="Variety within a recognizable system — light, dark, orange and photography interleave into a believable feed."
      >
        <div className="mx-auto grid max-w-md grid-cols-3 gap-1.5">
          {[
            <StatementPost key="a" treatment="original" format="square" width={160} highlight="" cta="Read the POV" />,
            <PhotoLedPost key="b" treatment="dark" format="square" width={160} src={U(PHOTOS.laughing, 500, 500)} lines={["Good coffee.", "Smarter talk."]} guest="This week's guest" />,
            <StatementPost key="c" treatment="original" format="square" width={160} field="orange" eyebrow="Quick Audit" lines={["The 5-second", "test."]} highlight="" checklist={["What you do", "Who it's for"]} cta="Swipe" />,
            <ShowcasePost key="d" treatment="dark" format="square" width={160} lines={["A stronger", "first look."]} />,
            <SplitPost key="e" treatment="original" format="square" width={160} src={U(PHOTOS.outside, 500, 500)} lines={["New look.", "Same team."]} />,
            <StatementPost key="f" treatment="dark" format="square" width={160} eyebrow="The Crush POV" lines={["Your site", "isn't old."]} highlight="It's underselling you." sub="" meta="" cta="Read" />,
            <PhotoLedPost key="g" treatment="original" format="square" width={160} src={U(PHOTOS.mountain, 500, 500)} lines={["Real people.", "Real work."]} guest="Behind the build" guestSub="Crush studio" />,
            <StatementPost key="h" treatment="original" format="square" width={160} field="orange" eyebrow="Built to Convert" lines={["One clear", "next step."]} highlight="" cta="Learn how" showTarget />,
            <ShowcasePost key="i" treatment="original" format="square" width={160} eyebrow="Client Spotlight" lines={["Made to", "convert."]} />,
          ].map((n, i) => (
            <div key={i} className="overflow-hidden">
              {n}
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-black/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
          <LogoLockup size={20} />
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {FAMILIES.map((f) => (
              <span key={f.n} className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-crush-light-grey">
                {f.n} {f.name}
              </span>
            ))}
          </div>
          <p className="font-medium text-crush-light-grey text-xs">Montserrat · Bold scale · Clean grid</p>
        </div>
      </footer>
    </div>
  );
}
