export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-28 pb-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #4169E1 0%, #2a3fa8 50%, #1a2875 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-2xl mx-auto">
        <div className="inline-block bg-white/15 border border-white/30 text-white font-montserrat font-semibold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          Castle Rock &amp; Denver, CO
        </div>
        <h1 className="font-montserrat font-extrabold text-white text-4xl md:text-6xl leading-tight tracking-tight mb-5">
          We build websites that get your business{" "}
          <em className="not-italic text-silver">found.</em>
        </h1>
        <p className="text-white/85 text-lg max-w-lg mx-auto mb-9">
          Custom websites, lead generation, and digital tools built for local
          businesses that want to grow — not just exist online.
        </p>
        <a
          href="mailto:clarityperformance@outlook.com?subject=Free Quote Request&body=Hi, I'd like to get a free quote for a website."
          className="inline-block bg-white text-blue font-montserrat font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all"
        >
          Get a Free Quote →
        </a>
        <p className="mt-5 text-white/50 text-sm">
          No contracts. No hidden fees. Just results.
        </p>
      </div>
    </section>
  );
}
