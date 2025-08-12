
import { notFound } from 'next/navigation';
import BlogPostClient from "./BlogPostClient"

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

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug, // must match [slug] segment name
  }));
}


export default function BlogPost({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  return <BlogPostClient post={post} />;
}