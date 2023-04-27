import React from 'react';
//import CSS
import '../styles/style.css';


function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-bar">
      <li className="nav-item px-3">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ?  'nav-text-active' : 'nav-text'}
        >
          Home
        </a>
      </li>
      <li className="nav-item px-3">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ?  'nav-text-active' : 'nav-text'}
        >
          About
        </a>
      </li>
      <li className="nav-item px-3">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-text-active' : 'nav-text'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item px-3">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-text-active' : 'nav-text'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item px-3">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-text-active' : 'nav-text'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
