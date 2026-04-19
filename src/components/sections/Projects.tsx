import TerminalWindow from "@/components/ui/TerminalWindow";

const projects = [
  {
    title: "Weather App",
    desc: "Application météo en temps réel avec géolocalisation et prévisions sur 7 jours via une API REST.",
    tags: ["JavaScript", "API REST", "CSS3"],
    color: "#00FF87",
    icon: "🌤",
    stars: 4,
    lang: "JavaScript",
    github: "#",
    live: "#",
  },
  {
    title: "Todo Manager",
    desc: "Gestionnaire de tâches avec persistance locale, drag & drop et filtres avancés.",
    tags: ["React", "LocalStorage", "Tailwind"],
    color: "#8B5CF6",
    icon: "✅",
    stars: 7,
    lang: "TypeScript",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio v1",
    desc: "Mon premier portfolio en HTML/CSS pur — là où tout a commencé.",
    tags: ["HTML5", "CSS3", "Responsive"],
    color: "#FFCC00",
    icon: "🚀",
    stars: 3,
    lang: "HTML",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="code" className="py-24 px-10 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#00FF87]" />
          <span className="font-mono text-xs text-[#00FF87] tracking-widest">CODE_VAULT</span>
        </div>
        <h2 className="font-sans text-5xl font-bold text-[#E0E0E0] tracking-tight mb-2">
          Mes réalisations
        </h2>
        <p className="font-mono text-sm text-[#6B6B6B] mb-12">
          Chaque projet est une aventure d&apos;apprentissage.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <TerminalWindow key={p.title} title={`${p.title.toLowerCase().replace(" ", "-")}.js`} className="flex flex-col">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: p.color }} />

              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
                  style={{
                    background: `${p.color}18`,
                    borderColor: `${p.color}40`,
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[#E0E0E0] text-lg">{p.title}</h3>
                  <span className="font-mono text-xs" style={{ color: p.color }}>
                    {p.lang}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed mb-5 flex-1">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded border"
                    style={{
                      color: p.color,
                      background: `${p.color}10`,
                      borderColor: `${p.color}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats + links */}
              <div className="flex items-center justify-between pt-4 border-t border-[#242424]">
                <span className="font-mono text-xs text-[#6B6B6B]">
                  ★ {p.stars}
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href={p.github}
                    className="font-mono text-xs hover:underline"
                    style={{ color: p.color }}
                  >
                    GitHub →
                  </a>
                  <a
                    href={p.live}
                    className="font-mono text-xs text-[#6B6B6B] hover:text-[#E0E0E0]"
                  >
                    Live ↗
                  </a>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/soo-rich"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-sm px-6 py-3 border border-[#00FF87]/40 text-[#00FF87] rounded hover:bg-[#00FF87]/10 transition-colors"
          >
            Voir tous les repos sur GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
