import { CV } from '@/lib/cv-data';

export default function Footer() {
  return (
    <footer className="px-16 py-8 border-t border-ink-850 bg-ink-950/40">
      <div className="flex justify-between items-center font-mono text-[11px] text-ink-600">
        <span>$ echo &quot;© {new Date().getFullYear()} {CV.meta.name}&quot;</span>
        <span className="text-accent">exit 0</span>
      </div>
    </footer>
  );
}
