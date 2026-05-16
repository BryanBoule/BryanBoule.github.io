'use client';

import { ReactNode } from 'react';

/** Command-prompt section header: `$ cmd` + // title + sub. */
export default function SectionHeader({
  cmd,
  title,
  sub,
}: {
  cmd: string;
  title: string;
  sub?: ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="font-mono text-xs text-accent tracking-wide mb-4">$ {cmd}</div>
      <h2 className="font-mono font-medium text-3xl md:text-5xl tracking-tight text-ink-50 m-0">
        <span className="text-ink-600">{'// '}</span>
        {title}
      </h2>
      {sub && <div className="font-mono text-xs text-ink-500 mt-2.5">{sub}</div>}
    </div>
  );
}
