import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bryan Boulé — Co-founder & CTO @ HUVY',
  description:
    'Bryan Boulé · Co-founder & CTO @ HUVY · I build a medical AI that catches melanoma before it\'s too late. Computer vision · SaMD · CE Class IIb.',
  authors: [{ name: 'Bryan Boulé' }],
  openGraph: {
    title: 'Bryan Boulé — Co-founder & CTO @ HUVY',
    description: 'Computer vision · medical AI · SaMD · CE Class IIb',
    type: 'website',
  },
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
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
