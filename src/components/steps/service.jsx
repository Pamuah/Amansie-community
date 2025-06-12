import React, { useState } from "react";
import { MapPin } from "lucide-react";

const Service = () => {
  const [form, setForm] = useState({
    region: "",
    city: "",
    street: "",
    getLoc: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="max-w-md mx-auto space-y-4">
      {/* pick location */}
      <div className="flex items-center  gap-4">
        <button
          onClick={""}
          className="flex items-center w-1/2 gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <MapPin size={18} />
          Get Location
        </button>

        <input
          type="text"
          name="getLoc"
          value={form.getLoc}
          readOnly
          placeholder="Location"
          className="border border-gray-300 px-4 py-2 rounded w-full max-w-sm"
        />
      </div>

      {/* Street and City - side by side */}
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block text-slate-800 font-medium mb-1 text-sm">
            Street
          </label>
          <input
            type="text"
            name="street"
            value={form.street}
            onChange={handleChange}
            className="w-full border border-gray-400 px-3 py-2 text-xs rounded"
            placeholder="Street"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-slate-800 font-medium mb-1 text-sm">
            City
          </label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full border border-gray-400 px-3 py-2 text-xs rounded"
            placeholder="City"
            required
          />
        </div>
      </div>

      {/* Street - on its own line */}
      <div>
        <label className="block text-slate-700 font-medium mb-1 text-sm">
          Region
        </label>
        <input
          type="text"
          name="region"
          value={form.region}
          onChange={handleChange}
          className="w-full border border-gray-400 px-3 py-2 text-xs rounded"
          placeholder="Region"
          required
        />
      </div>
    </form>
  );
};

export default Service;
