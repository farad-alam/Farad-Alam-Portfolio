import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Farad Alam - Full Stack Developer',
  description: 'Professional portfolio of Farad Alam, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.',
  keywords: 'full stack developer, front end developer, backend developer, react, nextjs, javascript, typescript, node.js, express.js, web development, portfolio',
  openGraph: {
    title: 'Farad Alam - Full Stack Developer',
    description: 'Professional portfolio showcasing modern web development projects and skills.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}