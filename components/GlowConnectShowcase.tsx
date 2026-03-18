import Image from "next/image";

const features = [
  {
    title: "Solo Founder",
    icon: "🚀",
    body: "Built and launched alone — frontend, backend, infra, design. Zero to production.",
  },
  {
    title: "AI Moderation",
    icon: "🤖",
    body: "HiveMind API screens images + Google Perspective API filters toxic messages. Safety built in, not bolted on.",
  },
  {
    title: "Real-Time Chat",
    icon: "💬",
    body: "Built Socket.io / WebSocket real-time chat",
  },
  {
    title: "AWS Infrastructure",
    icon: "☁️",
    body: "EC2 + RDS + Redis in production. GitHub Actions CI/CD with automatic rollback on failed health checks.",
  },
  {
    title: "Swipe Engine",
    icon: "✨",
    body: "Framer Motion GPU-accelerated physics, 7-dimension compatibility filter, Haversine location matching.",
  },
  {
    title: "Security",
    icon: "🔒",
    body: "Hard/shadow/soft ban system, Zod validation across all 42 endpoints, Cloudinary image pipeline.",
  },
];

const techStack = [
  "React 19",
  "Next.js 15",
  "TypeScript",
  "Node / Express",
  "PostgreSQL",
  "Redis",
  "AWS EC2",
  "Socket.io",
  "Framer Motion",
  "Firebase",
  "Zustand",
  "TanStack Query",
];

const coreValues = [
  { label: "Liberal", dot: "#1D4ED8" },
  { label: "Left-Leaning", dot: "#38BDF8" },
  { label: "Moderate", dot: "#C084FC" },
  { label: "Right-Leaning", dot: "#FB7185" },
  { label: "Conservative", dot: "#B91C1C" },
  { label: "Not Political", dot: "#9CA3AF" },
];

const appScreenshots = [
  { src: "/images/onboarding-politics.png", alt: "Onboarding" },
  { src: "/images/matches-page.png", alt: "Matches page" },
  { src: "/images/chat-with-rachel.png", alt: "Chat" },
];

export default function GlowConnectShowcase() {
  return (
    <section id="glowconnect" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            GlowConnect
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://glowconnect.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-sm text-sm"
            >
              Visit glowconnect.app ↗
            </a>
            <a
              href="https://github.com/dgarcia1724/glow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors shadow-sm border border-slate-300 text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Main screenshot */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 mb-12">
          <Image
            src="/images/glowconnect-desktop-home.png"
            alt="GlowConnect desktop home"
            width={1200}
            height={700}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Problem → Solution */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              The Problem with Tinder & Bumble
            </h3>
            <p className="text-slate-500 text-base leading-relaxed">
              You swipe for hours, match, talk for days — then find out you're
              incompatible. Core values are buried, if shown at all.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
              GlowConnect's Solution
            </h3>
            <p className="text-slate-500 text-base text-center mb-6 leading-relaxed">
              Core values are color-coded at the top of every profile.
              Compatibility at a glance.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {coreValues.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white"
                >
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: v.dot }}
                  />
                  <span className="text-sm font-semibold text-slate-700">
                    {v.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile cards grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-6">
            Demo Profiles
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/images/demo-left.png", alt: "Left-Leaning profile" },
              { src: "/images/demo-moderate.png", alt: "Moderate profile" },
              { src: "/images/demo-right.png", alt: "Right-Leaning profile" },
            ].map((img) => (
              <div
                key={img.src}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[2/5] relative"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>

        {/* App screenshot journey */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-6">
            App Screenshots
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {appScreenshots.map((img) => (
              <div
                key={img.src}
                className="rounded-xl overflow-hidden border border-slate-200 shadow-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Feature callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{f.icon}</span>
                <h3 className="font-semibold text-slate-900 text-lg">
                  {f.title}
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        {/* System design */}
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
              src="/images/system-design.png"
              alt="GlowConnect production architecture"
              width={1200}
              height={700}
              className="w-full object-contain bg-slate-50"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mt-6">
            <Image
              src="/images/entities-api-design.png"
              alt="GlowConnect entities and API design"
              width={1200}
              height={700}
              className="w-full object-contain bg-slate-50"
            />
          </div>
        </div>

        {/* Tech stack badges */}
        <h3 className="text-xl font-bold text-slate-900 text-center mb-4 mt-12">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-full border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://glowconnect.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-sm"
          >
            Visit glowconnect.app ↗
          </a>
          <a
            href="https://github.com/dgarcia1724/glow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold rounded-lg transition-colors"
          >
            View GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
