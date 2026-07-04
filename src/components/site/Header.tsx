import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { to: "/",           label: "Home",       n: "00" },
  { to: "/portfolio",  label: "Tenancies",  n: "01" },
  { to: "/residences", label: "Residences", n: "02" },
  { to: "/about",      label: "About",      n: "03" },
  { to: "/contact",    label: "Contact",    n: "04" },
] as const;

const LIGHT_PAGES = [
  "/portfolio", "/residences", "/heritage", "/about", "/contact", "/pricing",
];

const RED = "#c0392b";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { pathname }            = useLocation();
  const btnRef                  = useRef<HTMLButtonElement>(null);

  const isLight = LIGHT_PAGES.some(p => pathname === p || pathname.startsWith(p + "/"));
  const isDark  = scrolled || isLight;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open]);

  return (
    <>
      {/* ════════════════════════════════════════
          DESKTOP HEADER
      ════════════════════════════════════════ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 hidden md:block ${
          isDark
            ? "bg-[#F5F0E8] border-b border-[#1a1714]/10"
            : "bg-transparent border-b border-white/10"
        }`}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center px-10 h-16">

          <Link to="/" className="flex flex-col gap-[3px]">
            <span className={`font-display text-[17px] tracking-[0.08em] leading-none transition-all duration-500 ${
              isDark ? "text-[#1a1714] font-normal" : "text-[#F5F0E8] font-light [text-shadow:0_1px_12px_rgba(0,0,0,0.65)]"
            }`}>
              Porter &amp; Bridge
            </span>
            <span className={`font-serif-i text-[10px] tracking-[0.22em] leading-none transition-all duration-500 ${
              isDark ? "text-[#c0392b]/70" : "text-[#c0392b]/55 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
            }`}>
              est. 1893
            </span>
          </Link>

          <nav className="flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`relative text-[11px] tracking-[0.2em] uppercase font-light transition-colors duration-300 group ${
                  isDark
                    ? pathname === n.to ? "text-[#1a1714]" : "text-[#1a1714]/40 hover:text-[#c0392b]"
                    : pathname === n.to ? "text-[#F5F0E8]" : "text-[#F5F0E8]/65 hover:text-[#F5F0E8] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
                }`}
              >
                {n.label}
                <span
                  className={`absolute -bottom-[2px] left-0 h-[0.5px] transition-all duration-500 ease-out ${
                    pathname === n.to ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ background: RED }}
                />
              </Link>
            ))}
          </nav>

          <div className="flex justify-end">
            {isDark ? (
              <Link
                to="/contact"
                className="flex items-center gap-2.5 bg-[#1a1714] px-5 py-[9px] transition-colors duration-300 hover:bg-[#c0392b]"
              >
                <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: RED }} />
                <span className="text-[10px] tracking-[0.26em] uppercase text-[#F5F0E8] font-light">Enquire</span>
              </Link>
            ) : (
              <Link
                to="/contact"
                className="text-[10px] tracking-[0.26em] uppercase text-[#F5F0E8] font-light bg-white/10 border border-white/30 px-5 py-[9px] backdrop-blur-sm transition-all duration-300 hover:bg-white/18 hover:border-white/50"
              >
                Enquire
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════
          MOBILE — fixed bar (always on top, z-[60])
      ════════════════════════════════════════ */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-6 h-14 transition-colors duration-500 ${
          open ? "bg-transparent" : isDark ? "bg-[#F5F0E8] border-b border-[#1a1714]/10" : "bg-transparent"
        }`}
      >
        {/* Wordmark — fades to light when menu is open */}
        <Link to="/" className="flex flex-col gap-[3px]">
          <motion.span
            className="font-display text-[15px] tracking-[0.07em] leading-none"
            animate={{ color: open ? "#F5F0E8" : isDark ? "#1a1714" : "#F5F0E8" }}
            transition={{ duration: 0.4 }}
          >
            Porter &amp; Bridge
          </motion.span>
          <span className="font-serif-i text-[9px] tracking-[0.2em] leading-none" style={{ color: `${RED}99` }}>
            est. 1893
          </span>
        </Link>

        {/* Burger button — always clickable, always on top */}
        <button
          ref={btnRef}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex items-center justify-center w-10 h-10 z-[61]"
        >
          {/* Bar 1 */}
          <motion.span
            className="absolute block h-px w-[22px] origin-center"
            style={{ background: open ? RED : isDark ? "#1a1714" : "#F5F0E8" }}
            animate={open ? { rotate: 45, y: 0, width: 20 } : { rotate: 0, y: -5, width: 22 }}
            transition={{ duration: 0.38, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Bar 2 */}
          <motion.span
            className="absolute block h-px w-[22px] origin-center"
            style={{ background: open ? RED : isDark ? "#1a1714" : "#F5F0E8" }}
            animate={open ? { rotate: -45, y: 0, width: 20 } : { rotate: 0, y: 5, width: 22 }}
            transition={{ duration: 0.38, ease: [0.76, 0, 0.24, 1] }}
          />
        </button>
      </div>

      {/* ════════════════════════════════════════
          MOBILE MENU OVERLAY
          Unique pattern: dark panel rises from the bottom,
          nav items peel in from the right one by one,
          index numbers count up in red as each item lands.
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mob-menu"
            className="md:hidden fixed inset-0 z-50 flex flex-col justify-end"
            style={{ background: "#0c0b09" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Thin red horizontal rule that draws across on open */}
            <motion.div
              className="absolute left-0 right-0"
              style={{ top: "50%", height: "0.5px", background: RED, originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Top half — location stamp */}
            <motion.div
              className="absolute top-20 left-6"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <p className="text-[9px] tracking-[0.25em] uppercase text-white/20 font-light">
                Newark on Trent
              </p>
              <p className="text-[9px] tracking-[0.25em] uppercase text-white/20 font-light mt-1">
                Est. 1893
              </p>
            </motion.div>

            {/* Bottom half — nav items, above the horizontal rule */}
            <nav className="flex flex-col px-6 pb-10" style={{ paddingTop: "52%" }}>
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ x: 48, opacity: 0 }}
                  animate={{ x: 0,  opacity: 1 }}
                  exit={{   x: 32,  opacity: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: open ? 0.18 + i * 0.08 : i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    to={n.to}
                    className="flex items-baseline gap-4 py-[14px] group"
                    style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}
                  >
                    {/* Index — red, counts as items appear */}
                    <span
                      className="font-display text-[11px] tabular-nums leading-none flex-shrink-0 transition-colors duration-300"
                      style={{ color: pathname === n.to ? RED : `${RED}50` }}
                    >
                      {n.n}
                    </span>

                    {/* Label */}
                    <span
                      className="font-display text-[28px] font-light leading-none transition-colors duration-300"
                      style={{ color: pathname === n.to ? RED : "#F5F0E8" }}
                    >
                      {n.label}
                    </span>

                    {/* Arrow — slides in on hover */}
                    <span
                      className="ml-auto font-serif-i text-sm transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0"
                      style={{ color: RED }}
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Enquire CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-3 py-[13px] w-full text-[10px] tracking-[0.26em] uppercase font-light transition-all duration-300"
                  style={{
                    border: `0.5px solid ${RED}60`,
                    color: RED,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = RED;
                    el.style.color = "#F5F0E8";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    el.style.color = RED;
                  }}
                >
                  <span className="w-[4px] h-[4px] rounded-full" style={{ background: RED }} />
                  Enquire now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}