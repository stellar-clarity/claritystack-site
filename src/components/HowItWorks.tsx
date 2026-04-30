const steps = [
  {
    num: "01",
    title: "Free Discovery Call",
    desc: "We learn about your business, your goals, and what's not working with your current online presence.",
  },
  {
    num: "02",
    title: "Custom Proposal",
    desc: "We send you a clear plan: scope, timeline, price. No fluff. No upsells you didn't ask for.",
  },
  {
    num: "03",
    title: "We Build It",
    desc: "You stay in the loop at every milestone. Our builds are fast — most sites go live in 2–4 weeks.",
  },
  {
    num: "04",
    title: "You Go Live",
    desc: "We launch, train you on updates, and make sure everything is performing before we hand you the keys.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="font-montserrat font-bold text-xs tracking-widest uppercase text-blue mb-3">
          The Process
        </p>
        <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl tracking-tight text-[#1a1a2e] mb-4">
          How it works.
        </h2>
        <p className="text-[#555] text-base max-w-xl mb-14">
          Simple, transparent, and no surprises. Here&apos;s what working with
          ClarityStack looks like.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col gap-3">
              <div className="font-montserrat font-extrabold text-5xl text-blue/20">
                {s.num}
              </div>
              <h3 className="font-montserrat font-bold text-lg text-[#1a1a2e]">
                {s.title}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
