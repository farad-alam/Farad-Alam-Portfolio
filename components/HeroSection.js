'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, Github, Linkedin, Mail, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);
  const [resumeLink, setResumeLink] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch('/data/personal-info.json').then(res => res.json()),
      fetch('/data/social-links.json').then(res => res.json()),
      fetch('/data/resume-link.json').then(res => res.json())
    ]).then(([personal, social, resume]) => {
      setPersonalInfo(personal);
      setSocialLinks(social);
      setResumeLink(resume);
    });
  }, []);

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
    phone: Phone,
    whatsapp: MessageCircle,
  };

  if (!personalInfo || !socialLinks || !resumeLink) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden gradient-bg"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 flex items-center min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
              >
                Hi, I'm{" "}
                <motion.span
                  className="text-primary"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, #3B82F6, #6366F1, #3B82F6)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {personalInfo.name}
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl"
              >
                Passionate about creating beautiful, functional web applications
                that solve real-world problems. Let's build something amazing
                together.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  onClick={handleViewProjects}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg font-semibold"
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="px-8 py-3 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <a
                    href={resumeLink.resumeUrl}
                    target="_blank"
                    download={resumeLink.filename}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex gap-6 justify-center lg:justify-start"
              >
                {Object.entries(socialLinks).map(([platform, url], index) => {
                  const Icon = socialIcons[platform];
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-1"
                >
                  <div className="w-full h-full rounded-full bg-background"></div>
                </motion.div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-muted-foreground cursor-pointer"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="text-sm mb-2">Scroll down</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}