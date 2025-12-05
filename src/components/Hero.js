import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { hero } from "../data";
import meghana from "../assets/meghana.png";

const rotatingText = [
  "Full-Stack Developer",
  "Cloud & DevOps Enthusiast",
  "Building Machines through alogorithmic thinking",
  "CS Graduate",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = rotatingText[index];

    let typingSpeed = isDeleting ? 40 : 90; // speed controls

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        // When done typing → pause → start deleting
        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        // Deleting backwards
        setDisplayText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        // Fully deleted → move to next word
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % rotatingText.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section id="hero" className="hero-container">
      <div className="hero-left">
        <p className="hero-hey">Hey!! I'm</p>

        <h1 className="hero-name">{hero.name}</h1>

        {/* 🔥 Typewriter animation text */}
        <p className="hero-typewriter">
          {displayText}
          <span className="cursor">|</span>
        </p>

        <div className="hero-links">
          <a href={`mailto:${hero.email}`} className="icon-btn">
            <FaEnvelope />
          </a>

          <a href={hero.linkedin} className="icon-btn" target="_blank">
            <FaLinkedin />
          </a>

          <a href={hero.github} className="icon-btn" target="_blank">
            <FaGithub />
          </a>

          <a
            href={hero.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="hero-photo-wrapper">
        <img src={meghana} alt="Meghana" className="hero-photo" />
      </div>
    </section>
  );
};

export default Hero;
