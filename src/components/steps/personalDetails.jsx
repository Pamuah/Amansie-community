import React, { useState } from "react";

export default function PersonalDetails({ onSubmit }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    dob: "",
    region: "",
    nationalId: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
    >
      {/* Name: first + last side by side */}
      <div className="grid grid-cols-2 gap-x-4 mb-4">
        <div>
          <label className="block text-slate-800 font-medium mb-1 text-sm">
            First Name
          </label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border border-gray-400 px-3 py-2 text-xs rounded"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label className="block text-gray-800 font-medium mb-1 text-sm">
            Last Name
          </label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border border-gray-400 px-3 py-2 text-xs rounded"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      {/* Gender */}
      <div className="mb-4 flex flex-row">
        <span className="block text-gray-800 font-medium text-sm mb-1 mr-4">
          Gender
        </span>
        <label className="inline-flex items-center text-sm mr-4">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={form.gender === "male"}
            onChange={handleChange}
            className="form-radio text-xs"
            required
          />
          <span className="ml-2 font-mono text-gray-600">Male</span>
        </label>
        <label className="inline-flex items-center text-sm">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={form.gender === "female"}
            onChange={handleChange}
            className="form-radio text-xs"
          />
          <span className="ml-2 font-mono text-gray-600">Female</span>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-x-4 mb-4">
        <div>
          <label className="block text-gray-800 font-medium mb-1 text-sm">
            National ID / Passport
          </label>
          <input
            name="nationalId"
            value={form.nationalId}
            onChange={handleChange}
            className="w-full border border-gray-400 px-3 py-2 text-xs rounded"
            placeholder="ID or Passport Number"
            required
          />
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-1 text-sm">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full border border-gray-400 px-3 py-2 text-xs rounded"
            required
          />
        </div>
      </div>

      {/* IDs and Emergency: side by side */}
      <div className="grid grid-cols-2 gap-x-4 mb-6">
        <div>
          <label className="block text-gray-800 font-medium mb-1 text-sm">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={form.country}
            onChange={handleChange}
            className="w-full border border-gray-400 px-3 py-2 text-xs rounded"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>
        <div>
          <label className="block text-gray-800 font-medium mb-1 text-sm">
            Contact
          </label>
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="w-full border border-gray-400 px-3 py-2 text-xs rounded"
            placeholder="Phone Number"
            required
          />
        </div>
      </div>
    </form>
  );
}
