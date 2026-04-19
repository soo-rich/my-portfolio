"use client";
import { useState, useEffect } from "react";

const links = [
  { id: "bio",     label: "01.bio" },
  { id: "stack",   label: "02.stack" },
  { id: "code",    label: "03.code" },
  { id: "stats",   label: "04.stats" },
  { id: "contact", label: "05.mail" },
];

export default function Navbar() {
  const [active, setActive] = useState("bio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const link of [...links].reverse()) {
        const el = document.getElementById(link.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(link.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-10 transition-all duration-300 ${
        scrolled ? "bg-[#111]/95 backdrop-blur border-b border-[#242424]" : "bg-[#111] border-b border-[#242424]"
      }`}
    >
      {/* Left accent */}
      <div className="absolute left-0 top-0 w-[3px] h-full bg-[#00FF87]" />

      {/* Logo */}
      <span className="font-mono text-lg font-bold text-[#00FF87] tracking-tight mr-auto">
        sul.dev<span className="animate-blink">_</span>
      </span>

      {/* Nav links */}
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.id} className="relative">
            <button
              onClick={() => scrollTo(link.id)}
              className={`font-mono text-sm transition-colors duration-200 ${
                active === link.id ? "text-[#00FF87]" : "text-[#6B6B6B] hover:text-[#E0E0E0]"
              }`}
            >
              {link.label}
            </button>
            {active === link.id && (
              <span className="absolute -bottom-[13px] left-0 right-0 h-[3px] bg-[#00FF87] rounded-t" />
            )}
          </li>
        ))}
      </ul>

      {/* Status badge */}
      <div className="ml-10 flex items-center gap-2 px-3 py-1.5 rounded border border-[#00FF87]/40 bg-[#00FF87]/10">
        <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-pulse" />
        <span className="font-mono text-[11px] text-[#00FF87]">available</span>
      </div>
    </nav>
  );
}
