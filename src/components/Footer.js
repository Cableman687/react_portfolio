import React from 'react';
//import CSS
import '../styles/style.css';

export default function Footer() {
  return (
    <div className='text-center mt-3 mb-3'>
      <a className="footer-icon m-1" href="https://www.linkedin.com/in/william-cable/">
        <i className="fa-brands fa-linkedin fa-4x"></i>
      </a>
      <a className="footer-icon m-1" href="https://github.com/Cableman687">
        <i className="fa-brands fa-github fa-4x"></i>
      </a>
      <a className="footer-icon m-1" href="https://stackoverflow.com/users/21731593/cableman687">
        <i className="fa-brands fa-stack-overflow fa-4x"></i>
      </a>
    </div>
  );
}