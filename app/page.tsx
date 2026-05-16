import { LangProvider } from '@/lib/i18n';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Huvy from '@/components/Huvy';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import More from '@/components/More';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <LangProvider>
      <main className="min-h-screen bg-ink-990 text-ink-50">
        <Hero />
        <About />
        <Huvy />
        <Experience />
        <Skills />
        <More />
        <Contact />
        <Footer />
      </main>
    </LangProvider>
  );
}
