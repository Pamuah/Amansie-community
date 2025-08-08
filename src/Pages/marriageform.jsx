import React, { useState } from "react";
import Stepper from "../components/stepper";
import StepperControl from "../components/stepperControl";
import WeddingForm from "../components/wedding/personalDetails";
import BrideDetails from "../components/wedding/brideDetails";
import ValidDocs from "../components/wedding/Docs";
import CeremonyDetails from "../components/wedding/ceremonyDetails";
import { useNavigate } from "react-router-dom";

const steps = [
  "Groom's Details",
  "Bride's Details",
  "Valid Docs",
  "Ceremony Details",
];

const WeddingFormPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleClick = (direction) => {
    let newStep = currentStep;

    if (direction === "next") {
      newStep++;
    } else {
      newStep--;
    }

    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }

    if (newStep > steps.length) {
      navigate("/poster_template"); // On complete
    }
  };

  const displayStep = () => {
    switch (currentStep) {
      case 1:
        return <WeddingForm />;
      case 2:
        return <BrideDetails />;
      case 3:
        return <ValidDocs />;
      case 4:
        return <CeremonyDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-3">
      <div className="flex flex-row justify-between">
        <div className="h-16 w-3/4 bg-slate-700 flex justify-center items-center">
          <h1 className="text-xl font-semibold text-gray-100">
            Register Your Marriage
          </h1>
        </div>
        <div className="h-16 w-1/4 bg-orange-600"></div>
      </div>

      <div className="bg-gray-50 p-4 rounded shadow-md mx-auto max-w-3xl w-full mt-6">
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="my-6">{displayStep()}</div>
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </div>
    </div>
  );
};

export default WeddingFormPage;
