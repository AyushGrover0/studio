import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Skills } from '@/components/landing/skills';
import { Portfolio } from '@/components/landing/portfolio';
import { Testimonials } from '@/components/landing/testimonials';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';
import { Thumbnails } from '@/components/landing/thumbnails';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Portfolio />
        <Thumbnails />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
