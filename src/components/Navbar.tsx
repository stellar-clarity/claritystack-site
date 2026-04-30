import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/95 backdrop-blur-md border-b border-blue/10 shadow-sm">
      <Link
        href="#hero"
        className="font-montserrat font-extrabold text-xl tracking-tight text-blue"
      >
        Clarity<span className="text-[#1a1a2e]">Stack</span>
      </Link>
      <a
        href="mailto:clarityperformance@outlook.com?subject=Free Quote Request"
        className="font-montserrat font-semibold text-sm bg-blue text-white px-5 py-2.5 rounded-lg hover:bg-blue-dark transition-colors"
      >
        Get a Free Quote
      </a>
    </nav>
  );
}
