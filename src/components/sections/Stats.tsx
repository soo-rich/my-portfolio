const stats = [
  { val: "150+", lbl: "Commits",        desc: "contributions totales",  color: "#00FF87" },
  { val: "10+",  lbl: "Repositories",   desc: "projets publics",        color: "#8B5CF6" },
  { val: "5+",   lbl: "Pull Requests",  desc: "PRs ouvertes/fusionnées",color: "#FFCC00" },
  { val: "2yr",  lbl: "En apprentissage", desc: "d'expérience active",  color: "#00FF87" },
];

// Generate contribution heatmap data (26 weeks × 7 days)
function generateHeatmap() {
  const grid: number[][] = [];
  for (let d = 0; d < 7; d++) {
    const row: number[] = [];
    for (let w = 0; w < 26; w++) {
      // More activity in recent weeks
      const recency = w / 26;
      const rand = Math.random();
      if (rand < 0.35) row.push(0);
      else if (rand < 0.55) row.push(Math.floor(1 + recency * 2));
      else if (rand < 0.75) row.push(Math.floor(2 + recency * 2));
      else row.push(Math.floor(3 + recency * 1.5));
    }
    grid.push(row);
  }
  return grid;
}

const heatmap = generateHeatmap();

const levelColors = [
  "#1C1C1C",        // 0 - none
  "#00993D40",      // 1 - low
  "#00993D80",      // 2 - medium
  "#00FF87B0",      // 3 - high
  "#00FF87",        // 4+ - peak
];

const recentActivity = [
  { time: "il y a 2h",  msg: "feat: add responsive nav to portfolio" },
  { time: "hier",       msg: "fix: mobile layout on hero section" },
  { time: "il y a 2j",  msg: "chore: setup Next.js + Tailwind project" },
  { time: "il y a 3j",  msg: "feat: create weather app API integration" },
  { time: "il y a 5j",  msg: "docs: update README with setup instructions" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#00FF87]" />
          <span className="font-mono text-xs text-[#00FF87] tracking-widest">ACTIVITY_LOGS</span>
        </div>
        <h2 className="font-sans text-5xl font-bold text-[#E0E0E0] tracking-tight mb-2">
          Tableau de bord
        </h2>
        <p className="font-mono text-sm text-[#6B6B6B] mb-12">
          Mes contributions et activités — toujours en mouvement.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(({ val, lbl, desc, color }) => (
            <div
              key={lbl}
              className="rounded-xl border border-[#242424] bg-[#171717] p-5"
            >
              <p className="font-mono text-3xl font-bold mb-1" style={{ color }}>
                {val}
              </p>
              <p className="font-sans text-sm font-semibold text-[#E0E0E0]">{lbl}</p>
              <p className="font-mono text-[11px] text-[#6B6B6B] mt-0.5">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom grid: heatmap + activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Contribution heatmap */}
          <div className="lg:col-span-2 rounded-xl border border-[#242424] bg-[#171717] p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-sm text-[#00FF87]">// contributions — 6 derniers mois</p>
              <span className="font-mono text-xs text-[#6B6B6B]">150+ commits</span>
            </div>

            {/* Grid */}
            <div className="flex flex-col gap-1">
              {heatmap.map((row, d) => (
                <div key={d} className="flex gap-1">
                  {row.map((level, w) => (
                    <div
                      key={w}
                      title={`${level} contributions`}
                      className="w-3.5 h-3.5 rounded-sm flex-shrink-0"
                      style={{ background: levelColors[Math.min(level, 4)] }}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-4">
              <span className="font-mono text-[10px] text-[#6B6B6B]">Moins</span>
              {levelColors.map((c, i) => (
                <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
              ))}
              <span className="font-mono text-[10px] text-[#6B6B6B]">Plus</span>
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-xl border border-[#242424] bg-[#171717] p-6">
            <p className="font-mono text-sm text-[#00FF87] mb-4">// recent_commits</p>
            <div className="flex flex-col gap-4">
              {recentActivity.map(({ time, msg }) => (
                <div key={msg} className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-[#6B6B6B]">{time}</span>
                  <p className="font-mono text-xs text-[#E0E0E0] leading-relaxed">{msg}</p>
                  <div className="h-px bg-[#242424]" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-mono text-xs text-[#00FF87] animate-blink">
                {">"} Always committing...█
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
