// src/components/Gallery.jsx
import { galleryImages } from '../data/data';

function Gallery() {
  return (
    <section id="gallery" className="container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <img key={index} src={image.src} alt={`Gallery ${index + 1}`} className="gallery-img" />
        ))}
      </div>
    </section>
  );
}

export default Gallery;