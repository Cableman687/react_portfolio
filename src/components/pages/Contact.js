import React, { useState } from 'react';

import {  validateEmail } from '../utils/helpers';

function Contact() {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {

    const {target} = event;
    const inputType = target.name;
    const inputValue = target.value;

    if(inputType === "Name"){
      setName(inputValue);
    } else if(inputType === "Email"){
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {

    event.preventDefault();

    if(!validateEmail(Email)){
      setErrorMessage("Email is Invalid!");
      return;
    }

    // if all is successfull, clear input fields >>>
    setName('');
    setEmail('');
    setMessage('');

  }

  return (
    <div>
      <h1>Contact Page</h1>
      <form className="form">
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={Email}
          name="Email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={Message}
          name="Message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type message here..."
        />
      <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    

  )

}

export default Contact;