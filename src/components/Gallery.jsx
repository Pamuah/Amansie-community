// ./Pages/Gallery.jsx
import React, { useState, lazy, Suspense } from "react";
import images from "../utils/images";

const ImageModal = lazy(() => import("../components/imageModal"));
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="  p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-2">
      {images.map((img) => (
        <div
          key={img.id}
          onClick={() => setSelectedImage(img)}
          className="cursor-pointer border-4 border-white hover:scale-105 transition-transform"
        >
          <picture>
            <source srcSet={img.webp} type="image/webp" />
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-20 object-cover"
            />
          </picture>
        </div>
      ))}

      <Suspense
        fallback={
          <div className="text-white text-center">Loading modal...</div>
        }
      >
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Gallery;
