import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1>Get In Touch</h1>
      <div className="details">
        <h2>Enter Your Details</h2>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="number" placeholder="Phone" required />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Contact;
