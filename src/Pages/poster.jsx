import React from "react";
import { useGlobalContext } from "../Global Context/context_api";

const Poster = () => {
  const { deceasedInfo } = useGlobalContext();

  return (
    <div className="min-h-screen  bg-white text-gray-800 font-serif">
      {/* Top Banner */}
      <div className="w-full max-w-4xl shadow-xl rounded-sm p-6 sm:p-10  ">
        <div className="text-center py-8 px-4 bg-yellow-100">
          <h1 className="text-4xl font-bold uppercase text-yellow-900 tracking-wide">
            Celebration of Life
          </h1>
        </div>

        {/* Content Wrapper */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">
          {/* Top Section */}
          <div className="flex flex-col mb-10">
            <div className="flex flex-row justify-between items-center w-full">
              {/* Chief Mourners Text */}
              <div className="p-4 flex-1 text-left">
                <h5 className="font-mono text-sm sm:text-xl font-bold uppercase">
                  Chief Mourners
                </h5>
                <p className="text-base sm:text-xs mt-2">
                  {deceasedInfo.familymembers}
                </p>
              </div>

              {/* Deceased Image */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-gray-200 flex-shrink-0">
                <img
                  src={deceasedInfo.image}
                  alt="Deceased"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Deceased Name and Info */}
          <h2 className="mt-4 text-2xl font-bold text-yellow-900 uppercase">
            {deceasedInfo.name}
          </h2>
          <div className="flex flex-col w-full items-end justify-end">
            <div className="bg-yellow-800 text-white px-4 py-1 mt-2 rounded-full text-sm font-semibold">
              AGED {deceasedInfo.age}
            </div>
            <p className="text-sm italic mt-2">
              The sad event occurred on {deceasedInfo.dateOfDeath} at{" "}
              {deceasedInfo.placeOfDeath}.
            </p>
          </div>
        </div>

        <div className="flex flex-row w-full  gap-x-2 justify-between">
          {/* Family Info */}
          <div className="bg-blue-400 flex-1 text-white p-6 rounded-xl shadow-lg mb-10">
            <h3 className="text-lg sm:text-xl font-bold uppercase text-center">
              Chief Mourners
            </h3>
            <p className="text-sm sm:text-base mt-2">
              {deceasedInfo.familymembers}
            </p>
            <div className="mt-4 text-sm sm:text-base">
              <p>
                <strong>Mother:</strong> {deceasedInfo.motherName}
              </p>
              <p>
                <strong>Father:</strong> {deceasedInfo.fatherName}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="font-bold uppercase text-sm sm:text-base">
                Children
              </h4>
              <p className="mt-1 text-sm">{deceasedInfo.childrenNames}</p>
            </div>
          </div>

          {/* Funeral Arrangements Box */}
          <div className="bg-yellow-700 flex-1 text-black p-6 rounded-xl mb-10 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold uppercase mb-4 text-center">
              Funeral Arrangements
            </h3>
            <ul className="text-sm sm:text-base space-y-2">
              <li>
                <strong>Wake-keeping:</strong> {deceasedInfo.wakekeeping}
              </li>
              <li>
                <strong>Burial:</strong> {deceasedInfo.Burial}
              </li>
              <li>
                <strong>Final Funeral Rites:</strong> {deceasedInfo.finalRites}
              </li>
              <li>
                <strong>Thanksgiving:</strong> {deceasedInfo.Thanksgiving}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10">
          <p className="text-yellow-800 text-sm sm:text-lg font-semibold tracking-wide">
            All Friends and Sympathizers are Cordially Invited
          </p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
