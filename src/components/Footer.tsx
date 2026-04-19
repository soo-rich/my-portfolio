export default function Footer() {
  return (
    <footer className="border-t border-[#242424] bg-[#0A0A0A] py-6 px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-sm font-bold text-[#00FF87]">sul.dev_</span>
        <p className="font-mono text-xs text-[#6B6B6B]">
          © 2025 Essoklina Ulrich — Construit avec Next.js & ❤️
        </p>
        <p className="font-mono text-xs text-[#6B6B6B]">
          <span className="text-[#00FF87]">status:</span> always learning
        </p>
      </div>
    </footer>
  );
}
