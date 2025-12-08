import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_77fysgp",
        "template_e789oli",
        formRef.current,
        "NypZTKavVqBh-Lakw"
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
    <section
  id="contact"
  className="max-w-3xl mx-auto pb-16 pt-4"
>
  <h3 className="text-2xl font-semibold mb-2">Connect With Me</h3>


      <p className="mb-4 text-gray-600">
    I’m always open to discussing new opportunities, collaborations, or exciting ideas.  
    Whether it's a software engineering role, a tech project, or just a question? feel free to reach out!
  </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="
          bg-[#fafafa] border border-gray-200 rounded-xl shadow-sm
          p-8 flex flex-col
        "
      >
        {/* ROW OF INPUTS */}
        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="
              flex-1 px-4 py-3 border border-gray-300 rounded-lg
              text-[15px] outline-none transition
              focus:border-gray-600
            "
          />

          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="
              flex-1 px-4 py-3 border border-gray-300 rounded-lg
              text-[15px] outline-none transition
              focus:border-gray-600
            "
          />
        </div>

        {/* MESSAGE BOX */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="
            w-full px-4 py-3 border border-gray-300 rounded-lg
            text-[15px] outline-none transition resize-none
            focus:border-gray-600 mb-5
          "
        ></textarea>

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full bg-black text-white py-3 rounded-lg
            text-[16px] font-medium transition
            hover:bg-gray-800 hover:-translate-y-0.5
          "
        >
          Send Message
        </button>

        {/* STATUS MESSAGE */}
        {status && (
          <p className="text-center mt-4 text-[15px] text-gray-700">
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
