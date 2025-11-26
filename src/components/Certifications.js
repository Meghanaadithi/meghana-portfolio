import React from "react";
import "../App.css";

const certifications = [
  {
    title: "Google IT Support Professional ",
    issuer: "Google | Coursera",
    logo: require("../assets/certifications/googleitsupport.png"),
    desc: "Completed a 5-course professional track covering networking, system administration, troubleshooting, security, and IT operations.",
    link: "https://coursera.org/share/38ec154a13cfaa716c6b532aec107c52",
  },
  {
    title: "Python Programming ",
    issuer: "Google | Coursera",
    logo: require("../assets/certifications/pythoncert.webp"),
    desc: "Demonstrated strong proficiency in Python programming, algorithms, and problem-solving through hands-on coding challenges.",
    link: "https://coursera.org/share/b2d7ba3247496b4dc2124a7feadfaaa2",
  },
  {
    title: "Machine learning with python",
    issuer: "HackerRank",
    logo: require("../assets/certifications/hackerrank.jpeg"),
    desc: "Earned certification for analytical thinking and data-structures knowledge through timed algorithmic assessments.",
    link: "https://courses.cognitiveclass.ai/certificates/86b7829d616344e6b269cfd5832fff99",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.logo} alt={cert.title} className="cert-logo" />
            <h4 className="cert-title">{cert.title}</h4>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-desc">{cert.desc}</p>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="cert-link"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
