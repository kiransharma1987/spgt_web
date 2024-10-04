import React, { useState } from 'react';
// import './Gallery.css'; // Create this CSS file with the styles below
import image3 from '../gallery/3.jpg';
import image4 from '../gallery/4.jpg';
import image5 from '../gallery/5.jpg';
import image6 from '../gallery/6.jpg';
import image7 from '../gallery/7.jpg';
import image8 from '../gallery/8.jpg';
import image9 from '../gallery/9.jpg';

const images = [
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
  ];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="gallery-container">
      <h2>Image Gallery</h2>
      <div className="gallery">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img
              src={img}
              alt={`Gallery Image ${index + 3}`}
              onClick={() => openLightbox(img)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <span className="close">&times;</span>
            <img className="lightbox-image" src={currentImage} alt="Large" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;