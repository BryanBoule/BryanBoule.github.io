'use client';

import { useState } from 'react';
import { CV } from '@/lib/cv-data';
import { useLang } from '@/lib/i18n';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import ChessPuzzle from './ChessPuzzle';

export default function Contact() {
  const { lang } = useLang();
  const [unlocked, setUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);
  const ui = CV.ui;
  const email = CV.meta.email;

  function copy() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section id="contact" className="px-16 pt-5 pb-20">
      <SectionHeader
        cmd="./contact --auth=chess"
        title="contact"
        sub={
          lang === 'fr'
            ? "// l'email se débloque en gagnant la partie"
            : '// email unlocks when you win'
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-14">
        <Reveal>
          <div className="border border-ink-850 bg-ink-950/40 p-8 font-mono">
            <div className="text-[11px] text-ink-600 mb-4 tracking-wide">{'// social.config'}</div>
            <a
              href={CV.meta.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block py-2.5 text-ink-50 hover:text-accent transition-colors"
            >
              <span className="text-accent">$</span> open linkedin → /in/bryan-boule
            </a>
            <a
              href={CV.meta.company}
              target="_blank"
              rel="noreferrer"
              className="block py-2.5 text-ink-50 hover:text-accent transition-colors"
            >
              <span className="text-accent">$</span> open company → huvy.fr
            </a>
            <div className="mt-8 text-[11px] text-ink-600 border-t border-ink-850 pt-4 leading-relaxed">
              {lang === 'fr'
                ? "// L'idée : un visiteur qui sait jouer 1 coup de mat mérite que je réponde."
                : '// The idea: a visitor who can find a mate-in-1 deserves a reply.'}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col gap-6">
            <ChessPuzzle onSolve={() => setUnlocked(true)} />
            <div
              className={`px-6 py-5 border transition-all duration-500 ${
                unlocked
                  ? 'border-accent bg-accent/[0.05]'
                  : 'border-ink-850 bg-transparent'
              }`}
            >
              {!unlocked ? (
                <div className="flex items-center gap-3">
                  <span className="text-lg">🔒</span>
                  <span className="text-sm text-ink-400">{CV.contact.locked[lang]}</span>
                </div>
              ) : (
                <div className="flex flex-col gap-3.5">
                  <div className="text-xs text-accent font-mono tracking-wide">
                    ✓ {CV.contact.unlocked[lang]}
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href={`mailto:${email}`}
                      className="text-xl md:text-2xl font-semibold text-ink-50 hover:text-accent transition-colors tracking-tight"
                    >
                      {email}
                    </a>
                    <button
                      type="button"
                      onClick={copy}
                      className="text-[11px] uppercase tracking-widest bg-transparent border border-ink-700 text-ink-400 px-2.5 py-1.5 font-mono hover:text-ink-200"
                    >
                      {copied ? ui.copied[lang] : ui.copy_email[lang]}
                    </button>
                    <a
                      href={`mailto:${email}`}
                      className="text-[11px] uppercase tracking-widest bg-accent text-ink-950 px-3.5 py-2 font-mono font-semibold"
                    >
                      {ui.send_email[lang]} →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
