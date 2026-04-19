import TerminalWindow from "@/components/ui/TerminalWindow";

const commands = [
  { cmd: "$ whoami",    val: "junior developer" },
  { cmd: "$ location",  val: "Togo, Afrique 🌍" },
  { cmd: "$ status",    val: "open to work ✓" },
  { cmd: "$ passion",   val: "web, ui/ux, open-source" },
];

const jsonLines = [
  `{`,
  `  "name"     : "Essoklina Ulrich",`,
  `  "alias"    : "Sul04",`,
  `  "role"     : "Junior Dev",`,
  `  "location" : "Togo, Afrique",`,
  `  "learning" : ["React", "Node.js"],`,
  `  "loves"    : ["UI/UX", "clean code"],`,
  `  "available": true,`,
  `}`,
];

export default function Hero() {
  return (
    <section id="bio" className="min-h-screen flex items-center pt-14">
      <div className="w-full max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="flex flex-col gap-6 animate-fade-up">
          <span className="font-mono text-sm text-[#00993D]">// IDENTITY_PROTOCOL</span>

          <div>
            <h1 className="font-sans text-6xl xl:text-7xl font-bold text-[#E0E0E0] leading-[1.05] tracking-tight">
              Essoklina<br />Ulrich
              <span className="inline-block w-1 h-16 bg-[#00FF87] ml-2 animate-blink align-bottom" />
            </h1>
          </div>

          <p className="font-mono text-lg text-[#00FF87]">
            {"< Développeur Web Junior />"}
          </p>

          <p className="font-sans text-[#6B6B6B] text-base leading-relaxed max-w-lg">
            Passionné par la création d&apos;interfaces web modernes et performantes.
            En apprentissage continu — chaque ligne de code est une victoire.
          </p>

          {/* Terminal commands */}
          <div className="flex flex-col gap-2 mt-2">
            {commands.map(({ cmd, val }) => (
              <p key={cmd} className="font-mono text-sm">
                <span className="text-[#00FF87]">{cmd}</span>
                <span className="text-[#6B6B6B]">   →   {val}</span>
              </p>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-2">
            {[
              { label: "[ GitHub ]",   href: "https://github.com/soo-rich" },
              { label: "[ LinkedIn ]", href: "#" },
              { label: "[ Email ]",    href: "#contact", green: true },
            ].map(({ label, href, green }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`font-mono text-sm transition-colors ${
                  green
                    ? "text-[#00FF87] hover:underline"
                    : "text-[#6B6B6B] hover:text-[#E0E0E0]"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: profile card */}
        <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <TerminalWindow title="profile.json">
            {/* Photo placeholder */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full border-2 border-[#00FF87] bg-[#1C1C1C] flex items-center justify-center">
                <span className="font-mono text-xs text-[#6B6B6B]">[ photo ]</span>
              </div>
            </div>

            {/* JSON */}
            <pre className="font-mono text-sm leading-7 overflow-x-auto">
              {jsonLines.map((line, i) => {
                const isString = line.includes('"') && line.includes(':');
                const colonIdx = line.indexOf(':');
                if (isString && colonIdx > -1) {
                  const key = line.slice(0, colonIdx + 1);
                  const val = line.slice(colonIdx + 1);
                  return (
                    <div key={i}>
                      <span className="text-[#6B6B6B]">{key}</span>
                      <span className="text-[#00FF87]">{val}</span>
                    </div>
                  );
                }
                return <div key={i} className="text-[#6B6B6B]">{line}</div>;
              })}
            </pre>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-[#242424]">
              {[
                { val: "10+", lbl: "projets" },
                { val: "2yr", lbl: "learning" },
                { val: "∞",   lbl: "curiosité" },
              ].map(({ val, lbl }) => (
                <div key={lbl} className="bg-[#1C1C1C] rounded-lg p-3 text-center">
                  <p className="font-mono text-2xl font-bold text-[#00FF87]">{val}</p>
                  <p className="font-mono text-[10px] text-[#6B6B6B] mt-1">{lbl}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-[#242424]">
              <p className="font-mono text-xs text-[#00FF87]">
                {">"} Ready to build something amazing?&nbsp;
                <span className="animate-blink">█</span>
              </p>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
