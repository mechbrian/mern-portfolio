/*
  File Name: contact.jsx
  Student Name: Po-Kai Chao
  Student ID: 301426941
  Date: January 26, 2025  
*/

// import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const navigate = useNavigate(); // For redirection to Home
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const myContact = {
    firstName: "Po-Kai (Brian)",
    lastName: "Chao",
    contactNumber: "+1 647-960-9171",
    email: "pchao8@my.centennialcollege.ca",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        // Spread operator to copy the previous data
        // and then update the new data
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/");
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Name:</strong> {myContact.firstName} {myContact.lastName}
        </p>
        <p>
          <strong>Email:</strong>
          {myContact.email}
        </p>
        <p>
          <strong>Phone:</strong> {myContact.contactNumber}
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Me a Message</h2>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
