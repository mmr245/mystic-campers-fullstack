import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState([]);

  // Fetch received messages from the server
  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/messages");
      setMessages(response.data);
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  // Load messages once on mount
  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/submit", formData);
      setSubmitted(true);
      // clear form
      setFormData({ name: "", email: "", message: "" });
      // reload messages to include the new one
      fetchMessages();
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };

  return (
    <section className="contact-page">
      <h2>Contact Us</h2>

      {submitted && (
        <p className="success-message">
          Thank you! Your message has been sent. ✅
        </p>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
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

      <hr />

      <section className="received-messages">
        <h3>Messages We’ve Received</h3>
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          <ul>
            {messages.map((msg) => (
              <li key={msg.id} className="message-card">
                <p>
                  <strong>{msg.name}</strong> <em>({msg.email})</em>
                </p>
                <p>{msg.message}</p>
                <small>
                  {new Date(msg.created_at).toLocaleString("en-US", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </small>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};

export default ContactUs;