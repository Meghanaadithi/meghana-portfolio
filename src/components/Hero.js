import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { hero } from "../data";
import meghana from "../assets/meghana.png";

const rotatingText = [
  "Full-Stack Developer",
  "Cloud & DevOps Enthusiast",
  "Building applications through alogorithmic thinking",
  "CS Graduate",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = rotatingText[index];
    let typingSpeed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        setDisplayText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % rotatingText.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section
      id="hero"
      className="
        max-w-[1200px] mx-auto px-6 py-20
        flex justify-between items-center gap-10
        lg:flex-row flex-col-reverse text-left
      "
    >
      {/* LEFT SIDE */}
      <div className="flex-1">
        <p className="text-[20px] text-gray-600 mb-2">Hey!! I'm</p>

        <h1 className="text-[42px] font-bold mb-3">{hero.name}</h1>

        {/* Typewriter */}
        <p className="text-[22px] text-gray-700 mb-6 h-[30px] overflow-hidden whitespace-nowrap">
          {displayText}
          <span className="inline-block ml-1 w-[3px] animate-pulse">|</span>
        </p>

        {/* ICONS + RESUME BUTTON */}
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${hero.email}`}
            className="
              w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 
              bg-gray-100 text-gray-700 text-lg transition
              hover:bg-white hover:-translate-y-[3px] hover:shadow-md
            "
          >
            <FaEnvelope />
          </a>

          <a
            href={hero.linkedin}
            className="
              w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 
              bg-gray-100 text-gray-700 text-lg transition
              hover:bg-white hover:-translate-y-[3px] hover:shadow-md
            "
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href={hero.github}
            className="
              w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 
              bg-gray-100 text-gray-700 text-lg transition
              hover:bg-white hover:-translate-y-[3px] hover:shadow-md
            "
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href={hero.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2 bg-black text-white rounded-md text-[15px]
              hover:bg-gray-800 transition ml-2
            "
          >
            Resume
          </a>
        </div>
      </div>

      {/* RIGHT SIDE – PHOTO */}
      <div className="flex-1 flex justify-center">
        <img
          src={meghana}
          alt="Meghana"
          className="
            w-[260px] h-[260px] object-cover rounded-xl border border-gray-300
            lg:w-[260px] lg:h-[260px]
            md:w-[230px] md:h-[230px]
          "
        />
      </div>
    </section>
  );
};

export default Hero;
