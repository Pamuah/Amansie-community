import React, { useState } from "react";
import BuildingPermitForm from "../../Pages/building_form";
import { ArrowLeft } from "lucide-react";

export default function Invoice({
  data,
  handleChange,
  onFormChange,
  onFormSubmit,
}) {
  const [showBuildingPermitForm, setShowBuildingPermitForm] = useState(false);

  const handleServiceSelect = (e) => {
    handleChange(e);
    if (e.target.value === "Building permit") {
      setShowBuildingPermitForm(true);
    }
  };

  const handleBack = () => {
    setShowBuildingPermitForm(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {!showBuildingPermitForm ? (
        <>
          <div className="flex flex-row item-start justify-between flex-wrap gap-y-4 mb-4 gap-x-3">
            {[
              "Building permit",
              "Business permit",
              "Electricity and water",
              "Marriage certificate",

              "Billboard permit",
              "Environmetal permit",
              "Property rate Assessment",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center p-2 border rounded hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="radio"
                  name="service"
                  value={option}
                  checked={data.service === option}
                  onChange={handleServiceSelect}
                  className="form-radio text-blue-600"
                  required
                />
                <span className="ml-3">{option}</span>
              </label>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center text-blue-600 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          {/* Building Permit Form */}
          <BuildingPermitForm
            formData={data.buildingForm}
            onFormChange={onFormChange}
            onSubmit={onFormSubmit}
          />
        </>
      )}
    </div>
  );
}
