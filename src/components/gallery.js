import React, { useState } from 'react';
import { Modal, ModalGateway } from 'react-images';
import image3 from '../gallery/3.jpg';
import image4 from '../gallery/4.jpg';
import image5 from '../gallery/5.jpg';
import image6 from '../gallery/6.jpg';
import image7 from '../gallery/7.jpg';
import image8 from '../gallery/8.jpg';
import image9 from '../gallery/9.jpg';

const Gallery = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 }
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openLightbox(index)}
            className="gallery-image"
          />
        ))}
      </div>

      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={closeLightbox}>
            <img
              src={images[currentImage].src}
              alt={`Gallery Image ${currentImage + 1}`}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default Gallery;