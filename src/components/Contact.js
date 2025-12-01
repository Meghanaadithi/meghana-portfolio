import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_77fysgp",      // your SERVICE ID
        "template_e789oli",     // your TEMPLATE ID
        formRef.current,        // the <form> DOM element
        "NypZTKavVqBh-Lakw"    // your PUBLIC KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully! 🎉");
          if (formRef.current) formRef.current.reset();
        },
        (error) => {
          console.log("EMAILJS ERROR:", error);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="section contact-section">
      <h3 className="section-title">Connect With Me</h3>

      <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
        <div className="form-row">
          {/* IMPORTANT: these 'name' attributes MUST match the template variables */}
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit" className="contact-btn">
          Send Message
        </button>

        {status && <p className="contact-status">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
