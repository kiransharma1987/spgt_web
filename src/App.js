import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Donations from './components/donations';
import Poojas from './components/poojas';
import Events from './components/events';
import Contact from './components/contact';
import templeLogo from '../src/gallery/spgt.png'; // Assuming logo is in gallery folder
import Gallery from './components/gallery';

const App = () => {
  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    document.getElementById("menu").classList.toggle("active");
  };
  return (
    <Router>
      <div>
        {/* Header */}
        <header>
          <a href="#" className="logo-holder">
            <div className="logo"><img src={templeLogo} width="64px" alt="Sri Prasanna Ganapathi Logo" /></div>
            <div className="logo-text">Sri Prasanna Ganapathi Seva Charitable Trust</div>
          </a>
          <nav>
            <ul id="menu">
              <li><Link to="/"><a href="#">Home</a></Link>
              </li>
              <li>
                <Link to="/about"><a href="#aboutUS">About Us</a></Link>
              </li>
              <li>
                <Link to="/events"><a href="#events">Events</a></Link>
              </li>
              <li>
                <Link to="/poojas"><a href="#poojas">Poojas</a></Link>
              </li>
              <li>
                <Link to="/donations"><a href="#donations">Donations</a></Link>
              </li>
              <li>
                <Link to="/gallery"><a href="#gallery">Gallery</a></Link>
              </li>
              <li>
                <Link to="/contact"><a href="#" className="button">Contact Us</a></Link>
              </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
              </svg>
            </a>
          </nav>
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
          <p>Contact Info: 123 Temple Road, Bangalore, India</p>
          <p>Email: info@temple.org | Phone: +91 9876543210</p>
          <p>Follow us: Facebook | Instagram</p>
          <div className="footer-links">
            <Link to="/sitemap">Sitemap</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;