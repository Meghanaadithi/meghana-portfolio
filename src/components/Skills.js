import React from "react";
import "../App.css";

const skills = [
  { name: "HTML", file: "html.png" },
  { name: "CSS", file: "css.png" },
  { name: "JavaScript", file: "javascript.png" },
  { name: "Java", file: "java.png" },
  { name: "Python", file: "python.png" },
  { name: "Node.js", file: "nodejs.png" },
  { name: "React.js", file: "react.png" },
  { name: "Spring Boot", file: "springboot.svg" },
  { name: "Quarkus", file: "quarkus.png" },
  { name: "JUnit", file: "junit.png" },
  { name: "Pytest", file: "pytest.png" },
  
  // Cloud & DevOps
  { name: "AWS", file: "aws.png" },
  { name: "Azure", file: "azure.png" },
  { name: "Azure Cosmos DB", file: "azurecosmo.svg" },
  { name: "Docker", file: "docker.png" },
  { name: "Kubernetes", file: "kubernetes.svg" },
  { name: "Jenkins", file: "jenkins.svg" },
  { name: "GitHub Actions", file: "github.png" },
  { name: "Git", file: "git.png" },

  // AWS Services
{ name: "API Gateway", file: "apigateway.svg" },
{ name: "Amazon S3", file: "s3.svg" },
{ name: "EC2", file: "ec2.png" },
{ name: "Lambda", file: "lambda.png" },
{ name: "IAM", file: "IAM.svg" },
{ name: "Google Cloud", file: "gcp.png" },


  // Databases
  { name: "MySQL", file: "mysql.png" },
  { name: "MongoDB", file: "mongodb.svg" },

  // Tools
  { name: "PUTTY", file: "putty.png" },
  { name: "JIRA", file: "jira.png" },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h3 className="section-title">Skills</h3>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img
              src={require(`../assets/skills/${skill.file}`)}
              alt={skill.name}
              className="skill-icon"
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
