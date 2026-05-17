'use client';

import { useEffect, useState } from 'react';
import { CV } from '@/lib/cv-data';
import { useLang } from '@/lib/i18n';
import LangSwitch from './LangSwitch';
import Clock from './Clock';

function useTypewriter(lines: string[], speed = 24, startDelay = 400) {
  const [out, setOut] = useState<string[]>(['']);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let li = 0,
      ci = 0;
    const acc: string[] = [''];

    function tick() {
      if (cancelled) return;
      if (li >= lines.length) {
        setDone(true);
        return;
      }
      if (ci > lines[li].length) {
        acc.push('');
        li++;
        ci = 0;
        setOut([...acc]);
        setTimeout(tick, 120);
        return;
      }
      acc[acc.length - 1] = lines[li].slice(0, ci);
      ci++;
      setOut([...acc]);
      setTimeout(tick, speed);
    }
    const t = setTimeout(tick, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [lines.join('|'), speed, startDelay]);

  return { out, done };
}

export default function Hero() {
  const { lang } = useLang();

  const lines =
    lang === 'fr'
      ? ['$ whoami', '> Bryan Boulé', '$ cat role.txt', '> Co-fondateur & CTO @ HUVY', '$ ./mission --short', "> Détecter le mélanome avant qu'il ne soit trop tard."]
      : ['$ whoami', '> Bryan Boulé', '$ cat role.txt', '> Co-founder & CTO @ HUVY', '$ ./mission --short', "> Catch melanoma before it's too late."];
  const { out, done } = useTypewriter(lines);

  return (
    <section className="relative min-h-[920px] overflow-hidden px-16 pt-10 pb-20">
      {/* Animated grid background */}
      <div aria-hidden className="absolute inset-0 bg-grid">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 800px 400px at 30% 10%, rgb(var(--accent) / 0.14) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex justify-between items-center font-mono text-[11px] uppercase tracking-widest text-ink-500 pb-14">
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-accent"
              style={{ boxShadow: '0 0 12px rgb(var(--accent))' }}
            />
            system: online
          </span>
          <span>
            fr-FR · <Clock />
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="hidden md:inline">v.01 / Terminal</span>
          <LangSwitch />
        </div>
      </div>

      {/* Terminal block */}
      <div className="relative z-10 max-w-[920px] mb-16 border border-ink-850 bg-ink-950/60 backdrop-blur-md px-12 py-10">
        <div className="flex gap-1.5 mb-7">
          <span className="w-2.5 h-2.5 rounded-full bg-ink-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="ml-auto font-mono text-[11px] text-ink-600">~/portfolio</span>
        </div>
        <div className="font-mono text-xl md:text-3xl leading-relaxed tracking-tight">
          {out.map((line, i) => {
            const isPrompt = line.startsWith('$');
            const isOutput = line.startsWith('>');
            const isLast = i === out.length - 1;
            return (
              <div
                key={i}
                className={`flex items-baseline ${
                  isPrompt ? 'text-accent' : isOutput ? 'text-ink-50 font-medium' : 'text-ink-500'
                }`}
              >
                <span>{line}</span>
                {isLast && !done && (
                  <span
                    className="inline-block w-[0.6em] h-[1em] bg-accent ml-1 animate-blink"
                    style={{ alignSelf: 'center' }}
                  />
                )}
              </div>
            );
          })}
          {done && (
            <div className="mt-4 text-base text-accent">
              ${' '}
              <span className="bg-accent text-ink-950 px-1 animate-blink">_</span>
            </div>
          )}
        </div>
      </div>

      {/* CTAs */}
      <div className="relative z-10 flex gap-3 flex-wrap">
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-5 py-3.5 bg-accent text-ink-950 font-mono text-[13px] font-semibold tracking-wide transition-transform hover:-translate-y-0.5"
        >
          ./show --work →
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-3.5 bg-transparent text-accent border border-accent/40 font-mono text-[13px] font-medium tracking-wide hover:bg-accent/10"
        >
          ./contact
        </a>
        <a
          href={CV.meta.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 bg-transparent text-accent border border-accent/40 font-mono text-[13px] font-medium tracking-wide hover:bg-accent/10"
        >
          ./linkedin
        </a>
      </div>
    </section>
  );
}
