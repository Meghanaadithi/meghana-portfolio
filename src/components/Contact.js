import React from "react";
import { hero } from "../data";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h3 className="section-title">Contact</h3>

      <div className="card contact-card">
        <p>I’m open to software engineering roles, backend roles, cloud roles, and internships.</p>

        <div className="contact-grid">
          <div>
            <h4>Email</h4>
            <a href={`mailto:${hero.email}`}>{hero.email}</a>
          </div>

          <div>
            <h4>Phone</h4>
            <a href={`tel:${hero.phone}`}>{hero.phone}</a>
          </div>

          <div>
            <h4>Location</h4>
            <p>{hero.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
