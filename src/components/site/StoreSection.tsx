import { SplitWords } from "./SplitWords";
import { Reveal } from "./Reveal";

interface StoreSectionProps {
  n: string;
  name: string;
  italicWord?: string;
  trade: string;
  status: "Let" | "To Let" | "Holding over";
  rent: string;
  blurb: string;
  hero: string;
  detailA: string;
  detailB: string;
  established?: string;
  leaseType?: string;
  floorArea?: string;
  notes?: string;
}

export function StoreSection({
  n, name, italicWord, trade, status, rent, blurb, hero, detailA, detailB,
  established, leaseType, floorArea, notes,
}: StoreSectionProps) {
  const rows = [
    ["Trade",        trade],
    ["Status",       status],
    ["Rent",         rent],
    ...(established ? [["Established", established]] : []),
    ...(leaseType   ? [["Lease",       leaseType]]   : []),
    ...(floorArea   ? [["Floor area",  floorArea]]   : []),
  ];

  return (
    <section className="dark-section relative">
      {/* ── HERO PANEL ──────────────────────────────────────────────── */}
      <div className="relative h-[55svh] overflow-hidden">
        <div className="absolute inset-0 scroll-parallax-up">
          <img
            src={hero}
            alt={`${name} shopfront on Bridge Street, Newark`}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
        {/* Scrim — bottom only, just behind the text */}
        <div className="absolute inset-x-0 bottom-0 h-[60%]" style={{ background: "linear-gradient(to top, rgba(8,6,4,0.88) 0%, rgba(8,6,4,0.4) 50%, transparent 100%)" }} />

        <div className="absolute inset-x-0 bottom-[10vh] px-6 md:px-10 scroll-fade-out">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-2 flex items-baseline gap-2">
              <span className="font-serif-i text-brass text-2xl tabular-nums">№ {n}</span>
            </div>
            <div className="col-span-12 md:col-span-7">
              <SplitWords
                as="h2"
                stagger={90}
                className="font-display text-[14vw] md:text-[8.5vw] leading-[0.88] text-parchment tracking-tight"
              >
                {name}
              </SplitWords>
              {italicWord && (
                <SplitWords
                  as="p"
                  delay={250}
                  stagger={80}
                  className="font-serif-i text-brass text-3xl md:text-5xl mt-2"
                >
                  {italicWord}
                </SplitWords>
              )}
            </div>
            <div className="col-span-12 md:col-span-3 space-y-3 md:pb-3">
              <p className="eyebrow">Trade</p>
              <p className="text-parchment text-sm leading-snug">{trade}</p>
              <div className="flex gap-2 pt-2">
                <span className={`pill ${status === "Let" ? "let" : status === "To Let" ? "tolet" : ""}`}>
                  <span className="dot" /> {status}
                </span>
                <span className="pill let">{rent}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DETAILS — true 50 / 50 ──────────────────────────────────── */}
      <div className="bg-background">
        <div className="flex flex-col md:flex-row min-h-[70vh]">

          {/* LEFT HALF — 75% image centred, circle motifs in the gap */}
          <div className="relative w-full md:w-1/2 flex-shrink-0 flex items-center justify-center" style={{ minHeight: "560px" }}>

            {/* Hairline circles — architectural notation, bleeding off edges */}
            <svg
              aria-hidden
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              style={{ pointerEvents: "none", overflow: "hidden" }}
            >
              {/* Large arc bleeding off bottom-left */}
              <circle cx="2" cy="96" r="42" fill="none" stroke="rgba(245,242,236,0.07)" strokeWidth="0.12" />
              {/* Medium arc bleeding off top-right */}
              <circle cx="98" cy="4"  r="28" fill="none" stroke="rgba(245,242,236,0.05)" strokeWidth="0.12" />
            </svg>

            <Reveal className="image-reveal relative z-10 w-[75%]">
              <img
                src={detailA}
                alt={`${name} — detail study`}
                className="w-full object-cover"
                style={{ height: "clamp(360px, 55vh, 680px)" }}
                loading="lazy"
                width={1200}
                height={1600}
              />
            </Reveal>
          </div>

          {/* RIGHT HALF — info + blurb + second image */}
          <div className="w-full md:w-1/2 flex flex-col justify-between px-8 md:px-14 lg:px-20 py-16 md:py-24 space-y-12">

            {/* Data table */}
            <Reveal>
              <p className="eyebrow mb-8">Unit details</p>
              <div>
                {rows.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between py-4"
                    style={{ borderBottom: "0.5px solid var(--border)" }}
                  >
                    <span
                      className="text-foreground/45"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {k}
                    </span>
                    <span
                      className="text-foreground text-right"
                      style={{
                        fontSize: "0.82rem",
                        fontFamily: "var(--font-body)",
                        maxWidth: "58%",
                        lineHeight: 1.4,
                      }}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status pill */}
              <div className="flex gap-2 pt-6">
                <span className={`pill ${status === "Let" ? "let" : status === "To Let" ? "tolet" : ""}`}>
                  <span className="dot" /> {status}
                </span>
              </div>
            </Reveal>

            {/* Blurb */}
            <Reveal delay={100}>
              <p className="eyebrow mb-4">A note on the tenancy</p>
              <p
                className="font-display text-parchment leading-[1.2]"
                style={{ fontSize: "clamp(1.15rem, 1.7vw, 1.6rem)" }}
              >
                {blurb}
              </p>
              {notes && (
                <p
                  className="text-foreground/55 leading-[1.8] mt-6"
                  style={{ fontSize: "0.8rem", fontFamily: "var(--font-body)" }}
                >
                  {notes}
                </p>
              )}
            </Reveal>

            {/* Second image — sits at the bottom of the right half */}
            <Reveal className="image-reveal" delay={150}>
              <img
                src={detailB}
                alt={`${name} — close detail`}
                className="w-full object-cover object-top"
                style={{ height: "clamp(200px, 28vh, 340px)" }}
                loading="lazy"
                width={1200}
                height={800}
              />
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}