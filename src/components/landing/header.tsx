"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
        if (element.classList.contains('header-distort')) {
            return;
        }
        element.classList.add('header-distort');
    };

    const handleAnimationEnd = (e: AnimationEvent) => {
        if (e.animationName === 'header-distortion') {
          element.classList.remove('header-distort');
        }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('animationend', handleAnimationEnd);

    return () => {
        if (element) {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('animationend', handleAnimationEnd);
        }
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-secondary/10 backdrop-blur-lg border-b border-border/30">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-bold text-foreground font-headline">A.G. VISUALS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Button variant="ghost" onClick={() => scrollTo('skills')}>Skills</Button>
          <Button variant="ghost" onClick={() => scrollTo('portfolio')}>Portfolio</Button>
          <Button variant="ghost" onClick={() => scrollTo('thumbnails')}>Thumbnails</Button>
          <Button variant="ghost" onClick={() => scrollTo('testimonials')}>Testimonials</Button>
        </nav>
        <Button onClick={() => scrollTo('contact')} className="hidden md:inline-flex" glow="accent">
          Contact Me
        </Button>
      </div>
    </header>
  );
}
