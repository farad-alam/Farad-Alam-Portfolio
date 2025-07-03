export const personalInfo = {
  name: "Farad ALam",
  title: "Full Stack Developer",
  tagline: "Building modern web applications with React, Next.js, and Node.js",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating responsive, user-friendly applications that solve real-world problems. With a strong foundation in both frontend and backend development, I bring ideas to life through clean, efficient code.",
  email: "farad.dev@gmail.com",
  phone: "+8801575061066",
  location: "Rajshahi, Bangladesh",
  resumeUrl: "https://drive.google.com/file/d/111PN0FCfDInvtXR_s1C8w-zvTJ_xy90T/view",
  profileImage: "https://i.ibb.co/vChChX8J/Farad-Alam-Side-Croped.png",
  social: {
    github: "https://github.com/farad-alam",
    linkedin: "https://www.linkedin.com/in/farad-alam-foisal/",
    twitter: "https://twitter.com/farad_alam",
  },
};

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "REST APIs", level: 85 },
  ],
  database: [
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "MySQL", level: 70 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 85 },
    // { name: "Docker", level: 70 },
    // { name: "AWS", level: 65 }
  ],
};

export const projects = [
  {
    id: 1,
    title: "Recipe Book App",
    description:
      "A full-stack single-page recipe sharing platform with authentication, recipe management, likes, filtering, and private routing features.",
    image: "https://i.ibb.co/4R1Wc8Cq/Recipe-Gram.png", // Replace with your actual image URL
    tech: ["React", "Firebase", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "User authentication with email/password and Google using Firebase",
      "Add, update, delete, and view detailed recipes",
      "Like system with most-liked recipes highlighted",
      "Private routes for recipe operations and details",
      "Cuisine filter and responsive card layout",
      "Dark/Light theme toggle and interactive UI animations",
    ],
    github: "https://github.com/farad-alam/Recipe-Book-Web-App",
    demo: "https://recipe-book-80756.web.app/", // Replace with your actual live site URL
    status: "Completed",
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "A responsive web application for browsing, borrowing, and managing books with user authentication and real-time updates.",
    image: "https://i.ibb.co/dJMM3FhF/Library-Management.png", // Replace with your actual image URL
    tech: [
      "React",
      "Firebase Auth",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
    ],
    features: [
      "User authentication with email/password and Google login",
      "Book catalog with search, filtering, and multiple view modes",
      "Borrowing system with return date tracking and limits",
      "Admin functionality to add and update books",
      "Responsive design optimized for mobile, tablet, and desktop",
      "Animated UI with Framer Motion and interactive rating system",
    ],
    github: "https://github.com/farad-alam/Library-Management-Web-App", // Replace with actual repo if available
    demo: "https://library-management-4d39f.web.app/", // Replace with your actual live site URL
    status: "Completed",
  },
  {
    id: 3,
    title: "GrowWise-Farm",
    description:
      "A modern, content-driven agricultural blog built with Next.js and Contentful CMS, designed to deliver SEO-friendly, dynamic, and visually engaging farming articles.",
    image: "https://i.ibb.co/GfPfqq5C/Grow-wise-farm-1.png", // Replace with actual image URL (e.g., a screenshot of the homepage)
    tech: [
      "Next.js 13",
      "TypeScript",
      "Contentful CMS",
      "Tailwind CSS",
      "React",
    ],
    features: [
      "Dynamic routing for blog posts, categories, and authors",
      "Content fetching and rendering from Contentful CMS",
      "SEO-friendly architecture with slugs and meta tags",
      "Reusable components and utilities for clean architecture",
      "Custom hooks and utility functions (date, slug, etc.)",
      "Responsive layout with modern design principles",
    ],
    github: "https://github.com/farad-alam/GrowWise-Farm", // Replace with actual GitHub repo
    demo: "https://grow-wise-farm.netlify.app/", // Replace with actual live site URL if deployed
    status: "In Progress",
  },
];

// export const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     description:
//       "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
//     image:
//       "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
//     features: [
//       "User authentication and authorization",
//       "Product catalog with search and filtering",
//       "Shopping cart and checkout process",
//       "Payment integration with Stripe",
//       "Admin dashboard for inventory management",
//     ],
//     github: "https://github.com/yourusername/ecommerce",
//     demo: "https://your-ecommerce-demo.com",
//     status: "Completed",
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     description:
//       "Collaborative task management application with real-time updates and team collaboration features.",
//     image:
//       "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
//     features: [
//       "Real-time collaboration",
//       "Project and task organization",
//       "Team member management",
//       "Progress tracking and analytics",
//       "Mobile-responsive design",
//     ],
//     github: "https://github.com/yourusername/taskmanager",
//     demo: "https://your-taskmanager-demo.com",
//     status: "Completed",
//   },
//   {
//     id: 3,
//     title: "Weather Dashboard",
//     description:
//       "Modern weather application with location-based forecasts and interactive maps.",
//     image:
//       "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tech: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
//     features: [
//       "Current weather conditions",
//       "7-day weather forecast",
//       "Interactive weather maps",
//       "Location-based weather data",
//       "Weather alerts and notifications",
//     ],
//     github: "https://github.com/yourusername/weather-app",
//     demo: "https://your-weather-demo.com",
//     status: "Completed",
//   },
//   {
//     id: 4,
//     title: "Chat Application",
//     description:
//       "Real-time chat application with group messaging, file sharing, and emoji support.",
//     image:
//       "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
//     features: [
//       "Real-time messaging",
//       "Group chat functionality",
//       "File and image sharing",
//       "Emoji and reaction support",
//       "User presence indicators",
//     ],
//     github: "https://github.com/yourusername/chat-app",
//     demo: "https://your-chat-demo.com",
//     status: "In Progress",
//   },
//   {
//     id: 5,
//     title: "Portfolio Website",
//     description:
//       "Personal portfolio website showcasing projects and skills with modern design.",
//     image:
//       "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
//     features: [
//       "Responsive design",
//       "Dark/light mode toggle",
//       "Smooth animations",
//       "Contact form integration",
//       "SEO optimization",
//     ],
//     github: "https://github.com/yourusername/portfolio",
//     demo: "https://your-portfolio-demo.com",
//     status: "Completed",
//   },
//   {
//     id: 6,
//     title: "Blog Platform",
//     description:
//       "Content management system for blogging with markdown support and admin panel.",
//     image:
//       "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tech: ["Next.js", "MDX", "Prisma", "PostgreSQL", "NextAuth"],
//     features: [
//       "Markdown blog editor",
//       "Content management system",
//       "User authentication",
//       "Comment system",
//       "SEO-friendly URLs",
//     ],
//     github: "https://github.com/yourusername/blog-platform",
//     demo: "https://your-blog-demo.com",
//     status: "In Progress",
//   },
// ];

export const experience = [
  {
    title: "Web Developer",
    company: "Elevate Engage",
    period: "2024 - Present",
    description:
      "Lead development of web applications using React, Next.js, Node.js, and MongoDB.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams.",
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    period: "2019 - 2020",
    description:
      "Built user interfaces and implemented frontend features for various projects.",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Zoology",
    school: "National University",
    period: "2018 - 2022",
    description:
      "Completed undergraduate studies with a major in Zoology. Developed strong analytical and research skills while independently pursuing web development and programming.",
  },
  {
    degree: "Bachelor of Science in Zoology",
    school: "National University",
    period: "2018 - 2022",
    description:
      "Completed undergraduate studies with a major in Zoology. Developed strong analytical and research skills while independently pursuing web development and programming.",
  },
];
