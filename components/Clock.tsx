'use client';

import { useEffect, useState } from 'react';

/** Live HH:MM:SS clock (Europe/Paris). */
export default function Clock() {
  const [str, setStr] = useState('');
  useEffect(() => {
    const update = () =>
      setStr(new Date().toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  // SSR-safe: render an empty span until hydration.
  return <span suppressHydrationWarning>{str || '- : - : -'}</span>;
}
