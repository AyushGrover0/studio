"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-2xl border-b border-border/30 relative overflow-hidden water-effect">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-bold text-foreground">Ayush Grover</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => scrollTo('skills')} className="text-muted-foreground transition-colors hover:text-primary">Skills</button>
          <button onClick={() => scrollTo('portfolio')} className="text-muted-foreground transition-colors hover:text-primary">Portfolio</button>
          <button onClick={() => scrollTo('thumbnails')} className="text-muted-foreground transition-colors hover:text-primary">Thumbnails</button>
          <button onClick={() => scrollTo('testimonials')} className="text-muted-foreground transition-colors hover:text-primary">Testimonials</button>
        </nav>
        <Button onClick={() => scrollTo('contact')} variant="default" className="bg-accent/70 text-accent-foreground hover:bg-accent/80 hidden md:inline-flex">
          Contact Me
        </Button>
      </div>
    </header>
  );
}
