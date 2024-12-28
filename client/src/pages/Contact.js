import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
      .sendForm('service_0jy1qso', 'template_l3pgwjb', e.target, 'CrUT5ZxHd3aDs7175')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('There was an error sending your message. Please try again later.');
        }
      );

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '1rem',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    height: '40px',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '150px',
    resize: 'vertical',
  };

  const labelStyle = {
    fontSize: '1.2rem',
    marginBottom: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#81b29a',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#619283',
  };

  return (
    <div>
      <h2 style={{ marginTop: '20px', textAlign: 'center' }}>Contact Us</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="subject" style={labelStyle}>Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="message" style={labelStyle}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            style={textareaStyle}
          />
        </div>

        <button 
          type="submit" 
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} 
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
