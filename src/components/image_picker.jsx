import React, { useState } from "react";
import { useGlobalContext } from "../Global Context/context_api";

const ImageUpload = ({ label = "Upload Image" }) => {
  const [, setSelectedImage] = useState(null);
  const { setDeceasedInfo } = useGlobalContext();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);

      setDeceasedInfo((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 px-6 md:px-4">
      <label className="text-xs  ">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0 file:text-sm file:font-semibold
          file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
      />
    </div>
  );
};

export default ImageUpload;
