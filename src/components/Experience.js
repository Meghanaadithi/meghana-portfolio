import React from "react";
import nvidiaLogo from "../assets/experience/nvidia.png";
import ericssonLogo from "../assets/experience/ericsson.png";
import roboslogLogo from "../assets/experience/roboslog.jpeg";

const Experience = () => {
  return (
    <section id="experience" className="max-w-[1200px] mx-auto px-6 py-16">
      <h2 className="text-[22px] font-bold text-[#111] mb-8">Experience</h2>


      {/* ====================== ERICSSON ====================== */}
      <div className="flex gap-7 bg-[#fafafa] border border-gray-200 rounded-xl p-7 mb-10">
        <img
          src={ericssonLogo}
          alt="Ericsson"
          className="w-[90px] min-w-[90px] object-contain"
        />

        <div>
          <h3 className="text-xl font-bold">Ericsson</h3>
          <p className="text-sm text-gray-600">Chennai, India</p>
          <p className="text-sm text-gray-600 mb-6">Jan 2022 – Jul 2023</p>

          {/* TIMELINE */}
          <div className="relative pl-10">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-300"></div>

            {/* TOP dot */}
            <div className="absolute left-[7px] top-0 w-3 h-3 bg-gray-400 rounded-full"></div>

            {/* Software Engineer Role */}
            <div className="mb-8">
              <h4 className="text-[16px] font-semibold">Software Engineer</h4>
              <p className="text-sm text-gray-600 mb-2">
                Jun 2022 – Jul 2023 • Full-time
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>
                  Engineered backend microservices using Java (Vert.x, Dropwizard,
                  Quarkus, Jersey).
                </li>
                <li>
                  Integrated Azure SQL + Cosmos DB using Hibernate for metrics
                  storage.
                </li>
                <li>Built React.js dashboards for real-time KPI visualization.</li>
                <li>Deployed microservices on AKS with Docker & ARM templates.</li>
                <li>Implemented Kafka & RabbitMQ event-driven workflows.</li>
                <li>
                  Automated CI/CD using Azure DevOps, Maven, Docker pipelines.
                </li>
              </ul>
            </div>

            {/* BOTTOM dot */}
            <div className="absolute left-[7px] bottom-0 w-3 h-3 bg-gray-400 rounded-full"></div>

            {/* Intern Role */}
            <div>
              <h4 className="text-[16px] font-semibold">Project Intern</h4>
              <p className="text-sm text-gray-600 mb-2">
                Jan 2022 – Jun 2022 • Internship
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>
                  Configured & deployed ECMS modules across multi-region telecom
                  clusters.
                </li>
                <li>
                  Used Java 11, Docker & Azure Resource Manager for provisioning.
                </li>
                <li>
                  Validated APIs using JUnit & Postman improving reliability.
                </li>
                <li>
                  Supported Agile deployments with Jira & sprint coordination.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== ROBO SLOG ====================== */}
      <div className="flex gap-7 bg-[#fafafa] border border-gray-200 rounded-xl p-7 mb-10">
        <img
          src={roboslogLogo}
          alt="Robo Slog"
          className="w-[90px] min-w-[90px] object-contain"
        />

        <div>
          <h3 className="text-xl font-bold">Robo Slog Pvt. Ltd.</h3>
          <p className="text-sm text-gray-600">India</p>
          <p className="text-sm text-gray-600 mb-4">Sep 2020 – Dec 2020</p>

          <h4 className="text-[16px] font-semibold mb-2">Frontend Developer</h4>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
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
