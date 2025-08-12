export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://alexjohnson-portfolio.vercel.app/sitemap.xml',
  };
}