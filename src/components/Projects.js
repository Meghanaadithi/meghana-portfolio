import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h3 className="section-title">Projects</h3>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <h4>{project.name}</h4>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="pill">
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
