'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Complete Guide',
    excerpt: 'Dive deep into React Hooks and learn how to build more efficient and cleaner components. From useState to custom hooks, we cover it all.',
    content: `
# Mastering React Hooks: A Complete Guide

React Hooks revolutionized the way we write React components. In this comprehensive guide, we'll explore the most important hooks and how to use them effectively.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have since become the standard way to write React components.

## The Most Important Hooks

### 1. useState

The useState hook allows you to add state to functional components:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### 2. useEffect

The useEffect hook lets you perform side effects in function components:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### 3. Custom Hooks

You can create your own hooks to reuse stateful logic:

\`\`\`javascript
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowWidth;
}
\`\`\`

## Best Practices

1. **Always use hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions.
2. **Use the dependency array wisely** - Include all values from component scope that are used inside the effect.
3. **Separate concerns** - Use multiple useEffect hooks for different concerns.

## Conclusion

React Hooks provide a powerful and flexible way to write components. By understanding these patterns, you'll be able to write cleaner, more maintainable React code.
    `,
    author: 'Alex Johnson',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
    tags: ['React', 'Hooks', 'JavaScript', 'Frontend'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    slug: 'nextjs-performance-optimization',
    title: 'Next.js Performance Optimization: Best Practices',
    excerpt: 'Learn how to optimize your Next.js applications for better performance. From image optimization to code splitting, discover the techniques that matter.',
    content: `
# Next.js Performance Optimization: Best Practices

Performance is crucial for modern web applications. In this guide, we'll explore various techniques to optimize your Next.js applications for better user experience and SEO.

## Image Optimization

Next.js provides built-in image optimization through the Image component:

\`\`\`javascript
import Image from 'next/image';

function MyComponent() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={800}
      height={600}
      priority
    />
  );
}
\`\`\`

## Code Splitting and Dynamic Imports

Use dynamic imports to split your code and load components only when needed:

\`\`\`javascript
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
\`\`\`

## Static Site Generation (SSG)

Generate static pages at build time for better performance:

\`\`\`javascript
export async function getStaticProps() {
  const data = await fetchData();
  
  return {
    props: {
      data,
    },
    revalidate: 3600, // Revalidate every hour
  };
}
\`\`\`

## Key Performance Metrics

- **First Contentful Paint (FCP)** - Measures when the first text or image is painted
- **Largest Contentful Paint (LCP)** - Measures when the largest content element is painted
- **Cumulative Layout Shift (CLS)** - Measures visual stability

## Conclusion

By implementing these optimization techniques, you can significantly improve your Next.js application's performance and user experience.
    `,
    author: 'Alex Johnson',
    publishedAt: '2024-01-10',
    readTime: '6 min read',
    category: 'Next.js',
    tags: ['Next.js', 'Performance', 'Optimization', 'SEO'],
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and tutorials on web development, React, Next.js, and the latest in frontend technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}