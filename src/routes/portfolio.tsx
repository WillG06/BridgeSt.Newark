import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import timpson1 from "@/assets/shop-timpson-1.jpg";
import porter1 from "@/assets/shop-porter-1.jpg";
import glass1 from "@/assets/shop-glass-1.jpg";
import cafe1 from "@/assets/shop-cafe-1.jpg";
import barber1 from "@/assets/shop-barber-1.jpg";

interface Unit {
  no: string;
  address: string;
  trade: string;
  tenant: string;
  area: string;
  rent: string;
  guide: string;
  term: string;
  status: "Let" | "To Let" | "Holding over";
  notes: string;
  img: string;
}

const UNITS: Unit[] = [
  {
    no: "01",
    address: "1 & 3 Bridge Street",
    trade: "Delicatessen, smokery & specialty butchers",
    tenant: "G H Porter Provisions — Westwood & Britton",
    area: "Ground 389 sq ft · Basement 1,115 sq ft",
    rent: "By arrangement",
    guide: "£14,500",
    term: "6 yrs 11 mths from Oct 2024",
    status: "Let",
    notes: "Established 1893 — the original tenant of the building.",
    img: porter1,
  },
  {
    no: "02",
    address: "5 Bridge Street",
    trade: "Specialist glass engraver — Art on Glass",
    tenant: "Existing tenant, holding over",
    area: "114 sq ft ground",
    rent: "£3,600 p.a.",
    guide: "£10,000",
    term: "Internal repair lease, holding over",
    status: "Holding over",
    notes: "A rare independent craft trade on the principal frontage.",
    img: glass1,
  },
  {
    no: "03",
    address: "7 Bridge Street",
    trade: "Salad bar & café — Harry's",
    tenant: "Thivakaran Thillainathan",
    area: "293 sq ft ground",
    rent: "£12,250 p.a.",
    guide: "£13,500",
    term: "6 yrs 11 mths from May 2024",
    status: "Let",
    notes: "Acquired and re-let on a new lease in 2024.",
    img: cafe1,
  },
  {
    no: "04",
    address: "9 Bridge Street",
    trade: "Shoe repairs, key cutting & engraving",
    tenant: "Timpson Limited",
    area: "Ground 293 sq ft · 1st 127 sq ft · 2nd 492 sq ft",
    rent: "£10,500 p.a.",
    guide: "£12,000",
    term: "Holding over, original lease",
    status: "Let",
    notes: "A national multiple covenant on a long-established pitch.",
    img: timpson1,
  },
  {
    no: "05",
    address: "27 Market Place",
    trade: "Barber Shoppe — established hairdressing",
    tenant: "Vacant — viewings by appointment",
    area: "625 sq ft return frontage",
    rent: "£9,000 p.a. (asking)",
    guide: "£11,000",
    term: "New lease available, terms by negotiation",
    status: "To Let",
    notes: "Return frontage to Market Place — the prime corner exposure.",
    img: barber1,
  },
];


export default function Home() {

  const letCount = UNITS.filter((u) => u.status !== "To Let").length;
  return (
    <Layout>
      {/* HEADER — clean, business-like */}
      <section className="px-6 md:px-10 pt-6 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-3 eyebrow">№ 02 — Tenancy schedule</p>
        <div className="col-span-12 md:col-span-9">
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground max-w-[22ch]">
            Five retail units. <span className="font-serif-i text-moss">One freehold.</span>
          </h1>
          <p className="mt-8 max-w-[62ch] text-foreground/75 leading-[1.85]">
            The schedule below sets out each of the five ground-floor units that form the Porter &amp; Bridge freehold at 1–9 Bridge Street and 27 Market Place, Newark on Trent. Where a leasehold interest is offered, the guide price falls in the <span className="text-moss">£10,000 – £15,000</span> region.
          </p>
        </div>
      </section>

      {/* KEY FIGURES — quiet, professional summary */}
      <section className="mt-20 px-6 md:px-10">
        <div className="border-y border-border grid grid-cols-2 md:grid-cols-4">
          {[
            ["Retail units", "5", "1–9 Bridge St · 27 Market Pl."],
            ["Currently let / holding over", `${letCount}`, "of 5"],
            ["Gross potential income", "£43,600", "per annum"],
            ["Listed grade", "II*", "town conservation area"],
          ].map(([k, n, sub], i) => (
            <div
              key={k}
              className={`py-10 px-6 md:px-8 ${i !== 0 ? "md:border-l border-border" : ""} ${i % 2 ? "border-l border-border md:border-l" : ""}`}
            >
              <p className="eyebrow">{k}</p>
              <p className="mt-4 font-display text-4xl md:text-5xl text-foreground tabular-nums">{n}</p>
              <p className="mt-2 text-xs text-muted-foreground font-serif-i">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE — table-like, business format */}
      <section className="px-6 md:px-10 mt-28">
        <div className="grid grid-cols-12 gap-6 mb-8 pb-4 border-b border-foreground/20">
          <p className="col-span-1 eyebrow hidden md:block">№</p>
          <p className="col-span-12 md:col-span-4 eyebrow">Address &amp; trade</p>
          <p className="hidden md:block md:col-span-3 eyebrow">Tenant &amp; term</p>
          <p className="hidden md:block md:col-span-2 eyebrow">Passing rent</p>
          <p className="hidden md:block md:col-span-2 eyebrow text-right">Leasehold guide</p>
        </div>

        <ul>
          {UNITS.map((u) => (
            <li key={u.no} className="grid grid-cols-12 gap-6 py-10 border-b border-border items-start group">
              <p className="col-span-1 font-serif-i text-2xl text-moss tabular-nums hidden md:block">{u.no}</p>

              <Reveal className="col-span-12 md:col-span-4">
                <div className="image-reveal overflow-hidden mb-5 in">
                  <img
                    src={u.img}
                    alt={`${u.trade}, ${u.address}`}
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className="w-full h-48 object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <p className="font-display text-2xl md:text-3xl text-foreground leading-tight">{u.address}</p>
                <p className="mt-2 text-foreground/75 font-serif-i text-sm">{u.trade}</p>
                <p className="mt-3 max-w-[52ch] text-sm text-muted-foreground leading-[1.7]">{u.notes}</p>
                <p className="mt-3 text-xs text-muted-foreground tabular-nums">{u.area}</p>
              </Reveal>

              <div className="col-span-6 md:col-span-3 text-sm space-y-3 md:pt-1">
                <p className="eyebrow md:hidden">Tenant &amp; term</p>
                <div className="flex gap-2 flex-wrap">
                  <span className={`pill ${u.status === "Let" ? "let" : u.status === "To Let" ? "tolet" : ""}`}>
                    <span className="dot" /> {u.status}
                  </span>
                </div>
                <p className="text-foreground">{u.tenant}</p>
                <p className="text-muted-foreground text-xs leading-[1.55]">{u.term}</p>
              </div>

              <div className="col-span-6 md:col-span-2 text-sm md:pt-1">
                <p className="eyebrow md:hidden">Passing rent</p>
                <p className="text-foreground tabular-nums">{u.rent}</p>
              </div>

              <div className="col-span-12 md:col-span-2 md:text-right md:pt-1">
                <p className="eyebrow md:hidden">Leasehold guide</p>
                <p className="font-display text-3xl text-moss tabular-nums">{u.guide}</p>
                <p className="text-xs text-muted-foreground mt-1">leasehold interest</p>
              </div>
            </li>
          ))}
        </ul>

        {/* totals row */}
        <div className="mt-16 grid grid-cols-12 gap-6 border-t border-foreground/20 pt-10">
          <p className="col-span-12 md:col-span-3 eyebrow">Total potential gross income</p>
          <div className="col-span-12 md:col-span-6">
            <p className="font-display text-4xl md:text-6xl text-foreground tabular-nums">£43,600</p>
            <p className="font-serif-i text-muted-foreground mt-1">per annum across the five tenancies</p>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <p className="eyebrow">Guide range</p>
            <p className="font-display text-2xl text-moss mt-2 tabular-nums">£10,000 – £15,000</p>
            <p className="text-xs text-muted-foreground">per leasehold interest</p>
          </div>
        </div>
      </section>

      {/* Acquisition note — professional context */}
      <section className="mt-32 px-6 md:px-10 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-3 eyebrow">A note on acquisition</p>
        <div className="col-span-12 md:col-span-9 grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.1]">Tenanted on commercial terms.</h2>
            <p className="mt-5 text-foreground/80 leading-[1.8] max-w-[52ch]">
              Each unit is offered with full disclosure of the existing lease, schedule of condition and rent review history. Where the unit is held on a holding-over arrangement, the tenant continues to pay rent under the original terms pending the grant of a renewal lease.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.1]">Single point of contact.</h2>
            <p className="mt-5 text-foreground/80 leading-[1.8] max-w-[52ch]">
              Selling agents Richard Watkinson &amp; Partners hold the marketing instruction across all five units. Heads of terms, draft replies to commercial property standard enquiries (CPSE) and a current floor plan pack are available on request to qualified parties.
            </p>
            <Link to="/contact" className="link mt-6 inline-block text-xs tracking-[0.22em] uppercase text-moss">
              Request the pack →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mt-40 px-6 md:px-10 border-t border-border pt-10">
        <div className="grid grid-cols-12 items-end gap-6">
          <p className="col-span-12 md:col-span-3 eyebrow">Continue</p>
          <Link to="/residences" className="col-span-12 md:col-span-9 group block">
            <p className="font-display text-5xl md:text-8xl text-foreground leading-[0.95]">
              Residences &nbsp;<span className="font-serif-i text-moss inline-block transition-transform duration-700 group-hover:translate-x-4">→</span>
            </p>
            <p className="mt-4 font-serif-i text-muted-foreground">Six flats above the shops.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
