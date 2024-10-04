import { Link } from 'react-router-dom';

function Donations() {
    return (
      <div className="donations-page">
        <h1>Support the Temple with Your Donations</h1>
  
        <section className="donation-categories">
          <div className="category-card">
            <h3>Temple Maintenance</h3>
            <p>Your donations help maintain the temple infrastructure.</p>
            {/* <Link to="/donate" className="btn">Donate Now</Link> */}
          </div>
          {/* Add more categories */}
        </section>
  
        {/* Donation Form */}
        <form className="donation-form">
          <h2>Make a Donation</h2>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Mobile Number" required />
          <input type="email" placeholder="Email ID" required />
          <input type="text" placeholder="Gothra" />
          <select>
            <option>Nakshatra</option>
            {/* Add Nakshatra options */}
          </select>
          <select>
            <option>Raashi</option>
            {/* Add Raashi options */}
          </select>
          <input type="number" placeholder="Donation Amount" required />
          <select>
            <option>Donation Cause</option>
            <option>Temple Maintenance</option>
            {/* Add more causes */}
          </select>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  }
  
  export default Donations;