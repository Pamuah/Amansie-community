import React from "react";

const NewsCard = ({ image, title, caption, timePosted }) => {
  return (
    <div className="flex flex-row bg-gray-100 shadow-md min-h-18 overflow-hidden w-full">
      <div className=" flex flex-col gap-y-0.5 p-4 justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-xs text-gray-600 my-2">{caption}</p>
        </div>
        <p className="text-xs text-gray-500 mb-1">{timePosted}</p>
        <div className="flex  items-center">
          <button className="bg-gray-300 text-black text-sm  px-3 py-1 rounded hover:bg-gray-700 transition">
            Read More
          </button>
        </div>
      </div>

      <img src={image} alt="news" className="w-50 h-full object-cover" />
    </div>
  );
};

export default NewsCard;
