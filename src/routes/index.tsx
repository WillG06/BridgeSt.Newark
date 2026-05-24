import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SplitWords } from "@/components/site/SplitWords";
import { HeroRotator } from "@/components/site/HeroRotator";
import { StoreSection } from "@/components/site/StoreSection";

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
import byronBook from "@/assets/byron-book.jpg";

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="sticky top-0 dark-section h-[100svh] -mt-24 overflow-hidden">
        <HeroRotator images={[hero1, hero3, hero2]} />
        <div className="relative z-10 h-full flex flex-col justify-end pb-[14vh] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-9">
              <SplitWords as="p" className="eyebrow text-brass mb-8" stagger={40}>
                Newark on Trent · Est. 1893
              </SplitWords>
              <h1 className="font-display text-[14vw] md:text-[10vw] leading-[0.88] text-parchment tracking-tight">
                <SplitWords as="span" stagger={110}>Bridge St.</SplitWords>
                <br />
                <SplitWords as="span" delay={500} stagger={120} className="font-serif-i text-brass">Newark.</SplitWords>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-3 md:pb-3">
              <SplitWords as="p" delay={1100} stagger={35} className="font-serif-i text-parchment/80 leading-[1.7] max-w-[36ch]">
                Five tenancies on the ground floor. Six residences above. One literary footnote.
              </SplitWords>
              <Link to="/bridge-street" className="link mt-8 inline-block text-xs tracking-[0.24em] uppercase text-brass">
                Walk the street →
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-parchment/60 text-[10px] tracking-[0.4em] uppercase">
          Scroll
        </div>
      </section>

      {/* Content rises over hero */}
      <div className="relative z-10 bg-background">

        {/* THESIS */}
        <section className="px-6 md:px-10 pt-32 md:pt-48 grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-3 eyebrow md:pt-3">
            <span className="font-serif-i normal-case tracking-normal text-foreground/70">№ 01</span> &nbsp; Thesis
          </p>
          <div className="col-span-12 md:col-span-9">
            <SplitWords as="p" stagger={75} className="font-display text-3xl md:text-[3rem] leading-[1.15] text-foreground max-w-[34ch]">
              We do not assemble a portfolio. We hold one building — and we steward it through tenancy, planning, and time.
            </SplitWords>
            <Reveal delay={400}>
              <p className="mt-12 max-w-[62ch] text-foreground/75 leading-[1.85]">
                Newark on Trent sits on the East Coast Main Line, seventy‑five minutes from King&apos;s Cross, with a catchment of 113,000 and a market square that has traded continuously since the 12th century. Our building anchors its busiest corner. The rents are modest, the leases are long, and the upper floors will, within the decade, return to residential use for the first time in more than a hundred years.
              </p>
            </Reveal>
          </div>
        </section>

        {/* STORE CHAPTERS */}
        <div className="mt-40">
          <div className="px-6 md:px-10 pb-10 grid grid-cols-12 gap-6">
            <p className="col-span-12 md:col-span-3 eyebrow">№ 02 — The ground floor</p>
            <SplitWords as="h2" stagger={90} className="col-span-12 md:col-span-9 font-display text-5xl md:text-8xl leading-[0.92] text-foreground">
              Five trades, one threshold.
            </SplitWords>
          </div>
        </div>

        <StoreSection n="I" name="Timpson" italicWord="& Co." trade="Shoe repairs, key cutting, engraving" status="Let" rent="£10,500 p.a." blurb="A national multiple on a long-established pitch — the kind of covenant that intends to stay." hero={timpson1} detailA={timpson2} detailB={hero2} />
        <StoreSection n="II" name="G H Porter" italicWord="Provisions" trade="Delicatessen, smokery & specialty butchers" status="Let" rent="By arrangement" blurb="Established 1893 — the original tenant of the building, and the name from which the house takes its own." hero={porter1} detailA={porter2} detailB={hero1} />
        <StoreSection n="III" name="Art on Glass" italicWord="Engraver" trade="Specialist crystal & glass engraving" status="Holding over" rent="£3,600 p.a." blurb="A rare independent craft trade on the principal frontage — three generations of cut work." hero={glass1} detailA={glass2} detailB={hero3} />
        <StoreSection n="IV" name="Harry's" italicWord="Salad bar" trade="Salad bar, café & specialist coffee" status="Let" rent="£12,250 p.a." blurb="Acquired and re-let on a new six-year lease in 2024. A fresh trade for a freshly let unit." hero={cafe1} detailA={cafe2} detailB={hero1} />
        <StoreSection n="V" name="The Barber" italicWord="Shoppe" trade="Traditional hairdressing & wet shave" status="Holding over" rent="£9,000 p.a." blurb="The prime return frontage to Market Place — the corner that catches every passer-by." hero={barber1} detailA={barber2} detailB={hero2} />

        {/* CUSTODIANS */}
        <section className="mt-40 md:mt-56 px-6 md:px-10 grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-3 eyebrow md:pt-3">№ 03 &nbsp;— &nbsp;The custodians</p>
          <div className="col-span-12 md:col-span-9">
            <SplitWords as="h2" stagger={80} className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground max-w-[20ch]">
              A house of five trades, one freehold, and a long lease on patience.
            </SplitWords>
          </div>
        </section>

        <section className="mt-24 px-6 md:px-10 grid grid-cols-12 gap-10">
          <Reveal className="col-span-12 md:col-span-7 space-y-7 text-foreground/80 leading-[1.85] max-w-[58ch]">
            <p>Porter &amp; Bridge holds and tenants a single Grade II*-listed corner of Newark Market Place. The shops below are run by the same families and operators that have anchored Bridge Street for years — a national multiple, an artisan butcher, a crystal engraver, a café-counter and a barber. The rents are modest. The leases are long. The relationships are met in person.</p>
            <p>On the upper floors we are working with David Dakin Architects and the planning officers of Newark &amp; Sherwood on the consented return of six residential flats — the first time these rooms will have been lived in since the early twentieth century.</p>
            <p>We are advised by <em className="font-serif-i">Richard Watkinson &amp; Partners</em> on agency and disposal, and we work to a single rule: do nothing to the fabric that we would not undo if asked.</p>
          </Reveal>
          <aside className="col-span-12 md:col-span-4 md:col-start-9 border-l border-border md:pl-8 space-y-8 text-sm">
            {[
              ["Founded", "As G H Porter Provisions, 1893"],
              ["Holdings", "One Grade II* freehold"],
              ["Town", "Newark on Trent · pop. 29,748 · catchment 113,000"],
              ["Counsel", "Richard Watkinson & Partners\nDavid Dakin Architects"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="eyebrow">{k}</p>
                <p className="mt-2 text-foreground whitespace-pre-line leading-[1.6]">{v}</p>
              </div>
            ))}
          </aside>
        </section>

        {/* BYRON */}
        <section className="mt-40 px-6 md:px-10 grid grid-cols-12 gap-6 items-end">
          <Reveal className="image-reveal col-span-12 md:col-span-5">
            <img src={byronBook} alt="Open period book and quill by candlelight" loading="lazy" width={1920} height={1280} className="w-full h-[70vh] object-cover" />
          </Reveal>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:pb-10">
            <p className="eyebrow"><span className="font-serif-i normal-case tracking-normal text-foreground/70">№ 04</span> &nbsp; A footnote in English letters</p>
            <SplitWords as="h2" stagger={90} className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">Byron's first</SplitWords>
            <SplitWords as="p" delay={250} stagger={70} className="font-display text-5xl md:text-7xl leading-[0.95] font-serif-i text-moss">were printed here.</SplitWords>
            <Reveal delay={500}>
              <p className="mt-8 max-w-[52ch] text-foreground/80 leading-[1.75]">
                In November 1806, the printer S. &amp; J. Ridge of Newark set the type for a small private volume titled <em className="font-serif-i">Fugitive Pieces</em>. Its author was nineteen. The press stood in this building.
              </p>
              <Link to="/heritage" className="link mt-8 inline-block text-sm tracking-[0.22em] uppercase text-moss">
                The Byron rooms →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* NEXT */}
        <section className="mt-40 px-6 md:px-10 border-t border-border pt-10 pb-32">
          <div className="grid grid-cols-12 items-end gap-6">
            <p className="col-span-12 md:col-span-3 eyebrow">Continue</p>
            <Link to="/bridge-street" className="col-span-12 md:col-span-9 group block">
              <p className="font-display text-5xl md:text-8xl text-foreground leading-[0.95]">
                Bridge St. Newark &nbsp;
                <span className="font-serif-i text-moss inline-block transition-transform duration-700 group-hover:translate-x-4">→</span>
              </p>
              <p className="mt-4 font-serif-i text-muted-foreground">Walk the full length of the building.</p>
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}