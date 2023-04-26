import React from 'react';
//import CSS
import '../styles/style.css';

export default function Footer() {
  return (
    <div className='text-center'>
      <a className="footer-icon" href="https://www.linkedin.com/in/william-cable/">
        <i className="fa-brands fa-linkedin fa-4x"></i>
      </a>
      <a className="footer-icon" href="https://github.com/Cableman687">
        <i className="fa-brands fa-github fa-4x"></i>
      </a>
      <a className="footer-icon" href="https://stackoverflow.com/users/21731593/cableman687">
        <i className="fa-brands fa-stack-overflow fa-4x"></i>
      </a>
    </div>
  );
}