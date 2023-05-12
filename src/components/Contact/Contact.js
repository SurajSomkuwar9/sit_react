// src/components/Contact.js

import React from 'react';
import './Contact.css';

const Contact = ({ collegeName }) => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact {collegeName}</h1>
      <p className="contact-paragraph">For any inquiries or assistance, please contact us:</p>
      <ul className="contact-list">
        <li className="contact-list-item">Phone: 123-456-7890</li>
        <li className="contact-list-item">Email: info@college.com</li>
        <li className="contact-list-item">Address: 123 Main Street, City, Country</li>
      </ul>
    </div>
  );
};

export default Contact;

