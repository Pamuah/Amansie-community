import React, { useState } from "react";

const CeremonyDetails = () => {
  const [formData, setFormData] = useState({
    location: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Ceremony Details</h2>

      {/* Location */}
      <div className="flex flex-col">
        <label htmlFor="location" className="mb-1 text-sm text-gray-600">
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter location"
          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Date */}
      <div className="flex flex-col">
        <label htmlFor="date" className="mb-1 text-sm text-gray-600">
          Ceremony Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Time */}
      <div className="flex flex-col">
        <label htmlFor="time" className="mb-1 text-sm text-gray-600">
          Ceremony Time
        </label>
        <input
          type="time"
          name="time"
          id="time"
          value={formData.time}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  );
};

export default CeremonyDetails;
