// import React from "react";
// import { useGlobalContext } from "../Global Context/context_api";

// const FuneralPoster = () => {
//   const { deceasedInfo } = useGlobalContext();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white py-10 px-4 sm:px-8">
//       <div className="w-full max-w-4xl bg-gradient-to-b from-yellow-200 to-yellow-800 shadow-2xl rounded-xl p-6 sm:p-10 text-center font-serif">
//         {/* Header */}
//         <h1 className="text-2xl sm:text-4xl font-bold uppercase text-gray-800 mb-4 sm:mb-6">
//           Celebration of Life
//         </h1>

//         {/* Image & Name */}
//         <div className="flex flex-col items-center mb-6">
//           <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-red-600 shadow-md">
//             <img
//               src={deceasedInfo.image}
//               alt="Deceased"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <h2 className="mt-4 text-xl sm:text-2xl font-bold text-red-700">
//             {deceasedInfo.name}
//           </h2>

//           <div className="bg-red-700 text-white px-4 py-1 mt-2 rounded-full text-xs sm:text-sm font-semibold">
//             AGED {deceasedInfo.age}
//           </div>
//         </div>

//         {/* Chief Mourners */}
//         <div className="mb-6">
//           <h3 className="text-base sm:text-lg font-bold uppercase">
//             Chief Mourners
//           </h3>
//           <p className="text-sm mt-2 px-2 sm:px-16">
//             {deceasedInfo.familymembers}
//           </p>
//         </div>

//         {/* Parents */}
//         <div className="mb-6 text-sm sm:text-base">
//           <p>
//             <strong>Mother:</strong> {deceasedInfo.motherName}
//           </p>
//           <p>
//             <strong>Father:</strong> {deceasedInfo.fatherName}
//           </p>
//         </div>

//         {/* Arrangements */}
//         <div className="mb-6">
//           <h3 className="text-base sm:text-lg font-bold uppercase">
//             Funeral Arrangements
//           </h3>
//           <ul className="text-sm list-disc ml-4 sm:ml-5 mt-2 space-y-1 text-left sm:text-center">
//             <li>Wake-keeping: {deceasedInfo.wakekeeping}</li>
//             <li>Burial: {deceasedInfo.Burial}</li>
//             <li>Final Funeral Rites: {deceasedInfo.finalRites}</li>
//             <li>Thanksgiving: {deceasedInfo.Thanksgiving}</li>
//           </ul>
//         </div>

//         {/* Children */}
//         <div className="mb-6">
//           <h3 className="text-base sm:text-lg font-bold uppercase">Children</h3>
//           <p className="text-sm mt-2">{deceasedInfo.childrenNames}</p>
//         </div>

//         {/* Invitation Note */}
//         <div className="text-red-700 text-sm sm:text-lg font-bold mt-8 sm:mt-10">
//           All Family and Friends are cordially invited
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FuneralPoster;
