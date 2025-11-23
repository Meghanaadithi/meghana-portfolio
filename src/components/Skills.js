import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h3 className="section-title">Skills</h3>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <div key={index} className="card skills-card">
            <h4>{group.category}</h4>
            <ul>
              {group.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
