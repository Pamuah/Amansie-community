import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../components/Custom_btn";
import SearchBar from "../components/searchBar";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/event_card";
const EventShow = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full pt-4 px-3">
      {/* navbar */}
      <div className="flex flex-col md:flex-row  items-center bg-white shadow-xl sticky top-0 z-20 md:h-16 w-full rounded-lg px-6 py-2 mb-4 justify-between gap-y-4">
        {/* Left - Logo */}
        <div className="md:flex-1">
          <h1 className="font-bold text-slate-700 text-2xl">Events</h1>
        </div>

        {/* Center - Search */}
        <div className="md:flex-1 flex justify-center">
          <SearchBar />
        </div>

        {/* Right - Button */}
        <div className="md:flex-1 flex justify-end">
          <CustomButton
            title={"Register an Event"}
            trailingIcon={faUser}
            onPress={() => {
              navigate("/event_form");
            }}
            className="min-h-10 min-w-42 text-sm font-mono shadow-md"
          />
        </div>
      </div>
      <h4 className="text-lg md:text-2xl font-bold text-slate-700 text-center justify-center">
        Upcoming Events for You !
      </h4>
      <div className=" gap-4 grid grid-cols-1 md:grid-cols-3 mt-8">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default EventShow;
