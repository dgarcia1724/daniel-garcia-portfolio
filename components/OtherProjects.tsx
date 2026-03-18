import Image from "next/image";

export default function OtherProjects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-12 border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Projects
        </h2>

        {/* Prestige Finance */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <h3 className="text-2xl font-bold text-slate-900">
              Prestige Finance
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/dgarcia1724/prestige-finance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg text-sm hover:bg-slate-50 transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub ↗
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-sm mb-5">
            Finance web app with Redux Toolkit state management and 70%+ Jest
            test coverage.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Redux Toolkit", "Jest", "TypeScript"].map((tag) => (
              <span
                key={tag}
                className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["accounts", "profile", "send", "transactions"].map((name) => (
              <div
                key={name}
                className="rounded-xl overflow-hidden border border-slate-200 shadow-sm"
              >
                <Image
                  src={`/images/${name}.png`}
                  alt={name}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Peak Sports */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <h3 className="text-2xl font-bold text-slate-900">Peak Sports</h3>
            <div className="flex gap-3">
              <a
                href="https://www.behance.net/gallery/143472421/Peak-Sports-Streaming-App"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg text-sm hover:bg-slate-50 transition-colors shadow-sm"
              >
                Behance ↗
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-sm mb-5">
            Figma UI/UX design — Instagram for sports highlights. End-to-end
            prototype.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Figma", "UI/UX", "Prototyping"].map((tag) => (
              <span
                key={tag}
                className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <Image
                src="/images/main-photo.png"
                alt="Peak Sports main"
                width={1200}
                height={700}
                className="w-full object-contain bg-slate-50"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "design-1",
                "design-2",
                "lo-fi-wireframe",
                "lo-fi-wireframe-2",
              ].map((name) => (
                <div
                  key={name}
                  className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
                >
                  <Image
                    src={`/images/${name}.png`}
                    alt={name}
                    width={800}
                    height={600}
                    className="w-full object-contain bg-slate-50"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SafeRx RAG */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <h3 className="text-2xl font-bold text-slate-900">SafeRx</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/dgarcia1724/SafeRx-Analytics-Knowledge-Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg text-sm hover:bg-slate-50 transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub ↗
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-sm mb-5">
            RAG pipeline achieving 96% recall@5 across FDA drug label datasets.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Python", "LangChain", "FAISS", "OpenAI"].map((tag) => (
              <span
                key={tag}
                className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {["rag-architecture", "rag-project-structure", "tech-stack"].map(
              (name) => (
                <div
                  key={name}
                  className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
                >
                  <Image
                    src={`/images/${name}.png`}
                    alt={name}
                    width={1200}
                    height={700}
                    className="w-full object-contain bg-slate-50"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
