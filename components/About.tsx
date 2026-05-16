'use client';

import { CV } from '@/lib/cv-data';
import { useLang } from '@/lib/i18n';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function About() {
  const { lang } = useLang();
  const paragraphs = CV.about.body[lang].split('\n\n');

  return (
    <section className="px-16 py-24">
      <SectionHeader
        cmd="cat about.md"
        title="about"
        sub={lang === 'fr' ? '# README — qui suis-je' : '# README — who I am'}
      />
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border border-ink-850 p-10 bg-ink-950/40">
          {paragraphs.map((p, i) => (
            <div
              key={i}
              className="font-sans text-[17px] text-ink-300 leading-relaxed [text-wrap:pretty] tracking-tight"
            >
              <span className="font-mono text-accent text-xs mr-2 align-baseline">
                ¶{String(i + 1).padStart(2, '0')}
              </span>
              {p}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
