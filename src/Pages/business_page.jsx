import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Custom_btn";
import SearchBar from "../components/searchBar";

const BusinessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full pt-4 px-3">
      {/* Responsive Top Nav */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-xl sticky top-0 z-20 h-auto md:h-16 w-full rounded-lg px-4 py-4 md:py-2 mb-4 gap-4 md:gap-0 justify-between">
        {/* Left - Logo */}
        <div className="w-full md:flex-1 text-center md:text-left">
          <h1 className="font-bold text-slate-700 text-2xl">Business</h1>
        </div>

        {/* Center - Search */}
        <div className="w-full md:flex-1 flex justify-center">
          <SearchBar placeholder={"📍 Search a Business"} />
        </div>

        {/* Right - Button */}
        <div className="w-full md:flex-1 flex justify-center md:justify-end">
          <CustomButton
            title={"Register a Business"}
            trailingIcon={faUser}
            onPress={() => navigate("/business_form")}
            className="min-h-10 min-w-42 text-sm font-mono shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
