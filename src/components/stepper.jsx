import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="relative px-4 pt-2 pb-1">
      {/* Background line */}
      <div
        className="absolute top-7 left-0 right-0 h-0.5 bg-gray-300 z-0"
        style={{
          marginLeft: "calc(50% / " + steps.length + " + 20px)",
          marginRight: "calc(50% / " + steps.length + " + 20px)",
        }}
      ></div>

      {/* Steps container */}
      <div className="flex items-start justify-between relative z-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            {/* Circle */}
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center font-bold border-2
                ${
                  index + 1 === currentStep
                    ? "bg-lime-400 text-white border-lime-400"
                    : index + 1 < currentStep
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
            >
              {index + 1}
            </div>

            {/* Label */}
            <div
              className={`mt-2 text-center transition-all duration-200 px-1
                ${
                  index + 1 === currentStep
                    ? "text-lime-500 font-mono text-sm"
                    : "text-xs text-gray-600"
                }`}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
