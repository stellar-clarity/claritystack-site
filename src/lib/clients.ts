export interface ClientConfig {
  slug: string;
  name: string;
  tagline: string;
  eyebrow: string;
  heroHeadline: string;
  heroSub: string;
  ctaLabel: string;
  ctaHref: string;
  emailCta?: string;
  colors: {
    accent: string;
    accentLight: string;
    bg: string;
    cardBg: string;
  };
  about: {
    title: string;
    body: string[];
    stats: { num: string; label: string }[];
  };
  services: {
    icon: string;
    name: string;
    desc: string;
    badge?: string;
    ctaLabel: string;
    ctaHref: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    result: string;
    initials: string;
  }[];
  instagram?: string;
  footerLine: string;
}

export const clients: Record<string, ClientConfig> = {
  "jordan-lodge": {
    slug: "jordan-lodge",
    name: "Wealthy Minded Fitness",
    tagline: "Celebrity Fitness Trainer",
    eyebrow: "Celebrity Fitness Trainer",
    heroHeadline: "Train Like Your Life Depends On It",
    heroSub:
      "Stop settling. Start transforming. Jordan Lodge builds athletes, executives, and everyday people into the best versions of themselves.",
    ctaLabel: "Work With Jordan",
    ctaHref: "https://instagram.com/wealthymindedfitness",
    emailCta: "mailto:jordan@wealthymindedfitness.com",
    colors: {
      accent: "#2D6A2D",
      accentLight: "#3a8a3a",
      bg: "#0a0a0a",
      cardBg: "#1a1a1a",
    },
    about: {
      title: "More Than a Trainer",
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
    services: [
      {
        icon: "🏋️",
        name: "In-Person Training",
        desc: "One-on-one sessions with Jordan in Denver. Hands-on coaching, real-time form correction, and the energy of training alongside someone who's fully invested in your results.",
        ctaLabel: "DM for Rates",
        ctaHref: "https://instagram.com/wealthymindedfitness",
      },
      {
        icon: "📲",
        name: "Online Coaching",
        badge: "Popular",
        desc: "Train anywhere in the world with Jordan's programming in your pocket. Custom plans, weekly check-ins, nutrition guidance, and direct access to Jordan when you need it.",
        ctaLabel: "DM for Rates",
        ctaHref: "https://instagram.com/wealthymindedfitness",
      },
      {
        icon: "🔥",
        name: "Transformation Program",
        desc: "The full package. A structured, time-bound program combining training, nutrition, and mindset coaching to deliver the most dramatic results of your life — documented and measurable.",
        ctaLabel: "DM for Rates",
        ctaHref: "https://instagram.com/wealthymindedfitness",
      },
    ],
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
    instagram: "wealthymindedfitness",
    footerLine: "© 2026 Jordan Lodge · @wealthymindedfitness",
  },
};
