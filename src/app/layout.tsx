import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { GlobalRippleEffect } from '@/components/global-ripple-effect';

export const metadata: Metadata = {
  title: 'Ayush Grover | Video Editor & Visual Artist',
  description: 'I’m Ayush Grover — a passionate video editor and creative visual designer who turns raw clips into cinematic stories, from gaming montages to anime edits.',
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
      <body className="font-body antialiased relative">
        <div id="ripple-container" className="fixed inset-0 pointer-events-none z-[9999]"></div>
        <div className="liquid-bg"></div>
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
        <GlobalRippleEffect />
      </body>
    </html>
  );
}
