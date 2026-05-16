'use client';

import { CV } from '@/lib/cv-data';
import { useLang } from '@/lib/i18n';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Huvy() {
  const { lang } = useLang();
  return (
    <section className="px-16 pt-5 pb-24">
      <SectionHeader
        cmd="systemctl status huvy.service"
        title="huvy"
        sub={CV.huvy.title[lang]}
      />
      <Reveal>
        <div
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr] border border-accent/30"
          style={{
            background:
              'linear-gradient(180deg, rgb(var(--accent) / 0.05) 0%, transparent 100%)',
          }}
        >
          <div className="p-10 border-b md:border-b-0 md:border-r border-ink-850">
            <div className="font-mono text-[11px] text-accent mb-6 tracking-widest">
              ● ACTIVE (running) since {CV.huvy.since} · {CV.huvy.role[lang]}
            </div>
            <p className="font-sans text-2xl leading-snug text-ink-50 mb-8 tracking-tight [text-wrap:balance]">
              {CV.huvy.mission[lang]}
            </p>
            <div className="font-mono text-[11px] text-ink-500 mb-3">// stack</div>
            <div className="flex flex-wrap gap-1.5">
              {CV.huvy.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 bg-ink-900 text-ink-400 border border-ink-850"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 flex flex-col">
            <div className="font-mono text-[11px] text-ink-500 mb-4 tracking-widest">// impact</div>
            {CV.huvy.impact.map((it, i) => (
              <div
                key={i}
                className={`py-4 ${i > 0 ? 'border-t border-ink-850' : ''}`}
              >
                <div className="font-mono text-[22px] text-accent font-semibold tracking-tight">
                  {it.metric}
                </div>
                <div className="font-sans text-[13px] text-ink-400 mt-1.5 leading-snug">
                  {it[lang]}
                </div>
              </div>
            ))}
            <a
              href={CV.meta.company}
              target="_blank"
              rel="noreferrer"
              className="mt-6 font-mono text-xs text-accent tracking-wide self-start hover:underline"
            >
              $ curl huvy.fr →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
