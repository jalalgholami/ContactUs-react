import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // You can send the form data to your server or perform any other action here
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={handleMessageChange}></textarea>
        </div>
        <button type="button" onClick={handleSubmit}>Send</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
};

export default ContactUs;
