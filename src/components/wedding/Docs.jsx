import React, { useState } from "react";

const IDUploadForm = () => {
  const [formData, setFormData] = useState({
    brideIDType: "",
    brideIDFile: null,
    bridePhoto: null,
    groomIDType: "",
    groomIDFile: null,
    groomPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <form className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg space-y-6">
      {/* Bride Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Bride</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-600">ID Type</label>
            <select
              name="brideIDType"
              value={formData.brideIDType}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select ID Type</option>
              <option value="Ghana Card">Ghana Card</option>
              <option value="Passport">Passport</option>
              <option value="Driver's Licence">Driver's Licence</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-600">ID File</label>
            <input
              type="file"
              accept="image/*,.pdf"
              name="brideIDFile"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-600">Passport Photo</label>
            <input
              type="file"
              accept="image/*"
              name="bridePhoto"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Groom Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Groom</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-600">ID Type</label>
            <select
              name="groomIDType"
              value={formData.groomIDType}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select ID Type</option>
              <option value="Ghana Card">Ghana Card</option>
              <option value="Passport">Passport</option>
              <option value="Driver's Licence">Driver's Licence</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-600">ID File</label>
            <input
              type="file"
              accept="image/*,.pdf"
              name="groomIDFile"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-600">Passport Photo</label>
            <input
              type="file"
              accept="image/*"
              name="groomPhoto"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default IDUploadForm;
