"use client";

import React from "react";
import emailjs from "emailjs-com";

export default function ProjectForm() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    );

    alert("Project submitted successfully!");
    form.reset();
  };

  return (
    <form onSubmit={sendEmail} className="submit-form">
      <h2 className="submit-title">Submit Your Project</h2>
      <p className="submit-desc">
        Fill in the details below and our team will contact you shortly.
      </p>

      <input name="name" placeholder="Full Name" required className="submit-input" />

      <input
        name="company"
        placeholder="Company / Organization (optional)"
        className="submit-input"
      />

      <input name="email" placeholder="Email Address" required className="submit-input" />

      <input
        name="phone"
        placeholder="Phone / WhatsApp"
        required
        className="submit-input"
      />

      <select name="domain" required className="submit-input">
        <option value="">Select Domain</option>
        <option>Machine Learning</option>
        <option>Web Development</option>
        <option>IoT</option>
        <option>PCB</option>
        <option>IT / Engineering</option>
      </select>

      <input name="title" placeholder="Project Title" className="submit-input" />

      <textarea
        name="description"
        placeholder="Project Description"
        rows={5}
        className="submit-input"
      />

      <input
        name="timeline"
        placeholder="Expected Lead Time"
        className="submit-input"
      />

      <input name="budget" placeholder="Budget Range" className="submit-input" />

      <button className="submit-button">
        Submit Project
      </button>

      <p className="submit-footer">
        © PVSR Solutions — Project development & technical guidance only
      </p>
    </form>
  );
}
