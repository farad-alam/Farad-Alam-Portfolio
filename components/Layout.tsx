"use client";

import { Inter } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}