import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/images/logo.png';
import menu_icon from '../../assets/images/menu-icon.png';

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    console.log("Before toggle, mobileMenu:", mobileMenu);
    setMobileMenu(!mobileMenu);
    console.log("After toggle, mobileMenu:", mobileMenu);
  };

  return (
    <div className='header'>
      <nav className='logo'>
        <img src={logo} alt="logo" />
      </nav>

      <nav className='navbar'>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li>Home</li>
          <li>About</li>
          <li>Reservation</li>
          <li>Menu</li>
          <li>Login</li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
      </nav>
    </div>
  );
};

export default NavBar;
