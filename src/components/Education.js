import React from "react";
import gmuLogo from "../assets/education/gmu.jpeg";
import vitapLogo from "../assets/education/vitap.png"; 

const Education = () => {
  return (
    <section id="education" className="section">
      <h3 className="section-title">Education</h3>

      {/* ================== GMU ================== */}
      <div className="edu-card">
        <div className="edu-left">
        <img src={gmuLogo} alt="GMU Logo" className="edu-logo" />
          <b className="edu-gpa">CGPA - 3.57 / 4.0</b>
          <b className="edu-dates">Aug 2023 - May 2025</b>
        </div>

        <div className="edu-right">
          <h4 className="edu-school">George Mason University</h4>
          <p className="edu-degree">Master of Science in Computer Science</p>

          <p className="edu-subtitle">Coursework:</p>
          <ul className="edu-list">
            <li>Mathematical Foundations of CS</li>
            <li>Computer Systems & Systems Programming</li>
            <li>Software Modeling & Architectural Design</li>
            <li>Software Engineering for the WWW</li>
            <li>Secure Software Design & Programming</li>
            <li>Advanced Algorithms</li>
            <li>Database Systems</li>
            <li>Intro to Artificial Intelligence</li>
            <li>AI, Power & Society</li>
            <li>Analysis of Algorithms I</li>
          </ul>
        </div>
      </div>

      {/* ================== VIT ================== */}
      <div className="edu-card">
        <div className="edu-left">
        <img src={vitapLogo} alt="VIT-AP Logo" className="edu-logo" />
          <b className="edu-gpa">CGPA - 8.34 / 10</b>
          <b className="edu-dates">2018 - 2022</b>
        </div>

        <div className="edu-right">
          <h4 className="edu-school">Vellore Institute of Technology — AP</h4>
          <p className="edu-degree">
            Bachelor of Technology in Computer Science and Engineering
          </p>

          <p className="edu-subtitle">Coursework:</p>
          <ul className="edu-list">
            <li>Data Structures & Algorithms</li>
            <li>Object-Oriented Programming</li>
            <li>Design & Analysis of Algorithms</li>
            <li>Database Management Systems</li>
            <li>Operating Systems</li>
            <li>Web Technologies</li>
            <li>Computer Networks</li>
            <li>Cloud Computing</li>
            <li>Artificial Intelligence</li>
            <li>Cyber Security</li>
            <li>Mobile Application Development</li>
            <li>Digital Logic Design</li>
            <li>Software Engineering</li>
            <li>Python Programming</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
