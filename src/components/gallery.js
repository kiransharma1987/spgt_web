// src/components/Gallery.js
import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    // Sample image data
    const images = [
        { id: 1, src: 'path/to/image1.jpg', alt: 'Event 1', title: 'Event Title 1' },
        { id: 2, src: 'path/to/image2.jpg', alt: 'Event 2', title: 'Event Title 2' },
        { id: 3, src: 'path/to/image3.jpg', alt: 'Event 3', title: 'Event Title 3' },
        { id: 4, src: 'path/to/image4.jpg', alt: 'Event 4', title: 'Event Title 4' },
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