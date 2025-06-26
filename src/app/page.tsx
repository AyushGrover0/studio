import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Portfolio } from '@/components/landing/portfolio';
import { IntroGenerator } from '@/components/landing/intro-generator';
import { Testimonials } from '@/components/landing/testimonials';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <IntroGenerator />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
