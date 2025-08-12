export default function sitemap() {
  const baseUrl = "https://farad-alam.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mastering-react-hooks`,
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/nextjs-performance-optimization`,
      lastModified: new Date('2024-01-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}