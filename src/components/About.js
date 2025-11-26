import React from "react";
import { about } from "../data";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h3 className="section-title">About Me</h3>

      <div className="card about-card">
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
