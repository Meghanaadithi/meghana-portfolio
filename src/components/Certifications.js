import React from "react";

const certifications = [
  {
    title: "Google IT Support Professional",
    issuer: "Google | Coursera",
    logo: require("../assets/certifications/googleitsupport.png"),
    desc: "Completed a 5-course professional track covering networking, system administration, troubleshooting, security, and IT operations.",
    link: "https://coursera.org/share/38ec154a13cfaa716c6b532aec107c52",
  },
  {
    title: "Python Programming",
    issuer: "Google | Coursera",
    logo: require("../assets/certifications/pythoncert.webp"),
    desc: "Demonstrated strong proficiency in Python programming, algorithms, and problem-solving through hands-on coding challenges.",
    link: "https://coursera.org/share/b2d7ba3247496b4dc2124a7feadfaaa2",
  },
  {
    title: "Machine Learning With Python",
    issuer: "HackerRank",
    logo: require("../assets/certifications/hackerrank.jpeg"),
    desc: "Earned certification for analytical thinking and data-structures knowledge through timed algorithmic assessments.",
    link: "https://courses.cognitiveclass.ai/certificates/86b7829d616344e6b269cfd5832fff99",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-[1200px] mx-auto px-6 py-16">
      <h2 className="text-[22px] font-bold text-[#111] mb-8">Certifications</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="
              bg-[#fafafa] border border-gray-200 rounded-xl
              p-6 shadow-sm hover:shadow-lg transition
              flex flex-col
            "
          >
            <img
              src={cert.logo}
              alt={cert.title}
              className="w-[70px] h-[70px] object-contain mb-4"
            />

            <h4 className="text-[17px] font-semibold mb-1">{cert.title}</h4>

            <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>

            <p className="text-[14px] text-gray-700 leading-relaxed mb-4">
              {cert.desc}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 text-[14px] font-semibold hover:underline mt-auto"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
