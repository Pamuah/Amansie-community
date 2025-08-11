import React from "react";
import { useGlobalContext } from "../../Global Context/context_api";
import { useEffect } from "react";
import ImageUpload from "../image_picker";

const ChiefMourners = () => {
  const { deceasedInfo, setDeceasedInfo } = useGlobalContext();

  useEffect(() => {
    if (
      !deceasedInfo.chiefMourners ||
      deceasedInfo.chiefMourners.length === 0
    ) {
      setDeceasedInfo({
        ...deceasedInfo,
        chiefMourners: [{ name: "", image: null, location: "", contact: "" }],
      });
    }
  }, []);

  const updateChiefMourner = (index, field, value) => {
    const updated = [...deceasedInfo.chiefMourners];
    updated[index] = { ...updated[index], [field]: value };
    setDeceasedInfo({ ...deceasedInfo, chiefMourners: updated });
  };

  const addChiefMourner = () => {
    const updated = [...deceasedInfo.chiefMourners];
    updated.push({ name: "", image: null, location: "", contact: "" });
    setDeceasedInfo({ ...deceasedInfo, chiefMourners: updated });
  };
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">Chief Mourners</h4>
        <button
          type="button"
          onClick={addChiefMourner}
          className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
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
                className="border border-gray-300 px-2 py-1 rounded w-full text-xs"
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
                className="border border-gray-300 px-2 py-1 rounded w-full text-sm"
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
                className="border border-gray-300 px-2 py-1 rounded w-full text-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChiefMourners;
