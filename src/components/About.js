import React from "react";
import { about } from "../data";

export default function About() {
  return (
    <section className="section" id="about">
      <h3 className="section-title">About Me</h3>

      <div className="card about-card">
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
