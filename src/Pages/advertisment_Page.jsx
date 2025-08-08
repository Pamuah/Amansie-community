import React, { useState } from "react";

const AdvertisementForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    address: "",
    contact: "",
    adType: "",
    adSize: "",
    illuminate: false,
    location: "",
    ownerConsent: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form:", formData);
    // handle form submission (e.g., API call)
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-200 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Advertisement Registration Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block font-medium text-gray-700">
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full mt-1 p-1.5 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full mt-1 p-1.5 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full mt-1 p-1.5 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Type of Advertisement
          </label>
          <select
            name="adType"
            value={formData.adType}
            onChange={handleChange}
            className="w-full mt-1 p-1.5 border rounded-md"
            required
          >
            <option value="">-- Select Type --</option>
            <option value="Billboard">Billboard</option>
            <option value="Banner">Banner</option>
            <option value="Digital Screen">Digital Screen</option>
            <option value="Poster">Poster</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Size of Advertisement (m)
          </label>
          <input
            type="number"
            name="adSize"
            value={formData.adSize}
            onChange={handleChange}
            className="w-full mt-1 p-1.5 border rounded-md"
            required
          />
        </div>

        <div className="flex items-center gap-3 mt-6">
          <input
            type="checkbox"
            name="illuminate"
            checked={formData.illuminate}
            onChange={handleChange}
            className="h-5 w-5"
          />
          <label className="text-gray-700">Illuminates at night?</label>
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Exact Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full mt-1 p-1.5 border rounded-md"
            required
          />
        </div>

        <div className="flex items-center gap-3 mt-6">
          <input
            type="checkbox"
            name="ownerConsent"
            checked={formData.ownerConsent}
            onChange={handleChange}
            className="h-5 w-5"
          />
          <label className="text-gray-700">Land owner has given consent?</label>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md"
          >
            Submit Advertisement
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvertisementForm;
