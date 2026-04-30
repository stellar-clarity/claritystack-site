import { notFound } from "next/navigation";
import { clients } from "@/lib/clients";

interface Props {
  params: { client: string };
}

export function generateStaticParams() {
  return Object.keys(clients).map((slug) => ({ client: slug }));
}

export default function ClientDemoPage({ params }: Props) {
  const config = clients[params.client];
  if (!config) notFound();

  const col = config.colors;

  return (
    <div style={{ background: col.bg, color: "#fff", fontFamily: "var(--font-inter), sans-serif" }}>
      {/* NAV */}
      <nav
        style={{ borderBottom: `1px solid ${col.accent}4D`, background: `${col.bg}EB` }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md"
      >
        <span className="font-montserrat font-black text-sm tracking-widest uppercase" style={{ color: col.accent }}>
          {config.name}
        </span>
        <a
          href={config.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-sm"
          style={{ background: col.accent, color: "#fff" }}
        >
          {config.ctaLabel}
        </a>
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${col.bg} 0%, #0f1f0f 50%, ${col.bg} 100%)` }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 60% at 50% 40%, ${col.accent}2E 0%, transparent 70%)` }} />
        <p className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-5 relative" style={{ color: col.accent }}>
          {config.eyebrow}
        </p>
        <h1 className="font-montserrat font-black text-5xl md:text-7xl uppercase tracking-tight leading-none max-w-2xl mb-5 relative">
          {config.heroHeadline}
        </h1>
        <p className="text-sm max-w-sm mb-10 relative" style={{ color: "#aaaaaa" }}>{config.heroSub}</p>
        <a
          href={config.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat font-bold text-xs tracking-widest uppercase px-9 py-4 rounded-sm hover:-translate-y-0.5 transition-transform relative"
          style={{ background: col.accent, color: "#fff" }}
        >
          {config.ctaLabel}
        </a>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6" style={{ background: col.cardBg }}>
        <div className="max-w-xl mx-auto">
          <p className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: col.accent }}>
            About {config.about.title}
          </p>
          {config.about.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "#cccccc" }}>{p}</p>
          ))}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {config.about.stats.map((s) => (
              <div key={s.label} className="text-center py-5 rounded"
                style={{ border: `1px solid ${col.accent}59`, background: `${col.accent}0F` }}>
                <div className="font-montserrat font-black text-2xl leading-none mb-1" style={{ color: col.accent }}>{s.num}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: "#aaaaaa" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6" style={{ background: col.bg }}>
        <div className="max-w-xl mx-auto">
          <p className="font-montserrat font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: col.accent }}>
            Services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            {config.services.map((svc) => (
              <div key={svc.name} className="relative rounded p-6 transition-all hover:-translate-y-1 group overflow-hidden"
                style={{ background: col.cardBg, border: `1px solid #2c2c2c` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: col.accent }} />
                {svc.badge && (
                  <span className="absolute top-3 right-3 font-montserrat font-bold text-xs tracking-widest uppercase px-2 py-0.5 rounded-sm"
                    style={{ background: col.accent, color: "#fff" }}>{svc.badge}</span>
                )}
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="font-montserrat font-bold text-base uppercase tracking-wide mb-3">{svc.name}</h3>
                <p className="text-xs leading-relaxed mb-5" style={{ color: "#aaaaaa" }}>{svc.desc}</p>
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
          <div className="space-y-4 mt-4">
            {config.testimonials.map((t) => (
              <div key={t.author} className="rounded-r px-6 py-7"
                style={{ background: col.bg, borderLeft: `3px solid ${col.accent}` }}>
                <p className="text-sm italic leading-relaxed mb-5" style={{ color: "#cccccc" }}>
                  &ldquo;{t.quote}&rdquo;
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

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center border-t" style={{ background: "#050505", borderColor: "#2c2c2c" }}>
        <div className="font-montserrat font-black text-sm tracking-widest uppercase mb-2" style={{ color: col.accent }}>
          {config.name}
        </div>
        <p className="text-xs" style={{ color: "#aaaaaa" }}>{config.footerLine}</p>
        <p className="text-xs mt-3" style={{ color: "#aaaaaa" }}>
          Site built by <a href="/" style={{ color: "#aaaaaa", textDecoration: "underline" }}>ClarityStack Advisory</a>
        </p>
      </footer>
    </div>
  );
}
