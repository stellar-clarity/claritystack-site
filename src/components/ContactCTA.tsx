"use client";

import { useState, FormEvent } from "react";

export default function ContactCTA() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const business = (form.elements.namedItem("business") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const pkg = (form.elements.namedItem("package") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = `Free Quote Request — ${business || name}`;
    const body = `Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nPackage: ${pkg}\n\nMessage:\n${message}`;
    window.location.href = `mailto:clarityperformance@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 px-6 bg-silver-light">
      <div className="max-w-5xl mx-auto">
        <p className="font-montserrat font-bold text-xs tracking-widest uppercase text-blue mb-3">
          Let&apos;s Talk
        </p>
        <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl tracking-tight text-[#1a1a2e] mb-4">
          Get your free quote today.
        </h2>
        <p className="text-[#555] text-base max-w-xl mb-14">
          No pressure, no hard sell. Tell us about your business and we&apos;ll
          put together a plan that works for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Left: contact info */}
          <div>
            <h3 className="font-montserrat font-extrabold text-2xl text-[#1a1a2e] mb-3">
              We&apos;d love to hear from you.
            </h3>
            <p className="text-[#555] text-sm mb-8 leading-relaxed">
              Whether you&apos;re starting from scratch or your current site
              isn&apos;t working, we&apos;ll give you an honest assessment and a
              clear path forward.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  value: (
                    <a href="mailto:clarityperformance@outlook.com" className="hover:underline">
                      clarityperformance@outlook.com
                    </a>
                  ),
                },
                {
                  icon: (
                    <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Service Area",
                  value: "Castle Rock, Denver & surrounding CO communities",
                },
                {
                  icon: (
                    <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: "Response Time",
                  value: "We reply within 1 business day",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <strong className="block font-montserrat font-semibold text-[#1a1a2e]">
                      {item.label}
                    </strong>
                    <span className="text-[#555]">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-8 shadow-lg space-y-4"
          >
            {[
              { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith", required: true },
              { id: "business", label: "Business Name", type: "text", placeholder: "Smith Roofing LLC", required: false },
              { id: "email", label: "Email Address", type: "email", placeholder: "jane@yourbusiness.com", required: true },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block font-montserrat font-semibold text-xs text-[#1a1a2e] mb-1.5"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full px-3.5 py-3 border border-[#dde2ee] rounded-lg text-sm text-[#1a1a2e] focus:outline-none focus:border-blue transition-colors"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="package"
                className="block font-montserrat font-semibold text-xs text-[#1a1a2e] mb-1.5"
              >
                I&apos;m interested in…
              </label>
              <select
                id="package"
                name="package"
                className="w-full px-3.5 py-3 border border-[#dde2ee] rounded-lg text-sm text-[#1a1a2e] focus:outline-none focus:border-blue transition-colors"
              >
                <option value="">Select a package</option>
                <option value="starter">Starter Site — $1,500</option>
                <option value="growth">Growth Site — $3,000</option>
                <option value="fullstack">Full Stack — $5,500</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-montserrat font-semibold text-xs text-[#1a1a2e] mb-1.5"
              >
                Tell us about your business
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="What kind of business do you have? What's your biggest challenge online?"
                className="w-full px-3.5 py-3 border border-[#dde2ee] rounded-lg text-sm text-[#1a1a2e] focus:outline-none focus:border-blue transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue text-white font-montserrat font-bold text-base py-3.5 rounded-lg hover:bg-blue-dark hover:-translate-y-0.5 transition-all"
            >
              {sent ? "Opening your email client…" : "Send My Free Quote Request →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
