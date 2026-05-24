import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SplitWords } from "@/components/site/SplitWords";
import { useState } from "react";



export default function Home() {

  const [sent, setSent] = useState(false);

  return (
    <Layout>
      {/* HEADER */}
      <section className="px-6 md:px-10 pt-6 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-3 eyebrow">№ 06 — Correspondence</p>
        <div className="col-span-12 md:col-span-9">
          <SplitWords
            as="h1"
            stagger={90}
            className="font-display text-5xl md:text-[6vw] leading-[0.95] text-foreground"
          >
            Write to the
          </SplitWords>
          <SplitWords
            as="p"
            delay={400}
            stagger={80}
            className="font-display text-5xl md:text-[6vw] leading-[0.95] font-serif-i text-moss"
          >
            house, by post or wire.
          </SplitWords>
          <Reveal delay={700}>
            <p className="mt-10 max-w-[58ch] text-foreground/80 leading-[1.85]">
              Every enquiry is answered by a partner within two working days. There is no front desk. Tenancy, planning, acquisition or general correspondence — all are received at the same address.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DETAILS + FORM */}
      <section className="mt-24 grid grid-cols-12 gap-10 md:gap-16 px-6 md:px-10">
        {/* Left: address card */}
        <aside className="col-span-12 md:col-span-4">
          <div className="border-t border-foreground/20 pt-8 space-y-10 text-sm">
            <div>
              <p className="eyebrow">By post</p>
              <p className="mt-3 text-foreground leading-[1.7]">
                Porter &amp; Bridge Investment Ltd<br/>
                c/o 1–9 Bridge Street<br/>
                Newark on Trent<br/>
                Nottinghamshire&nbsp;NG24
              </p>
            </div>
            <div>
              <p className="eyebrow">By telephone</p>
              <a href="tel:+441636612507" className="link mt-3 inline-block font-display text-2xl text-foreground">+44 (0)1636 612 507</a>
            </div>
            <div>
              <p className="eyebrow">By email</p>
              <a href="mailto:office@porterandbridge.co.uk" className="link mt-3 inline-block text-foreground">office@porterandbridge.co.uk</a>
            </div>
            <div>
              <p className="eyebrow">Selling agents</p>
              <p className="mt-3 text-foreground">Richard Watkinson &amp; Partners</p>
              <p className="text-muted-foreground text-xs mt-1">Newark on Trent</p>
            </div>
            <div>
              <p className="eyebrow">Viewing</p>
              <p className="mt-3 text-foreground">Strictly by appointment. A partner of the house is present at every viewing.</p>
            </div>
          </div>
        </aside>

        {/* Right: form on warm surface */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="col-span-12 md:col-span-8 bg-surface-2 p-8 md:p-14 space-y-8"
        >
          <p className="eyebrow text-moss">Send a note</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { id: "name", label: "Your name" },
              { id: "company", label: "Company, if any" },
              { id: "email", label: "Email", type: "email" },
              { id: "subject", label: "Subject of enquiry" },
            ].map((f) => (
              <div key={f.id} className="border-b border-foreground/30">
                <label htmlFor={f.id} className="eyebrow block mb-2">{f.label}</label>
                <input
                  id={f.id}
                  type={f.type ?? "text"}
                  required
                  className="w-full bg-transparent pb-3 text-foreground text-lg md:text-xl font-display outline-none placeholder:text-muted-foreground/40"
                  placeholder="—"
                />
              </div>
            ))}
          </div>
          <div className="border-b border-foreground/30">
            <label htmlFor="message" className="eyebrow block mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full bg-transparent pb-3 text-foreground text-base md:text-lg leading-[1.7] outline-none resize-none"
              placeholder="—"
            />
          </div>

          <div className="flex items-baseline justify-between flex-wrap gap-4 pt-4">
            <p className="text-xs text-muted-foreground max-w-[34ch] leading-[1.6]">
              By sending you consent to be contacted regarding your enquiry. We do not share details with third parties.
            </p>
            <button
              type="submit"
              className="group inline-flex items-baseline gap-4 text-foreground"
            >
              <span className="font-display text-3xl md:text-5xl">
                {sent ? "Received" : "Send"}
              </span>
              <span className="font-serif-i text-2xl text-moss inline-block transition-transform duration-700 group-hover:translate-x-3">
                {sent ? "✓" : "→"}
              </span>
            </button>
          </div>
          {sent && (
            <p className="font-serif-i text-moss">Thank you. We will reply within two working days.</p>
          )}
        </form>
      </section>

      {/* MAP — full width, greyscale */}
      <section className="mt-32 md:mt-40">
        <div className="px-6 md:px-10 mb-8 grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-3 eyebrow">The location</p>
          <div className="col-span-12 md:col-span-9 flex flex-wrap items-baseline gap-6">
            <p className="font-display text-2xl md:text-4xl text-foreground leading-[1.1]">Newark on Trent · Town Centre</p>
            <a
              href="https://www.openstreetmap.org/?mlat=53.0779&mlon=-0.8088#map=17/53.0779/-0.8088"
              target="_blank"
              rel="noreferrer"
              className="link text-xs tracking-[0.22em] uppercase text-moss"
            >
              View larger map →
            </a>
          </div>
        </div>
        <div className="w-full h-[60vh] md:h-[70vh] overflow-hidden border-y border-border bg-surface-2">
          <iframe
            title="Map of Newark on Trent town centre"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.8230%2C53.0735%2C-0.7940%2C53.0830&amp;layer=mapnik&amp;marker=53.0779%2C-0.8088"
            className="w-full h-full block"
            style={{ filter: "grayscale(1) contrast(0.95) brightness(1.02)" }}
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
