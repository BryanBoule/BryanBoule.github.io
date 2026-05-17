import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const SITE_URL = 'https://bryanboule.pro';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Bryan Boulé - Co-fondateur & CTO @ HUVY',
  description:
    "Bryan Boulé, co-fondateur & CTO de HUVY. Je construis une IA médicale CE Class IIb qui détecte le mélanome avant qu'il ne soit trop tard. Vision par ordinateur, SaMD, deep learning médical.",
  keywords: [
    'Bryan Boulé',
    'Bryan Boule',
    'HUVY',
    'CTO HUVY',
    'co-fondateur HUVY',
    'IA médicale',
    'medical AI',
    'mélanome',
    'détection mélanome',
    'dispositif médical IA',
    'computer vision',
    'vision par ordinateur',
    'SaMD',
    'Software as a Medical Device',
    'CE Class IIb',
    'dermatologie IA',
    'deep learning médical',
    'machine learning santé',
  ],
  authors: [{ name: 'Bryan Boulé', url: 'https://www.linkedin.com/in/bryan-boule' }],
  creator: 'Bryan Boulé',
  publisher: 'Bryan Boulé',
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Bryan Boulé - Co-fondateur & CTO @ HUVY',
    description:
      "Co-fondateur & CTO de HUVY. IA médicale CE Class IIb pour la détection du mélanome. Vision par ordinateur, SaMD, deep learning.",
    url: SITE_URL,
    siteName: 'Bryan Boulé',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryan Boulé - Co-fondateur & CTO @ HUVY',
    description: 'IA médicale CE Class IIb pour la détection du mélanome.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bryan Boulé',
  alternateName: 'Bryan Boule',
  jobTitle: 'Co-fondateur & CTO',
  url: SITE_URL,
  sameAs: ['https://www.linkedin.com/in/bryan-boule', 'https://huvy.fr/'],
  worksFor: {
    '@type': 'Organization',
    name: 'HUVY',
    url: 'https://huvy.fr/',
  },
  knowsAbout: [
    'Medical AI',
    'Computer Vision',
    'Melanoma Detection',
    'Software as a Medical Device',
    'CE Class IIb',
    'Deep Learning',
  ],
  description:
    'Co-fondateur & CTO de HUVY, je dirige le développement d\'un dispositif médical IA certifié CE Class IIb pour l\'évaluation du risque de mélanome.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="bg-ink-990 text-ink-50">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
      <GoogleAnalytics gaId="G-FY6WEC298P" />
    </html>
  );
}
