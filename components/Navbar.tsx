"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-blue-700 font-bold text-xl tracking-tight">DG</span>
        <div className="flex items-center gap-8">
          <a
            href="#glowconnect"
            className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
          >
            GlowConnect
          </a>
          <a
            href="#projects"
            className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
