import React from "react";
import { about } from "../data";

const About = () => {
  return (
    <section
      id="about"
      className="
        w-full text-left pt-16 px-[6%]
      "
    >
      {/* Title */}
      <h3 className="text-[22px] font-bold text-[#111] mb-5 ml-[12%]">
        About Me
      </h3>

      {/* Card */}
      <div
        className="
          max-w-[1150px] bg-[#fafafa] border border-gray-200 rounded-xl
          px-7 py-6 shadow-sm ml-[12%]
        "
      >
        {about.map((paragraph, index) => (
          <p key={index} className="text-[16px] text-gray-700 mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
