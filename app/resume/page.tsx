"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, ExternalLink, Eye, FileText, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { personalInfo, skills, experience, education } from '@/lib/data';

export default function Resume() {
  const handleDownload = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  const handleView = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resume
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional experience, skills, and achievements
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleView} className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>View Resume</span>
            </Button>
            <Button variant="outline" size="lg" onClick={handleDownload} className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </Button>
          </div>
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">Professional Resume</CardTitle>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={handleView}>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[8.5/11] bg-muted/30 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <FileText className="h-16 w-16 text-muted-foreground mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-foreground">PDF Resume</p>
                    <p className="text-muted-foreground">Click "View Resume" to open in new tab</p>
                  </div>
                  <Button onClick={handleView}>
                    View Full Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Resume Summary */}
        <div className="space-y-8">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <Link 
                      href={personalInfo.social.linkedin} 
                      target="_blank" 
                      className="text-primary hover:underline"
                    >
                      LinkedIn Profile
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.bio}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-foreground mb-3 capitalize">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill.name} variant="secondary">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {job.title}
                          </h3>
                          <p className="text-primary font-medium">{job.company}</p>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.period}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{job.description}</p>
                      {index < experience.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-medium">{edu.school}</p>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mt-1 md:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                      {index < education.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 p-8 bg-primary/5 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}