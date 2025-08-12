import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Farad Alam - Full Stack Developer',
//   description: 'Professional portfolio of Farad Alam, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.',
//   keywords: 'full stack developer, front end developer, backend developer, react, nextjs, javascript, typescript, node.js, express.js, web development, portfolio',
//   openGraph: {
//     title: 'Farad Alam - Full Stack Developer',
//     description: 'Professional portfolio showcasing modern web development projects and skills.',
//     type: 'website',
//   },
// };


export const metadata = {
  title: "Farad Alam - Full Stack Developer",
  description:
    "Professional portfolio of Farad Alam, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords:
    "full stack developer, front end developer, backend developer, react, nextjs, javascript, typescript, node.js, express.js, web development, portfolio",

  openGraph: {
    title: "Farad Alam - Full Stack Developer",
    description:
      "Professional portfolio showcasing modern web development projects and skills.",
    type: "website",
    url: "https://farad-alam.vercel.app", // replace with your live site
    images: [
      {
        url: "https://farad-alam.vercel.app/og-image.png", // Full URL to your image
        width: 1200,
        height: 630,
        alt: "Farad Alam - Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Farad Alam - Full Stack Developer",
    description:
      "Professional portfolio showcasing modern web development projects and skills.",
    images: ["https://farad-alam.vercel.app/og-image.png"], // Same image as Open Graph
  },
};










export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" type="image/png" href="/images/farad-favicon.png"/>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}