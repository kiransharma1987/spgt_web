import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Donations from './components/donations';
import Poojas from './components/poojas';
import Events from './components/events';
import Contact from './components/contact';
import templeLogo from './logo.png'; // Assuming logo is in assets folder
import Gallery from './components/gallery';
// import bannerImage from './banner.jpg'; // Replace with the path of your image

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <header className="header">
          <img src={templeLogo} alt="Temple Logo" className="logo" />
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/donations">Donations</Link></li>
              <li><Link to="/poojas">Poojas</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              {/* <li><Link to="/poojas">Poojas</Link></li>
                          <li><Link to="/events">Events</Link></li>
                          <li><Link to="/donations">Donations</Link></li>
                          <li><Link to="/gallery">Gallery</Link></li>
                          <li><Link to="/contact">Contact Us</Link></li> */}
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/poojas" element={<Poojas />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/poojas" element={<Poojas />} />
                  <Route path="/donations" element={<Donations />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} /> */}
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