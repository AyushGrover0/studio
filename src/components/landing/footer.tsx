"use client";
import Link from 'next/link';
import { AtSign } from 'lucide-react';

const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background/80 backdrop-blur-lg relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-bold">Anime_Sorcerer_0</span>
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Anime_Sorcerer_0. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <AtSign className="h-4 w-4" />
          <span>@anime_sorcerer_0</span>
        </div>
      </div>
    </footer>
  );
}
