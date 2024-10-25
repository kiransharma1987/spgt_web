import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Donations from './components/donations';
import Poojas from './components/poojas';
import Events from './components/events';
import Contact from './components/contact';
import templeLogo from '../src/spgt_logo.svg'; // Assuming logo is in gallery folder
import Gallery from './components/gallery';

const App = () => {

  const [activeNavItem, setActiveNavItem] = useState('/');

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    document.getElementById("menu").classList.toggle("active");
  };

  // Function to handle nav item click
  const handleNavClick = (path) => {
    setActiveNavItem(path);
  };
  return (
    <Router>
      <div>
        {/* Header */}
        <header className="header">
          <div className="header_inner">
            <div className="logo-container">
              <img src={templeLogo} alt="SPGT logo" />
              <div className="logo-text">Sri Prasanna Ganapathi Seva Charitable Trust</div>
              <div className="logo-text-right">Mob: +91 1234567890</div>
            </div>
            <nav className="shift">
              <ul>
                {[
                  { path: '/', label: 'Home' },
                  { path: '/aboutUS', label: 'About us' },
                  { path: '/events', label: 'Events' },
                  { path: '/poojas', label: 'Pooje' },
                  { path: '/donations', label: 'Donations' },
                  { path: '/gallery', label: 'Gallery' },
                  { path: '/contact', label: 'Contact us' },
                ].map(({ path, label }) => (
                  <li key={path} className="nav-item">
                    <Link
                      to={path}
                      className={activeNavItem === path ? 'active' : ''}
                      onClick={() => handleNavClick(path)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/poojas" element={<Poojas />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Footer */}
        <footer>
          <p>Copyright © 2024 Sri Prasanna Ganapathi Seva Charitable Trust. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;