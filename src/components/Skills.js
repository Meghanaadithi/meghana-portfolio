import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "bg-indigo-50",
    border: "border-indigo-200",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C++"],
  },
  {
    title: "Frontend",
    color: "bg-purple-50",
    border: "border-purple-200",
    items: ["React.js", "HTML", "CSS", "Tailwind.css"],
  },
  {
    title: "Backend",
    color: "bg-green-50",
    border: "border-green-200",
    items: ["Node.js", "Spring Boot", "Quarkus", "MVC", "JUnit", "Pytest"],
  },
  {
    title: "Databases",
    color: "bg-cyan-50",
    border: "border-cyan-200",
    items: [
      "MySQL",
      "MongoDB",
      "Azure Cosmos DB",
      "Oracle",
      "PostgreSQL",
      "AWS DynamoDB",
    ],
  },
  {
    title: "Testing & QA Automation",
    color: "bg-yellow-50",
    border: "border-yellow-200",
    items: [
      "PUTTY",
      "JIRA",
      "Selenium WebDriver",
      "CI/CD Test Pipelines",
      "Page Object Model",
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "bg-orange-50",
    border: "border-orange-200",
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
    <section id="skills" className="max-w-[1200px] mx-auto px-6 pt-10 pb-20">
      <h3 className="text-[22px] font-bold text-[#111] mb-8">
        Technical Skills
      </h3>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {skillCategories.map((cat, index) => (
          <div
            key={index}
            className={`
              ${cat.color} ${cat.border}
              border rounded-xl shadow-sm p-6 transition
              hover:-translate-y-1 hover:shadow-lg
            `}
          >
            {/* Title */}
            <h4 className="text-[18px] font-semibold mb-4">{cat.title}</h4>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, i) => (
                <span
                  key={i}
                  className="
                    bg-[#f1f4ff] text-gray-800 text-[13px] font-medium
                    px-4 py-[6px] rounded-full
                  "
                >
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
