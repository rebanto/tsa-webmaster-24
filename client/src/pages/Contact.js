import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactPage.css";
import Footer from "../Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert(
            "There was an error sending your message. Please try again later."
          );
        }
      );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact mt-5">
      <h2>Contact Us</h2>
      <div
        className="p-4 shadow-sm"
        style={{
          background: "linear-gradient(135deg, #f4f1de, #d8f3dc)",
          maxWidth: "50%",
          margin: "auto",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="form-control"
              rows="4"
            />
          </div>

          <button type="submit" className="btn w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;