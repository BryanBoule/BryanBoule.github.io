'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Lang } from './cv-data';

interface LangCtxValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangCtx = createContext<LangCtxValue>({ lang: 'fr', setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}
