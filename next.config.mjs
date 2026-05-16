/** @type {import('next').NextConfig} */
// Static export for GitHub Pages.
//
// 👉 If your repo is named `portfolio` and lives at github.com/<user>/portfolio,
//    set basePath / assetPrefix to '/portfolio' so assets resolve under
//    https://<user>.github.io/portfolio.
// 👉 If you use a custom domain or your repo is `<user>.github.io`, leave them blank.
//
// The NEXT_PUBLIC_BASE_PATH env var is read both at build and at runtime so the
// chess puzzle / image paths don't break in production.

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? '';
const basePath = isGithubPages && repo && !repo.endsWith('.github.io') ? `/${repo}` : '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
