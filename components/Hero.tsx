"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white">
      {/* Decorative blue gradient blobs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1D4ED8 0%, #EFF6FF 70%)" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8">
        {/* Top row: photo + intro text */}
        <div className="flex flex-col items-center text-center mb-6">
          {/* Circular headshot */}
          <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg flex-shrink-0">
            <Image
              src="/images/daniel-garcia-headshot.png"
              alt="Daniel Garcia"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-2">
            Daniel Garcia
          </h1>
          <p className="text-lg font-semibold text-blue-700">
            Full Stack Software Engineer &amp; Founder of GlowConnect
          </p>
          <p className="text-slate-500 text-base mt-1">
            UC Berkeley 2021 🎓 Cognitive Science 🧠
          </p>
        </div>
      </div>
    </section>
  );
}
