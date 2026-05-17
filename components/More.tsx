'use client';

import { CV } from '@/lib/cv-data';
import { useLang } from '@/lib/i18n';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function More() {
  const { lang } = useLang();
  return (
    <section className="px-16 pt-5 pb-24">
      <SectionHeader
        cmd="tree {edu,patents,langs}"
        title="more"
        sub={
          lang === 'fr'
            ? '// formation, distinctions, langues'
            : '// education, honors, languages'
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Education */}
        <Reveal>
          <div className="border border-ink-850 p-7 h-full bg-ink-950/40">
            <div className="font-mono text-[11px] text-accent tracking-widest uppercase mb-5">
              ./edu
            </div>
            <div className="flex flex-col gap-5">
              {CV.education.items.map((e, i) => (
                <div key={i} className={i > 0 ? 'pt-4 border-t border-ink-850' : ''}>
                  <div className="font-mono text-sm text-ink-50 font-medium">{e.school}</div>
                  <div className="font-sans text-[13px] text-ink-400 mt-1">{e.degree[lang]}</div>
                  <div className="font-mono text-[10px] text-ink-600 mt-1.5 tracking-wider">
                    {e.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        {/* Honors */}
        <Reveal delay={80}>
          <div className="border border-ink-850 p-7 h-full bg-ink-950/40">
            <div className="font-mono text-[11px] text-accent tracking-widest uppercase mb-5">
              ./awards
            </div>
            <div className="flex flex-col gap-3.5">
              {CV.honors.items.map((h, i) => (
                <div key={i} className="flex gap-2.5 items-baseline">
                  <span
                    className={`font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 min-w-[50px] text-center flex-shrink-0 ${
                      h.kind === 'patent'
                        ? 'bg-accent text-ink-950'
                        : 'bg-ink-850 text-ink-400'
                    }`}
                  >
                    {h.kind}
                  </span>
                  <span className="font-sans text-[13px] text-ink-300 leading-snug">
                    {h[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        {/* Languages */}
        <Reveal delay={160}>
          <div className="border border-ink-850 p-7 h-full bg-ink-950/40">
            <div className="font-mono text-[11px] text-accent tracking-widest uppercase mb-5">
              ./langs
            </div>
            <div className="flex flex-col gap-5">
              {CV.languages.items.map((l, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="font-mono text-[13px] text-ink-50 font-medium">
                      {l[lang]}
                    </span>
                    <span className="font-mono text-[10px] text-ink-500">
                      [{l.value}/5]
                    </span>
                  </div>
                  <div className="flex gap-0.5 font-mono text-xs">
                    {Array.from({ length: 5 }).map((_, n) => (
                      <span key={n} className={n < l.value ? 'text-accent' : 'text-ink-800'}>
                        {n < l.value ? '▓' : '░'}
                      </span>
                    ))}
                    <span className="ml-2 text-ink-500 text-[11px]">{l.level[lang]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
