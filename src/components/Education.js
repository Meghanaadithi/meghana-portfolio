import React from "react";
import gmuLogo from "../assets/education/gmu.jpeg";
import vitapLogo from "../assets/education/vitap.png";

const Education = () => {
  return (
    <section id="education" className="section">
      <h3 className="section-title">Education</h3>

      <div className="timeline">

        {/* ====================== GMU (LEFT) ====================== */}
        <div className="timeline-row left">
          <div className="timeline-card">

            <h4 className="edu-school">George Mason University</h4>
            <p className="edu-degree">Master of Science in Computer Science</p>
            <p className="edu-meta">
              📍 Fairfax, VA, USA  
              <br />
              📅 Aug 2023 – May 2025
            </p>
            <p className="edu-gpa">CGPA — 3.57 / 4.0</p>

            {/* Coursework Tags */}
            <div className="tags-container">
              <span className="tag">Mathematical Foundations</span>
              <span className="tag">Systems Programming</span>
              <span className="tag">Software Modeling</span>
              <span className="tag">WWW Engineering</span>
              <span className="tag">Secure Programming</span>
              <span className="tag">Advanced Algorithms</span>
              <span className="tag">Database Systems</span>
              <span className="tag">Artificial Intelligence</span>
              <span className="tag">AI, Power & Society</span>
              <span className="tag">Analysis of Algorithms</span>
            </div>
          </div>

          <div className="timeline-dot"></div>
        </div>

        {/* ====================== VIT (RIGHT) ====================== */}
        <div className="timeline-row right">
          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <h4 className="edu-school">Vellore Institute of Technology — AP</h4>
            <p className="edu-degree">
              Bachelor of Technology in Computer Science & Engineering
            </p>
            <p className="edu-meta">
              📍 Amaravati, Andhra Pradesh, India  
              <br />
              📅 July 2018 – May 2022
            </p>
            <p className="edu-gpa">CGPA — 8.34 / 10</p>

            <div className="tags-container">
              <span className="tag">Data Structures</span>
              <span className="tag">OOP</span>
              <span className="tag">Design & Analysis</span>
              <span className="tag">DBMS</span>
              <span className="tag">Operating Systems</span>
              <span className="tag">Web Technologies</span>
              <span className="tag">Computer Networks</span>
              <span className="tag">Cloud Computing</span>
              <span className="tag">AI</span>
              <span className="tag">Cyber Security</span>
              <span className="tag">Mobile Development</span>
              <span className="tag">Digital Logic</span>
              <span className="tag">Software Engineering</span>
              <span className="tag">Python Programming</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
