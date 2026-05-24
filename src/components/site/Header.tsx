import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/bridge-street", label: "Bridge Street", n: "01" },
  { to: "/portfolio", label: "Tenancies", n: "02" },
  { to: "/residences", label: "Residences", n: "03" },
  { to: "/heritage", label: "Heritage", n: "04" },
  { to: "/about", label: "About", n: "05" },
  { to: "/contact", label: "Contact", n: "06" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background-color,border-color,color] duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl text-foreground"
          : "border-b border-transparent text-white mix-blend-difference"
      }`}
    >
      <div className="grid grid-cols-12 items-center gap-4 px-6 py-5 md:px-10">
        <Link to="/" className="col-span-6 md:col-span-3 flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight">Porter &amp; Bridge</span>
          <span className="font-serif-i opacity-60 text-xs">est. 1893</span>
        </Link>

        <nav className="hidden md:col-span-7 md:flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link tracking-wide transition-colors duration-500"
            >
              <span className="font-serif-i text-[10px] mr-1.5 align-top opacity-70">{n.n}</span>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="col-span-6 md:col-span-2 flex justify-end">
          <Link to="/contact" className="hidden md:inline-block link text-xs tracking-[0.22em] uppercase">
            Enquire →
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-xs tracking-[0.22em] uppercase"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background text-foreground">
          <div className="flex flex-col px-6 py-6 gap-5">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between"
              >
                <span className="font-display text-2xl">{n.label}</span>
                <span className="font-serif-i text-xs opacity-60">{n.n}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
