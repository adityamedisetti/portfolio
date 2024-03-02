import React, { useState } from 'react';
import '../CS/navbar.css';
import rlogo1 from '../images/rlogo1.png';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleIcon = isMobileMenuOpen ? '✖' : '☰';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start"});
    }
   
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="logo" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
        <img src={rlogo1} style={{width:"120px",height:"50px"}}/>
      </div>
      <div className="mobile-menu-icon" onClick={handleToggleMobileMenu} style={{color:"white"}}>
        {toggleIcon}
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li className="nav-item">
          <a href="/" className="nav-link" onClick={() => scrollToSection("home")}>Home</a>
        </li>
        <li className="nav-item">
          <a href="#content-1" className="nav-link" onClick={() => scrollToSection("content-3")}>Education</a>
        </li>
        
        <li className="nav-item">
          <a href="#content-2" className="nav-link" onClick={() => scrollToSection("content-2")}>Skills</a>
        </li>
        <li className="nav-item">
          <a href="#content-4" className="nav-link" onClick={() => scrollToSection("content-1")}>Projects</a>
        </li>
        <li className="nav-item">
          <a href="#content-5" className="nav-link" onClick={() => scrollToSection("content-3")}>Certificates</a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
