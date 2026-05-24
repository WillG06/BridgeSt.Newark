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
}

/**
 * HBA-style chapter:
 *  - Full-bleed hero image with title overlay; title fades out via scroll-driven animation
 *    as the section exits the viewport (no sticky scroll-trap).
 *  - Below, two detail images at ~2/3 width that fade in (image-reveal curtain).
 *  - Natural scroll throughout — works on all devices, no scroll hijacking.
 */
export function StoreSection({
  n, name, italicWord, trade, status, rent, blurb, hero, detailA, detailB,
}: StoreSectionProps) {
  return (
    <section className="dark-section relative">
      {/* HERO PANEL */}
      <div className="relative h-[100svh] overflow-hidden">
        <div className="absolute inset-0 scroll-parallax-up">
          <img
            src={hero}
            alt={`${name} shopfront on Bridge Street, Newark`}
            className="h-full w-full object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/10" />

        <div className="absolute inset-x-0 bottom-[14vh] px-6 md:px-10 scroll-fade-out">
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

      {/* DETAILS — natural scroll, two images at ~2/3 width, fade in top→bottom */}
      <div className="bg-background py-28 md:py-40 px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="image-reveal col-span-12 md:col-span-7 md:col-start-1">
            <img
              src={detailA}
              alt={`${name} — detail study`}
              className="w-full h-[70vh] object-cover"
              loading="lazy"
              width={1400}
              height={1800}
            />
          </Reveal>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-[18vh] space-y-10">
            <Reveal>
              <p className="eyebrow mb-5">A note on the tenancy</p>
              <p className="font-display text-2xl md:text-3xl text-parchment leading-[1.2] max-w-[34ch]">
                {blurb}
              </p>
            </Reveal>
            <Reveal className="image-reveal" delay={150}>
              <img
                src={detailB}
                alt={`${name} — close detail`}
                className="w-full h-[55vh] object-cover"
                loading="lazy"
                width={1400}
                height={1800}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
