import React from "react";
import { ArrowUpRight, Code, Calendar } from "lucide-react";

const projects = [
  {
    title: "Real-Time Chat Application",
    role: "Full-Stack Developer",
    year: "2023",
    description:
      "Built a chat app with group creation, read receipts, and live messaging using Vue.js, Laravel, and Pusher.",
    stack: ["Vue.js", "Laravel", "Pusher", "TailwindCSS"],
    link: "#",
  },
  {
    title: "Expense Tracker",
    role: "Frontend Developer",
    year: "2022",
    description:
      "Developed a personal finance tracker with authentication and real-time charts, powered by React and Firebase.",
    stack: ["React", "Firebase", "Chart.js"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    role: "Designer & Developer",
    year: "2024",
    description:
      "Designed and developed a minimalist personal portfolio to showcase projects, skills, and services.",
    stack: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "#",
  },
];

const Work = () => {
  return (
    <section id="work" className="container mx-auto px-4 lg:px-0 py-20">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-xl font-medium tracking-tight mb-2">Work</h2>
        <h3 className="text-3xl lg:text-4xl font-semibold">
          Selected Projects
        </h3>
      </div>

      {/* Projects */}
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 border rounded-xl hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h4 className="text-lg font-semibold">{project.title}</h4>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-2 md:mt-0">
                <span className="flex items-center gap-1">
                  <Code size={14} /> {project.role}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {project.year}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-lg border text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="inline-flex items-center gap-2 text-sm font-medium text-black hover:underline"
            >
              View Project <ArrowUpRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
