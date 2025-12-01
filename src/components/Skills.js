import React from "react";
import "../App.css";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "blue",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C++"],
  },
  {
    title: "Frontend",
    color: "purple",
    items: ["React.js", "HTML", "CSS", "Taliwind.css"],
  },
  {
    title: "Backend",
    color: "green",
    items: ["Node.js", "Spring Boot", "Quarkus", "MVC", "JUnit", "Pytest"],
  },
  {
    title: "Databases",
    color: "cyan",
    items: ["MySQL", "MongoDB", "Azure Cosmos DB", "Oracle", "PostgreSQL", "AWS DynamoDB" ],
  },
  {
    title: "Testing & QA Automation",
    color: "yellow",
    items: ["PUTTY", "JIRA", "Selenium WebDriver", "CI/CD Test Pipelines", "Page Object Model"],
  },
  {
    title: "Cloud & DevOps",
    color: "orange",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Git",
      "API Gateway",
      "Amazon S3",
      "EC2",
      "Lambda",
      "IAM",
      "Google Cloud",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-wrapper">
      <h3 className="section-title">Technical Skills</h3>

      <div className="skills-category-grid">
        {skillCategories.map((cat, index) => (
          <div className={`skill-category-card ${cat.color}`} key={index}>
            <h4 className="skill-category-title">{cat.title}</h4>

            <div className="skill-pill-container">
              {cat.items.map((item, i) => (
                <span className="skill-pill" key={i}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
