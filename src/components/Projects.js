import React from "react";
import "../App.css";

const Projects = () => {
  const projects = [
    {
      name: "Cloud Drive — Scalable Cloud Storage System",
      tech: ["Node.js", "AWS EC2", "AWS S3", "IAM", "JavaScript"],
      description: [
        "A scalable cloud storage platform enabling secure file uploads, downloads, and access management.",
        "Designed server-side logic in Node.js with modular routing for clean separation of authentication and file operations.",
        "Integrated AWS S3 for high-availability object storage and used IAM policies for secure permissions.",
        "Optimized EC2 deployment architecture for reduced latency and faster file processing."
      ],
      link: ""
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

      {projects.map((p, index) => (
        <div className="project-card-full" key={index}>

          <div className="project-details">
            <h4 className="project-title">{p.name}</h4>

            <div className="project-tech">
              {p.tech.map((t, i) => (
                <span className="pill" key={i}>{t}</span>
              ))}
            </div>

            {p.description.map((line, i) => (
              <p className="project-desc" key={i}>{line}</p>
            ))}

            {p.link && (
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                View Project →
              </a>
            )}
          </div>

        </div>
      ))}
    </section>
  );
};

export default Projects;
