import { useState } from "react";

export default function BuildingPermitForm() {
  const [formData, setFormData] = useState({
    owner: "",
    buildingType: "",
    district: "",
    town: "",
    area: "",
    cost: "",
    startDate: "",
    completionDate: "",
    architectName: "",
    contact: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="pb-6 pt-3 space-y-8 max-w-6xl mx-auto"
    >
      {/* Project Details */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Building Permit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Owner of the Permit
            </label>
            <input
              type="text"
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              className="w-full border text-gray-500 px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Type of Building
            </label>
            <select
              name="buildingType"
              value={formData.buildingType}
              onChange={handleChange}
              className="w-full border px-4 py-2 text-gray-500 rounded"
            >
              <option value="">Select Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Mixed Use">Mixed Use</option>
              <option value="Industrial">Industrial</option>
              <option value="Institutional">Institutional</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              District
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Town
            </label>
            <input
              type="text"
              name="town"
              value={formData.town}
              onChange={handleChange}
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Area
            </label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Estimated Cost (GHS)
            </label>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Completion Date
            </label>
            <input
              type="date"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleChange}
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
        </div>
      </div>

      {/* Site and Ownership */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Site and Ownership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Upload Land Certificate
            </label>
            <input
              type="file"
              name="landCert"
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Upload Indenture
            </label>
            <input
              type="file"
              name="indenture"
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Upload Site Plan
            </label>
            <input
              type="file"
              name="sitePlan"
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
        </div>
      </div>

      {/* Professional Details */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Professional Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Name of Architect/Engineer
            </label>
            <input
              type="text"
              name="architectName"
              value={formData.architectName}
              onChange={handleChange}
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-700 font-medium">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border px-4 py-2 text-gray-500 rounded"
            />
          </div>
        </div>
      </div>

      {/* Declaration */}
      <div>
        <label className="inline-flex items-start gap-2">
          <input
            type="checkbox"
            name="declaration"
            checked={formData.declaration}
            onChange={handleChange}
          />
          <span className="text-sm">
            I hereby declare that the information provided is true and correct
            to the best of my knowledge.
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit Application
      </button>
    </form>
  );
}
