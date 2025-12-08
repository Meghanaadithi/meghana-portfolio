import React from "react";
import ericssonLogo from "../assets/experience/ericsson.png";
import roboslogLogo from "../assets/experience/roboslog.jpeg";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>


      {/* ======================
          ROBO SLOG
      ======================= */}
      <div className="exp-company-card">
        <img src={roboslogLogo} alt="Robo Slog" className="exp-company-logo" />

        <div className="exp-company-right">
          <h3 className="exp-company-name">NVIDIA </h3>
          <p className="exp-company-location">Remote, US</p>
          <p className="exp-company-dates">Jan 2025 - present</p>

          <h4 className="exp-role-title">Software Engineer</h4>
          <ul className="exp-list">
            <li>
            Defined backend microservices with Java 11, Spring Boot, and Spring Cloud, decomposing features into modular services for authentication, asset handling, and model training, which strengthened platform scalability and reliability.
            </li>
            <li> Implemented REST APIs and event-driven workflows with Apache Kafka to synchronize collaboration in Omniverse Cloud and orchestrate training jobs in NeMo AI Suite, enhancing responsiveness across distributed systems.</li>
            <li> Developed containerized services with Docker and Kubernetes while automating CI/CD pipelines in Jenkins and GitHub Actions, which streamlined releases and raised deployment frequency by 60%..</li>
            <li>
            Optimized cloud integration with AWS S3, RDS, DynamoDB, Lambda, and SageMaker, ensuring resilient storage and efficient training orchestration, which redesigned infrastructure overhead by 30%.
            </li>
            <li>
            Conducted rigorous validation using JUnit, Mockito, and Postman to increase code coverage and quality, while fostering collaboration with product and QA teams to align deliverables with evolving project requirements.
            </li>
            <li>
            Built APIs and orchestration services in Java 11 on AWS to accelerate file retrieval and training workflows, which Upgraded collaboration efficiency by 40% and Decreased job scheduling delays by 50%.
            </li>
          </ul>
        </div>
      </div>

       {/* ======================
          ERICSSON
      ======================= */}


      <div className="exp-company-card">
        <img src={ericssonLogo} alt="Ericsson" className="exp-company-logo" />

        <div className="exp-company-right">
          <h3 className="exp-company-name">Ericsson</h3>
          <p className="exp-company-location">Chennai, India</p>
          <p className="exp-company-dates">Jan 2022 – Jul 2023</p>

          {/* ONE timeline with 2 dots (top = SWE, bottom = Intern) */}
          <div className="ericsson-timeline">
            {/* vertical line + dots */}
            <div className="ericsson-line"></div>
            <div className="ericsson-dot ericsson-dot-top"></div>
            <div className="ericsson-dot ericsson-dot-bottom"></div>

            {/* Software Engineer */}
            <div className="ericsson-role">
              <h4 className="exp-role-title">Software Engineer</h4>
              <p className="exp-role-dates">Jun 2022 – Jul 2023 • Full-time</p>
              <ul className="exp-list">
                <li>
                  Engineered backend microservices using Java (Vert.x,
                  Dropwizard, Quarkus, Jersey) with REST APIs.
                </li>
                <li>
                  Integrated Azure SQL & Cosmos DB using Hibernate to store
                  operational metrics.
                </li>
                <li>Built React.js dashboards for live KPI visualization.</li>
                <li>
                  Deployed microservices on AKS using Docker & ARM templates.
                </li>
                <li>
                  Implemented event-driven workflows using Kafka & RabbitMQ.
                </li>
                <li>
                  Automated CI/CD releases with Azure DevOps, Maven, Docker.
                </li>
              </ul>
            </div>

            {/* Project Intern */}
            <div className="ericsson-role">
              <h4 className="exp-role-title">Project Intern</h4>
              <p className="exp-role-dates">Jan 2022 – Jun 2022 • Internship</p>
              <ul className="exp-list">
                <li>
                  Configured & deployed ECMS modules across multi-region telecom
                  clusters.
                </li>
                <li>
                  Used Java 11, Docker & Azure Resource Manager for provisioning.
                </li>
                <li>
                  Validated APIs via JUnit & Postman improving service
                  reliability.
                </li>
                <li>
                  Supported Agile deployments with JIRA & sprint coordination.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ======================
          ROBO SLOG
      ======================= */}
      <div className="exp-company-card">
        <img src={roboslogLogo} alt="Robo Slog" className="exp-company-logo" />

        <div className="exp-company-right">
          <h3 className="exp-company-name">Robo Slog Pvt. Ltd.</h3>
          <p className="exp-company-location">India</p>
          <p className="exp-company-dates">Sep 2020 – Dec 2020</p>

          <h4 className="exp-role-title">Frontend Developer</h4>
          <ul className="exp-list">
            <li>
              Developed responsive UI for RoboLearn using HTML5, CSS3 &
              JavaScript.
            </li>
            <li>Integrated MySQL + PHP backend for student workflows.</li>
            <li>Improved cross-device accessibility & UI performance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
