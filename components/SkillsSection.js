"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Server, Database, Wrench } from "lucide-react";

const skillsImages = {
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  TailwindCSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "Shadcn/ui": "https://ui.shadcn.com/favicon.ico",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  PyCharm:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
};

export default function SkillsSection() {
  const skills = {
    Frontend: {
      icon: Code,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "TailwindCSS", level: 90 },
        { name: "Shadcn/ui", level: 85 },
      ],
    },
    Backend: {
      icon: Server,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
      ],
    },
    Database: {
      icon: Database,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    Tools: {
      icon: Wrench,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "PyCharm", level: 80 },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(skills).map(([category, data], categoryIndex) => {
            const Icon = data.icon;
            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${data.color} mr-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {data.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.2,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${data.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div> */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(skills).map(([category, data], categoryIndex) => {
            const Icon = data.icon;
            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                {/* Category header */}
                <div className={`flex items-center mb-4`}>
                  {/* <div
                    className={`flex items-center mb-4 pb-4 bg-gradient-to-r ${data.color}`}
                  ></div> */}
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${data.color} mr-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category}
                  </h3>
                </div>
                <hr
                  className={`mb-4 pb-[2px] bg-gradient-to-r ${data.color}`}
                />

                {/* Stack cloud badges */}
                <div className="flex flex-wrap gap-3">
                  {data.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                      }}
                      // className="p-[2px] rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-sm"
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default shadow-sm"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Badge Cloud */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(skills).flatMap(([category, data]) => 
              data.skills.map((skill, index) => (
                <motion.div
                  key={`${category}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
                  }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default shadow-sm"
                >
                  {skill.name}
                </motion.div>
              ))
            )}
          </div>
        </motion.div> */}

        {/* Skills Image Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(skills).flatMap(([category, data]) =>
              data.skills.map((skill, index) => (
                <motion.div
                  key={`${category}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                  }}
                  viewport={{ once: true }}
                  className="p-[3px] rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-md"
                >
                  <div className="bg-card rounded-full p-2 ">
                    <img
                      src={skillsImages[skill.name]}
                      alt={skill.name}
                      className="w-12 h-12 rounded-full object-contain shadow-md"
                    />
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
