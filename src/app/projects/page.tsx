
import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce Bandage-website",
      description: "Full-stack e-commerce application with Next.js, TypeScript, and Stripe integration",
      github: "https://github.com/MahnoorJavaidAkhtar/hackathon-03-day.git",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]
    },
    {
      title: "MJ-Chocolates",
      description: "application with Nextjs,Typescript,Tailwind CSS",
      github: "https://github.com/yourusername/task-manager",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "BLOG-WEBSITE",
      description: "application with Nextjs,Typescript,Tailwind CSS",
      github: "https://github.com/MahnoorJavaidAkhtar/mahnoor-javaid-blog-website.git",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FaGithub className="text-xl" />
              View on GitHub
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
