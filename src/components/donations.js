import { Link } from "react-router-dom";

function Donations() {
  return (
    <div className="donations-page">
      <header className="donation-header">
        <h1>Support the Temple with Your Donations</h1>
      </header>

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
        <div className="form-details">
          <div className="name-div">
            <label>Name</label>
            <input type="text" placeholder="Enter your Full Name" required />
          </div>
          <div className="mobile-num-div">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              required
            />
          </div>
          <div className="email-div">
            <label>E-mail</label>
            <input type="email" placeholder="Enter your Email ID" required />
          </div>
          <div className="gothara-div">
            <label>Gothra</label>
            <input type="text" placeholder="Gothra" />
          </div>
          <div className="Nakshatra-div">
            <label>Nakshatra</label>
            <select>
              <option>Nakshatra</option>
              {/* Add Nakshatra options */}
            </select>
          </div>
          <div className="Raashi-div">
            <label>Raashi</label>
            <select>
              <option>Raashi</option>
              {/* Add Raashi options */}
            </select>
          </div>
          <div className="Donation-amount-div">
            <label>Donation-amount</label>
            <input type="number" placeholder="Donation Amount" required />
          </div>
          <div className="Donation-Cause-div">
            <label>Donation Cause</label>
            <select>
              <option>Donation Cause</option>
              <option>Temple Maintenance</option>
              {/* Add more causes */}
            </select>
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Donations;
