'use client';

import { CV } from '@/lib/cv-data';
import { useLang } from '@/lib/i18n';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function About() {
  const { lang } = useLang();
  const paragraphs = CV.about.body[lang].split('\n\n');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <section className="px-16 py-24">
      <SectionHeader
        cmd="cat about.md"
        title="about"
        sub={lang === 'fr' ? '# README - qui suis-je' : '# README - who I am'}
      />
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 border border-ink-850 p-10 bg-ink-950/40">
          <div className="flex flex-col gap-3">
            <div className="relative w-full aspect-square overflow-hidden border border-ink-800">
              <img
                src={`${basePath}/photo.jpg`}
                alt="Bryan Boulé"
                className="w-full h-full object-cover grayscale-[0.15]"
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 60%, rgb(var(--accent) / 0.08) 100%)',
                }}
              />
            </div>
            <div className="font-mono text-[10px] text-ink-600 tracking-widest uppercase">
              ./portrait.jpg
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
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
        </div>
      </Reveal>
    </section>
  );
}
