"use client";
import { useState } from "react";
import TerminalWindow from "@/components/ui/TerminalWindow";

const contactInfo = [
  { label: "email",    val: "sessoklinaulrich@gmail.com", icon: "✉" },
  { label: "github",   val: "github.com/soo-rich",       icon: "⌥" },
  { label: "linkedin", val: "linkedin.com/in/sul04",      icon: "⬡" },
  { label: "location", val: "Togo, Afrique",              icon: "◎" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-10 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#00FF87]" />
          <span className="font-mono text-xs text-[#00FF87] tracking-widest">LETS_CONNECT</span>
        </div>
        <h2 className="font-sans text-5xl font-bold text-[#E0E0E0] tracking-tight mb-2">
          Collaborons ensemble
        </h2>
        <p className="font-mono text-sm text-[#6B6B6B] mb-12">
          Une idée, un projet, une opportunité ? Parlons-en.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Terminal form */}
          <TerminalWindow title="send_message.sh">
            {!sent ? (
              <form onSubmit={handle} className="flex flex-col gap-5">
                <p className="font-mono text-xs text-[#6B6B6B]">
                  # Remplis le formulaire ci-dessous
                </p>

                {[
                  { id: "name",    label: "nom",     type: "text",  placeholder: "Votre nom" },
                  { id: "email",   label: "email",   type: "email", placeholder: "votre@email.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="font-mono text-xs text-[#00FF87] block mb-1.5">
                      $ {label}
                    </label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="w-full bg-[#1C1C1C] border border-[#2E2E2E] rounded px-4 py-2.5 font-mono text-sm text-[#E0E0E0] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#00FF87]/50 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-xs text-[#00FF87] block mb-1.5">
                    $ message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou opportunité..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#1C1C1C] border border-[#2E2E2E] rounded px-4 py-2.5 font-mono text-sm text-[#E0E0E0] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#00FF87]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="font-mono text-sm font-bold text-[#0A0A0A] bg-[#00FF87] hover:bg-[#00cc6a] px-6 py-3 rounded transition-colors"
                >
                  {">"} Envoyer le message
                </button>
              </form>
            ) : (
              <div className="py-8 text-center flex flex-col gap-3">
                <p className="font-mono text-[#00FF87] text-4xl">✓</p>
                <p className="font-mono text-sm text-[#00FF87]">Message envoyé avec succès !</p>
                <p className="font-mono text-xs text-[#6B6B6B]">Je vous répondrai dans les plus brefs délais.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="font-mono text-xs text-[#6B6B6B] hover:text-[#E0E0E0] mt-2 underline"
                >
                  Nouveau message
                </button>
              </div>
            )}
          </TerminalWindow>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-[#242424] bg-[#171717] p-6">
              <p className="font-mono text-sm text-[#00FF87] mb-5">// direct_channels</p>
              <div className="flex flex-col gap-4">
                {contactInfo.map(({ label, val, icon }) => (
                  <div key={label} className="flex items-center gap-4 p-3 rounded-lg bg-[#1C1C1C]">
                    <span className="text-xl w-8 text-center">{icon}</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#6B6B6B] uppercase tracking-widest">{label}</p>
                      <p className="font-mono text-sm text-[#E0E0E0]">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="rounded-xl border border-[#00FF87]/20 bg-[#00FF87]/5 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-pulse" />
                <span className="font-mono text-xs text-[#00FF87] font-bold">DISPONIBLE</span>
              </div>
              <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed">
                Ouvert aux opportunités de stage, d&apos;alternance et de freelance.
                Réponse garantie sous 48h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
