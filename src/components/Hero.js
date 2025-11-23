import React from "react";
import { hero } from "../data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="hero-pill">Software Engineer · Microservices · Cloud</p>
        <h1>
          {hero.name}
          <span className="hero-accent">_</span>
        </h1>
        <h2>{hero.title}</h2>
        <p className="hero-tagline">{hero.tagline}</p>
        <p className="hero-location">{hero.location}</p>

        <div className="hero-actions">
          <a href={hero.resumeLink} target="_blank" rel="noreferrer">
            <button className="btn primary">View Resume</button>
          </a>
          <a href="#contact">
            <button className="btn ghost">Contact Me</button>
          </a>
        </div>

        <div className="hero-links">
          {hero.linkedin && (
            <a href={hero.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}

          {hero.github && (
            <a href={hero.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}

          {hero.leetcode && (
            <a href={hero.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
