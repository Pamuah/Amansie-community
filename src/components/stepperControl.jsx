import React from "react";

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="flex justify-around px-8">
      <button
        onClick={() => handleClick("back")}
        disabled={currentStep === 1}
        className="bg-white p-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100 disabled:opacity-50"
      >
        Back
      </button>

      <button
        onClick={() => handleClick("next")}
        disabled={currentStep === steps.length}
        className="bg-lime-300 text-sm p-2 rounded-md border border-gray-300 hover:bg-lime-400 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default StepperControl;
