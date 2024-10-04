function About() {
  return (
    <div className="about-page">
      <h1>About Sri Prasanna Ganapathi Seva Charitable Trust</h1>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to promote spiritual growth and provide services to the community through various religious and charitable activities.</p>
      </section>

      <section className="history">
        <h2>History</h2>
        <p>Founded in 1999, Sri Prasanna Ganapathi Seva Charitable Trust has been a beacon of spirituality and service in the community...</p>
      </section>

      <section className="activities">
        <h2>Our Activities</h2>
        <p>We conduct regular poojas, community events, and educational support initiatives for underprivileged children.</p>
      </section>

      <section className="trustees">
        <h2>Meet Our Trustees</h2>
        <ul>
          <li><strong>Trustee 1:</strong> Bio goes here.</li>
          <li><strong>Trustee 2:</strong> Bio goes here.</li>
          {/* Add more trustees as needed */}
        </ul>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          “The temple has been a place of solace and guidance for me and my family.” – Devotee Name
        </blockquote>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>123 Temple Road, Bangalore, India</p>
        <p>Email: info@temple.org | Phone: +91 9876543210</p>
      </section>
    </div>
  );
}

export default About;