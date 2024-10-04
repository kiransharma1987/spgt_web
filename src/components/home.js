import { Link } from 'react-router-dom';
import bannerImage from '../banner.jpg'; // Replace with the path of your image
// import Gallery from './components/gallery';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img src={bannerImage} alt="Temple Banner" className="banner" />
        <div className="hero-text">
          <h1>Welcome to Sri Prasanna Ganapathi Temple</h1>
          <div className="cta-buttons">
            <Link to="/donations" className="btn">Donate Now</Link>
            <Link to="/poojas" className="btn">Book Pooja</Link>
          </div>
        </div>
      </section>

      {/* About Temple Section */}
      <section className="about">
        <h2>About the Temple</h2>
        <p>Our temple has been a spiritual center since 1999, bringing peace and prosperity to the community.</p>
        <Link to="/about" className="link">Read More</Link>
      </section>

      {/* Upcoming Events */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <div className="event-cards">
          {/* Example event card */}
          <div className="event-card">
            <h3>Ganesh Chaturthi</h3>
            <p>Date: Sept 19, 2024</p>
            <Link to="/events">More Details</Link>
          </div>
          {/* Add more event cards here */}
        </div>
      </section>

      {/* Pooja Services Section */}
      <section className="poojas">
        <h2>Pooja Services</h2>
        <p>We offer various poojas like Ganesh Homa, Abhisheka, and more.</p>
        <Link to="/poojas" className="btn">View All Poojas</Link>
      </section>

      {/* Donate Section */}
      <section className="donate">
        <h2>Support the Temple</h2>
        <p>Your donations help maintain the temple and fund community services.</p>
        <Link to="/donations" className="btn">Donate Now</Link>
      </section>

      {/* Gallery Preview Section */}
      <section className="gallery-preview">
        <h2>Gallery</h2>
        <div className="gallery-images">
          {/* Sample images */}
          <img src="path/to/image1.jpg" alt="Gallery Image 1" />
          <img src="path/to/image2.jpg" alt="Gallery Image 2" />
          {/* Add more images */}
        </div>
        <Link to="/gallery" className="link">View Gallery</Link>
      </section>
    </div>
  );
}

export default Home;