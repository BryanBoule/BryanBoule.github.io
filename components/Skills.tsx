'use client';

import { CV } from '@/lib/cv-data';
import { useLang } from '@/lib/i18n';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Skills() {
  const { lang } = useLang();
  return (
    <section className="px-16 pt-5 pb-24">
      <SectionHeader
        cmd="cat skills.json | jq"
        title="skills"
        sub={lang === 'fr' ? '// outils & domaines' : '// tools & domains'}
      />
      <div className="border border-ink-850 bg-ink-950/40 font-mono p-8">
        <div className="text-ink-600 text-sm mb-2">{'{'}</div>
        {CV.skills.groups.map((g, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="pl-6 mb-4">
              <span className="text-accent text-sm">&quot;{g.label[lang]}&quot;</span>
              <span className="text-ink-600">: [</span>
              <div className="pl-6 flex flex-wrap gap-1.5 mt-2">
                {g.items.map((s, j) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2.5 py-1 bg-ink-900 text-ink-50 border border-ink-800 transition-colors hover:border-accent cursor-default"
                  >
                    &quot;{s}&quot;
                    {j < g.items.length - 1 && <span className="text-ink-600">,</span>}
                  </span>
                ))}
              </div>
              <div className="text-ink-600 text-sm mt-2">
                ]{i < CV.skills.groups.length - 1 ? ',' : ''}
              </div>
            </div>
          </Reveal>
        ))}
        <div className="text-ink-600 text-sm">{'}'}</div>
      </div>
    </section>
  );
}
