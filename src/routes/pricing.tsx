import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";

export default function Pricing() {
  
  return (
    <Layout>
      <section className="min-h-[80vh] grid grid-cols-12 gap-6 px-6 md:px-10 pt-6">
        <div className="col-span-12 md:col-span-7 md:col-start-1 self-end">
          <p className="eyebrow">№ 06 — Engagement</p>
          <h1 className="mt-8 font-display text-[18vw] md:text-[12vw] leading-[0.88] text-cream tracking-tight">
            Coming<br/><span className="font-serif-i text-walnut">soon</span>.
          </h1>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 self-end pb-4 space-y-6">
          <p className="max-w-[44ch] text-cream/85 leading-[1.75]">
            We are preparing a clear schedule of leasehold, tenancy and freehold-investment terms. It will be posted here in due course.
          </p>
          <p className="font-serif-i text-muted-foreground">
            In the meantime, write to us directly.
          </p>
          <Link to="/contact" className="link inline-block text-sm tracking-[0.22em] uppercase">
            Write to the house →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
