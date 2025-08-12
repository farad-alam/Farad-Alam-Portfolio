'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    fetch('/data/personal-info.json')
      .then(res => res.json())
      .then(data => setPersonalInfo(data));

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!personalInfo) {
    return (
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      )}

      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-12 text-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-indigo-500 mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-muted-foreground">
                Full Stack Developer
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground flex items-center justify-center">
                Made {' '}
                {/* <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="mx-1"
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.span>{' '} */}
                by {personalInfo.name} © {new Date().getFullYear()}
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}