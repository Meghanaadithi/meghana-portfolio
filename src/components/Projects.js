import React from "react";
import "../App.css";

import pic1 from "../assets/projects/pic1.png";
import pic2 from "../assets/projects/pic2.png";
import pic3 from "../assets/projects/pic3.png";

const Projects = () => {
  const projectImages = [pic1, pic2, pic3];

  const projects = [
    {
      name: "Serverless Job Board Platform (AWS + React)",
      tech: [
        "React.js", "Vite", "JavaScript", "React Router (HashRouter)", "TailwindCSS", 
        "Framer Motion", "Node.js", "AWS Lambda", "AWS API Gateway", "AWS S3", 
        "AWS IAM", "GitHub Pages", "Git & GitHub", "PostCSS", "ESLint"
      ],
      description: [
        "Built a full-stack serverless Job Board platform using React, Vite, AWS Lambda, API Gateway, and S3, enabling job posting, candidate applications, and resume uploads.",
        "Implemented file upload pipeline with S3 storage and secure access URLs; integrated Lambda functions for posting jobs, submitting applications, and retrieving admin dashboards.",
        "Deployed the frontend to GitHub Pages with hash-based routing, Vite optimization, and automated gh-pages workflows.",
        "Designed a clean, responsive UI using TailwindCSS + Framer Motion, improving user experience across job search, application, and admin views."
      ],
      link: "https://github.com/Meghanaadithi/job-board-frontend1"
    },
    {
      name: "Speak Notes — AI-Powered Speech Recognition App",
      tech: ["Python", "Tkinter", "Google Speech API", "PyAudio"],
      description: [
        "A desktop voice-to-text application built to assist productivity through hands-free note taking.",
        "Implemented continuous speech recognition using Google Speech API with offline fallback using PyAudio.",
        "Designed a clean Tkinter UI allowing users to save, edit, and organize generated notes.",
        "Improved transcription accuracy and reduced noise interference through audio preprocessing."
      ],
      link: ""
    },
    {
      name: "Personal Portfolio Website",
      tech: ["React.js", "JavaScript", "HTML", "CSS", "GitHub Pages"],
      description: [
        "Designed and developed a modern, responsive personal portfolio to showcase experience, education, and projects.",
        "Built reusable React components for skills, education, and experience with a modular architecture.",
        "Implemented polished UI interactions and a scalable folder structure for easy future updates.",
        "Deployed using GitHub Pages with automated builds for seamless version updates."
      ],
      link: "https://meghanaadithi.github.io/meghana-portfolio/"
    }
  ];

  return (
    <section id="projects" className="section">
      <h3 className="section-title">Projects</h3>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div className="project-card-full" key={index}>
  
          <img 
            src={projectImages[index]} 
            alt={p.name} 
            className="project-image"
          />
        
          <div className="project-details">
            
            {/* TITLE */}
            <h4 className="project-title">{p.name}</h4>
        
            {/* VIEW PROJECT moved directly under title */}
            {p.link && (
              <a 
                className="project-link project-link-top" 
                href={p.link} 
                target="_blank" 
                rel="noreferrer"
              >
                View Project →
              </a>
            )}
        
            {/* TECH STACK */}
            <div className="project-tech">
              {p.tech.map((t, i) => (
                <span className="pill" key={i}>{t}</span>
              ))}
            </div>
        
            {/* DESCRIPTION */}
            {p.description.map((line, i) => (
              <p className="project-desc" key={i}>{line}</p>
            ))}
        
          </div>
        </div>        

        ))}
      </div>
    </section>
  );
};

export default Projects;
