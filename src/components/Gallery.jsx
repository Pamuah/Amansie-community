// ./Pages/Gallery.jsx
import React, { useState, lazy, Suspense } from "react";
import galleryData from "../utils/images";
import SearchBar from "./searchBar";

const ImageModal = lazy(() => import("./imageModal"));

const Gallery = () => {
  const folderNames = Object.keys(galleryData);
  const [selectedFolder, setSelectedFolder] = useState(folderNames[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <p className="text-center text-slate-700 mt-6 mb-4">
        <span className="font-bold text-2xl">Gallery</span>
      </p>

      {/* Folder selection */}
      <div className="flex flex-col gap-y-4 md:flex-row items-center justify-center">
        <div className="flex justify-center gap-4  ">
          {folderNames.map((folder) => (
            <button
              key={folder}
              onClick={() => setSelectedFolder(folder)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedFolder === folder
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {folder}
            </button>
          ))}
        </div>
        <div className="flex justify-center max-w-sm  ml-4">
          <SearchBar placeholder={"Search"} />
        </div>
      </div>

      <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {galleryData[selectedFolder].map((img) => (
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
            <div className="text-black text-center">Loading modal...</div>
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
    </div>
  );
};

export default Gallery;
