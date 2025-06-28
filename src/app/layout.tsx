import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { GlobalRippleEffect } from '@/components/global-ripple-effect';
import { RainfallEffect } from '@/components/global-rainfall-effect';

export const metadata: Metadata = {
  title: 'A.G. Visuals | Cybernetic Video & Motion Design',
  description: 'A.G. Visuals — A cyber-creative specializing in high-impact video editing and motion artistry for the next generation of content.',
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
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative bg-background">
        <div className="liquid-bg" />
        <RainfallEffect />
        <div id="ripple-container" className="fixed inset-0 pointer-events-none z-[9999]"></div>
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
        <GlobalRippleEffect />
      </body>
    </html>
  );
}
