import { useState } from "react";

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        setSubmitted(true); // Show success message
    };

    return (
        <section className="contact-form">
            <h2>Contact Us</h2>

            {submitted && <p className="success-message">Thank you! Your message has been sent. ✅</p>}

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required className="message-box"></textarea>

                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default ContactPage;
