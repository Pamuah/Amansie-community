import { useRef, useState } from "react";

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
    profession: "",
    contact: "",
    declaration: false,
  });

  // File names for preview
  const [landCert, setLandCert] = useState("");
  const [indenture, setIndenture] = useState("");
  const [sitePlan, setSitePlan] = useState("");

  // File input refs
  const landCertRef = useRef(null);
  const indentureRef = useRef(null);
  const sitePlanRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(file.name);
    }
  };

  const triggerUpload = (ref) => {
    ref.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-200 shadow-md flex items-center justify-center">
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
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Owner of the Permit
              </label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                className="w-full border text-xs text-gray-500 px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Type of Building
              </label>
              <select
                name="buildingType"
                value={formData.buildingType}
                onChange={handleChange}
                className="w-full border text-xs px-4 py-2 text-gray-500 rounded"
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
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                District
              </label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full border text-xs px-4 py-2 text-gray-500 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-slate-700 text-sm font-medium">
                Town
              </label>
              <input
                type="text"
                name="town"
                value={formData.town}
                onChange={handleChange}
                className="w-full border px-4 py-2 text-xs text-gray-500 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Area
              </label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full border px-4 text-xs py-2 text-gray-500 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Estimated Cost (GHS)
              </label>
              <input
                type="number"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                className="w-full border text-xs px-4 py-2 text-gray-500 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border text-xs px-4 py-2 text-gray-500 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Completion Date
              </label>
              <input
                type="date"
                name="completionDate"
                value={formData.completionDate}
                onChange={handleChange}
                className="w-full border text-xs px-4 py-2 text-gray-500 rounded"
              />
            </div>
          </div>
        </div>

        {/* Site and Ownership */}
        <div>
          <h2 className="text-lg font-bold  text-slate-800 mb-4">
            Site and Ownership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Land Certificate */}
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Upload Land Certificate
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={landCert}
                  readOnly
                  className="flex-grow border px-3 py-2 text-xs text-gray-700 rounded"
                  placeholder="No file selected"
                />
                <button
                  type="button"
                  onClick={() => triggerUpload(landCertRef)}
                  className="bg-blue-500 text-white text-xs px-4 py-2 rounded hover:bg-blue-600"
                >
                  Upload
                </button>
                <input
                  type="file"
                  ref={landCertRef}
                  onChange={(e) => handleFileChange(e, setLandCert)}
                  className="hidden"
                />
              </div>
            </div>

            {/* Indenture */}
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Upload Indenture
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={indenture}
                  readOnly
                  className="flex-grow border px-3 py-2 text-xs text-gray-700 rounded"
                  placeholder="No file selected"
                />
                <button
                  type="button"
                  onClick={() => triggerUpload(indentureRef)}
                  className="bg-blue-500 text-white text-xs px-4 py-2 rounded hover:bg-blue-600"
                >
                  Upload
                </button>
                <input
                  type="file"
                  ref={indentureRef}
                  onChange={(e) => handleFileChange(e, setIndenture)}
                  className="hidden"
                />
              </div>
            </div>

            {/* Site Plan */}
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Upload Site Plan
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={sitePlan}
                  readOnly
                  className="flex-grow border px-3 py-2 text-xs text-gray-700 rounded"
                  placeholder="No file selected"
                />
                <button
                  type="button"
                  onClick={() => triggerUpload(sitePlanRef)}
                  className="bg-blue-500 text-white text-xs px-4 py-2 rounded hover:bg-blue-600"
                >
                  Upload
                </button>
                <input
                  type="file"
                  ref={sitePlanRef}
                  onChange={(e) => handleFileChange(e, setSitePlan)}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Details */}
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-4">
            Professional Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Architect Name */}
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Name
              </label>
              <input
                type="text"
                name="architectName"
                value={formData.architectName}
                onChange={handleChange}
                className="w-full border text-xs px-4 py-2 text-gray-500 rounded"
              />
            </div>

            {/* Profession */}
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="w-full border text-xs px-4 py-2 text-gray-500 rounded"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block mb-1 text-sm text-slate-700 font-medium">
                Contact
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full border text-xs px-4 py-2 text-gray-500 rounded"
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
    </div>
  );
}
