import React from "react";

const Education = () => {
  return (
    <section id="education" className="max-w-[1200px] mx-auto px-6 py-16">
      {/* Section Title */}
      <h3 className="text-[22px] font-bold text-[#111] mb-10">Education</h3>

      {/* TIMELINE WRAPPER */}
      <div className="relative mt-10">

        {/* CENTER VERTICAL LINE */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-slate-800" />

        {/* ====================== GMU (LEFT) ====================== */}
        <div className="relative w-full flex justify-start my-20">
          {/* DOT */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3 w-[18px] h-[18px] bg-indigo-500 rounded-full z-10" />

          {/* CARD */}
          <div className="w-[42%] bg-white rounded-xl border border-slate-300 shadow-lg p-7 ml-0 mr-auto">
            <h4 className="text-lg font-semibold">George Mason University</h4>
            <p className="text-[15px] font-medium text-gray-700">
              Master of Science in Computer Science
            </p>

            <p className="text-sm text-slate-600 my-3 leading-relaxed">
              📍 Fairfax, VA, USA <br />
              📅 Aug 2023 – May 2025
            </p>

            <p className="font-semibold mb-4">CGPA — 3.57 / 4.0</p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              {[
                "Mathematical Foundations",
                "Systems Programming",
                "Software Modeling",
                "WWW Engineering",
                "Secure Programming",
                "Advanced Algorithms",
                "Database Systems",
                "Artificial Intelligence",
                "AI, Power & Society",
                "Analysis of Algorithms",
              ].map((course, idx) => (
                <span
                  key={idx}
                  className="bg-slate-900 text-slate-300 border border-slate-800 px-4 py-[6px] rounded-full text-[0.82rem]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ====================== VIT (RIGHT) ====================== */}
        <div className="relative w-full flex justify-end my-20">
          {/* DOT */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3 w-[18px] h-[18px] bg-indigo-500 rounded-full z-10" />

          {/* CARD */}
          <div className="w-[42%] bg-white rounded-xl border border-slate-300 shadow-lg p-7 ml-auto mr-0">
            <h4 className="text-lg font-semibold">
              Vellore Institute of Technology — AP
            </h4>
            <p className="text-[15px] font-medium text-gray-700">
              Bachelor of Technology in Computer Science & Engineering
            </p>

            <p className="text-sm text-slate-600 my-3 leading-relaxed">
              📍 Amaravati, Andhra Pradesh, India <br />
              📅 July 2018 – May 2022
            </p>

            <p className="font-semibold mb-4">CGPA — 8.34 / 10</p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures",
                "OOP",
                "Design & Analysis",
                "DBMS",
                "Operating Systems",
                "Web Technologies",
                "Computer Networks",
                "Cloud Computing",
                "AI",
                "Cyber Security",
                "Mobile Development",
                "Digital Logic",
                "Software Engineering",
                "Python Programming",
              ].map((course, idx) => (
                <span
                  key={idx}
                  className="bg-slate-900 text-slate-300 border border-slate-800 px-4 py-[6px] rounded-full text-[0.82rem]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
