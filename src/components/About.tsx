export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-silver-light">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-montserrat font-bold text-xs tracking-widest uppercase text-blue mb-3">
            About ClarityStack
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl tracking-tight text-[#1a1a2e] mb-6">
            Built by a local business owner — for local business owners.
          </h2>
          <p className="text-[#555] text-base leading-relaxed mb-4">
            ClarityStack is a venture of Clarity Performance LLC, based in
            Castle Rock, CO. We know what it&apos;s like to compete online as a
            small business because we do it ourselves every day.
          </p>
          <p className="text-[#555] text-base leading-relaxed">
            We don&apos;t build generic templates — we build sites that work for
            your specific market, your customers, and your goals. Every project
            gets the same attention we give our own business.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { stat: "2 weeks", label: "Average delivery time" },
            { stat: "Local", label: "Castle Rock & Denver based" },
            { stat: "0", label: "Hidden fees, ever" },
            { stat: "100%", label: "Satisfaction focus" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl p-6 border border-blue/10 text-center"
            >
              <div className="font-montserrat font-extrabold text-2xl text-blue mb-1">
                {item.stat}
              </div>
              <div className="text-[#555] text-xs leading-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
