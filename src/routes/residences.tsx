import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SplitWords } from "@/components/site/SplitWords";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import flat1 from "@/assets/flat-1.jpg";
import flat2 from "@/assets/flat-2.jpg";
import flat3 from "@/assets/flat-3.jpg";
import flat4 from "@/assets/flat-4.jpg";
import flat5 from "@/assets/flat-5.jpg";
import flat6 from "@/assets/flat-6.jpg";

interface Flat {
  n: string;
  name: string;
  type: string;
  sqm: string;
  sqft: string;
  aspect: string;
  features: string[];
  img: string;
  tall?: boolean;
}

const FLATS: Flat[] = [
  { n: "01", name: "The Sash",    type: "1 bed · west aspect",      sqm: "57 sq m", sqft: "613 sq ft", aspect: "West, over Market Place",          features: ["Original Georgian sash windows", "Cast-iron fireplace, restored", "Open kitchen / living"],    img: flat1, tall: true },
  { n: "02", name: "The Cornice", type: "1 bed · north light",       sqm: "46 sq m", sqft: "495 sq ft", aspect: "North, into the courtyard",         features: ["Decorative plaster ceiling rose", "Compact galley kitchen", "Marble-tiled bathroom"],          img: flat2 },
  { n: "03", name: "The Chimney", type: "1 bed · east aspect",       sqm: "54 sq m", sqft: "581 sq ft", aspect: "East, over Bridge Street",          features: ["Exposed brick chimney breast", "Brass fittings, marble worktop", "Twin sash bay"],             img: flat3, tall: true },
  { n: "04", name: "The Mirror",  type: "1–2 bed · corner suite",    sqm: "60 sq m", sqft: "645 sq ft", aspect: "Corner — Market Place & Bridge St.", features: ["Two return sash windows", "En-suite with antique mirror", "Forest-green wainscoting"],         img: flat4 },
  { n: "05", name: "The Hall",    type: "1 bed · top floor",         sqm: "42 sq m", sqft: "452 sq ft", aspect: "South, mansard light",              features: ["Pine staircase, original handrail", "Deep green entrance hall", "Brass wall sconces"],          img: flat5, tall: true },
  { n: "06", name: "The Square",  type: "1–2 bed · gable end",       sqm: "56 sq m", sqft: "602 sq ft", aspect: "West, full view of the square",     features: ["Triple sash window over Market Place", "Dressing room", "Cast-iron radiators throughout"],      img: flat6 },
];

// ── Desktop scatter — hand-placed, avoids the title zone (left 8vw, vertically centred) ──
// Each image: position (%), size (px), resting rotation, entrance axis, exit axis, delay
type HeroImg = {
  src: string; alt: string;
  top: string; left: string;
  size: number; rotate: number;
  enterFrom: "up" | "down" | "left" | "right";
  exitTo:    "up" | "down" | "left" | "right";
  delay: number;
};

const HERO_IMAGES: HeroImg[] = [
  { src: flat2, alt: "Flat 02 — fireplace detail",            top: "8%",  left: "4%",  size: 100, rotate: -3, enterFrom: "up",    exitTo: "up",    delay: 0.05 },
  { src: flat3, alt: "Flat 03 — chimney breast",              top: "5%",  left: "38%", size: 82,  rotate:  2, enterFrom: "down",  exitTo: "left",  delay: 0.20 },
  { src: flat6, alt: "Flat 06 — triple sash",                 top: "8%",  left: "66%", size: 112, rotate:  4, enterFrom: "right", exitTo: "up",    delay: 0.11 },
  { src: flat1, alt: "Flat 01 — sash window",                 top: "6%",  left: "86%", size: 86,  rotate: -2, enterFrom: "up",    exitTo: "right", delay: 0.32 },
  { src: flat5, alt: "Flat 05 — staircase hall",              top: "55%", left: "38%", size: 104, rotate:  3, enterFrom: "left",  exitTo: "down",  delay: 0.17 },
  { src: flat4, alt: "Flat 04 — antique mirror",              top: "58%", left: "62%", size: 96,  rotate: -4, enterFrom: "down",  exitTo: "down",  delay: 0.38 },
  { src: flat3, alt: "Flat 03 — brass tap detail",            top: "60%", left: "84%", size: 78,  rotate:  2, enterFrom: "right", exitTo: "left",  delay: 0.09 },
  { src: flat1, alt: "Flat 01 — golden hour",                 top: "62%", left: "4%",  size: 88,  rotate: -5, enterFrom: "left",  exitTo: "right", delay: 0.26 },
  { src: flat2, alt: "Flat 02 — cornice detail",              top: "75%", left: "22%", size: 94,  rotate:  4, enterFrom: "down",  exitTo: "up",    delay: 0.44 },
];

// ── Mobile scatter — fewer, smaller, repositioned so they don't crowd the title ──
const HERO_IMAGES_MOBILE: HeroImg[] = [
  { src: flat1, alt: "Flat 01 — sash window",    top: "18%", left: "4%",  size: 76, rotate: -3, enterFrom: "up",    exitTo: "up",    delay: 0.05 },
  { src: flat3, alt: "Flat 03 — chimney breast", top: "14%", left: "60%", size: 68, rotate:  3, enterFrom: "down",  exitTo: "right", delay: 0.18 },
  { src: flat5, alt: "Flat 05 — staircase hall", top: "68%", left: "6%",  size: 72, rotate: -2, enterFrom: "left",  exitTo: "down",  delay: 0.12 },
  { src: flat4, alt: "Flat 04 — antique mirror", top: "72%", left: "58%", size: 64, rotate:  4, enterFrom: "right", exitTo: "up",    delay: 0.28 },
];

const AXIS: Record<HeroImg["enterFrom"] | HeroImg["exitTo"], { x: number; y: number }> = {
  up:    { x: 0,   y:  52 },
  down:  { x: 0,   y: -52 },
  left:  { x:  52, y: 0   },
  right: { x: -52, y: 0   },
};

// ── ScatteredImage ──
// Two motion.div layers so entrance (animate) and exit (style MotionValues)
// never compete for the same property on the same element.
function ScatteredImage({
  img,
  exitProgress,
}: {
  img: HeroImg;
  exitProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const enter = AXIS[img.enterFrom];
  const exit  = AXIS[img.exitTo];

  const exitX       = useTransform(exitProgress, [0.0, 0.7], [0,    -exit.x * 1.4]);
  const exitY       = useTransform(exitProgress, [0.0, 0.7], [0,    -exit.y * 1.4]);
  const exitOpacity = useTransform(exitProgress, [0.0, 0.5], [1,    0]);
  const exitScale   = useTransform(exitProgress, [0.0, 0.7], [1,    0.86]);

  return (
    // Outer: position + scroll-driven exit
    <motion.div
      style={{
        position: "absolute",
        top:    img.top,
        left:   img.left,
        width:  img.size,
        height: img.size,
        x:       exitX,
        y:       exitY,
        opacity: exitOpacity,
        scale:   exitScale,
        zIndex: 1, // behind the z-20 title
      }}
    >
      {/* Inner: load-triggered entrance */}
      <motion.div
        style={{ width: "100%", height: "100%", rotate: img.rotate }}
        initial={{ x: enter.x, y: enter.y, opacity: 0, scale: 0.86 }}
        animate={{ x: 0,       y: 0,       opacity: 1, scale: 1    }}
        transition={{ duration: 0.9, delay: img.delay, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="eager"
          className="h-full w-full object-cover"
          style={{ filter: "saturate(1.02) contrast(1.03)" }}
        />
        {/* hairline inset frame */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ boxShadow: "inset 0 0 0 0.5px rgba(26,22,18,0.18)" }}
        />
      </motion.div>
    </motion.div>
  );
}

// ── The page ──
export default function Residences() {
  // Attach scroll tracking to the window itself (not the section) so
  // progress reliably reflects how far through the hero the user has scrolled.
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  return (
    <Layout>

      {/* ── HERO ── */}
      {/* Outer div is the scroll target — 120vh gives scroll travel for the exit
          without leaving a visible dead zone. The spec row pulls up with negative
          margin to sit flush once the sticky section clears. */}
      <div ref={heroRef} style={{ height: "120vh", position: "relative" }}>

        {/* Sticky inner — everything the user actually sees */}
        <div
          className="sticky top-0 h-screen w-full overflow-hidden bg-background"
          style={{ willChange: "transform" }}
        >
          {/* Measure bar */}
          <div className="relative z-30 flex items-center gap-4 px-6 md:px-10 pt-10 md:pt-14">
            <span className="eyebrow text-foreground/35 whitespace-nowrap">№ 03 — The upper floors</span>
            <div className="relative flex-1 h-px bg-border/50">
              <span className="absolute left-0 -top-[4px] w-px h-[9px] bg-border/50" />
              <span className="absolute right-0 -top-[4px] w-px h-[9px] bg-border/50" />
            </div>
            <span className="eyebrow text-foreground/35 whitespace-nowrap">Bridge St., Newark</span>
          </div>

          {/* Scattered images — z-index 1, behind everything else */}
          <div className="absolute inset-0" style={{ zIndex: 1 }}>

            {/* Desktop images */}
            <div className="hidden md:block absolute inset-0">
              {HERO_IMAGES.map((img, i) => (
                <ScatteredImage
                  key={`d-${i}`}
                  img={img}
                  exitProgress={scrollYProgress}
                />
              ))}
            </div>

            {/* Mobile images */}
            <div className="block md:hidden absolute inset-0">
              {HERO_IMAGES_MOBILE.map((img, i) => (
                <ScatteredImage
                  key={`m-${i}`}
                  img={img}
                  exitProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          {/* Title — z-20, sits in front of images */}
          <div
            className="absolute inset-0 flex items-center pointer-events-none"
            style={{ zIndex: 20 }}
          >
            <div className="w-full px-6 md:px-10" style={{ paddingLeft: "clamp(1.5rem, 8vw, 8rem)" }}>
              <h1
                className="font-display leading-[0.95] tracking-tight text-foreground"
                style={{ fontSize: "clamp(2.8rem, 7.2vw, 6.4rem)", maxWidth: "12ch" }}
              >
                <SplitWords as="span" stagger={70}>Upper Floor</SplitWords>
                <br />
                <SplitWords as="span" delay={260} stagger={70} className="text-accent-soft">
                  Residences.
                </SplitWords>
              </h1>
            </div>
          </div>

        </div>
      </div>

      {/* ── Spec row — negative margin pulls it flush under the sticky hero ── */}
      <section className="px-6 md:px-10 pt-8 pb-8 border-t border-border grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-4 items-end" style={{ marginTop: "-20vh" }}>
        <div className="col-span-12 md:col-span-6 flex flex-wrap gap-x-8 gap-y-3">
          <div>
            <p className="font-display text-2xl leading-none text-foreground">6</p>
            <p className="eyebrow mt-1 text-foreground/45">Residences</p>
          </div>
          <div>
            <p className="font-display text-2xl leading-none text-foreground">1–2</p>
            <p className="eyebrow mt-1 text-foreground/45">Bedrooms</p>
          </div>
          <div>
            <p className="font-display text-2xl leading-none text-foreground">
              Grade II<sup className="text-xs">*</sup>
            </p>
            <p className="eyebrow mt-1 text-foreground/45">Listed, 1823</p>
          </div>
          <div>
            <p className="font-display text-2xl leading-none text-foreground">42–60</p>
            <p className="eyebrow mt-1 text-foreground/45">sq m</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col sm:flex-row sm:items-end sm:justify-end gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-brass text-brass px-6 py-3 text-xs tracking-[0.14em] uppercase hover:bg-brass hover:text-background transition-colors duration-300 font-sans self-start sm:self-auto"
          >
            Register interest
            <span aria-hidden="true" className="text-base leading-none">→</span>
          </Link>
          <p className="eyebrow text-foreground/35 sm:pb-[13px]">Pricing on request</p>
        </div>
      </section>

      {/* ── Two-image strip ── */}
      <section className="px-6 md:px-10">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-5 md:col-span-4 image-reveal overflow-hidden relative h-[55vw] max-h-[500px] min-h-[260px]">
            <img src={flat5} alt="Original pine staircase hall, Flat 05" className="w-full h-full object-cover object-center" />
            <span className="absolute bottom-3 left-4 eyebrow text-parchment/70 text-[9px] tracking-[0.14em]">Flat 05 — The Hall</span>
          </div>
          <div className="col-span-7 md:col-span-8 image-reveal overflow-hidden relative h-[55vw] max-h-[500px] min-h-[260px]">
            <img src={flat1} alt="Georgian living room with sash windows and golden hour light, Flat 01" className="w-full h-full object-cover object-center" />
            <span className="absolute bottom-3 left-4 eyebrow text-parchment/70 text-[9px] tracking-[0.14em]">Flat 01 — The Sash</span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 mt-4 pb-16 md:pb-24 border-b border-border">
          <p className="col-span-6 md:col-span-3 eyebrow text-foreground/30 py-4">Ref. PREAPP/0022/24</p>
          <div className="col-span-6 md:col-span-9 py-4 flex items-center justify-end gap-6">
            <p className="hidden md:block text-sm text-foreground/45 leading-[1.75]">
              <span className="font-serif-i text-foreground/60">Six flats</span>
              {" "}— David Dakin Architects. Richard Watkinson &amp; Partners, on file.
            </p>
            <Link to="/contact" className="shrink-0 text-xs tracking-[0.12em] uppercase text-moss border-b border-moss/40 pb-px hover:border-moss transition-colors duration-200 whitespace-nowrap">
              Enquire now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pre-application advice ── */}
      <section className="mt-16 md:mt-20 px-6 md:px-10 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-3 eyebrow md:pt-3">A note on the consent</p>
        <Reveal className="col-span-12 md:col-span-9">
          <p className="font-display text-2xl md:text-4xl leading-[1.2] text-foreground max-w-[36ch]">
            Pre-application advice has been obtained from Newark &amp; Sherwood District Council in support of the conversion of the upper floors of 1, 3 &amp; 5 Bridge Street to six residential flats.
          </p>
          <p className="mt-8 max-w-[58ch] text-foreground/80 leading-[1.8]">
            Drawings prepared by David Dakin Architects. Each flat is studied as a separate piece of restoration — sash by sash, cornice by cornice. The cast list below is presented in number order, working east from the Bridge Street stair.
          </p>
        </Reveal>
      </section>

      {/* ── Gallery ── */}
      <section className="mt-32 px-6 md:px-10 space-y-8 md:space-y-12">
        <Reveal className="image-reveal">
          <img src={flat1} alt="Living room with sash windows" loading="lazy" className="w-full h-[75vh] object-cover" />
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="image-reveal col-span-12 md:col-span-7">
            <img src={flat3} alt="Kitchen with brass tap and exposed brick" loading="lazy" className="w-full h-[55vh] md:h-[65vh] object-cover" />
          </Reveal>
          <Reveal delay={150} className="image-reveal col-span-12 md:col-span-5 md:pt-24">
            <img src={flat4} alt="Bathroom with antique mirror" loading="lazy" className="w-full h-[45vh] md:h-[50vh] object-cover" />
          </Reveal>
        </div>
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="image-reveal col-span-12 md:col-span-5 md:pt-24">
            <img src={flat5} alt="Stripped pine staircase hall" loading="lazy" className="w-full h-[45vh] md:h-[55vh] object-cover" />
          </Reveal>
          <Reveal delay={150} className="image-reveal col-span-12 md:col-span-7">
            <img src={flat2} alt="Bedroom with iron fireplace and cornice" loading="lazy" className="w-full h-[55vh] md:h-[65vh] object-cover" />
          </Reveal>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section className="mt-40 px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <p className="col-span-12 md:col-span-3 eyebrow">Schedule of residences</p>
          <SplitWords as="h2" stagger={90} className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl leading-[0.92]">
            Six flats. One per stair.
          </SplitWords>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24">
          {FLATS.map((f, i) => (
            <Reveal key={f.n} delay={(i % 2) * 120}>
              <div className="image-reveal in overflow-hidden">
                <img
                  src={f.img}
                  alt={`Flat ${f.n} — ${f.name}, ${f.type}`}
                  loading="lazy"
                  width={1920} height={1280}
                  className={`w-full ${f.tall ? "h-[70vh]" : "h-[55vh]"} object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.03]`}
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <div>
                  <p className="font-serif-i text-xl text-moss">Flat {f.n}</p>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground leading-tight">{f.name}</h3>
                  <p className="font-serif-i text-muted-foreground mt-1">{f.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl text-foreground tabular-nums">{f.sqm}</p>
                  <p className="text-xs text-muted-foreground tabular-nums">{f.sqft}</p>
                </div>
              </div>
              <div className="mt-6 border-t border-border pt-5 grid grid-cols-12 gap-4 text-sm">
                <p className="col-span-4 eyebrow">Aspect</p>
                <p className="col-span-8 text-foreground/80">{f.aspect}</p>
              </div>
              <div className="mt-2 grid grid-cols-12 gap-4 text-sm">
                <p className="col-span-4 eyebrow">Pricing</p>
                <p className="col-span-8 text-moss font-serif-i">Coming soon — register interest</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-foreground/80 leading-[1.7]">
                {f.features.map((feat) => (
                  <li key={feat} className="flex gap-3">
                    <span className="text-moss">—</span> {feat}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Access ── */}
      <section className="mt-40 px-6 md:px-10 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-3 eyebrow">Access &amp; provision</p>
        <p className="col-span-12 md:col-span-9 max-w-[60ch] text-foreground/80 leading-[1.85]">
          Access to the upper floors is via the existing Market Place doorway. Each flat comprises a kitchen, living and dining area, one bedroom (with two-bed options for Flats 04 and 06) and a bathroom. Cycle storage and refuse provision will be made internally. Full Planning Permission and Listed Building Consent — to be supported by a Planning Statement and Acoustic Impact Assessment. Pre-application enquiry dated 1st October 2024 (ref. PREAPP/0022/24) on file with Richard Watkinson &amp; Partners.
        </p>
      </section>

      {/* ── Continue ── */}
      <section className="mt-40 px-6 md:px-10 border-t border-border pt-10">
        <div className="grid grid-cols-12 items-end gap-6">
          <p className="col-span-12 md:col-span-3 eyebrow">Continue</p>
          <Link to="/heritage" className="col-span-12 md:col-span-9 group block">
            <p className="font-display text-5xl md:text-8xl text-foreground leading-[0.95]">
              Heritage &nbsp;<span className="font-serif-i text-moss inline-block transition-transform duration-700 group-hover:translate-x-4">→</span>
            </p>
            <p className="mt-4 font-serif-i text-muted-foreground">Where Byron set his first lines.</p>
          </Link>
        </div>
      </section>

    </Layout>
  );
}