import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/submit", formData);
      setSubmitted(true);
      // reset form fields
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };

  return (
    <section className="contact-form">
      <h2>Contact Us</h2>

      {submitted && (
        <p className="success-message">
          Thank you! Your message has been sent. ✅
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          className="message-box"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactUs;