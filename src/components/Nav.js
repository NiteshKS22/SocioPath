// Nav.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlay, faComments, faCog, faBell, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import './nav.css';

import logoImage from '../theme/logo2.png'; // Import the logo image

const NavBar = () => {
  const handleSearch = () => {
    // Implement search functionality here
    console.log('Search clicked');
  };

  const handleMenuClick = (menu) => {
    // Implement menu click functionality here
    console.log(`Clicked ${menu}`);
  };

  return (
    <nav className="navbar" style={{ height: '25px' }}>
      <div className="logo">
        <img src={logoImage} alt="SocioPath Logo" />
      </div>
      <div className="nav-items">
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
          <span></span>
        </button>
        <button onClick={() => handleMenuClick('Playground')}>
          <FontAwesomeIcon icon={faPlay} />
          <span></span>
        </button>
        <button onClick={() => handleMenuClick('Chat')}>
          <FontAwesomeIcon icon={faComments} />
          <span></span>
        </button>
        <button onClick={() => handleMenuClick('Settings')}>
          <FontAwesomeIcon icon={faCog} />
          <span></span>
        </button>
        <button>
          <FontAwesomeIcon icon={faBell} />
          <span></span>
        </button>
        <button>
          <FontAwesomeIcon icon={faQuestion} />
          <span></span>
        </button>
        <button>
          <FontAwesomeIcon icon={faUser} />
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
