import React from "react";
import { hero } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {hero.name}</span>
      <span className="footer-dot">•</span>
      <span>Built with React</span>
    </footer>
  );
}
