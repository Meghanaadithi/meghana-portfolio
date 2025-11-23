import React from "react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h3 className="section-title">Experience</h3>

      <div className="timeline">
        {experience.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker" />

            <div className="timeline-content">
              <div className="timeline-header">
                <h4>{job.role}</h4>
                <span className="timeline-company">{job.company}</span>
              </div>

              <div className="timeline-meta">
                <span>{job.location}</span>
                <span>{job.period}</span>
              </div>

              <ul>
                {job.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
