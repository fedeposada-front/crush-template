import { useState } from "react";
import {
  CTA,
  Doodle,
  HeadlineBlock,
  LogoLockup,
  MediaFrame,
  ScreenshotFrame,
  Tag,
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
  { name: "Peach Orange", val: "#FFAF52", cls: "bg-crush-peach", note: "gradient tail" },
  { name: "Dark Grey", val: "#5B5C5B", cls: "bg-crush-dark-grey", note: "wordmark / text" },
  { name: "Light Grey", val: "#919295", cls: "bg-crush-light-grey", note: "captions" },
  { name: "Plum", val: "#330F4C", cls: "bg-crush-plum", note: "secondary" },
  { name: "Magenta", val: "#8F1B6E", cls: "bg-crush-magenta", note: "secondary" },
  { name: "Navy", val: "#111454", cls: "bg-crush-navy", note: "secondary" },
  { name: "Forest", val: "#01532B", cls: "bg-crush-forest", note: "secondary" },
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
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-semibold text-crush-orange text-sm tabular-nums">{index}</span>
            <h2 className="text-2xl font-bold tracking-[-0.02em] md:text-3xl">{title}</h2>
          </div>
          <p className="max-w-md font-medium text-crush-light-grey text-sm">{kicker}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [treatment, setTreatment] = useState<Treatment>("original");
  const [format, setFormat] = useState<Format>("square");

  return (
    <div className="crush-scroll min-h-full overflow-y-auto bg-[#f4f5f7] text-crush-ink">
      {/* Masthead */}
      <header className="mx-auto max-w-6xl px-6 pt-14 pb-6">
        <div className="flex items-center justify-between">
          <div
            data-treatment="original"
            className="rounded-lg bg-crush-ink px-3 py-2"
            style={{ ["--accent" as string]: "#F58026", ["--on-field" as string]: "#fff" }}
          >
            <LogoLockup size={20} />
          </div>
          <span className="font-semibold uppercase tracking-[0.2em] text-crush-light-grey text-xs">
            Social System · V1
          </span>
        </div>

        <div className="relative mt-14 mb-4">
          <Doodle
            kind="circle"
            className="absolute -left-3 -top-6 h-24 w-64 opacity-90"
            stroke="#F58026"
          />
          <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.03em] md:text-7xl">
            One visual
            <br />
            language,
            <span className="crush-stroke-text ml-3 text-crush-orange">many posts.</span>
          </h1>
        </div>
        <p className="max-w-xl font-medium text-crush-dark-grey md:text-lg">
          A flexible design system for Crush Interactive social content — built from the brand
          guidelines. Foundations, components, and four compositions that flex across treatments and
          Instagram formats while the Crush identity stays constant.
        </p>
      </header>

      {/* 01 — Foundations */}
      <Section
        index="01"
        title="Foundations"
        kicker="Established palette and Montserrat typography — the fixed base every post inherits."
      >
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {TOKENS.map((t) => (
              <div key={t.name} className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className={`h-20 ${t.cls}`} />
                <div className="p-3">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="font-mono text-[0.7rem] text-crush-light-grey">{t.val}</p>
                  <p className="mt-1 text-[0.7rem] font-medium text-crush-dark-grey">{t.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="mb-4 font-semibold uppercase tracking-[0.16em] text-crush-light-grey text-xs">
              Montserrat
            </p>
            <p className="text-4xl font-bold tracking-[-0.02em]">Semibold display</p>
            <p className="mt-1 text-lg font-medium text-crush-dark-grey">
              Medium for body copy and lists.
            </p>
            <p className="mt-6 text-5xl font-bold">
              CRUSH<span className="text-crush-orange">_</span>
            </p>
            <p className="crush-stroke-text mt-1 text-5xl font-bold text-crush-ink">CRUSH_</p>
            <p className="mt-4 text-[0.7rem] font-medium text-crush-light-grey">
              Stroke + filled mixing is an established brand device.
            </p>
          </div>
        </div>
      </Section>

      {/* 02 — Brand elements & components */}
      <Section
        index="02"
        title="Elements & components"
        kicker="Reusable parts with configurable props — variants only where structural behaviour differs."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-[#ff5f3d] via-crush-orange to-crush-peach p-8">
            <div
              data-treatment="original"
              style={{ ["--on-field" as string]: "#fff", ["--accent" as string]: "#fff" }}
            >
              <LogoLockup size={30} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              Logo lockup
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 rounded-xl bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4 text-crush-orange">
              <Doodle kind="arrow" className="h-10 w-12" stroke="#F58026" />
              <Doodle kind="spark" className="h-9 w-9" stroke="#F58026" />
              <Doodle kind="underline" className="h-4 w-20" stroke="#F58026" />
              <Doodle kind="bang" className="h-12 w-4" stroke="#F58026" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-crush-light-grey">
              Doodle accents
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Tag>Portfolio</Tag>
              <div
                data-treatment="original"
                style={{ ["--on-field" as string]: "#F58026", ["--accent" as string]: "#F58026" }}
              >
                <CTA>Contact us</CTA>
              </div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-crush-light-grey">
              Tag · CTA
            </span>
          </div>

          <div className="crush-bw-hover flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm">
            <MediaFrame src={U(PHOTOS.outside, 600, 400)} alt="Candid friends laughing outside" tone="bw" className="h-40" />
            <span className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-crush-light-grey">
              Media · B&W → color
            </span>
          </div>

          <div className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm">
            <MediaFrame src={U(PHOTOS.mountain, 600, 400)} alt="Group of people together at golden hour" tone="overlap" className="h-40" />
            <span className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-crush-light-grey">
              Media · overlapping
            </span>
          </div>

          <div className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm">
            <ScreenshotFrame />
            <span className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-crush-light-grey">
              Screenshot frame
            </span>
          </div>
        </div>
      </Section>

      {/* 03 — Compositions */}
      <Section
        index="03"
        title="Compositions"
        kicker="Four abstract layouts. Toggle the treatment and format — identity holds, expression flexes."
      >
        <div className="mb-8 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-1 rounded-full bg-white p-1 shadow-sm">
            {(["original", "dark"] as Treatment[]).map((t) => (
              <button
                key={t}
                onClick={() => setTreatment(t)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-colors ${
                  treatment === t ? "bg-crush-ink text-white" : "text-crush-dark-grey hover:text-crush-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white p-1 shadow-sm">
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

        <div className="flex flex-wrap items-start justify-center gap-10 md:justify-start">
          {[
            { label: "Statement", node: <StatementPost treatment={treatment} format={format} /> },
            { label: "Photo-led", node: <PhotoLedPost treatment={treatment} format={format} src={U(PHOTOS.laughing)} /> },
            { label: "Media showcase", node: <ShowcasePost treatment={treatment} format={format} /> },
            { label: "Split", node: <SplitPost treatment={treatment} format={format} src={U(PHOTOS.mountain)} /> },
          ].map((c) => (
            <figure key={c.label} className="flex flex-col items-center gap-3">
              {c.node}
              <figcaption className="text-sm font-semibold text-crush-dark-grey">{c.label}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Feed preview */}
      <Section
        index="04"
        title="On the grid"
        kicker="Compositions and treatments interleave into the alternating feed rhythm from the guidelines."
      >
        <div className="mx-auto grid max-w-md grid-cols-3 gap-1.5">
          {[
            <StatementPost key="a" treatment="original" format="square" width={150} />,
            <PhotoLedPost key="b" treatment="dark" format="square" width={150} src={U(PHOTOS.laughing, 500, 500)} />,
            <div key="c" className="aspect-square rounded-lg bg-gradient-to-br from-crush-orange to-crush-peach" />,
            <div key="d" className="aspect-square rounded-lg bg-crush-ink" />,
            <SplitPost key="e" treatment="original" format="square" width={150} src={U(PHOTOS.outside, 500, 500)} />,
            <ShowcasePost key="f" treatment="dark" format="square" width={150} />,
            <PhotoLedPost key="g" treatment="original" format="square" width={150} src={U(PHOTOS.mountain, 500, 500)} />,
            <div key="h" className="aspect-square rounded-lg bg-gradient-to-br from-crush-magenta to-crush-plum" />,
            <StatementPost key="i" treatment="dark" format="square" width={150} />,
          ].map((n, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              {n}
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
          <div
            data-treatment="original"
            style={{ ["--on-field" as string]: "#1a1614", ["--accent" as string]: "#F58026" }}
          >
            <LogoLockup size={18} tone="field" />
          </div>
          <p className="font-medium text-crush-light-grey text-xs">
            Phase 2 · V1 build — Adapted / client theming intentionally out of scope.
          </p>
        </div>
      </footer>
    </div>
  );
}
