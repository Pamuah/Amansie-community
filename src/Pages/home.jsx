import React, { useState } from "react";
import CustomButton from "../components/Custom_btn";
import CustomCard from "../components/programs_card";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100">
      {/* Top Nav Bar */}
      <div className="sticky top-0 z-20 w-full bg-white shadow-lg px-6 py-2 flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex w-full md:w-auto items-center justify-between">
          <h1 className="text-lg font-bold">**Logo**</h1>
          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-5 items-start md:items-center w-full md:w-auto mt-2 md:mt-0`}
        >
          <a
            href="/gallery"
            className="text-slate-800 text-sm font-light px-3 py-1 rounded-lg hover:text-orange-600 hover:underline transition-all duration-200"
          >
            Gallery
          </a>
          <a
            href="/news"
            className="text-slate-800 text-sm font-light px-3 py-1 rounded-lg hover:text-orange-600 hover:underline transition-all duration-200"
          >
            News
          </a>
          <a
            href="/visit"
            className="text-slate-800 text-sm font-light px-3 py-1 rounded-lg hover:text-orange-600 hover:underline transition-all duration-200"
          >
            Visit
          </a>
          <a
            href="/government"
            className="text-slate-800 text-sm px-3 font-light py-1 rounded-lg hover:text-orange-500 hover:underline transition-all duration-200"
          >
            Government
          </a>
          <CustomButton
            title="Report an issue"
            onClick={() => {}}
            className="h-8 w-auto text-sm"
          />
        </div>
      </div>

      {/* Hero Section with Background */}
      <div className="relative">
        <div
          className="h-[50vh] md:h-[75vh] w-full flex items-center bg-center bg-cover"
          style={{
            backgroundImage: "url('./assets/img(Amansie).jpg')",
          }}
        >
          {/* <div className="absolute inset-0 bg-black/10 z-0"></div> */}
          <div className="relative z-10 px-6 md:px-20 flex flex-col text-white mt-10 ">
            <div className="flex flex-row mt-2 gap-x-2">
              <div className="h-16 md:h-21 w-2 bg-orange-500" />
              <div className="flex flex-col">
                <p className="text-lg font-bold">The Official platform</p>
                <p className="text-3xl md:text-5xl font-semibold">
                  Amansie Portal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Orange Section */}
        <div className="h-28 w-full bg-orange-500 relative flex items-center justify-center ">
          <p className="text-xs text-white font-light px-6 md:px-20 text-center absolute inset-x-0 bottom-0 mb-2 ">
            The official guide to living, working, visiting and knowing more
            about Amansie
          </p>
        </div>

        {/* Floating White Box */}
        <div className="absolute mt-12 md:mt-0 z-0 md:z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[calc(75vh)] w-11/12 md:w-4/5 lg:w-2/3 bg-gray-100 shadow-xl rounded-lg md:rounded-none p-6 gap-4 text-center flex flex-wrap md:flex-nowrap justify-center">
          <div className="w-8/10 sm:w-1/2 md:w-1/3 lg:w-1/5">
            <CustomCard
              imageSrc="../assets/government.png"
              label="Government"
              onClick={() => {
                navigate("/gov_home");
              }}
            />
          </div>
          <div className="w-8/10 sm:w-1/2 md:w-1/3 lg:w-1/5">
            <CustomCard
              imageSrc="../assets/business.png"
              label="Business"
              onClick={() => navigate("/business_page")}
            />
          </div>
          <div className="w-8/10 sm:w-1/2 md:w-1/3 lg:w-1/5">
            <CustomCard
              imageSrc="../assets/newspaper.png"
              label="News/Blogs"
              onClick={() => navigate("/news_page")}
            />
          </div>
          <div className="w-8/10 sm:w-1/2 md:w-1/3 lg:w-1/5">
            <CustomCard
              imageSrc="../assets/sign-language.png"
              label="Culture & Tradition"
              onClick={() => {}}
            />
          </div>
          <div className="w-8/10 sm:w-1/2 md:w-1/3 lg:w-1/5">
            <CustomCard
              imageSrc="../assets/calender.png"
              label="Event & Recreation"
              onClick={() => navigate("/event_show")}
            />
          </div>
        </div>
      </div>

      {/* Explore Local Services */}
      <div className="flex flex-col mt-46 md:mt-0 px-6 md:px-20">
        <div className="mt-10 justify-between flex flex-col md:flex-row gap-4 md:gap-0">
          <p className="text-2xl font-semibold text-slate-800">
            Let's explore the local services,
            <br />
            programs and initiatives
          </p>

          <CustomButton
            title="Explore services"
            onClick={() => {}}
            className="h-8 w-auto text-sm bg-slate-800 text-white hover:text-white hover:bg-black transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
