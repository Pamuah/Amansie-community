// import React, { useEffect } from "react";
import { useGlobalContext } from "../../Global Context/context_api";
import ImageUpload from "../image_picker";

const FuneralForm = () => {
  const { deceasedInfo, setDeceasedInfo } = useGlobalContext();

  // useEffect(() => {
  //   if (
  //     !deceasedInfo.chiefMourners ||
  //     deceasedInfo.chiefMourners.length === 0
  //   ) {
  //     setDeceasedInfo({
  //       ...deceasedInfo,
  //       chiefMourners: [{ name: "", image: null, location: "", contact: "" }],
  //     });
  //   }
  // }, []);

  // const updateChiefMourner = (index, field, value) => {
  //   const updated = [...deceasedInfo.chiefMourners];
  //   updated[index] = { ...updated[index], [field]: value };
  //   setDeceasedInfo({ ...deceasedInfo, chiefMourners: updated });
  // };

  // const addChiefMourner = () => {
  //   const updated = [...deceasedInfo.chiefMourners];
  //   updated.push({ name: "", image: null, location: "", contact: "" });
  //   setDeceasedInfo({ ...deceasedInfo, chiefMourners: updated });
  // };

  return (
    <div className="mt-4 space-y-6 text-left">
      {/* Name, Age, Image */}
      <div className="flex flex-col text-xs  md:flex-row gap-4 items-center">
        <div className="w-full md:w-1/3">
          <label className="block  mb-1">Name</label>
          <input
            type="text"
            value={deceasedInfo.name}
            onChange={(e) =>
              setDeceasedInfo({ ...deceasedInfo, name: e.target.value })
            }
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>
        <div className="w-full md:w-1/3">
          <label className="block  mb-1">Age</label>
          <input
            type="number"
            value={deceasedInfo.age}
            onChange={(e) =>
              setDeceasedInfo({ ...deceasedInfo, age: e.target.value })
            }
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>
        <div className="w-full  item-center justify center md:w-1/3">
          <ImageUpload label="Add Deceased Image" />
        </div>
      </div>

      {/* Alias and DOB */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium mb-1">Alias</label>
          <input
            type="text"
            value={deceasedInfo.alias}
            onChange={(e) =>
              setDeceasedInfo({ ...deceasedInfo, alias: e.target.value })
            }
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-medium mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            value={deceasedInfo.dob}
            onChange={(e) =>
              setDeceasedInfo({ ...deceasedInfo, dob: e.target.value })
            }
            className="border border-gray-300 text-gray-500 px-3 py-2 rounded w-full"
          />
        </div>
      </div>

      {/* Chief Mourners Section */}
      {/* <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Chief Mourners</h4>
          <button
            type="button"
            onClick={addChiefMourner}
            className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            + Add
          </button>
        </div>

        <div className="space-y-3">
          {(deceasedInfo.chiefMourners || []).map((mourner, index) => (
            <div
              key={index}
              className="grid md:grid-cols-4 gap-x-3 items-end bg-gray-50 border border-gray-200 p-2 rounded"
            >
              <div>
                <label className="block text-xs mb-1">Name</label>
                <input
                  type="text"
                  value={mourner.name}
                  placeholder="Required"
                  onChange={(e) =>
                    updateChiefMourner(index, "name", e.target.value)
                  }
                  className="border px-2 py-1 rounded w-full text-xs"
                  required
                />
              </div>
              <div>
                <ImageUpload />
              </div>
              <div>
                <label className="block text-xs mb-1">Location</label>
                <input
                  type="text"
                  value={mourner.location}
                  onChange={(e) =>
                    updateChiefMourner(index, "location", e.target.value)
                  }
                  className="border px-2 py-1 rounded w-full text-sm"
                />
              </div>
              <div>
                <label className="block text-xs mb-1">Contact</label>
                <input
                  type="text"
                  value={mourner.contact}
                  onChange={(e) =>
                    updateChiefMourner(index, "contact", e.target.value)
                  }
                  className="border px-2 py-1 rounded w-full text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Tables Section */}
      {/* Family Members */}
      {/* <div className="pt-6 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <table className="w-full border border-collapse">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="border p-2 text-center">1. Family Members</th>
              </tr>
            </thead>
            <tbody>
              {[
                { placeholder: "Deceased Mother's Name", key: "motherName" },
                { placeholder: "Deceased Father's Name", key: "fatherName" },
                { placeholder: "Children's Names", key: "childrenNames" },
              ].map((field) => (
                <tr key={field.key}>
                  <td className="border py-1 px-2">
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      value={deceasedInfo[field.key]}
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

        Funeral Arrangements
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
      </div> */}
    </div>
  );
};

export default FuneralForm;
