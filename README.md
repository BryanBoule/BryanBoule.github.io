# bryanboule.pro

Portfolio personnel — Next.js 14 (App Router) + TypeScript + Tailwind, exporté en statique sur GitHub Pages.

Site en ligne : **[bryanboule.pro](https://bryanboule.pro)**

## Particularités

- Export statique (`output: 'export'`) — pas de serveur, hébergement GitHub Pages.
- Switch FR / EN côté client (contexte React, pas de routing).
- Mate-en-1 quotidien qui débloque l'email de contact (rotation par jour de l'année).
- Theming via une seule variable CSS `--accent` (triplet RGB) consommée par Tailwind.
- SEO complet : metadata enrichies, JSON-LD Person schema, sitemap.xml généré, robots.txt.
- Google Analytics 4 via `@next/third-parties`.

## Commandes

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de prod → out/
npm run lint
```

## Personnalisation

- **Contenu** : tout est dans [lib/cv-data.ts](lib/cv-data.ts). Chaque chaîne est un objet `{ fr, en }`. Ne pas écrire de texte en dur dans les composants.
- **Couleur d'accent** : variable `--accent` dans [app/globals.css](app/globals.css).
- **Photo** : [public/photo.jpg](public/photo.jpg).
- **Puzzles d'échecs** : tableau `PUZZLES` dans [components/ChessPuzzle.tsx](components/ChessPuzzle.tsx) — chaque entrée définit la position, le coup gagnant et un indice bilingue.

## Déploiement

Push sur `master` → le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) build avec `GITHUB_PAGES=true` puis publie via `actions/deploy-pages`.

`next.config.mjs` calcule le `basePath` à partir du nom du repo, sauf si le repo termine par `.github.io` (cas de ce projet → `basePath` vide, compatible avec le domaine personnalisé).

Custom domain géré via [public/CNAME](public/CNAME). DNS chez OVH :
- 4 records `A` sur `@` → `185.199.108-111.153`
- 4 records `AAAA` sur `@` → `2606:50c0:8000-8003::153`
- 1 record `CNAME` sur `www` → `bryanboule.github.io.`

## Stack

| Couche       | Choix                         |
|--------------|-------------------------------|
| Framework    | Next.js 14, App Router        |
| Langage      | TypeScript                    |
| Styling      | Tailwind CSS                  |
| Polices      | Geist + Geist Mono            |
| Hébergement  | GitHub Pages (export statique)|
| Analytics    | Google Analytics 4            |
| CI/CD        | GitHub Actions                |
