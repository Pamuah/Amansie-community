import React from "react";
import { useGlobalContext } from "../../Global Context/context_api";

const FuneralTime = () => {
  const { deceasedInfo, setDeceasedInfo } = useGlobalContext();
  return (
    <div className="w-full md:w-1/2 mx-auto text-left">
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-slate-700 text-white">
            <th className="border p-2 text-center">2. Funeral Arrangements</th>
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
  );
};

export default FuneralTime;
