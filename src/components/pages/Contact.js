import React, { useState } from 'react';

import {  validateEmail } from '../utils/helpers';

function Contact() {

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

  //------ Contact Fields
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  
  //------ Error Messages
  const [errorMessage, setErrorMessage] = useState('');

  //------ Validations
  function validateEmail(Email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
  }

  function validateBlankField(Input) {
    if(Input == ""){
      return false;
    } else {
      return true;
    }
  }
  //------ Change Controls
  const handleEmailChange = event => {
    if (!validateEmail(event.target.value)) {
        setErrorMessage('Email is invalid!');
    } else {
        setErrorMessage(null);
    }
    setEmail(event.target.value);
  };

  const handleMessageChange = event => {
    if (!validateBlankField(event.target.value)) {
        setErrorMessage('Message field is Blank!');
    } else {
        setErrorMessage(null);
    }
    setMessage(event.target.value);
  };

  const handleNameChange = event => {
    if (!validateBlankField(event.target.value)) {
        setErrorMessage('Name is required!');
    } else {
        setErrorMessage(null);
    }
    setName(event.target.value);
  };


  //------ Final <Div>
  return (
    <div>
      <header className='row text-center'>
        <h1>Contact</h1>
      </header>
      <form className="form container">
        <div className='row justify-content-center m-2'>
          <input
            value={Name}
            name="Name"
            onChange={handleNameChange}
            type="text"
            placeholder="Name"
            className='col-4'
          />
        </div>
        <div className='row justify-content-center m-2'>
          <input
            value={Email}
            name="Email"
            onChange={handleEmailChange}
            type="text"
            placeholder="Email"
            className='row col-4'
          />
        </div>
        <div className='row justify-content-center m-2'>
          <textarea
            value={Message}
            name="Message"
            onChange={handleMessageChange}
            type="text"
            placeholder="Type message here..."
            className='row col-4'
            rows={10}
          />
        </div>
        <div className='row justify-content-center m-2'>
            <button
            type="button"
            onClick={handleFormSubmit}
            className='col-2'
            >Submit</button>
        </div>
        {errorMessage && (
        <div className='row justify-content-center m-2'>
          <p className="error-text col-3 text-center">{errorMessage}</p>
        </div>
      )}
      </form>

    </div>
    

  )

}

export default Contact;