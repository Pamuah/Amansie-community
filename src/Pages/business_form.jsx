import React, { useState } from "react";

const BusinessInfoForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    contactNumber: "",
    numberOfEmployees: "",
    location: "",
    digitalAddress: "",
    isRegistered: "",
    sector: "",
    operationDuration: "",
    businessRecord: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const renderInput = (label, name, placeholder, type = "text") => (
    <div className="flex-1">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full border rounded-lg p-2 text-sm"
      />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-700 bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Business Information</h2>

        <div className="flex flex-col md:flex-row gap-4">
          {renderInput(
            "Business Name",
            "businessName",
            "Softmasters company ltd"
          )}
          {renderInput("Contact Person", "ownerName", "John Doe")}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {renderInput("Contact Number", "contactNumber", "0201056234")}
          {renderInput(
            "Number of Employees",
            "numberOfEmployees",
            "Enter number of employees"
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {renderInput("Location", "location", "Enter location")}
          {renderInput("Digital Address", "digitalAddress", "WP-117-001")}
        </div>

        {renderInput(
          "Years of Operation",
          "operationDuration",
          "eg. 4",
          "number"
        )}

        <div className="flex items-center gap-4">
          <span className="font-medium text-sm">Is Business Registered?</span>
          <label className="flex items-center gap-1 text-sm">
            <input
              type="radio"
              name="isRegistered"
              value="Yes"
              checked={formData.isRegistered === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="flex items-center gap-1 text-sm">
            <input
              type="radio"
              name="isRegistered"
              value="No"
              checked={formData.isRegistered === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="sector" className="block font-medium mb-1 text-sm">
              Industry or Sector
            </label>
            <select
              name="sector"
              id="sector"
              value={formData.sector}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 text-sm"
            >
              <option value="">Select industry or sector</option>
              <option value="Artisan">
                Artisan (Mechanic, Carpenter, Mason, etc.)
              </option>
              <option value="Trading">General Merchandise (Trading)</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Technology">Technology</option>
              <option value="Education">Education</option>
              <option value="Finance">Finance</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="flex-1">
            <label
              htmlFor="businessRecord"
              className="block font-medium mb-1 text-sm"
            >
              Business Record You Keep
            </label>
            <select
              name="businessRecord"
              id="businessRecord"
              value={formData.businessRecord}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 text-sm"
            >
              <option value="">Select record type</option>
              <option value="Cash Book">Cash Book</option>
              <option value="Bank Account">Bank Account</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessInfoForm;
