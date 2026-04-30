// ─────────────────────────────────────────────────────────────
// CLIENT DEMO TEMPLATE — ClarityStack
//
// HOW TO USE:
//   1. Copy this file to: src/app/demos/[your-client-slug]/page.tsx
//   2. Update every field in CONFIG below
//   3. Delete this comment block
//   4. Done — the rest is auto-driven by CONFIG
//
// Fields marked ⚡ REQUIRED must be filled.
// Fields marked 🔧 OPTIONAL can be left as empty string or removed.
// ─────────────────────────────────────────────────────────────

const CONFIG = {
  // ── Identity ──────────────────────────────────────────────────
  clientName: "Client Name Here",             // ⚡ Full name or display name
  brandName: "Brand Name Here",               // ⚡ Company / brand name
  eyebrow: "Tagline or Role",                 // ⚡ Small text above hero headline
  heroHeadline: ["Headline", "Line Two", "Line Three"], // ⚡ Up to 3 lines — line 2 gets accent color
  heroSub: "Short description of what this client does and who they serve.", // ⚡

  // ── Colors ────────────────────────────────────────────────────
  colors: {
    bg: "#0a0a0a",           // ⚡ Page background (dark recommended)
    cardBg: "#1a1a1a",       // ⚡ Card / section alternating bg
    cardMid: "#2c2c2c",      // ⚡ Border / divider tone
    accent: "#4169E1",       // ⚡ Primary accent color (brand color)
    accentLight: "#5a7ee8",  // ⚡ Hover state of accent
    textMuted: "#aaaaaa",    // ⚡ Secondary / muted text
  },

  // ── CTAs ──────────────────────────────────────────────────────
  primaryCtaLabel: "Work With Me",                   // ⚡ Hero CTA button text
  primaryCtaHref: "https://instagram.com/yourhandle", // ⚡ Hero CTA link
  emailCtaHref: "mailto:client@example.com",          // 🔧 Footer secondary CTA
  instagramHandle: "yourhandle",                      // 🔧 Instagram (without @)

  // ── About ─────────────────────────────────────────────────────
  about: {
    title: ["About the", "Client"],                  // ⚡ 2-line section heading
    body: [
      "First paragraph about who this person is and their background.",
      "Second paragraph — what makes them different, their philosophy, approach.",
    ],
    stats: [
      { num: "100+", label: "Clients Served" },
      { num: "5+",   label: "Years Experience" },
      { num: "100%", label: "Dedicated" },
    ],
  },

  // ── Services ──────────────────────────────────────────────────
  services: [
    {
      icon: "🎯",
      name: "Service One",
      desc: "Describe the service clearly in 2-3 sentences. Focus on the client outcome.",
      badge: null,             // 🔧 e.g. "Popular" — or null to hide
      ctaLabel: "Learn More",
      ctaHref: "https://instagram.com/yourhandle",
    },
    {
      icon: "⚡",
      name: "Service Two",
      desc: "Describe the service clearly in 2-3 sentences. Focus on the client outcome.",
      badge: "Popular",
      ctaLabel: "Learn More",
      ctaHref: "https://instagram.com/yourhandle",
    },
    {
      icon: "🔥",
      name: "Service Three",
      desc: "Describe the service clearly in 2-3 sentences. Focus on the client outcome.",
      badge: null,
      ctaLabel: "Learn More",
      ctaHref: "https://instagram.com/yourhandle",
    },
  ],

  // ── Testimonials ──────────────────────────────────────────────
  testimonials: [
    {
      quote: "Short, punchy testimonial about a specific result. Real outcomes build trust.",
      author: "First L.",
      result: "Outcome · Detail",
      initials: "FL",
    },
    {
      quote: "Another testimonial — different angle, different type of client if possible.",
      author: "Second P.",
      result: "Outcome · Location",
      initials: "SP",
    },
    {
      quote: "Third testimonial. Keep these under 50 words for best display.",
      author: "Third K.",
      result: "Outcome · Context",
      initials: "TK",
    },
  ],

  // ── Footer ────────────────────────────────────────────────────
  footerText: "© 2026 Brand Name Here",
} as const;

// ─────────────────────────────────────────────────────────────
// COMPONENT — DO NOT EDIT BELOW UNLESS CHANGING LAYOUT
// ─────────────────────────────────────────────────────────────

export default function ClientDemoPage() {
  const c = CONFIG;
  const col = c.colors;

  return (
    <div style={{ background: col.bg, color: "#fff", fontFamily: "var(--font-inter), sans-serif" }}>
      {/* NAV */}
      <nav
        style={{ borderBottom: `1px solid ${col.accent}4D`, background: `${col.bg}EB` }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md"
      >
        <span className="font-montserrat font-black text-sm tracking-widest uppercase" style={{ color: col.accent }}>
          {c.brandName}
        </span>
        <a
          href={c.primaryCtaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-sm"
          style={{ background: col.accent, color: "#fff" }}
        >
          {c.primaryCtaLabel}
        </a>
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${col.bg} 0%, ${col.cardBg} 50%, ${col.bg} 100%)` }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 60% at 50% 40%, ${col.accent}2E 0%, transparent 70%)` }} />
        <p className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-5 relative" style={{ color: col.accent }}>
          {c.eyebrow}
        </p>
        <h1 className="font-montserrat font-black text-5xl md:text-7xl uppercase tracking-tight leading-none max-w-2xl mb-5 relative">
          {c.heroHeadline.map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? <span style={{ color: col.accent }}>{line}</span> : line}
            </span>
          ))}
        </h1>
        <p className="text-sm max-w-sm mb-10 relative" style={{ color: col.textMuted }}>{c.heroSub}</p>
        <a
          href={c.primaryCtaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat font-bold text-xs tracking-widest uppercase px-9 py-4 rounded-sm hover:-translate-y-0.5 transition-transform relative"
          style={{ background: col.accent, color: "#fff" }}
        >
          {c.primaryCtaLabel}
        </a>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6" style={{ background: col.cardBg }}>
        <div className="max-w-xl mx-auto">
          <p className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: col.accent }}>
            About {c.clientName}
          </p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase leading-tight mb-4">
            {c.about.title.map((l, i) => <span key={i} className="block">{l}</span>)}
          </h2>
          <div className="w-12 h-0.5 mb-6" style={{ background: col.accent }} />
          {c.about.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "#cccccc" }}>{p}</p>
          ))}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {c.about.stats.map((s) => (
              <div key={s.label} className="text-center py-5 rounded"
                style={{ border: `1px solid ${col.accent}59`, background: `${col.accent}0F` }}>
                <div className="font-montserrat font-black text-2xl leading-none mb-1" style={{ color: col.accent }}>{s.num}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: col.textMuted }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6" style={{ background: col.bg }}>
        <div className="max-w-xl mx-auto">
          <p className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: col.accent }}>
            What We Offer
          </p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase leading-tight mb-4">
            <span className="block">Choose Your</span>
            <span className="block">Path</span>
          </h2>
          <div className="w-12 h-0.5 mb-8" style={{ background: col.accent }} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {c.services.map((svc) => (
              <div key={svc.name}
                className="relative rounded p-6 transition-all hover:-translate-y-1 group overflow-hidden"
                style={{ background: col.cardBg, border: `1px solid ${col.cardMid}` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: col.accent }} />
                {svc.badge && (
                  <span className="absolute top-3 right-3 font-montserrat font-bold text-xs tracking-widest uppercase px-2 py-0.5 rounded-sm"
                    style={{ background: col.accent, color: "#fff" }}>{svc.badge}</span>
                )}
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="font-montserrat font-bold text-base uppercase tracking-wide mb-3">{svc.name}</h3>
                <p className="text-xs leading-relaxed mb-5" style={{ color: col.textMuted }}>{svc.desc}</p>
                <a href={svc.ctaHref} target="_blank" rel="noopener noreferrer"
                  className="font-montserrat font-bold text-xs tracking-widest uppercase"
                  style={{ color: col.accent }}>{svc.ctaLabel} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6" style={{ background: col.cardBg }}>
        <div className="max-w-xl mx-auto">
          <p className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: col.accent }}>
            Results
          </p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase leading-tight mb-4">
            <span className="block">Real People.</span>
            <span className="block">Real Change.</span>
          </h2>
          <div className="w-12 h-0.5 mb-8" style={{ background: col.accent }} />
          <div className="space-y-4">
            {c.testimonials.map((t) => (
              <div key={t.author} className="rounded-r px-6 py-7"
                style={{ background: col.bg, borderLeft: `3px solid ${col.accent}` }}>
                <p className="text-sm italic leading-relaxed mb-5" style={{ color: "#cccccc" }}>
                  <span style={{ color: col.accent, fontSize: "1.4rem", lineHeight: 0, verticalAlign: "-0.35rem", marginRight: "0.15rem" }}>&ldquo;</span>
                  {t.quote}
                  <span style={{ color: col.accent, fontSize: "1.4rem", lineHeight: 0, verticalAlign: "-0.35rem", marginLeft: "0.15rem" }}>&rdquo;</span>
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-montserrat font-bold text-sm flex-shrink-0"
                    style={{ background: col.accent, color: "#fff" }}>{t.initials}</div>
                  <div>
                    <div className="font-montserrat font-bold text-sm">{t.author}</div>
                    <div className="text-xs" style={{ color: col.accent }}>{t.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${col.cardBg} 0%, ${col.bg} 100%)` }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${col.accent}1F 0%, transparent 70%)` }} />
        <div className="max-w-sm mx-auto relative">
          <p className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: col.accent }}>
            Let&apos;s Get to Work
          </p>
          <h2 className="font-montserrat font-black text-4xl uppercase leading-tight mb-3">
            <span className="block">Ready to</span>
            <span className="block">Get Started?</span>
          </h2>
          <p className="text-sm mb-10" style={{ color: col.textMuted }}>
            Take the first step — we&apos;ll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={c.primaryCtaHref} target="_blank" rel="noopener noreferrer"
              className="font-montserrat font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm hover:-translate-y-0.5 transition-transform"
              style={{ background: col.accent, color: "#fff" }}>{c.primaryCtaLabel}</a>
            {c.emailCtaHref && (
              <a href={c.emailCtaHref}
                className="font-montserrat font-bold text-xs tracking-widest uppercase px-8 py-3.5 rounded-sm border-2 hover:bg-white hover:text-black transition-colors"
                style={{ borderColor: "#fff", color: "#fff" }}>Send an Email</a>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center border-t" style={{ background: "#050505", borderColor: col.cardMid }}>
        <div className="font-montserrat font-black text-sm tracking-widest uppercase mb-2" style={{ color: col.accent }}>
          {c.brandName}
        </div>
        <p className="text-xs" style={{ color: col.textMuted }}>
          {c.footerText}
          {c.instagramHandle && (
            <> · <a href={`https://instagram.com/${c.instagramHandle}`} target="_blank" rel="noopener noreferrer" style={{ color: col.accent }}>@{c.instagramHandle}</a></>
          )}
        </p>
        <p className="text-xs mt-3" style={{ color: col.textMuted }}>
          Site built by <a href="/" style={{ color: col.textMuted, textDecoration: "underline" }}>ClarityStack Advisory</a>
        </p>
      </footer>
    </div>
  );
}
