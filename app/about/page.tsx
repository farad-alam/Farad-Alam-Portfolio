"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Download, MapPin, Mail, Calendar, Award, Users, Code, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { personalInfo, skills, experience, education } from '@/lib/data';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Profile Card */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover rounded-full border-4 border-background shadow-lg"
                  />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-primary font-medium mb-4">
                  {personalInfo.title}
                </p>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>{personalInfo.email}</span>
                  </div>
                </div>

                <Button className="w-full mt-6" asChild>
                  <Link
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Quick Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Experience</span>
                  <Badge variant="secondary">1+ Years</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects</span>
                  <Badge variant="secondary">20+ Completed</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Technologies</span>
                  <Badge variant="secondary">15+ Stack</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Availability</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    Available
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>My Story</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in creating scalable web applications using modern technologies 
                  like React, Next.js, and Node.js. My approach combines technical expertise 
                  with user-centered design principles to deliver solutions that not only work 
                  well but also provide exceptional user experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge with the developer community. 
                  I believe in continuous learning and staying up-to-date with industry trends.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Technical Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-foreground mb-4 capitalize">
                        {category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skillList.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-foreground">
                                {skill.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Work Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-2 border-primary pl-6 relative"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {job.title}
                        </h3>
                        <p className="text-primary font-medium">{job.company}</p>
                        <p className="text-sm text-muted-foreground">{job.period}</p>
                        <p className="text-muted-foreground">{job.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-2 border-primary pl-6 relative"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-primary/5 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <Button asChild>
            <Link href="/contact">
              Get In Touch
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}