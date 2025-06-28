"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [burnedButtons, setBurnedButtons] = useState<Record<string, boolean>>({});
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleNavClick = (id: string) => {
    scrollTo(id);
    setBurnedButtons(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const triggerDistortion = () => {
      if (headerElement.classList.contains('header-distort')) {
        return;
      }
      headerElement.classList.add('header-distort');
    };

    const handleHeaderClick = (event: MouseEvent) => {
      triggerDistortion();

      const drop = document.createElement('div');
      drop.classList.add('raindrop');
      drop.style.left = `${event.clientX}px`;
      drop.style.top = `${event.clientY}px`;
      
      document.body.appendChild(drop);

      setTimeout(() => {
        drop.remove();
      }, 2000);
    };

    const handleAnimationEnd = () => {
      headerElement.classList.remove('header-distort');
    };

    headerElement.addEventListener('mouseenter', triggerDistortion);
    headerElement.addEventListener('click', handleHeaderClick);
    headerElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      headerElement.removeEventListener('mouseenter', triggerDistortion);
      headerElement.removeEventListener('click', handleHeaderClick);
      headerElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <header 
      ref={headerRef} 
      className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-2xl border-b border-border/30 relative overflow-hidden water-effect">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-bold text-foreground">Ayush Grover</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <button onClick={() => handleNavClick('skills')} className={cn("text-muted-foreground transition-all hover:text-primary px-3 py-2 rounded-md", { 'button-burned': burnedButtons['skills'] })}>Skills</button>
          <button onClick={() => handleNavClick('portfolio')} className={cn("text-muted-foreground transition-all hover:text-primary px-3 py-2 rounded-md", { 'button-burned': burnedButtons['portfolio'] })}>Portfolio</button>
          <button onClick={() => handleNavClick('thumbnails')} className={cn("text-muted-foreground transition-all hover:text-primary px-3 py-2 rounded-md", { 'button-burned': burnedButtons['thumbnails'] })}>Thumbnails</button>
          <button onClick={() => handleNavClick('testimonials')} className={cn("text-muted-foreground transition-all hover:text-primary px-3 py-2 rounded-md", { 'button-burned': burnedButtons['testimonials'] })}>Testimonials</button>
        </nav>
        <Button onClick={() => handleNavClick('contact')} variant="default" className={cn("bg-accent/70 text-accent-foreground hover:bg-accent/80 hidden md:inline-flex", { 'button-burned': burnedButtons['contact'] })}>
          Contact Me
        </Button>
      </div>
    </header>
  );
}
