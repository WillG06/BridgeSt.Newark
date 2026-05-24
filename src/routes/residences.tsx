
import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SplitWords } from "@/components/site/SplitWords";


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
  { n: "01", name: "The Sash", type: "1 bed · west aspect", sqm: "57 sq m", sqft: "613 sq ft", aspect: "West, over Market Place", features: ["Original Georgian sash windows", "Cast-iron fireplace, restored", "Open kitchen / living"], img: flat1, tall: true },
  { n: "02", name: "The Cornice", type: "1 bed · north light", sqm: "46 sq m", sqft: "495 sq ft", aspect: "North, into the courtyard", features: ["Decorative plaster ceiling rose", "Compact galley kitchen", "Marble-tiled bathroom"], img: flat2 },
  { n: "03", name: "The Chimney", type: "1 bed · east aspect", sqm: "54 sq m", sqft: "581 sq ft", aspect: "East, over Bridge Street", features: ["Exposed brick chimney breast", "Brass fittings, marble worktop", "Twin sash bay"], img: flat3, tall: true },
  { n: "04", name: "The Mirror", type: "1–2 bed · corner suite", sqm: "60 sq m", sqft: "645 sq ft", aspect: "Corner — Market Place & Bridge St.", features: ["Two return sash windows", "En-suite with antique mirror", "Forest-green wainscoting"], img: flat4 },
  { n: "05", name: "The Hall", type: "1 bed · top floor", sqm: "42 sq m", sqft: "452 sq ft", aspect: "South, mansard light", features: ["Pine staircase, original handrail", "Deep green entrance hall", "Brass wall sconces"], img: flat5, tall: true },
  { n: "06", name: "The Square", type: "1–2 bed · gable end", sqm: "56 sq m", sqft: "602 sq ft", aspect: "West, full view of the square", features: ["Triple sash window over Market Place", "Dressing room", "Cast-iron radiators throughout"], img: flat6 },
];

export default function Residences() {
  return (

    <Layout>
      {/* HERO */}
      <section className="dark-section relative h-[88svh] -mt-24 overflow-hidden">
        <img src={flat1} alt="Restored Georgian apartment with sash windows" className="h-full w-full object-cover slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-[12vh]">
          <SplitWords as="p" className="eyebrow text-brass mb-6" stagger={45}>
            № 03 — The upper floors
          </SplitWords>
          <h1 className="font-display text-[14vw] md:text-[8.4vw] leading-[0.88] text-parchment tracking-tight">
            <SplitWords as="span" stagger={100}>Six rooms,</SplitWords>
            <br />
            <SplitWords as="span" delay={400} stagger={110} className="font-serif-i text-brass">returning to use.</SplitWords>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mt-32 px-6 md:px-10 grid grid-cols-12 gap-6">
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

      {/* GALLERY — minimal stack with curtain reveals */}
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

      {/* Schedule */}
      <section className="mt-40 px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <p className="col-span-12 md:col-span-3 eyebrow">Schedule of residences</p>
          <SplitWords
            as="h2"
            stagger={90}
            className="col-span-12 md:col-span-9 font-display text-5xl md:text-7xl leading-[0.92]"
          >
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
                  width={1920}
                  height={1280}
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

      {/* Access */}
      <section className="mt-40 px-6 md:px-10 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-3 eyebrow">Access &amp; provision</p>
        <p className="col-span-12 md:col-span-9 max-w-[60ch] text-foreground/80 leading-[1.85]">
          Access to the upper floors is via the existing Market Place doorway. Each flat comprises a kitchen, living and dining area, one bedroom (with two-bed options for Flats 04 and 06) and a bathroom. Cycle storage and refuse provision will be made internally. Full Planning Permission and Listed Building Consent — to be supported by a Planning Statement and Acoustic Impact Assessment. Pre-application enquiry dated 1st October 2024 (ref. PREAPP/0022/24) on file with Richard Watkinson &amp; Partners.
        </p>
      </section>

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
