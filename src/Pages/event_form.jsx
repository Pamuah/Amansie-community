import React from "react";

import EventTypeSelector from "../components/Radio_Button";
import { useNavigate } from "react-router-dom";

const Event_Form = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/poster_template");
  };
  return (
    <div className="flex flex-col min-h-screen w-full p-3 ">
      <div className="flex flex-row  justify-between">
        <div className="h-16 w-3/4 bg-slate-700"></div>
        <div className="h-16 w-12/50 bg-orange-600"></div>
      </div>
      <h1 className="text-2xl pt-2 font-bold text-center text-slate-800">
        Register and Publish Your Event
      </h1>
      <div className="pt-2 text-center">
        <p className="text-sm font-medium text-slate-800">
          Register and publish social, political, economic and cultural events .
          This
          <br />
          form is designed to assist you in commencing the process of organising
          a safe, enjoyable and
          <br />
          successful public event.
        </p>
      </div>
      <EventTypeSelector />
      {/* <div className="pt-6 justify-between flex flex-row">
        <div className=" w-12/25 pl-12">
          <table className="w-full border border-collapse">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="border p-2 text-center  ">1. Family Members</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-1 px-2">
                  <input
                    type="text"
                    placeholder="Deceased Mother's Name"
                    className="w-full px-2  py-1"
                  />
                </td>
              </tr>
              {/* <tr>
                <td className="border py-1 px-2">
                  <input type="datetime-local" className="w-full px-2 py-1" />
                </td>
              </tr> */}
      {/* <tr>
                <td className="border py-1 px-2">
                  <input
                    type="text"
                    placeholder="Deceased Father's Name"
                    className="w-full px-2  py-1"
                  />
                </td>
              </tr>
              <tr>
                <td className="border py-1 px-2">
                  <input
                    type="text"
                    placeholder="Children's Names"
                    className="w-full px-2 py-1"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      {/* second table in the form */}
      {/* <div className="w-12/25 pr-12">
          <table className="w-full border border-collapse">
            <thead>
              <tr className="bg-slate-700 text-white">
                <th className="border p-2 text-center">
                  2. Funeral Arrangements
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border py-1 px-2">
                  <label className="block text-sm text-gray-800 mb-1">
                    Wake Keeping Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-2 py-1  text-xs text-gray-600"
                  />
                </td>
              </tr>
              <tr>
                <td className="border py-1 px-2">
                  <label className="block text-sm text-gray-800 mb-1">
                    Burial Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-2 py-1  text-xs text-gray-600"
                  />
                </td>
              </tr>
              <tr>
                <td className="border py-1 px-2">
                  <label className="block text-sm text-gray-800 mb-1">
                    Final Funeral rites Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-2 py-1  text-xs text-gray-600"
                  />
                </td>
              </tr>
              <tr>
                <td className="border py-1 px-2">
                  <label className="block text-sm text-gray-800 mb-1">
                    Thanksgiving Time
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full px-2 py-1  text-xs text-gray-600 "
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}

      {/* third table in the form */}
      {/* <div className="pt-6 px-12 ">
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-lime-400 text-white">
              <th className="border p-2 text-center  ">3. Event Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border py-1 px-2">
                <input
                  type="text"
                  placeholder="Please provide a brief description of the event"
                  className="w-full px-2  py-1"
                />
              </td>
            </tr>
            <tr>
              <td className="border py-1 px-2">
                <input
                  type="text"
                  placeholder="Who is your target audience?"
                  className="w-full px-2 py-1"
                />
              </td>
            </tr>
            <tr>
              <td className="border py-1 px-2">
                <input
                  type="text"
                  placeholder="Estimated number of attendees"
                  className="w-full px-2 py-1"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}

      <button
        onClick={handleSubmit}
        className="mt-6 bg-slate-600 hover:bg-slate-800-700 text-white px-12 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default Event_Form;
