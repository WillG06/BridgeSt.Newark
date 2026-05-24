import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/bridge-street", label: "Bridge Street", n: "01" },
  { to: "/portfolio",     label: "Tenancies",     n: "02" },
  { to: "/residences",    label: "Residences",    n: "03" },
  { to: "/heritage",      label: "Heritage",      n: "04" },
  { to: "/about",         label: "About",         n: "05" },
  { to: "/contact",       label: "Contact",       n: "06" },
] as const;

const LIGHT_HERO_PAGES = ["/portfolio", "/heritage", "/about", "/contact"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { pathname }            = useLocation();

  const isDark = scrolled || LIGHT_HERO_PAGES.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isDark
          ? "bg-[#F5F0E8] border-b border-[#B8965A]/20"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      {/* ── Desktop ── */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center px-10 h-16">
        <Link to="/" className="flex flex-col gap-[3px]">
          <span className={`font-display text-[17px] tracking-[0.08em] leading-none transition-all duration-500 ${
            isDark ? "text-[#1a1714] font-normal" : "text-[#F5F0E8] font-light [text-shadow:0_1px_12px_rgba(0,0,0,0.65)]"
          }`}>
            Porter &amp; Bridge
          </span>
          <span className={`font-serif-i text-[10px] tracking-[0.22em] leading-none transition-all duration-500 ${
            isDark ? "text-[#B8965A]/80" : "text-[#B8965A]/75 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
          }`}>
            est. 1893
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`relative text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300 group ${
                isDark
                  ? pathname === n.to ? "text-[#1a1714]" : "text-[#1a1714]/45 hover:text-[#4a5c3f]"
                  : pathname === n.to ? "text-[#F5F0E8]" : "text-[#F5F0E8]/75 hover:text-[#8a9e74] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
              }`}
            >
              {n.label}
              <span className={`absolute -bottom-[2px] left-0 h-[0.5px] bg-[#4a5c3f] transition-all duration-500 ease-out ${
                pathname === n.to ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </nav>

        <div className="flex justify-end">
          {isDark ? (
            <Link
              to="/contact"
              className="flex items-center gap-2.5 bg-[#1a1714] px-5 py-[9px] transition-colors duration-300 hover:bg-[#2d2820]"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-[#B8965A] flex-shrink-0" />
              <span className="text-[10px] tracking-[0.26em] uppercase text-[#F5F0E8] font-light">Enquire</span>
            </Link>
          ) : (
            <Link
              to="/contact"
              className="text-[10px] tracking-[0.26em] uppercase text-[#F5F0E8] font-light bg-white/10 border border-white/30 px-5 py-[9px] backdrop-blur-sm transition-all duration-300 hover:bg-white/18 hover:border-white/50 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]"
            >
              Enquire
            </Link>
          )}
        </div>
      </div>

      {/* ── Mobile bar ── */}
      <div className={`md:hidden flex items-center justify-between px-6 h-14 transition-all duration-500 ${
        open
          ? "bg-[#0f0e0c] border-b border-[#B8965A]/15"
          : isDark
            ? "bg-[#F5F0E8] border-b border-[#B8965A]/20"
            : ""
      }`}>
        <Link to="/" className="flex flex-col gap-[3px]">
          <span className={`font-display text-[15px] tracking-[0.07em] leading-none transition-all duration-500 ${
            open ? "text-[#F5F0E8]" : isDark ? "text-[#1a1714]" : "text-[#F5F0E8] [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]"
          }`}>
            Porter &amp; Bridge
          </span>
          <span className={`font-serif-i text-[9px] tracking-[0.2em] leading-none transition-all duration-500 ${
            open ? "text-[#B8965A]/65" : isDark ? "text-[#B8965A]/80" : "text-[#B8965A]/65"
          }`}>
            est. 1893
          </span>
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col justify-center items-center w-8 h-8 gap-0 relative"
          aria-label="Toggle menu"
        >
          <span className={`block h-[0.5px] w-5 transition-all duration-300 ease-in-out origin-center ${
            open ? "rotate-45 translate-y-[0.5px] bg-[#B8965A]"
            : isDark ? "translate-y-[-3px] bg-[#1a1714]/60"
            : "translate-y-[-3px] bg-[#F5F0E8]/70"
          }`} />
          <span className={`block h-[0.5px] w-5 transition-all duration-300 ease-in-out origin-center ${
            open ? "-rotate-45 -translate-y-[0.5px] bg-[#B8965A]"
            : isDark ? "translate-y-[3px] bg-[#1a1714]/60"
            : "translate-y-[3px] bg-[#F5F0E8]/70"
          }`} />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="md:hidden bg-[#0f0e0c]">
          <nav className="flex flex-col px-6 pt-2 pb-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`flex items-baseline justify-between py-[14px] border-b border-white/[0.06] last:border-none transition-colors duration-300 ${
                  pathname === n.to ? "text-[#8a9e74]" : "text-[#F5F0E8] hover:text-[#8a9e74]"
                }`}
              >
                <span className="font-display text-[26px] font-light leading-none transition-colors duration-300">{n.label}</span>
                <span className="text-[9px] tracking-[0.2em] text-[#B8965A]/50 font-light">{n.n}</span>
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-6 pt-2">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 bg-[#1a1714] py-3 w-full hover:bg-[#2d2820] transition-colors duration-300"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-[#B8965A]" />
              <span className="text-[10px] tracking-[0.26em] uppercase text-[#F5F0E8] font-light">Enquire</span>
            </Link>
          </div>
          <p className="px-6 pb-6 text-[9px] tracking-[0.2em] uppercase text-white/15 font-light">
            Newark on Trent · Est. 1893
          </p>
        </div>
      )}
    </header>
  );
}