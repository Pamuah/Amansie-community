import React, { useState } from "react";

const BrideDetails = () => {
  const [formData, setFormData] = useState({
    bridesFullName: "",
    bridesGender: "",
    dateOfBirth: "",
    bridesResidence: "",
    maritalStatus: "",
    fatherName: "",
    motherName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg space-y-6">
      {/* Full Name + Gender */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="bridesFullName"
          value={formData.bridesFullName}
          onChange={handleChange}
          placeholder="Bride's Full Name"
          className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="bridesGender"
          value={formData.bridesGender}
          onChange={handleChange}
          className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* Occupation + Residence */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          placeholder="Occupation"
          className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="bridesResidence"
          value={formData.bridesResidence}
          onChange={handleChange}
          placeholder="Place of Residence"
          className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Marital Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Marital Status
        </label>
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
      </div>

      {/* Father's Details */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          placeholder="Father's Full Name"
          className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          placeholder="Mother's Full Name"
          className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  );
};

export default BrideDetails;
