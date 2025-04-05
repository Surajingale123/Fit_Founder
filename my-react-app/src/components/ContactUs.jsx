import React, { useState } from 'react';
import './styles.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/api/contact-us/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Message submitted successfully!');
        setFormData({ email: '', message: '' }); 
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to submit message.');
      }
    } catch (error) {
      setErrorMessage('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

        <br />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Write your message here" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;