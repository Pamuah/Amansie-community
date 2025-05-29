import React, { useState } from "react";
import { useGlobalContext } from "../Global Context/context_api";
import ImageUpload from "../components/image_picker";

const EventTypeSelector = () => {
  const [selectedType, setSelectedType] = useState("");
  const { deceasedInfo, setDeceasedInfo } = useGlobalContext();

  const handleChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="px-4 md:px-12 pt-4">
      <h2 className="text-lg font-bold mb-2">Type of Event</h2>

      <div className="space-y-2">
        {["Wedding", "Funeral", "Birthday", "Others"].map((type) => (
          <label className="block" key={type}>
            <input
              type="radio"
              name="eventType"
              value={type}
              checked={selectedType === type}
              onChange={handleChange}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>

      {selectedType === "Funeral" && (
        <div>
          {/* Deceased Info Section */}
          <div className="mt-4 space-y-3">
            <h3 className="text-md font-semibold">Deceased Information</h3>
            <input
              type="text"
              placeholder="Deceased's Name"
              value={deceasedInfo.name}
              onChange={(e) =>
                setDeceasedInfo({ ...deceasedInfo, name: e.target.value })
              }
              className="border px-3 py-2 rounded w-full"
            />
            <input
              type="number"
              placeholder="Deceased's Age"
              value={deceasedInfo.age}
              onChange={(e) =>
                setDeceasedInfo({ ...deceasedInfo, age: e.target.value })
              }
              className="border px-3 py-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Chief Mourners"
              value={deceasedInfo.familymembers}
              onChange={(e) =>
                setDeceasedInfo({
                  ...deceasedInfo,
                  familymembers: e.target.value,
                })
              }
              className="border px-3 py-2 rounded w-full"
            />
          </div>

          {/* Tables Section */}
          <div className="pt-6 flex flex-col md:flex-row gap-6">
            {/* Family Members */}
            <div className="w-full md:w-1/2">
              <table className="w-full border border-collapse">
                <thead>
                  <tr className="bg-orange-600 text-white">
                    <th className="border p-2 text-center">
                      1. Family Members
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      placeholder: "Deceased Mother's Name",
                      value: deceasedInfo.motherName,
                      key: "motherName",
                    },
                    {
                      placeholder: "Deceased Father's Name",
                      value: deceasedInfo.fatherName,
                      key: "fatherName",
                    },
                    {
                      placeholder: "Children's Names",
                      value: deceasedInfo.childrenNames,
                      key: "childrenNames",
                    },
                  ].map((field) => (
                    <tr key={field.key}>
                      <td className="border py-1 px-2">
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          value={field.value}
                          onChange={(e) =>
                            setDeceasedInfo({
                              ...deceasedInfo,
                              [field.key]: e.target.value,
                            })
                          }
                          className="w-full px-2 py-1"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Funeral Arrangements */}
            <div className="w-full md:w-1/2">
              <table className="w-full border border-collapse">
                <thead>
                  <tr className="bg-slate-700 text-white">
                    <th className="border p-2 text-center">
                      2. Funeral Arrangements
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Wake Keeping Time", key: "wakekeeping" },
                    { label: "Burial Time", key: "Burial" },
                    { label: "Final Funeral Rites Time", key: "finalRites" },
                    { label: "Thanksgiving Time", key: "Thanksgiving" },
                  ].map((field) => (
                    <tr key={field.key}>
                      <td className="border py-1 px-2">
                        <label className="block text-sm text-gray-800 mb-1">
                          {field.label}
                        </label>
                        <input
                          type="datetime-local"
                          value={deceasedInfo[field.key]}
                          onChange={(e) =>
                            setDeceasedInfo({
                              ...deceasedInfo,
                              [field.key]: e.target.value,
                            })
                          }
                          className="w-full px-2 py-1 text-xs text-gray-600"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Image Upload */}
          <div className="mt-6">
            <ImageUpload />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTypeSelector;
