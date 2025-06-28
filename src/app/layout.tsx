import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { GlobalRippleEffect } from '@/components/global-ripple-effect';
import { RainfallEffect } from '@/components/global-rainfall-effect';

export const metadata: Metadata = {
  title: 'Anime_Sorcerer_0 | Video Editor & Visual Artist',
  description: 'I’m Anime_Sorcerer_0 — a passionate video editor and creative visual designer who turns raw clips into cinematic stories, from gaming montages to anime edits.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative transition-colors duration-500">
        <div className="liquid-bg" />
        <RainfallEffect />
        <div id="ripple-container" className="fixed inset-0 pointer-events-none z-[9999]"></div>
        <div className="relative z-10 bg-background/90 backdrop-blur-2xl">
          {children}
        </div>
        <Toaster />
        <GlobalRippleEffect />
      </body>
    </html>
  );
}
