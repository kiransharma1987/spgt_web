// src/components/Contact.js
import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., sending data to an API
        console.log({ name, email, mobile, message });
        alert("Thank you for your message! We will get back to you shortly.");
    };

    return (
        <div className="contact">
            <header className="contact-head">
                <h1>Contact Us</h1>
                <p>
                    We'd love to hear from you! Please fill out the form below.
                </p>
            </header>
            <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div>
                        <label>Full Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            placeholder="Enter your mail address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Mobile Number:</label>
                        <input
                            placeholder="Enter your mobile number"
                            type="text"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea
                            placeholder="Drop your message here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
