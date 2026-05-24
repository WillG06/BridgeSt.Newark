import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SplitWords } from "@/components/site/SplitWords";
import square from "@/assets/market-square.jpg";
import hero2 from "@/assets/hero-2.jpg";

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
      {/* HEADER */}
      <section className="px-6 md:px-10 pt-6 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-3 eyebrow">№ 05 — On the house</p>
        <div className="col-span-12 md:col-span-9">
          <SplitWords as="h1" stagger={90} className="font-display text-5xl md:text-[6vw] leading-[0.95] text-foreground max-w-[18ch]">
            One building. One freehold.
          </SplitWords>
          <SplitWords as="p" delay={500} stagger={75} className="font-display text-5xl md:text-[6vw] leading-[0.95] font-serif-i text-moss">
            Held since 1893.
          </SplitWords>
          <Reveal delay={900}>
            <p className="mt-10 max-w-[60ch] text-foreground/80 leading-[1.85]">
              Porter &amp; Bridge Investment Ltd is the freehold owner of a single building on the corner of Bridge Street and Market Place in Newark on Trent. We do not buy and sell. We do not grow a portfolio for its own sake. We tenant the ground floor, plan the upper floors, answer the post.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WIDE IMAGE */}
      <Reveal className="image-reveal mt-24 md:mt-32 block">
        <img src={square} alt="Newark on Trent market square at dusk" loading="lazy" width={1920} height={1080} className="w-full h-[60vh] md:h-[80vh] object-cover" />
      </Reveal>

      {/* PRINCIPLES */}
      <section className="mt-32 px-6 md:px-10 grid grid-cols-12 gap-6">
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

      {/* THE PEOPLE */}
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

      {/* TIMELINE */}
      <section className="mt-40 px-6 md:px-10 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-3 eyebrow md:pt-3">A short chronology</p>
        <ol className="col-span-12 md:col-span-9 divide-y divide-border border-y border-foreground/20">
          {TIMELINE.map(([y, t]) => (
            <li key={y} className="grid grid-cols-12 gap-6 py-10">
              <p className="col-span-3 md:col-span-2 font-display text-3xl md:text-5xl text-foreground tabular-nums">{y}</p>
              <p className="col-span-9 md:col-span-10 max-w-[58ch] text-foreground/80 leading-[1.75]">{t}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* QUIET PROMISE */}
      <section className="mt-40 px-6 md:px-10 grid grid-cols-12 gap-10 items-center">
        <Reveal className="image-reveal col-span-12 md:col-span-5">
          <img src={hero2} alt="Detail of cast-iron rainwater goods, Bridge Street, Newark" loading="lazy" width={1280} height={1600} className="w-full h-[60vh] object-cover" />
        </Reveal>
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <SplitWords as="p" stagger={70} className="font-display text-3xl md:text-5xl leading-[1.1] text-foreground max-w-[24ch]">
            We do not own a museum. We own the rooms in which it happened.
          </SplitWords>
          <Reveal delay={400}>
            <p className="mt-8 font-serif-i text-moss">— Porter &amp; Bridge Investment Ltd</p>
          </Reveal>
        </div>
      </section>

      <section className="mt-40 px-6 md:px-10 border-t border-border pt-10">
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