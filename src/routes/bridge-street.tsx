import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SplitWords } from "@/components/site/SplitWords";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

import timpson1 from "@/assets/shop-timpson-1.jpg";
import timpson2 from "@/assets/shop-timpson-2.jpg";
import porter1 from "@/assets/shop-porter-1.jpg";
import porter2 from "@/assets/shop-porter-2.jpg";
import glass1 from "@/assets/shop-glass-1.jpg";
import glass2 from "@/assets/shop-glass-2.jpg";
import cafe1 from "@/assets/shop-cafe-1.jpg";
import cafe2 from "@/assets/shop-cafe-2.jpg";
import barber1 from "@/assets/shop-barber-1.jpg";
import barber2 from "@/assets/shop-barber-2.jpg";



interface Chapter {
  n: string;
  name: string;
  italic: string;
  trade: string;
  status: "Let" | "To Let" | "Holding over";
  rent: string;
  paragraphs: string[];
  imgWide: string;
  imgTall: string;
  imgExtra: string;
}

const CHAPTERS: Chapter[] = [
  {
    n: "I",
    name: "Timpson",
    italic: "& Company",
    trade: "Shoe repairs, key cutting, engraving",
    status: "Let",
    rent: "£10,500 p.a.",
    paragraphs: [
      "The Timpson family has been mending shoes since 1865. The Newark unit — 9 Bridge Street — has carried their red livery for as long as anyone in the town can remember.",
      "The lease is on internal repair terms and the tenant is holding over, an arrangement that suits both sides. A national multiple covenant on a long-established pitch is the simplest unit on the freehold to underwrite.",
    ],
    imgWide: timpson1,
    imgTall: timpson2,
    imgExtra: hero2,
  },
  {
    n: "II",
    name: "G H Porter",
    italic: "Provisions",
    trade: "Delicatessen, smokery & specialty butchers",
    status: "Let",
    rent: "By arrangement",
    paragraphs: [
      "Established 1893 — G H Porter Provisions opened the day the building was completed. The hand-painted gold lettering on the green signboard above the door has been overpainted three times in the same hand.",
      "Jane Westwood and Cathy Britton took the lease in October 2024 on a fresh six-year term, continuing the trade as a delicatessen, smokery and specialty butchers. The basement runs to 1,115 sq ft of cold store.",
    ],
    imgWide: porter1,
    imgTall: porter2,
    imgExtra: hero1,
  },
  {
    n: "III",
    name: "Art on Glass",
    italic: "Engravers",
    trade: "Specialist crystal & glass engraving",
    status: "Holding over",
    rent: "£3,600 p.a.",
    paragraphs: [
      "A small craft tenancy of 114 sq ft on the principal frontage — the kind of independent trade that is increasingly rare on an English high street, and exactly the kind we are reluctant to lose.",
      "The workshop produces engraved commemorative pieces, sporting trophies and presentation decanters for the East Midlands. The lease is on internal repair, holding over.",
    ],
    imgWide: glass1,
    imgTall: glass2,
    imgExtra: hero3,
  },
  {
    n: "IV",
    name: "Harry's",
    italic: "Salad bar & café",
    trade: "Salad bar, café & coffee counter",
    status: "Let",
    rent: "£12,250 p.a.",
    paragraphs: [
      "7 Bridge Street was acquired and re-let to Thivakaran Thillainathan in May 2024 on a new six-year-eleven-month lease. The fit-out was completed at the tenant's cost.",
      "The marble counter, the deep green tiled rear wall and the pendant brass lamps are new. The Georgian sash window above is original.",
    ],
    imgWide: cafe1,
    imgTall: cafe2,
    imgExtra: hero1,
  },
  {
    n: "V",
    name: "The Barber",
    italic: "Shoppe",
    trade: "Traditional hairdressing & wet shave",
    status: "Holding over",
    rent: "£9,000 p.a.",
    paragraphs: [
      "27 Market Place is the corner return frontage — 625 sq ft of prime exposure to the cobbled square. The tiled interior, in deep bottle green and antique brass, dates from the early twentieth century and was preserved through the unit's last refurbishment.",
      "The lease is on internal repair, holding over. The covenant is the original family trade.",
    ],
    imgWide: barber1,
    imgTall: barber2,
    imgExtra: hero2,
  },
];

export default function BridgeStreet() {

  return (
    <Layout>
      {/* HERO */}
      <section className="dark-section relative h-[80svh] -mt-24 overflow-hidden">
        <img src={hero3} alt="Newark on Trent market square at dawn from above" className="h-full w-full object-cover slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-[12vh]">
          <SplitWords as="p" className="eyebrow text-brass mb-6" stagger={45}>
            № 01 — The full ground floor in long form
          </SplitWords>
          <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.86] text-parchment tracking-tight">
            <SplitWords as="span" stagger={100}>Bridge St.</SplitWords>
            <br />
            <SplitWords as="span" delay={400} stagger={120} className="font-serif-i text-brass">Newark.</SplitWords>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mt-32 px-6 md:px-10 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-3 eyebrow md:pt-3">A note on the street</p>
        <SplitWords
          as="p"
          stagger={60}
          className="col-span-12 md:col-span-9 font-display text-3xl md:text-[2.6rem] leading-[1.18] text-foreground max-w-[38ch]"
        >
          Bridge Street runs east from Newark Market Place to the Trent. Our building takes the corner — five trades, five doors, one address book.
        </SplitWords>
      </section>

      {/* Chapters */}
      <div className="mt-32 space-y-40 md:space-y-56">
        {CHAPTERS.map((c, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <article key={c.n} className="px-6 md:px-10">
              <div className="grid grid-cols-12 gap-6 mb-12">
                <p className="col-span-2 md:col-span-1 font-serif-i text-4xl md:text-6xl text-moss tabular-nums">{c.n}</p>
                <div className="col-span-10 md:col-span-8">
                  <SplitWords
                    as="h2"
                    stagger={90}
                    className="font-display text-5xl md:text-8xl leading-[0.9] text-foreground"
                  >
                    {c.name}
                  </SplitWords>
                  <SplitWords
                    as="p"
                    delay={200}
                    stagger={70}
                    className="font-serif-i text-moss text-2xl md:text-4xl mt-2"
                  >
                    {c.italic}
                  </SplitWords>
                </div>
                <div className="col-span-12 md:col-span-3 md:pt-4 space-y-3">
                  <p className="eyebrow">Trade</p>
                  <p className="text-foreground text-sm leading-snug">{c.trade}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className={`pill ${c.status === "Let" ? "let" : c.status === "To Let" ? "tolet" : ""}`}>
                      <span className="dot" /> {c.status}
                    </span>
                    <span className="pill let">{c.rent}</span>
                  </div>
                </div>
              </div>

              <div className={`grid grid-cols-12 gap-6 md:gap-10 ${reverse ? "md:[direction:rtl]" : ""}`}>
                <Reveal className={`image-reveal col-span-12 md:col-span-7 ${reverse ? "md:[direction:ltr]" : ""}`}>
                  <img
                    src={c.imgWide}
                    alt={`${c.name} shopfront on Bridge Street, Newark`}
                    className="w-full h-[80vh] object-cover"
                    loading="lazy"
                    width={1920}
                    height={1080}
                  />
                </Reveal>
                <div className={`col-span-12 md:col-span-5 space-y-8 md:pt-16 ${reverse ? "md:[direction:ltr]" : ""}`}>
                  {c.paragraphs.map((p, i) => (
                    <Reveal key={i} delay={i * 100}>
                      <p className="text-foreground/80 leading-[1.85] max-w-[52ch]">{p}</p>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="mt-16 grid grid-cols-12 gap-6">
                <Reveal className="image-reveal col-span-6 md:col-span-4 md:col-start-2">
                  <img src={c.imgTall} alt={`${c.name} — detail study`} loading="lazy" width={1400} height={1800} className="w-full h-[60vh] object-cover" />
                </Reveal>
                <Reveal delay={150} className="image-reveal col-span-6 md:col-span-5 md:col-start-7 md:pt-24">
                  <img src={c.imgExtra} alt={`${c.name} — context`} loading="lazy" width={1920} height={1280} className="w-full h-[50vh] object-cover" />
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>

      <section className="mt-40 px-6 md:px-10 border-t border-border pt-10">
        <div className="grid grid-cols-12 items-end gap-6">
          <p className="col-span-12 md:col-span-3 eyebrow">Continue</p>
          <Link to="/portfolio" className="col-span-12 md:col-span-9 group block">
            <p className="font-display text-5xl md:text-8xl text-foreground leading-[0.95]">
              Tenancies &nbsp;<span className="font-serif-i text-moss inline-block transition-transform duration-700 group-hover:translate-x-4">→</span>
            </p>
            <p className="mt-4 font-serif-i text-muted-foreground">The full schedule with rents.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
