import React from "react";
import { useGlobalContext } from "../../Global Context/context_api";

const FamilyMembers = () => {
  const { deceasedInfo, setDeceasedInfo } = useGlobalContext();
  return (
    <div className="w-full md:w-1/2 mx-auto text-left">
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
  );
};

export default FamilyMembers;
