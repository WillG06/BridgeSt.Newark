import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SplitWords } from "@/components/site/SplitWords";
import square from "@/assets/market-square.jpg";
import hero1 from "@/assets/Hero1.jpg";

const PRINCIPLES = [
  ["Hold long.", "Capital gain follows from a building well kept, not from the trade in deeds. We hold to the lease cycle, not the quarter."],
  ["Tenant carefully.", "We prefer covenants that intend to stay. We meet tenants in person and renew on terms that work for both sides."],
  ["Plan with the listing.", "A Grade II* building rewards patience. We do nothing to the fabric that we would not undo if asked."],
  ["Answer the post.", "Every enquiry is answered by a partner of the house within two working days. There is no front desk."],
] as const;

const TIMELINE = [
  ["1806", "Lord Byron's first volume, Fugitive Pieces, is set in type by S. & J. Ridge on the upper floors of the building."],
  ["1893", "G H Porter Provisions opens on the ground floor — the first tenant of the newly completed corner building."],
  ["1925", "The building is added to the statutory list, eventually graded II* for special architectural interest."],
  ["1998", "Timpson take the lease at 9 Bridge Street, beginning the longest continuous tenancy on the ground floor."],
  ["2024", "G H Porter Provisions returns to the deli unit under Westwood & Britton; Harry's salad bar opens at No. 7."],
  ["2025", "Pre-application consent obtained for the conversion of the upper floors to six residential flats."],
] as const;

export default function About() {
  return (
    <Layout>

      {/* ═══ HERO — images left, text bottom-right ═══ */}
      <section className="px-6 md:px-10 pt-10 md:pt-16 grid grid-cols-12 gap-6 items-center min-h-[70vh]">

        {/* LEFT — overlapping tilted rounded image cards */}
        <div className="col-span-12 md:col-span-6 relative" style={{ height: "clamp(500px, 68vh, 740px)" }}>

          {/* BOTTOM card — solid moss/dark colour, tilted anti-clockwise */}
          <div
            className="absolute"
            style={{
              top: "30%",
              left: "38%",
              width: "58%",
              height: "50%",
              borderRadius: "44% 40% 46% 38% / 40% 46% 38% 44%",
              transform: "rotate(-8deg)",
              background: "var(--moss)",
              zIndex: 1,
            }}
          />

          {/* Dot grid — sits on top of solid card, below image, integrated into the overlap */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: "24%",
              left: "27%",
              zIndex: 4,
              pointerEvents: "none",
            }}
          >
            <svg width="550" height="180">
              {Array.from({ length: 24 }).map((_, row) =>
                Array.from({ length: 21 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={col * 24 + 15}
                    cy={row * 22 + 15}
                    r="1.4"
                    fill="rgba(0, 0, 0, 0.4)"
                  />
                ))
              )}
            </svg>
          </div>

          {/* PRIMARY image card — tilted clockwise, overlaps heavily down onto solid card */}
          <div
            className="absolute overflow-hidden"
            style={{
              top: "4%",
              left: "20%",
              width: "70%",
              height: "62%",
              borderRadius: "30% 25% 30% 35% / 38% 44% 40% 42%",
              transform: "rotate(7deg)",
              zIndex: 5,
              boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
            }}
          >
            <img
              src={hero1}
              alt="Newark Market Place at dusk"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              style={{ transform: "rotate(-7deg) scale(1.12)", transformOrigin: "center" }}
            />
          </div>

        </div>

        {/* RIGHT — text, pushed to bottom-right feel with justify-end */}
        <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-end pb-8 md:pb-16">
          <p className="eyebrow mb-8">№ 05 — On the house</p>
          <SplitWords
            as="h1"
            stagger={90}
            className="font-display text-5xl md:text-[5.5vw] leading-[0.95] text-foreground"
          >
            Porter & Bridge,
          </SplitWords>
          <SplitWords
            as="p"
            delay={600}
            stagger={75}
            className="font-display text-5xl md:text-[5.5vw] leading-[0.95] font-serif-i text-moss mt-1"
          >
            Newark.
          </SplitWords>
          <Reveal delay={900}>
            <p className="mt-8 max-w-[44ch] text-foreground/70 leading-[1.85]" style={{ fontSize: "clamp(0.8rem, 0.95vw, 0.9rem)" }}>
              Porter &amp; Bridge Investment Ltd is the freehold owner of a single building on the corner of Bridge Street and Market Place in Newark on Trent. Tenancies available for both floors, contact for more information.
            </p>
          </Reveal>
        </div>

      </section>

      {/* ═══ PRINCIPLES ═══ */}
      <section className="mt-32 md:mt-40 px-6 md:px-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <p className="eyebrow">The house, in principle</p>
          <p className="mt-4 font-serif-i text-foreground/70 leading-[1.6] max-w-[26ch]">
            Four short rules that have governed the freehold under our care.
          </p>
        </div>
        <ol className="col-span-12 md:col-span-9 grid md:grid-cols-2 gap-x-10 gap-y-16">
          {PRINCIPLES.map(([h, p], i) => (
            <Reveal key={h} delay={(i % 2) * 120} className="border-t border-foreground/20 pt-8">
              <p className="font-serif-i text-2xl text-moss tabular-nums">0{i + 1}</p>
              <h3 className="mt-3 font-display text-3xl md:text-4xl text-foreground leading-[1.05]">{h}</h3>
              <p className="mt-5 max-w-[42ch] text-foreground/80 leading-[1.8]">{p}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ═══ THE PEOPLE ═══ */}
      <section className="mt-40 px-6 md:px-10 grid grid-cols-12 gap-10">
        <Reveal className="col-span-12 md:col-span-5 space-y-7 text-foreground/80 leading-[1.85] max-w-[52ch]">
          <p className="eyebrow text-foreground">The people</p>
          <p>The freehold is held by Porter &amp; Bridge Investment Ltd, a private holding company. Day-to-day correspondence is handled by a single partner of the house; tenants are met in person, and a partner is present at every viewing of the upper floors.</p>
          <p>We do not employ an agency department. We work alongside selling and managing agents who have known the building for years, and who are listed in full below.</p>
        </Reveal>
        <aside className="col-span-12 md:col-span-6 md:col-start-7 border-l border-border md:pl-10 space-y-10">
          {[
            ["Selling & lettings agents", "Richard Watkinson & Partners\nNewark on Trent"],
            ["Architects, upper floors", "David Dakin Architects RIBA\nLincolnshire"],
            ["Planning authority", "Newark & Sherwood District Council\nPre-application ref. PREAPP/0022/24"],
            ["Conservation", "Grade II*-listed within the Newark Town Centre Conservation Area"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="eyebrow">{k}</p>
              <p className="mt-2 text-foreground whitespace-pre-line leading-[1.6]">{v}</p>
            </div>
          ))}
        </aside>
      </section>

      {/* ═══ TIMELINE + BYRON — side by side ═══ */}
      <section className="mt-40 px-6 md:px-10 grid grid-cols-12 gap-10 items-start">

        {/* TIMELINE — top-left, takes up 7 cols */}
        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-12 gap-6 mb-10">
            <p className="col-span-12 eyebrow">A short chronology</p>
          </div>
          <ol className="divide-y divide-border border-t border-foreground/20">
            {TIMELINE.map(([y, t]) => (
              <li key={y} className="grid grid-cols-12 gap-6 py-8">
                <p className="col-span-3 font-display text-3xl md:text-4xl text-foreground tabular-nums leading-none pt-1">{y}</p>
                <p className="col-span-9 text-foreground/75 leading-[1.75]" style={{ fontSize: "clamp(0.78rem, 0.9vw, 0.88rem)" }}>{t}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* BYRON — bottom-right, 4 cols, aligned to bottom of timeline */}
        <aside className="col-span-12 md:col-span-4 md:col-start-9 md:pt-16">
          <div style={{ borderTop: "0.5px solid var(--border)", paddingTop: "1.5rem" }}>
            <Reveal>
              <p className="eyebrow mb-6">A footnote in English letters</p>
              <p
                className="font-display text-foreground leading-[0.95] mb-6"
                style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 300 }}
              >
                Byron's first words
                <span className="font-serif-i text-moss block mt-1">were printed here.</span>
              </p>
              <p className="text-foreground/65 leading-[1.8]" style={{ fontSize: "clamp(0.75rem, 0.85vw, 0.84rem)" }}>
                In autumn 1806, an eighteen-year-old Lord Byron brought his poems to S.&nbsp;&amp;&nbsp;J. Ridge, printers, on this corner of Newark Market Place. The volume — <em className="font-serif-i">Fugitive Pieces</em> — was his first. He suppressed it almost immediately, ordering all copies burned after a clergyman objected to its frankness. Only four copies survived the flames. A plaque on the façade of G.H. Porter marks the press where it was set.
              </p>
              <p className="mt-6 text-foreground/40" style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>
                George Gordon, Lord Byron · 1788–1824
              </p>
            </Reveal>
          </div>
        </aside>

      </section>

      {/* ═══ CONTINUE ═══ */}
      <section className="mt-40 px-6 md:px-10 border-t border-border pt-10 pb-32">
        <div className="grid grid-cols-12 items-end gap-6">
          <p className="col-span-12 md:col-span-3 eyebrow">Continue</p>
          <Link to="/contact" className="col-span-12 md:col-span-9 group block">
            <p className="font-display text-5xl md:text-8xl text-foreground leading-[0.95]">
              Contact &nbsp;<span className="font-serif-i text-moss inline-block transition-transform duration-700 group-hover:translate-x-4">→</span>
            </p>
            <p className="mt-4 font-serif-i text-muted-foreground">Write to the house.</p>
          </Link>
        </div>
      </section>

    </Layout>
  );
}