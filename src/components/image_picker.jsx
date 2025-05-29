import React, { useState } from "react";
import { useGlobalContext } from "../Global Context/context_api";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { deceasedInfo, setDeceasedInfo } = useGlobalContext();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);

      // Save to global context
      setDeceasedInfo((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6 px-6 md:px-12">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0 file:text-sm file:font-semibold
          file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 "
      />
    </div>
  );
};

export default ImageUpload;
