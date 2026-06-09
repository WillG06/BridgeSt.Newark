import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>

      {/* ── SIGN-UP BAND ─────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ background: "#e8e4dc", minHeight: 280 }}>

        {/* Large outline circle — cropped at top, centred between columns */}
        <div className="absolute hidden md:block" style={{
          width: 400, height: 400, borderRadius: "50%",
          border: "1.5px solid rgba(139,26,26,0.55)",
          left: "50%", top: "-140px",
          transform: "translateX(-55%)",
          zIndex: 1, pointerEvents: "none",
        }} />
        {/* Smaller outline circle — offset, also cropped at top */}
        <div className="absolute hidden md:block" style={{
          width: 280, height: 280, borderRadius: "50%",
          border: "1.5px solid rgba(139,26,26,0.28)",
          left: "50%", top: "-80px",
          transform: "translateX(-30%)",
          zIndex: 1, pointerEvents: "none",
        }} />
        {/* Right-edge ghost circles */}
        <div className="absolute hidden md:block" style={{
          width: 320, height: 320, borderRadius: "50%",
          background: "rgba(139,26,26,0.08)",
          right: "-60px", top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1, pointerEvents: "none",
        }} />
        <div className="absolute hidden md:block" style={{
          width: 200, height: 200, borderRadius: "50%",
          background: "rgba(139,26,26,0.06)",
          right: "30px", top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1, pointerEvents: "none",
        }} />

        <div className="relative z-10 grid grid-cols-12 gap-6 px-6 md:px-14 lg:px-20 py-14 md:py-20 items-center">

          {/* Left — heading */}
          <div className="col-span-12 md:col-span-4">
            <div style={{ width: 28, height: "1.5px", background: "#8b1a1a", marginBottom: "1.4rem" }} />
            <h2 className="font-display text-foreground" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: "16ch", marginBottom: "1.1rem" }}>
              Register your interest in Porter &amp; Bridge
            </h2>
            <p className="text-foreground/50 leading-[1.75]" style={{ fontSize: "0.78rem", maxWidth: "30ch" }}>
              Updates on tenancies, the residential conversion, and building stewardship — sent sparingly.
            </p>
          </div>

          {/* Right — form */}
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <input
                type="text"
                placeholder="Name"
                style={{
                  width: "100%", background: "transparent", border: "none",
                  borderBottom: "1px solid rgba(26,22,18,0.22)",
                  padding: "0.7rem 0", fontSize: "0.85rem",
                  color: "var(--foreground)", fontFamily: "var(--font-body)",
                  outline: "none", boxSizing: "border-box",
                }}
              />
              <input
                type="email"
                placeholder="Email address"
                style={{
                  width: "100%", background: "transparent", border: "none",
                  borderBottom: "1px solid rgba(26,22,18,0.22)",
                  padding: "0.7rem 0", fontSize: "0.85rem",
                  color: "var(--foreground)", fontFamily: "var(--font-body)",
                  outline: "none", boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.6rem" }}>
              <p style={{ fontSize: "0.68rem", color: "rgba(26,22,18,0.36)", maxWidth: "30ch", lineHeight: 1.65 }}>
                We do not share your details with third parties.<br />Unsubscribe at any time.
              </p>
              <button
                style={{
                  background: "#8b1a1a", color: "#fff", border: "none",
                  padding: "0.75rem 1.6rem", fontSize: "10px",
                  letterSpacing: "0.24em", textTransform: "uppercase",
                  fontFamily: "var(--font-body)", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                  flexShrink: 0, transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Submit
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
                  <path d="M1 5h10M7 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN DARK FOOTER ─────────────────────────────────────────────── */}
      <div style={{ background: "#0d0b08", color: "#f5f2ec" }}>

        <div style={{ height: "0.5px", background: "rgba(245,242,236,0.14)" }} />

        <div className="px-6 md:px-10 py-14 md:py-16 grid grid-cols-12 gap-8">

          {/* Col 1 — Brand */}
          <div className="col-span-12 md:col-span-3">
            <p className="font-display" style={{ fontSize: "1rem", letterSpacing: "-0.01em", color: "#f5f2ec", marginBottom: "1rem" }}>
              Porter &amp; Bridge
            </p>
            <p style={{ fontSize: "0.72rem", color: "rgba(245,242,236,0.35)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Est. 1893<br />
              1–9 Bridge Street<br />
              Newark on Trent NG24
            </p>
            <a
              href="https://wa.me/447700000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "#25D366", borderRadius: 999,
                padding: "0.42rem 0.85rem 0.42rem 0.6rem",
                textDecoration: "none", color: "#fff",
                fontSize: "11px", fontFamily: "var(--font-body)", fontWeight: 500,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Col 2 — Navigate */}
          <div className="col-span-6 md:col-span-2 md:col-start-5">
            <p style={{ fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(245,242,236,0.35)", fontFamily: "var(--font-body)", marginBottom: "1.2rem", fontWeight: 500 }}>Navigate</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {([["Home", "/"], ["Bridge Street", "/bridge-street"], ["Tenancies", "/tenancies"], ["Residences", "/residences"], ["Heritage", "/heritage"], ["About", "/about"], ["Contact", "/contact"]] as [string, string][]).map(([label, to]) => (
                <Link key={label} to={to} style={{ fontSize: "0.78rem", color: "rgba(245,242,236,0.6)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#f5f2ec")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,242,236,0.6)")}
                >{label}</Link>
              ))}
            </div>
          </div>

          {/* Col 3 — The Building */}
          <div className="col-span-6 md:col-span-2">
            <p style={{ fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(245,242,236,0.35)", fontFamily: "var(--font-body)", marginBottom: "1.2rem", fontWeight: 500 }}>The Building</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {["Grade II* Listed", "Five Ground Floor Trades", "Six Upper Residences", "Est. 1893", "Newark Market Place"].map(label => (
                <p key={label} style={{ fontSize: "0.78rem", color: "rgba(245,242,236,0.4)" }}>{label}</p>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <p style={{ fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(245,242,236,0.35)", fontFamily: "var(--font-body)", marginBottom: "1.2rem", fontWeight: 500 }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <p style={{ fontSize: "0.78rem", color: "rgba(245,242,236,0.55)", lineHeight: 1.6 }}>
                Richard Watkinson &amp; Partners<br />
                <span style={{ color: "rgba(245,242,236,0.35)", fontSize: "0.72rem" }}>Agent for lettings &amp; disposal</span>
              </p>
              <a href="mailto:office@porterandbridge.co.uk"
                style={{ fontSize: "0.78rem", color: "rgba(245,242,236,0.6)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f5f2ec")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,242,236,0.6)")}
              >office@porterandbridge.co.uk</a>
              <a href="tel:+441636612507"
                style={{ fontSize: "0.78rem", color: "rgba(245,242,236,0.6)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f5f2ec")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,242,236,0.6)")}
              >+44 (0)1636 612 507</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ height: "0.5px", background: "rgba(245,242,236,0.10)" }} />
        <div className="px-6 md:px-10 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p style={{ fontSize: "0.68rem", color: "rgba(245,242,236,0.25)", fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} Porter &amp; Bridge Investment Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            {(["Legal Statement", "Privacy Policy", "Sitemap"] as string[]).map((label, i) => (
              <span key={label} style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                {i > 0 && <span style={{ color: "rgba(245,242,236,0.15)" }}>|</span>}
                <Link to="/" style={{ fontSize: "0.68rem", color: "rgba(245,242,236,0.25)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,242,236,0.55)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,242,236,0.25)")}
                >{label}</Link>
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}