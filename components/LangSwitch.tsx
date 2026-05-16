'use client';

import { useLang } from '@/lib/i18n';
import type { Lang } from '@/lib/cv-data';

export default function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex border border-ink-800 font-mono text-[11px] tracking-widest">
      {(['fr', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3.5 py-2 uppercase transition-colors ${
            lang === l
              ? 'bg-accent text-ink-950 font-bold'
              : 'bg-transparent text-ink-400 hover:text-ink-200'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
