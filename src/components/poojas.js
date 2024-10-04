// src/components/Poojas.js
import React from 'react';
import { Link } from 'react-router-dom';

const Poojas = () => {
    return (
        <div className="poojas">
            <header>
                <h1>Pooja Services</h1>
                <p>Explore our variety of pooja services offered to the community.</p>
            </header>

            {/* Pooja Listing */}
            <div className="card-container">
                {/* Example Pooja Card */}
                <div className="card">
                    <h3>Ganesh Homa</h3>
                    <p>A sacred ritual performed to invoke Lord Ganesha's blessings.</p>
                    <p>Duration: 1 Hour</p>
                    <p>Price: ₹500</p>
                    <Link to="/poojas/book" className="btn">Book Now</Link>
                </div>
                {/* Add more pooja cards here */}
            </div>
        </div>
    );
};

export default Poojas;