import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="dark-section mt-32 border-t border-border">
      <div className="grid grid-cols-12 gap-6 px-6 md:px-10 pt-20 pb-10">
        <div className="col-span-12 md:col-span-6">
          <p className="font-display text-4xl md:text-6xl leading-[0.95] max-w-xl text-parchment">
            A corner of Newark, <span className="font-serif-i text-brass">held in trust</span> since 1893.
          </p>
        </div>

        <div className="col-span-6 md:col-span-2 md:col-start-8 space-y-3 text-sm text-parchment">
          <p className="eyebrow">Visit</p>
          <p>1–9 Bridge Street<br/>27 &amp; 29 Market Place<br/>Newark on Trent NG24</p>
        </div>

        <div className="col-span-6 md:col-span-3 space-y-3 text-sm text-parchment">
          <p className="eyebrow">Enquiries</p>
          <a href="mailto:office@porterandbridge.co.uk" className="link block">office@porterandbridge.co.uk</a>
          <a href="tel:+441636612507" className="link block">+44 (0)1636 612 507</a>
        </div>
      </div>

      <div className="overflow-hidden border-y border-border py-8">
        <div className="marquee-track flex whitespace-nowrap font-display text-[12vw] leading-none text-parchment/90">
          <span className="px-8">Porter &amp; Bridge —</span>
          <span className="px-8 font-serif-i text-brass">Fugitive Pieces, 1806 —</span>
          <span className="px-8">Bridge Street, Newark —</span>
          <span className="px-8 font-serif-i text-brass">Held since 1893 —</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 px-6 md:px-10 py-6 text-xs text-muted-foreground">
        <p className="col-span-6">© {new Date().getFullYear()} Porter &amp; Bridge Investment Ltd.</p>
        <div className="col-span-6 flex justify-end gap-6">
          <Link to="/bridge-street" className="link">Bridge Street</Link>
          <Link to="/portfolio" className="link">Tenancies</Link>
          <Link to="/contact" className="link">Contact</Link>
        </div>
      </div>
    </footer>
  );
}