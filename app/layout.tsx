import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://farad-alam.vercel.app/"),
  title: "Farad Alam - Full Stack Developer",
  description:
    "Professional portfolio showcasing modern web development projects and skills in React, Next.js, Node.js, and more.",
  keywords:
    "Full Stack Developer, React, Next.js, Node.js, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Farad Alam" }],
  creator: "Farad Alam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Farad Alam - Full Stack Developer",
    description:
      "Professional portfolio showcasing modern web development projects and skills.",
    siteName: "Farad Alam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farad Alam - Full Stack Developer",
    description:
      "Professional portfolio showcasing modern web development projects and skills.",
    creator: "@farad_alam",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
        <Toaster />
      </body>
    </html>
  );
}