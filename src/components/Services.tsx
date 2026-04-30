const tiers = [
  {
    tier: "Starter",
    name: "Starter Site",
    price: "$1,500",
    priceNote: "one-time",
    desc: "Perfect for contractors, service pros, and new businesses that need a clean, professional web presence fast.",
    features: [
      "Up to 5 pages (Home, About, Services, Gallery, Contact)",
      "Mobile-responsive design",
      "Google Maps + contact form",
      "Basic local SEO setup",
      "1 round of revisions",
      "Delivered in 2 weeks",
    ],
    featured: false,
    emailSubject: "Starter Site Quote",
    emailBody: "Hi, I'm interested in the Starter Site package ($1,500).",
  },
  {
    tier: "Professional",
    name: "Growth Site",
    price: "$3,000",
    priceNote: "one-time",
    desc: "For growing businesses that want to manage their own content — blog, menu, photos — without calling a developer.",
    features: [
      "Everything in Starter Site",
      "Content management system (CMS)",
      "Blog / news section",
      "Advanced SEO + schema markup",
      "Google Analytics integration",
      "3 rounds of revisions",
      "Delivered in 3–4 weeks",
    ],
    featured: true,
    emailSubject: "Growth Site Quote",
    emailBody: "Hi, I'm interested in the Growth Site package ($3,000).",
  },
  {
    tier: "Growth",
    name: "Full Stack",
    price: "$5,500",
    priceNote: "one-time",
    desc: "For businesses serious about growth — automated follow-up, lead capture funnels, and booking integrations.",
    features: [
      "Everything in Growth Site",
      "Lead capture funnels + email automation",
      "Online booking or e-commerce",
      "CRM integration",
      "Monthly performance reporting",
      "Priority support + ongoing updates",
      "Custom timeline — built to scale",
    ],
    featured: false,
    emailSubject: "Full Stack Quote",
    emailBody: "Hi, I'm interested in the Full Stack package ($5,500).",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-silver-light">
      <div className="max-w-5xl mx-auto">
        <p className="font-montserrat font-bold text-xs tracking-widest uppercase text-blue mb-3">
          Pricing
        </p>
        <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl tracking-tight text-[#1a1a2e] mb-4">
          Simple, transparent packages.
        </h2>
        <p className="text-[#555] text-base max-w-xl mb-14">
          No surprise invoices. Pick the package that fits your business and
          budget — upgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.tier}
              className={`relative bg-white rounded-xl p-8 border-2 transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-blue ${
                t.featured
                  ? "border-blue bg-gradient-to-b from-[#f5f7ff] to-white shadow-lg"
                  : "border-transparent"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue text-white font-montserrat font-bold text-xs tracking-widest uppercase px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <p className="font-montserrat font-bold text-xs tracking-widest uppercase text-blue mb-2">
                {t.tier}
              </p>
              <h3 className="font-montserrat font-extrabold text-2xl text-[#1a1a2e] mb-1">
                {t.name}
              </h3>
              <p className="font-montserrat font-extrabold text-3xl text-blue mt-4 mb-1">
                {t.price}{" "}
                <span className="text-base text-[#555] font-semibold">
                  {t.priceNote}
                </span>
              </p>
              <p className="text-[#555] text-sm mb-5">{t.desc}</p>
              <ul className="mb-7 space-y-2">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-[#1a1a2e] border-b border-silver-light pb-2"
                  >
                    <span className="text-blue font-bold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:clarityperformance@outlook.com?subject=${encodeURIComponent(t.emailSubject)}&body=${encodeURIComponent(t.emailBody)}`}
                className={`block text-center font-montserrat font-bold text-sm py-3 px-6 rounded-lg border-2 border-blue transition-colors ${
                  t.featured
                    ? "bg-blue text-white hover:bg-blue-dark"
                    : "text-blue hover:bg-blue hover:text-white"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
