import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";

const trustItems = [
  "Mobile-First Design",
  "Fast Load Times",
  "Local SEO Optimized",
  "Castle Rock & Denver Based",
];

const testimonials = [
  {
    quote:
      "ClarityStack built us a site that actually gets us calls. Within the first month we had 3 new leads from Google — that never happened before.",
    author: "Mike R.",
    location: "Castle Rock, CO — Home Services",
  },
  {
    quote:
      "Professional, fast, and they actually explained everything in plain English. No tech jargon — just a great website at a fair price.",
    author: "Sarah T.",
    location: "Denver, CO — Fitness Studio",
  },
  {
    quote:
      "We went from zero online presence to ranking on the first page of Google for our neighborhood. Worth every penny.",
    author: "Carlos M.",
    location: "Lone Tree, CO — Restaurant Owner",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Trust Bar */}
      <div className="bg-silver-light py-5 px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item) => (
            <div
              key={item}
              className="font-montserrat font-semibold text-sm text-[#555] flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#4169E1"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Problem section */}
      <section id="problem" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-montserrat font-bold text-xs tracking-widest uppercase text-blue mb-3">
            The Problem
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl tracking-tight text-[#1a1a2e] mb-4">
            Most local businesses lose customers to competitors with better
            websites.
          </h2>
          <p className="text-[#555] text-base max-w-xl mb-14">
            97% of people search online before visiting a local business. If
            your site looks outdated — or you don&apos;t have one — you&apos;re
            invisible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "❌",
                title: "Outdated or missing websites",
                desc: "Customers assume you're out of business or not professional. First impressions happen online now — not at the door.",
              },
              {
                icon: "❌",
                title: "No lead capture or follow-up",
                desc: "Visitors land on your site and leave with no way for you to follow up. Every click is a missed opportunity.",
              },
              {
                icon: "❌",
                title: "Not showing up on Google",
                desc: "If you're not on the first page when someone searches for your service in Castle Rock or Denver, you don't exist to them.",
              },
              {
                icon: "✅",
                title: "We fix all three",
                desc: "ClarityStack builds fast, professional sites that capture leads and rank locally — so you stop losing business you should be winning.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-silver-light rounded-xl p-7 border-l-4 border-blue"
              >
                <h4 className="font-montserrat font-bold text-base text-[#1a1a2e] mb-2">
                  {card.icon} {card.title}
                </h4>
                <p className="text-[#555] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <HowItWorks />
      <About />

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-blue">
        <div className="max-w-5xl mx-auto">
          <p className="font-montserrat font-bold text-xs tracking-widest uppercase text-white/70 mb-3">
            What Clients Say
          </p>
          <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl tracking-tight text-white mb-4">
            Results matter. Here&apos;s what our clients think.
          </h2>
          <p className="text-white/70 text-base max-w-xl mb-14">
            We&apos;re building our portfolio — your business could be our next
            success story.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white/10 border border-white/20 rounded-xl p-7 backdrop-blur-sm"
              >
                <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
                <blockquote className="text-white/90 text-sm italic leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="font-montserrat font-bold text-sm text-white">
                  {t.author}
                  <span className="block font-normal text-white/60 text-xs mt-0.5">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white/60 text-center py-8 px-6 text-sm">
        <div className="font-montserrat font-extrabold text-white text-lg mb-2">
          ClarityStack Advisory
        </div>
        <p>
          A venture of{" "}
          <a
            href="https://clarity-performance.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white"
          >
            Clarity Performance LLC
          </a>{" "}
          — Castle Rock, CO
        </p>
        <p className="mt-2">
          <a
            href="mailto:clarityperformance@outlook.com"
            className="text-white/70 hover:text-white"
          >
            clarityperformance@outlook.com
          </a>
        </p>
        <p className="mt-4 text-xs">
          © 2025 Clarity Performance LLC. All rights reserved.
        </p>
      </footer>
    </>
  );
}
