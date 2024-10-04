// src/components/Gallery.js
import React from 'react';
import { Link } from 'react-router-dom';
import image3 from '../gallery/3.jpg';
import image4 from '../gallery/4.jpg';
import image5 from '../gallery/5.jpg';
import image6 from '../gallery/6.jpg';
import image7 from '../gallery/7.jpg';
import image8 from '../gallery/8.jpg';
import image9 from '../gallery/9.jpg';

const Gallery = () => {
    // Sample image data
    const images = [
        { id: 3, src: image3, alt: 'Event 3', title: 'Event Title 3' },
        { id: 4, src: image4, alt: 'Event 4', title: 'Event Title 4' },
        { id: 5, src: image5, alt: 'Event 5', title: 'Event Title 5' },
        { id: 6, src: image6, alt: 'Event 6', title: 'Event Title 6' },
        { id: 7, src: image7, alt: 'Event 7', title: 'Event Title 7' },
        { id: 8, src: image8, alt: 'Event 8', title: 'Event Title 8' },
        { id: 9, src: image9, alt: 'Event 9', title: 'Event Title 9' },
        // Add more images as necessary
    ];

    return (
        <div className="gallery">
            <header>
                <h1>Gallery</h1>
                <p>Explore moments captured at our temple events.</p>
            </header>

            <div className="gallery-grid">
                {images.map(image => (
                    <div key={image.id} className="gallery-item">
                        <img src={image.src} alt={image.alt} />
                        <h3>{image.title}</h3>
                    </div>
                ))}
            </div>

            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default Gallery;