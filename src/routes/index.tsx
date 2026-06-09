import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SplitWords } from "@/components/site/SplitWords";
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

const IMAGES = [hero1, hero3, hero2];

/* ── Crossfading full-bleed background with Ken Burns ─────────────────── */
function HeroBackground({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % images.length), 5500);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: idx === active ? 1 : 0 }}
        >
          <img
            src={src} alt="" aria-hidden
            className="h-full w-full object-cover"
            style={{
              /* Always zooming — no jump on transition */
              animation: `slowZoom 14s ease-out ${idx * (5500 / images.length)}ms infinite alternate`,
            }}
          />
        </div>
      ))}
      {/* Base darkening — lighter so images show through */}
      <div className="absolute inset-0" style={{ background: "rgba(8,6,4,0.22)" }} />
      {/* Bottom-left vignette — just enough for text legibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, rgba(8,6,4,0) 45%, rgba(8,6,4,0.55) 100%)" }} />
    </div>
  );
}



/* ── Page ──────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <style>{`
        @keyframes hFadeUp    { from { opacity:0; transform:translateY(22px) } to { opacity:1; transform:none } }
        @keyframes hFadeRight { from { opacity:0; transform:translateX(20px) } to { opacity:1; transform:none } }
      `}</style>

      <Layout>
        {/* ═══════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════ */}
        <section className="sticky top-0 dark-section h-[100svh] -mt-24 overflow-hidden">
          <HeroBackground images={IMAGES} />

          {/* ── BOTTOM-LEFT CONTENT BLOCK ──────────────────────────────── */}
          <div
            className="absolute bottom-20 left-8 md:left-14 lg:left-20 z-10 flex items-stretch gap-8"
            style={{
              width: "64vw",
              maxWidth: 980,
              opacity: 0,
              animation: "hFadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards",
            }}
          >
            {/* Vertical red rule on the left */}
            <div style={{
              width: "1.5px",
              background: "#c0392b",
              flexShrink: 0,
            }} />

            <div>
            {/* Paragraph — large, display weight */}
            <p
              className="text-parchment"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.6rem)",
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "2.4rem",
              }}
            >
              We develop, sell and manage UK property investments that work for you
            </p>

            {/* "Find out how" button */}
            <a
              href="#thesis"
              className="inline-flex items-center gap-3"
              style={{
                border: "1px solid rgba(245,242,236,0.32)",
                padding: "0.65rem 1.2rem",
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(245,242,236,0.75)",
                textDecoration: "none",
                transition: "border-color 0.4s, color 0.4s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(192,57,43,0.7)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,242,236,0.32)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,242,236,0.75)";
              }}
            >
              Find out how
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
              </svg>
            </a>
            </div>
          </div>

          {/* ── WHATSAPP LINK — bottom-right ───────────────────────────── */}
          <a
            href="https://wa.me/447700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2"
            style={{
              opacity: 0,
              animation: "hFadeRight 1s cubic-bezier(0.16,1,0.3,1) 0.9s forwards",
              background: "#25D366",
              borderRadius: "999px",
              padding: "0.55rem 1rem 0.55rem 0.75rem",
              textDecoration: "none",
              color: "#fff",
              fontSize: "13px",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            REST OF PAGE
        ═══════════════════════════════════════════════════════════════ */}
        <div id="thesis" className="relative z-10 bg-background">

          {/* THESIS — split layout: left text+stats / right bleeding image / red stripe */}
          <section id="thesis-split" className="relative flex min-h-[620px] overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}>

            {/* ── LEFT COLUMN ─────────────────────────────────────────── */}
            <div className="flex flex-col justify-center w-full md:w-[44%] px-8 md:px-14 lg:px-20 py-20 md:py-28 bg-background">

              {/* Small logo mark */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ width: 20, height: 20, border: "1px solid rgba(26,22,18,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 8, height: 8, background: "var(--moss)", borderRadius: "50%" }} />
                </div>
              </div>

              {/* Rule */}
              <div style={{ width: "100%", height: "0.5px", background: "var(--border)", marginBottom: "2rem" }} />

              {/* Heading */}
              <Reveal>
                <h2 className="font-display font-semibold text-foreground" style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.35rem)", letterSpacing: "-0.01em", lineHeight: 1.3, marginBottom: "2rem", maxWidth: "28ch" }}>
                  One building, one freehold, one long lease on patience
                </h2>
              </Reveal>

              {/* Body */}
              <Reveal delay={150}>
                <p className="text-foreground/65 leading-[1.8]" style={{ fontSize: "clamp(0.8rem, 0.95vw, 0.9rem)", maxWidth: "42ch", marginBottom: "3rem" }}>
                  We hold a single Grade&nbsp;II*-listed corner of Newark Market Place — five trades, one freehold, and upper floors returning to residential use for the first time in over a century. The rents are modest. The leases are long. The relationships are met in person.
                </p>
              </Reveal>

              {/* Stats */}
              <Reveal delay={300}>
                <p className="eyebrow mb-4" style={{ fontSize: 10 }}>Key facts</p>
                <div style={{ borderTop: "0.5px solid var(--border)" }}>
                  {[
                    ["113,000",  "Catchment population"],
                    ["75 min",   "King's Cross by rail"],
                    ["Est. 1893","Original Porter tenancy"],
                  ].map(([val, label]) => (
                    <div key={val} className="flex items-baseline justify-between py-4" style={{ borderBottom: "0.5px solid var(--border)" }}>
                      <span className="font-display text-foreground" style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1 }}>{val}</span>
                      <span className="text-foreground/45" style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* ── RIGHT IMAGE — bleeds to edge ────────────────────────── */}
            <div className="hidden md:block flex-1 relative overflow-hidden">
              <img
                src={hero1}
                alt="Porter & Bridge — Newark Market Place"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle left fade so it blends into the white column */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(248,246,242,0.18) 0%, transparent 18%)" }} />
            </div>

          </section>

          {/* STORES */}
          <div className="mt-40">
            <div className="px-6 md:px-10 pb-10 grid grid-cols-12 gap-6">
              <p className="col-span-12 md:col-span-3 eyebrow">№ 02 — The ground floor</p>
              <SplitWords as="h2" stagger={90} className="col-span-12 md:col-span-9 font-display text-5xl md:text-8xl leading-[0.92] text-foreground">
                Five trades, one threshold.
              </SplitWords>
            </div>
          </div>

          <StoreSection n="I"   name="Timpson"     italicWord="& Co."      trade="Shoe repairs, key cutting, engraving"         status="Let"          rent="£10,500 p.a."   blurb="A national multiple on a long-established pitch — the kind of covenant that intends to stay."                            hero={timpson1} detailA={timpson2} detailB={hero2} />
          <StoreSection n="II"  name="G H Porter"  italicWord="Provisions" trade="Delicatessen, smokery & specialty butchers"    status="Let"          rent="By arrangement" blurb="Established 1893 — the original tenant of the building, and the name from which the house takes its own."            hero={porter1}  detailA={porter2}  detailB={hero1} />
          <StoreSection n="III" name="Art on Glass" italicWord="Engraver"  trade="Specialist crystal & glass engraving"          status="Holding over" rent="£3,600 p.a."    blurb="A rare independent craft trade on the principal frontage — three generations of cut work."                            hero={glass1}   detailA={glass2}   detailB={hero3} />
          <StoreSection n="IV"  name="Harry's"     italicWord="Salad bar"  trade="Salad bar, café & specialist coffee"           status="Let"          rent="£12,250 p.a."   blurb="Acquired and re-let on a new six-year lease in 2024. A fresh trade for a freshly let unit."                          hero={cafe1}    detailA={cafe2}    detailB={hero1} />
          <StoreSection n="V"   name="The Barber"  italicWord="Shoppe"     trade="Traditional hairdressing & wet shave"          status="Holding over" rent="£9,000 p.a."    blurb="The prime return frontage to Market Place — the corner that catches every passer-by."                                hero={barber1}  detailA={barber2}  detailB={hero2} />

          {/* CUSTODIANS */}
          <section className="relative mt-40 md:mt-56 overflow-hidden">

            {/* Decorative overlapping outline circles — left side, echoing footer */}
            <div className="absolute hidden md:block" style={{
              width: 500, height: 500, borderRadius: "50%",
              border: "1.5px solid rgba(26,22,18,0.35)",
              left: "-160px", top: "50%",
              transform: "translateY(-55%)",
              pointerEvents: "none", zIndex: 0,
            }} />
            <div className="absolute hidden md:block" style={{
              width: 340, height: 340, borderRadius: "50%",
              border: "1.5px solid rgba(26,22,18,0.25)",
              left: "-60px", top: "50%",
              transform: "translateY(-40%)",
              pointerEvents: "none", zIndex: 0,
            }} />
            <div className="absolute hidden md:block" style={{
              width: 200, height: 200, borderRadius: "50%",
              border: "1.5px solid rgba(139,26,26,0.45)",
              left: "30px", top: "50%",
              transform: "translateY(-30%)",
              pointerEvents: "none", zIndex: 0,
            }} />

            <div className="relative z-10 px-6 md:px-14 lg:px-20">

              {/* Top row — eyebrow left, big heading spanning right */}
              <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
                <div className="col-span-12 md:col-span-2">
                  <p className="eyebrow md:pt-5">№ 03 — The custodians</p>
                </div>
                <div className="col-span-12 md:col-span-9 md:col-start-4" style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}>
                  <SplitWords as="h2" stagger={80} className="font-display leading-[0.95] text-foreground">
                    A house of five trades, one freehold, and a long lease on patience.
                  </SplitWords>
                </div>
              </div>

              {/* Bottom row — body left, aside far right */}
              <div className="grid grid-cols-12 gap-10 pb-24">
                <div className="col-span-12 md:col-span-4 md:col-start-4" style={{ fontSize: "clamp(0.78rem, 0.88vw, 0.86rem)" }}>
                  <Reveal className="space-y-6 text-foreground/70 leading-[1.85]">
                    <p>Porter &amp; Bridge holds and tenants a single Grade&nbsp;II*-listed corner of Newark Market Place. The shops below are run by the same families and operators that have anchored Bridge Street for years — a national multiple, an artisan butcher, a crystal engraver, a café-counter and a barber. The rents are modest. The leases are long. The relationships are met in person.</p>
                    <p>On the upper floors we are working with David Dakin Architects and the planning officers of Newark &amp; Sherwood on the consented return of six residential flats — the first time these rooms will have been lived in since the early twentieth century.</p>
                    <p>We are advised by <em className="font-serif-i">Richard Watkinson &amp; Partners</em> on agency and disposal, and we work to a single rule: do nothing to the fabric that we would not undo if asked.</p>
                  </Reveal>
                </div>

                <aside className="col-span-12 md:col-span-3 md:col-start-10 space-y-7">
                  {[
                    ["Founded",  "As G H Porter Provisions, 1893"],
                    ["Holdings", "One Grade II* freehold"],
                    ["Town",     "Newark on Trent · pop. 29,748 · catchment 113,000"],
                    ["Counsel",  "Richard Watkinson & Partners\nDavid Dakin Architects"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ borderTop: "0.5px solid var(--border)", paddingTop: "1rem" }}>
                      <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>{k}</p>
                      <p className="text-foreground whitespace-pre-line leading-[1.65]" style={{ fontSize: "0.8rem" }}>{v}</p>
                    </div>
                  ))}
                </aside>
              </div>
            </div>
          </section>

          {/* BYRON */}
          <section className="mt-40 px-6 md:px-10 grid grid-cols-12 gap-6 items-end">
            <Reveal className="image-reveal col-span-12 md:col-span-5">
              <img src={byronBook} alt="Open period book and quill by candlelight" loading="lazy" width={1920} height={1280} className="w-full h-[70vh] object-cover" />
            </Reveal>
            <div className="col-span-12 md:col-span-6 md:col-start-7 md:pb-10">
              <p className="eyebrow"><span className="font-serif-i normal-case tracking-normal text-foreground/70">№ 04</span>&nbsp; A footnote in English letters</p>
              <SplitWords as="h2" stagger={90} className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">Byron's first</SplitWords>
              {/* Soft warm stone instead of red at large size */}
              <SplitWords as="p" delay={250} stagger={70} className="font-display text-5xl md:text-7xl leading-[0.95] font-serif-i text-accent-soft">were printed here.</SplitWords>
              <Reveal delay={500}>
                <p className="mt-8 max-w-[52ch] text-foreground/80 leading-[1.75]">
                  In November 1806, the printer S. &amp; J. Ridge of Newark set the type for a small private volume titled <em className="font-serif-i">Fugitive Pieces</em>. Its author was nineteen. The press stood in this building.
                </p>
                <Link to="/heritage" className="link mt-8 inline-block text-sm tracking-[0.22em] uppercase" style={{ color: "var(--accent-soft)" }}>
                  The Byron rooms →
                </Link>
              </Reveal>
            </div>
          </section>

          {/* NEXT — footer link */}
          <section className="mt-40 px-6 md:px-10 border-t border-border pt-10 pb-32">
            <div className="grid grid-cols-12 items-end gap-6">
              <p className="col-span-12 md:col-span-3 eyebrow">Continue</p>
              <Link to="/bridge-street" className="col-span-12 md:col-span-9 group block">
                <p className="font-display text-5xl md:text-8xl text-foreground leading-[0.95]">
                  Bridge St. Newark &nbsp;
                  {/* Arrow in soft warm tone — not red at this size */}
                  <span className="font-serif-i inline-block transition-transform duration-700 group-hover:translate-x-4" style={{ color: "var(--accent-soft)" }}>→</span>
                </p>
                <p className="mt-4 font-serif-i text-muted-foreground">Walk the full length of the building.</p>
              </Link>
            </div>
          </section>

        </div>
      </Layout>
    </>
  );
}