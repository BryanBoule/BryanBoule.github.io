# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — local dev server at http://localhost:3000
- `npm run build` — production build. The site is statically exported (`output: 'export'`) to `out/`.
- `npm run lint` — Next.js ESLint.
- `npm run start` — serves a non-export build; rarely useful here since deploy targets static export.

There is no test suite.

## Architecture

Single-page portfolio: Next.js 14 App Router + TypeScript + Tailwind, statically exported and deployed to GitHub Pages via `.github/workflows/deploy.yml` (triggers on push to `main` — note the current local branch is `master`).

**Content is centralized in [lib/cv-data.ts](lib/cv-data.ts).** Every section (hero, about, experience, skills, contact, etc.) reads from the `CV` object. Each string is a `Localized<T> = { fr: T; en: T }`. To edit copy, edit this file — do not hard-code text in components.

**Internationalization is client-only.** [lib/i18n.tsx](lib/i18n.tsx) exposes a `LangProvider` (wraps the page in [app/page.tsx](app/page.tsx)) and `useLang()` hook. Language state lives in React context with no persistence or routing — `[LangSwitch.tsx](components/LangSwitch.tsx)` flips it.

**Path alias:** `@/*` maps to the repo root (see [tsconfig.json](tsconfig.json)). Imports look like `@/lib/cv-data`, `@/components/Hero`.

**Theming via one CSS variable.** `--accent` (RGB triplet) is defined in [app/globals.css](app/globals.css) and consumed in [tailwind.config.ts](tailwind.config.ts) as `rgb(var(--accent) / <alpha-value>)`, so `bg-accent/10`, `text-accent`, etc. all retint when `--accent` changes. Dark palette is the custom `ink-*` scale in the Tailwind config.

**GitHub Pages basePath logic** ([next.config.mjs](next.config.mjs)): when `GITHUB_PAGES=true` (set by the workflow), `basePath` is derived from `GITHUB_REPOSITORY` unless the repo is named `<user>.github.io`. The resolved value is exposed at runtime via `NEXT_PUBLIC_BASE_PATH` — use it when constructing asset URLs in client code (e.g. images, the chess puzzle) so they don't 404 in production.

**Static-export constraints:** no server components doing runtime fetches, no API routes, no `next/image` optimization (`images.unoptimized: true`), `trailingSlash: true`. Anything stateful must be a `'use client'` component.

**Chess puzzle gate** ([components/ChessPuzzle.tsx](components/ChessPuzzle.tsx)): three mate-in-1 positions rotate by day-of-year; solving unlocks the contact email. Pieces use `K/Q/R/B/N/P` (uppercase white, lowercase black, `.` empty).
