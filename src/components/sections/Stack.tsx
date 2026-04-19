const categories = [
  {
    id: "core",
    label: "// MAÎTRISÉ",
    desc: "Fondations solides",
    color: "#00FF87",
    border: "border-[#00FF87]/20",
    bg: "bg-[#00FF87]/5",
    textColor: "text-[#00FF87]",
    skills: [
      { name: "HTML5",      level: 90 },
      { name: "CSS3",       level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Git",        level: 70 },
      { name: "Responsive", level: 80 },
    ],
  },
  {
    id: "learning",
    label: "// EN APPRENTISSAGE",
    desc: "En progression active",
    color: "#8B5CF6",
    border: "border-[#8B5CF6]/20",
    bg: "bg-[#8B5CF6]/5",
    textColor: "text-[#8B5CF6]",
    skills: [
      { name: "React",      level: 50 },
      { name: "Node.js",    level: 45 },
      { name: "TypeScript", level: 40 },
      { name: "Tailwind",   level: 55 },
    ],
  },
  {
    id: "explore",
    label: "// DÉCOUVERTE",
    desc: "En cours d'exploration",
    color: "#FFCC00",
    border: "border-[#FFCC00]/20",
    bg: "bg-[#FFCC00]/5",
    textColor: "text-[#FFCC00]",
    skills: [
      { name: "Next.js",    level: 25 },
      { name: "PostgreSQL", level: 20 },
      { name: "Docker",     level: 15 },
      { name: "Figma",      level: 60 },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#00FF87]" />
          <span className="font-mono text-xs text-[#00FF87] tracking-widest">STACK_LABORATORY</span>
        </div>
        <h2 className="font-sans text-5xl font-bold text-[#E0E0E0] tracking-tight mb-2">
          Inventaire technique
        </h2>
        <p className="font-mono text-sm text-[#6B6B6B] mb-12">
          Mes outils — maîtrisés, en cours & en exploration.
        </p>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`rounded-xl border ${cat.border} ${cat.bg} p-6 flex flex-col gap-5`}
            >
              {/* Top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                style={{ background: cat.color }}
              />
              <div className="relative">
                <div
                  className="absolute -top-6 left-0 right-0 h-0.5 rounded-t-xl"
                  style={{ background: cat.color }}
                />
                <p className={`font-mono text-xs tracking-widest ${cat.textColor}`}>{cat.label}</p>
                <p className="font-mono text-xs text-[#6B6B6B] mt-1">{cat.desc}</p>
              </div>

              <div className="h-px bg-[#242424]" />

              {/* Skills */}
              <div className="flex flex-col gap-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-mono text-sm text-[#E0E0E0]">{skill.name}</span>
                      <span className={`font-mono text-xs ${cat.textColor}`}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[#1C1C1C] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%`, background: cat.color, opacity: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-3 border-t border-[#242424]">
                <span className={`font-mono text-[10px] ${cat.textColor}`}>
                  {cat.skills.length} outils
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
