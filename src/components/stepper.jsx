import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between px-8 pt-2 pb-1 relative">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex flex-col items-center relative">
          {/* Circle */}
          <div
            className={`rounded-full h-10 w-10 flex items-center justify-center font-bold z-10
              ${
                index + 1 === currentStep
                  ? "bg-lime-400 text-white"
                  : index + 1 < currentStep
                  ? "bg-teal-600 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
          >
            {index + 1}
          </div>

          {/* Label */}
          <div
            className={`mt-2 text-center transition-all duration-200
    ${
      index + 1 === currentStep
        ? "text-lime-500 font-mono text-sm"
        : "text-xs text-gray-600"
    }`}
          >
            {step}
          </div>

          {/* Line */}
          {index < steps.length - 1 && (
            <div className="absolute top-5 left-1/2 w-full">
              <div className="border-t-2 border-gray-300 w-full ml-5 mr-[-50%]"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
