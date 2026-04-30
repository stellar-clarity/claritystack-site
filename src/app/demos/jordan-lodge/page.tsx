// ─────────────────────────────────────────────────────────────
// JORDAN LODGE DEMO — Next.js + Tailwind
// To clone for a new client: copy this file and update CONFIG below.
// ─────────────────────────────────────────────────────────────

const CONFIG = {
  // ── Identity ─────────────────────────────────────────────
  clientName: "Jordan Lodge",
  brandName: "Wealthy Minded Fitness",
  eyebrow: "Celebrity Fitness Trainer",
  heroHeadline: ["Train Like Your", "Life Depends", "On It"],
  heroSub:
    "Stop settling. Start transforming. Jordan Lodge builds athletes, executives, and everyday people into the best versions of themselves.",

  // ── Colors ───────────────────────────────────────────────
  colors: {
    bg: "#0a0a0a",
    cardBg: "#1a1a1a",
    cardMid: "#2c2c2c",
    accent: "#2D6A2D",
    accentLight: "#3a8a3a",
    textMuted: "#aaaaaa",
  },

  // ── CTAs ─────────────────────────────────────────────────
  primaryCtaLabel: "Work With Jordan",
  primaryCtaHref: "https://instagram.com/wealthymindedfitness",
  emailCtaHref: "mailto:jordan@wealthymindedfitness.com",
  instagramHandle: "wealthymindedfitness",

  // ── About ────────────────────────────────────────────────
  about: {
    title: ["More Than a", "Trainer"],
    body: [
      "Jordan Lodge is a celebrity fitness trainer specializing in total-body transformations — in-person and online. With a track record of working alongside high-profile clients and everyday athletes alike, Jordan's approach combines elite programming, accountability, and the mindset work that actually makes results stick.",
      "Wealthy Minded Fitness isn't just a brand — it's a philosophy. Success in the gym mirrors success in life. Jordan's clients don't just look different. They move different, think different, and live different.",
    ],
    stats: [
      { num: "500+", label: "Clients Transformed" },
      { num: "8+", label: "Years Coaching" },
      { num: "100%", label: "Committed" },
    ],
  },

  // ── Services ─────────────────────────────────────────────
  services: [
    {
      icon: "🏋️",
      name: "In-Person Training",
      desc: "One-on-one sessions with Jordan in Denver. Hands-on coaching, real-time form correction, and the energy of training alongside someone who's fully invested in your results.",
      badge: null,
      ctaLabel: "DM for Rates",
      ctaHref: "https://instagram.com/wealthymindedfitness",
    },
    {
      icon: "📲",
      name: "Online Coaching",
      desc: "Train anywhere in the world with Jordan's programming in your pocket. Custom plans, weekly check-ins, nutrition guidance, and direct access to Jordan when you need it.",
      badge: "Popular",
      ctaLabel: "DM for Rates",
      ctaHref: "https://instagram.com/wealthymindedfitness",
    },
    {
      icon: "🔥",
      name: "Transformation Program",
      desc: "The full package. A structured, time-bound program combining training, nutrition, and mindset coaching to deliver the most dramatic results of your life — documented and measurable.",
      badge: null,
      ctaLabel: "DM for Rates",
      ctaHref: "https://instagram.com/wealthymindedfitness",
    },
  ],

  // ── Testimonials ─────────────────────────────────────────
  testimonials: [
    {
      quote:
        "I lost 42 pounds in 16 weeks working with Jordan. But the bigger change? I finally believe I'm capable of anything. He doesn't just train your body — he rewires your mindset.",
      author: "Marcus R.",
      result: "−42 lbs · 16 Weeks · Online Coaching",
      initials: "MR",
    },
    {
      quote:
        "I've had trainers before. Jordan is different. He shows up for you every single day — checks in, adjusts the plan, pushes you when you're ready to quit. Best investment I've made in myself.",
      author: "Taylor J.",
      result: "Transformation Program · Denver, CO",
      initials: "TJ",
    },
    {
      quote:
        "I'm a CEO. My time is worth a lot. Jordan made every minute count. The program was smart, efficient, and I hit my goal physique in under 3 months. Worth every penny.",
      author: "Alex W.",
      result: "In-Person Training · Executive Client",
      initials: "AW",
    },
  ],

  // ── Footer ───────────────────────────────────────────────
  footerText: "© 2026 Jordan Lodge",
} as const;

// ─────────────────────────────────────────────────────────────
// END CONFIG — components below are generic, driven by CONFIG
// ─────────────────────────────────────────────────────────────

export default function JordanLodgePage() {
  const c = CONFIG;
  const col = c.colors;

  return (
    <div style={{ background: col.bg, color: "#fff", fontFamily: "var(--font-inter), sans-serif" }}>
      {/* NAV */}
      <nav
        style={{ borderBottom: `1px solid ${col.accent}4D` }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md"
        aria-label="Main navigation"
      >
        <span
          className="font-montserrat font-black text-sm tracking-widest uppercase"
          style={{ color: col.accent }}
        >
          {c.brandName}
        </span>
        <a
          href={c.primaryCtaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-sm transition-colors"
          style={{ background: col.accent, color: "#fff" }}
        >
          {c.primaryCtaLabel}
        </a>
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${col.bg} 0%, #0f1f0f 50%, ${col.bg} 100%)`,
        }}
      >
        {/* Green glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 40%, ${col.accent}2E 0%, transparent 70%)`,
          }}
        />
        <p
          className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-5 relative"
          style={{ color: col.accent }}
        >
          {c.eyebrow}
        </p>
        <h1 className="font-montserrat font-black text-5xl md:text-7xl uppercase tracking-tight leading-none max-w-2xl mb-5 relative">
          {c.heroHeadline.map((line, i) => (
            <span key={i} className="block">
              {i === 1 ? <span style={{ color: col.accent }}>{line}</span> : line}
            </span>
          ))}
        </h1>
        <p className="text-sm max-w-sm mb-10 relative" style={{ color: col.textMuted }}>
          {c.heroSub}
        </p>
        <a
          href={c.primaryCtaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat font-bold text-xs tracking-widest uppercase px-9 py-4 rounded-sm transition-all hover:-translate-y-0.5 relative"
          style={{ background: col.accent, color: "#fff" }}
        >
          {c.primaryCtaLabel}
        </a>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs tracking-widest uppercase"
          style={{ color: col.textMuted }}>
          <div className="w-px h-9" style={{ background: `linear-gradient(to bottom, ${col.accent}, transparent)` }} />
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6" style={{ background: col.cardBg }}>
        <div className="max-w-xl mx-auto">
          <p className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: col.accent }}>
            About {c.clientName}
          </p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase leading-tight mb-4">
            {c.about.title.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <div className="w-12 h-0.5 mb-6" style={{ background: col.accent }} />
          {c.about.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "#cccccc" }}>
              {p}
            </p>
          ))}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {c.about.stats.map((s) => (
              <div
                key={s.label}
                className="text-center py-5 rounded"
                style={{ border: `1px solid ${col.accent}59`, background: `${col.accent}0F` }}
              >
                <div className="font-montserrat font-black text-2xl leading-none mb-1" style={{ color: col.accent }}>
                  {s.num}
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: col.textMuted }}>
                  {s.label}
                </div>
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
          <div className="w-12 h-0.5 mb-3" style={{ background: col.accent }} />
          <p className="text-sm mb-8" style={{ color: col.textMuted }}>
            All programs are built around you. DM for rates and availability.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {c.services.map((svc) => (
              <div
                key={svc.name}
                className="relative rounded p-6 transition-all hover:-translate-y-1 group overflow-hidden"
                style={{ background: col.cardBg, border: `1px solid ${col.cardMid}` }}
              >
                {/* top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: col.accent }}
                />
                {svc.badge && (
                  <span
                    className="absolute top-3 right-3 font-montserrat font-bold text-xs tracking-widest uppercase px-2 py-0.5 rounded-sm"
                    style={{ background: col.accent, color: "#fff" }}
                  >
                    {svc.badge}
                  </span>
                )}
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="font-montserrat font-bold text-base uppercase tracking-wide mb-3">
                  {svc.name}
                </h3>
                <p className="text-xs leading-relaxed mb-5" style={{ color: col.textMuted }}>
                  {svc.desc}
                </p>
                <a
                  href={svc.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat font-bold text-xs tracking-widest uppercase"
                  style={{ color: col.accent }}
                >
                  {svc.ctaLabel} →
                </a>
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
              <div
                key={t.author}
                className="rounded-r px-6 py-7"
                style={{ background: col.bg, borderLeft: `3px solid ${col.accent}` }}
              >
                <p className="text-sm italic leading-relaxed mb-5" style={{ color: "#cccccc" }}>
                  <span style={{ color: col.accent, fontSize: "1.4rem", lineHeight: 0, verticalAlign: "-0.35rem", marginRight: "0.15rem" }}>&ldquo;</span>
                  {t.quote}
                  <span style={{ color: col.accent, fontSize: "1.4rem", lineHeight: 0, verticalAlign: "-0.35rem", marginLeft: "0.15rem" }}>&rdquo;</span>
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-montserrat font-bold text-sm flex-shrink-0"
                    style={{ background: col.accent, color: "#fff" }}
                  >
                    {t.initials}
                  </div>
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
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, #0f1f0f 0%, ${col.bg} 100%)` }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${col.accent}1F 0%, transparent 70%)` }}
        />
        <div className="max-w-sm mx-auto relative">
          <p className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: col.accent }}>
            Let&apos;s Get to Work
          </p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl uppercase leading-tight mb-3">
            <span className="block">Ready to</span>
            <span className="block">Transform?</span>
          </h2>
          <p className="text-sm mb-10" style={{ color: col.textMuted }}>
            Your next level is waiting. Take the first step — Jordan will take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={c.primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all hover:-translate-y-0.5"
              style={{ background: col.accent, color: "#fff" }}
            >
              DM Jordan on Instagram
            </a>
            <a
              href={c.emailCtaHref}
              className="font-montserrat font-bold text-xs tracking-widest uppercase px-8 py-3.5 rounded-sm border-2 transition-all hover:bg-white hover:text-black"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 text-center border-t"
        style={{ background: "#050505", borderColor: col.cardMid }}
      >
        <div
          className="font-montserrat font-black text-sm tracking-widest uppercase mb-2"
          style={{ color: col.accent }}
        >
          {c.brandName}
        </div>
        <p className="text-xs" style={{ color: col.textMuted }}>
          {c.footerText} ·{" "}
          {c.instagramHandle && (
            <a
              href={`https://instagram.com/${c.instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: col.accent }}
            >
              @{c.instagramHandle}
            </a>
          )}
        </p>
        <p className="text-xs mt-3" style={{ color: col.textMuted }}>
          Site built by{" "}
          <a href="/" style={{ color: col.textMuted, textDecoration: "underline" }}>
            ClarityStack Advisory
          </a>
        </p>
      </footer>
    </div>
  );
}
