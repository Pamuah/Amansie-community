import React from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GovHomepage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100">
      {/* Hero Section with Background */}
      <div className="flex flex-col h-screen">
        <div
          className="h-[45vh] sm:h-[55vh] md:h-[65vh] w-full flex items-center justify-center bg-center bg-cover relative"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/016/674/719/non_2x/independence-arch-accra-ghana-2022-free-photo.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="relative z-10 px-4 sm:px-6 md:px-20 mt-10 text-white">
            {/* Add Hero Text if needed */}
          </div>
        </div>

        {/* Yellow Divider */}
        <div className="w-full h-3 sm:h-4 bg-yellow-300 flex-shrink-0" />

        {/* Green Section with Icons - Takes remaining space */}
        <div className="flex-1 bg-green-700 py-6 sm:py-8 md:py-10 px-4 sm:px-6 flex items-center justify-center min-h-0">
          <div className="max-w-6xl w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-6">
              {[
                {
                  src: "https://www.svgrepo.com/show/449353/construction.svg",
                  label: "Building & Construction Permit",
                  target: "/building_form",
                },
                {
                  src: "https://www.svgrepo.com/show/57110/market-store.svg",
                  label: "Business Operating Permit",
                  target: "/business_form",
                },
                {
                  src: "https://www.svgrepo.com/show/308186/advertise-person-people-marketer.svg",
                  label: "Outdoor Advertising Permit",
                  target: "/advert",
                },
                {
                  src: "https://www.svgrepo.com/show/481943/bride-and-groom-pictogram-3.svg",
                  label: "Marriage Registration",
                  target: "/marriageform",
                },
                {
                  src: "https://www.svgrepo.com/show/361153/feedback.svg",
                  label: "Citizens Feedback",
                  target: "/feedback",
                },
              ].map(({ src, label, target }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center max-w-[120px] mx-auto"
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center border-2 border-white p-2 sm:p-3 rounded-full bg-gray-200 hover:scale-110 hover:bg-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                    onClick={() =>
                      navigate("/authPage", { state: { from: target } })
                    }
                  >
                    <img
                      src={src}
                      alt={label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-light mt-2 px-1 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovHomepage;
