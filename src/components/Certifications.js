import React from "react";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <h3 className="section-title">Certifications</h3>

      <div className="card">
        <ul className="cert-list">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
