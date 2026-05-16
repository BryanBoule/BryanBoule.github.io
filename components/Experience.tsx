'use client';

import { CV } from '@/lib/cv-data';
import { useLang } from '@/lib/i18n';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Experience() {
  const { lang } = useLang();
  return (
    <section id="work" className="px-16 pt-5 pb-24">
      <SectionHeader
        cmd="ls -la experience/"
        title="experience"
        sub={
          lang === 'fr'
            ? `total ${CV.experience.length} · trié par date desc`
            : `total ${CV.experience.length} · sorted desc`
        }
      />
      <div className="border border-ink-850 bg-ink-950/40 overflow-hidden">
        {/* Header row */}
        <div className="grid grid-cols-[120px_1fr_1.2fr_130px] gap-6 px-6 py-3 font-mono text-[10px] text-ink-600 uppercase tracking-widest border-b border-ink-850">
          <span>PERIOD</span>
          <span>COMPANY</span>
          <span>ROLE / NOTES</span>
          <span className="text-right">LOC</span>
        </div>
        {CV.experience.map((xp, i) => (
          <Reveal key={i} delay={i * 40}>
            <div
              className={`group grid grid-cols-[120px_1fr_1.2fr_130px] gap-6 px-6 py-5 font-mono transition-colors hover:bg-accent/[0.06] ${
                i === CV.experience.length - 1 ? '' : 'border-b border-ink-850'
              }`}
            >
              <span className="text-[11px] text-ink-500 self-center">{xp.period}</span>
              <span className="flex items-center gap-2 text-[15px] text-ink-50 font-medium">
                {xp.current && (
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                    style={{ boxShadow: '0 0 8px rgb(var(--accent))' }}
                  />
                )}
                {xp.co}
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-[13px] text-ink-300">{xp.role[lang]}</span>
                <span className="text-[12px] text-ink-500 font-sans leading-snug [text-wrap:pretty]">
                  {xp.desc[lang]}
                </span>
              </span>
              <span className="text-[11px] text-ink-600 text-right self-center">{xp.loc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
