import { Link } from 'react-router-dom';
import image1 from '../gallery/1.jpg';
import image2 from '../gallery/2.jpg';
import ganeshaHeroImg from '../gallery/g3.png';
import galImg1 from '../gallery/1.jpg';
import galImg2 from '../gallery/2.jpg';
import galImg3 from '../gallery/3.jpg';
import galImg4 from '../gallery/5.jpg';
import galImg5 from '../gallery/6.jpg';
import galImg6 from '../gallery/7.jpg';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="aboutUS" className="hero container">
        <div className="hero-blue">
          <div>
            <h1>
              Sri Prasanna Ganapathi Temple
            </h1>
            <p>
              Sri Prasanna Ganapathi Seva Charitable Trust is a sacred haven dedicated to Lord Ganesha, the
              remover of obstacles and harbinger of good fortune. Our temple stands as a beacon of hope,
              spirituality, and community service, welcoming devotees from all walks of life.
            </p>
            <div className="call-to-action">
              <a href="#" className="button black">
                Donate Now
              </a>
              <a href="#" className="button white">
                Book Pooja
              </a>
            </div>
          </div>
        </div>
        <div className="hero-yellow">
          <img src={ganeshaHeroImg} alt="Ganesha Hero Image" width="100%" />
        </div>
      </section>

      {/* About Temple Section */}
      <section className="about">
        <h2>About the Temple</h2>
        <p>Founded in 1999, Sri Prasanna Ganapathi Seva Charitable Trust has been a beacon of spiritual enlightenment and cultural preservation for over three decades. Our journey began with a small group of devoted individuals who envisioned a sacred space dedicated to Lord Ganesha. From humble beginnings, we have grown into a vibrant community hub, fostering religious understanding and cultural appreciation.</p>
        <Link to="/about" className="link">Read More</Link>
      </section>

      {/* Upcoming Events */}
      <section id="events" class="upcoming-events container">
        <h2>Upcoming Events</h2>
        <div class="events-container">
          <div class="events-wrapper">
            <div class="events-grid">
              <div class="event-card">
                <div class="card-content">
                  <h3 class="card-title" title="Akshaya Tritiya Special Pooja">Akshaya Tritiya Special
                    Pooja</h3>
                  <div class="card-text">
                    <p>Date: May 15th, 2024</p>
                    <p>Time: 10:00 AM</p>
                  </div>
                  <a href="/events/akshaya-tritiya" class="card-button">More Details</a>
                </div>
              </div>

              <div class="event-card">
                <div class="card-content">
                  <h3 class="card-title" title="Monthly Sankashti Chaturthi">Monthly Sankashti Chaturthi
                  </h3>
                  <div class="card-text">
                    <p>Date: June 3rd, 2024</p>
                    <p>Time: 6:00 PM</p>
                  </div>
                  <a href="/events/sankashti-chaturthi" class="card-button">More Details</a>
                </div>
              </div>

              <div class="event-card">
                <div class="card-content">
                  <h3 class="card-title" title="Annual Temple Anniversary Celebrations">Annual Temple
                    Anniversary Celebrations</h3>
                  <div class="card-text">
                    <p>Date: July 20th, 2024</p>
                    <p>Time: 9:00 AM</p>
                  </div>
                  <a href="/events/temple-anniversary" class="card-button">More Details</a>
                </div>
              </div>

              <div class="event-card">
                <div class="card-content">
                  <h3 class="card-title" title="Akshaya Tritiya Special Pooja">Akshaya Tritiya Special
                    Pooja</h3>
                  <div class="card-text">
                    <p>Date: May 15th, 2024</p>
                    <p>Time: 10:00 AM</p>
                  </div>
                  <a href="/events/akshaya-tritiya" class="card-button">More Details</a>
                </div>
              </div>

              <div class="event-card">
                <div class="card-content">
                  <h3 class="card-title" title="Monthly Sankashti Chaturthi">Monthly Sankashti Chaturthi
                  </h3>
                  <div class="card-text">
                    <p>Date: June 3rd, 2024</p>
                    <p>Time: 6:00 PM</p>
                  </div>
                  <a href="/events/sankashti-chaturthi" class="card-button">More Details</a>
                </div>
              </div>

              <div class="event-card">
                <div class="card-content">
                  <h3 class="card-title" title="Annual Temple Anniversary Celebrations">Annual Temple
                    Anniversary Celebrations</h3>
                  <div class="card-text">
                    <p>Date: July 20th, 2024</p>
                    <p>Time: 9:00 AM</p>
                  </div>
                  <a href="/events/temple-anniversary" class="card-button">More Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/events">More Details</Link>
      </section>

      {/* Pooja Services Section */}
      <section id="poojas" class="pooja-services container">
            <h2>Our Pooja Services</h2>
            <p>We offer a range of pooja services to suit your spiritual needs. Choose from our list of services to seek
                blessings for you and your family.</p>
            <div class="pooja-grid">
                <div class="pooja-card">
                    <div class="card-content">
                        <h3 class="card-title">Ganesh Homa</h3>
                        <p class="card-text">This pooja invokes the blessings of Lord Ganesha to remove obstacles and
                            ensure success in all endeavors.</p>
                        <a href="/poojas/ganesh-homa" class="card-button">Book Now</a>
                    </div>
                </div>

                <div class="pooja-card">
                    <div class="card-content">
                        <h3 class="card-title">Abhisheka</h3>
                        <p class="card-text">Performing abhisheka to Lord Ganesha is considered highly auspicious and
                            brings peace and prosperity to the family.</p>
                        <a href="/poojas/abhisheka" class="card-button">Book Now</a>
                    </div>
                </div>

                <div class="pooja-card">
                    <div class="card-content">
                        <h3 class="card-title">Navagraha Pooja</h3>
                        <p class="card-text">This pooja is performed to appease the nine celestial bodies and receive
                            their blessings for good fortune.</p>
                        <a href="/poojas/navagraha-pooja" class="card-button">Book Now</a>
                    </div>
                </div>

                <div class="pooja-card">
                    <div class="card-content">
                        <h3 class="card-title">Satyanarayana Pooja</h3>
                        <p class="card-text">Offering prayers to Lord Vishnu, this pooja is performed for prosperity,
                            health, and family harmony.</p>
                        <a href="/poojas/satyanarayana-pooja" class="card-button">Book Now</a>
                    </div>
                </div>
            </div>
            <Link to="/poojas" className="btn">View All Poojas</Link>
        </section>

      {/* Donate Section */}

      <section id="donations" class="donations-section container">

            <h2>Support the Temple</h2>
            <p>Your contributions help us preserve the temple's sanctity and carry forward our spiritual and charitable
                activities.</p>

            <div class="donation-options">
                <div class="donation-card">
                    <h3>General Donation</h3>
                    <p>Help us with daily temple operations and maintenance. Every bit makes a difference.</p>
                    <a href="/donate/general" class="btn">Donate Now</a>
                </div>

                <div class="donation-card">
                    <h3>Special Pooja Donation</h3>
                    <p>Support specific rituals like Ganesh Homa, Abhisheka, and others to seek divine blessings.</p>
                    <a href="/donate/pooja" class="btn">Donate Now</a>
                </div>
            </div>

            <div class="cta">
                <p>Want to learn more about how your donations are used? <Link to="/donations" className="btn">Donate Now</Link>.
                </p>
            </div>
            
        </section>

      {/* Gallery Preview Section */}
      <section id="gallery" class="bento container">
            <h2>
                Gallery
            </h2>
            <div class="bento-grid">
                <a href="#" class="bento-item">
                    <img src={galImg1} alt="BGCCI" width="100%" />
                </a>
                <a href="#" class="bento-item">
                    <img src={galImg2} alt="Churhview" width="100%" />
                </a>
                <a href="#" class="bento-item">
                    <img src={galImg3} alt="Harley" width="100%" />
                </a>
                <a href="#" class="bento-item">
                    <img src={galImg4} alt="Bunbury" width="100%" />
                </a>
                <a href="#" class="bento-item">
                    <img src={galImg5} alt="Running" width="100%" />
                </a>
                <a href="#" class="bento-item">
                    <img src={galImg6} alt="School" width="100%" />
                </a>
            </div>
            <Link to="/gallery" className="link">View Gallery</Link>
        </section>
    </div>
  );
}

export default Home;