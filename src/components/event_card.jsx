import React from "react";

const EventCard = ({
  imageSrc = "https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  eventName = "Birthday Party",
  description = "short desc of the event",
  eventLoc = "Abelempke, Accra",
  dateTime = "2023-08-20 | 12:00:00",
}) => {
  return (
    <div className="bg-slate-600 rounded-xl shadow-md p-2 flex gap-1 md:gap-2 items-center w-full hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <img
        src={imageSrc}
        alt="pitch"
        className="w-20 h-20 md:w-35 md:h-32 object-cover rounded-md"
      />

      {/* Info Section */}
      <div className="flex flex-col justify-between flex-grow gap-y-1">
        <h2 className="text-sm md:text-lg font-normal text-white">
          {eventName}
        </h2>
        <p className="text-xs font-light text-gray-100">Type: {description}</p>
        <p className="text-xs font-light text-gray-100 text-wrap md:text-nowrap">
          {eventLoc} • {dateTime}
        </p>
      </div>

      {/* Right Section */}
    </div>
  );
};

export default EventCard;
