import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h1 className="contact-title">Contact Me</h1>
        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="name" className="input-label">Name</label>
            <input
              type="text"
              id="name"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="subject" className="input-label">Subject</label>
            <input
              type="text"
              id="subject"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="message" className="input-label">Message</label>
            <textarea
              id="message"
              className="input-field"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
