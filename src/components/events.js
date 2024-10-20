// src/components/Events.js
import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <div className="events">
            <header className='events-header'>
                <h1>Upcoming Events</h1>
                <p>Join us for our upcoming spiritual and community events.</p>
            </header>

            {/* Events List */}
            <div className="event-list">
                {/* Example Event Item */}
                <div className="event-item">
                    <h3>Ganesh Chaturthi Celebration</h3>
                    <p>Date: September 19, 2024</p>
                    <p>Time: 10:00 AM</p>
                    <p>Description: Celebrate Ganesh Chaturthi with us. Join for pooja and festivities.</p>
                    <Link to="/events/ganesh-chaturthi" className="btn">More Details</Link>
                </div>
                {/* Add more events here */}
            </div>
        </div>
    );
};

export default Events;