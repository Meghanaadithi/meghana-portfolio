import React from "react";

import pic1 from "../assets/projects/pic1.png";
import pic2 from "../assets/projects/pic2.png";
import pic3 from "../assets/projects/pic3.png";

const Projects = () => {
  const projectImages = [pic1, pic2, pic3];

  const projects = [
    {
      name: "Serverless Job Board Platform (AWS + React + Tailwind.css)",
      tech: [
        "React.js", "Vite", "JavaScript", "React Router (HashRouter)",
        "TailwindCSS", "Framer Motion", "Node.js", "AWS Lambda",
        "AWS API Gateway", "AWS S3", "AWS IAM", "GitHub Pages",
        "Git & GitHub", "PostCSS", "ESLint"
      ],
      description: [
        "Built a full-stack serverless Job Board platform using React, Vite, AWS Lambda, API Gateway, and S3, enabling job posting, candidate applications, and resume uploads.",
        "Implemented file upload pipeline with S3 storage, secure access URLs, and Lambda integrations.",
        "Deployed the frontend to GitHub Pages with hash-based routing + automated gh-pages workflows.",
        "Designed a clean, responsive UI using TailwindCSS + Framer Motion."
      ],
      link: "https://github.com/Meghanaadithi/job-board-frontend1"
    },
    {
      name: "AI HR Copilot — Intelligent Resume & HR Assistant",
      tech: ["Python", "Streamlit", "LLMs", "Prompt Engineering", "REST APIs"],
      description: [
        "An AI-powered HR copilot that assists with resume analysis, role fit evaluation, and HR decision support.",
        "Built an interactive Streamlit application enabling users to upload resumes and receive structured, AI-generated insights.",
        "Implemented prompt orchestration to generate role-specific feedback, skill gap analysis, and improvement recommendations.",
        "Designed the system with a human-in-the-loop approach to ensure AI outputs remain advisory and explainable."
      ],
      link: "https://ai-hr-resume-copilot-fzzk9uwgpfwupje6w4j88d.streamlit.app"
    },
    
    {
      name: "Personal Portfolio Website",
      tech: ["React.js", "JavaScript", "HTML", "CSS", "GitHub Pages"],
      description: [
        "Designed a modern, responsive portfolio to showcase experience and projects.",
        "Built reusable React components with modular architecture.",
        "Created polished UI interactions and clean page structure.",
        "Deployed using GitHub Pages with automated builds.",
        "Designed a clean, responsive UI using TailwindCSS + Framer Motion."
      ],
      link: "https://meghanaadithi.github.io/meghana-portfolio/"
    }
  ];

  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-16">
      <h3 className="text-[22px] font-bold text-[#111] mb-8">Projects</h3>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <div
            key={index}
            className="
              w-full bg-[#fafafa] border border-gray-200 rounded-xl
              p-6 shadow-sm hover:shadow-lg transition
              flex flex-col
            "
          >
            {/* Image */}
            <img
              src={projectImages[index]}
              alt={p.name}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />

            {/* Title */}
            <h4 className="text-[18px] font-semibold mb-1">{p.name}</h4>

            {/* Link */}
            {p.link && (
              <a
                className="text-blue-600 font-semibold mb-3 inline-block hover:underline"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="
                    bg-gray-200 text-gray-700 text-[13px]
                    px-3 py-1 rounded-full
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="mt-auto">
              {p.description.map((line, i) => (
                <p key={i} className="text-gray-700 text-[14px] leading-relaxed mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
