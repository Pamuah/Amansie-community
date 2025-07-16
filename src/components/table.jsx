import React from "react";

const Table = ({ businesses }) => {
  return (
    <div className="overflow-x-auto w-full ">
      <table className="table w-full border border-slate-400 table-auto">
        {/* Table Header */}
        <thead className="border-b border-slate-400 bg-slate-100 text-left">
          <tr>
            <th className="px-4 py-2">Business Name</th>
            <th className="px-4 py-2">Business Type</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Location</th>

            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {businesses.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-300 text-xs text-left"
            >
              <td className="px-4 py-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="font-medium text-slate-700">
                    {item.name}
                  </span>
                </div>
              </td>
              <td className="px-4 py-1">{item.business}</td>
              <td className="px-4 py-1">{item.contact}</td>
              <td className="px-4 py-1">{item.location}</td>
              <td className="px-4 py-1">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
