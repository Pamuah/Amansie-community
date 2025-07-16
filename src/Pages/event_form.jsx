import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/stepper";
import StepperControl from "../components/stepperControl";
import ChiefMourners from "../components/funeral/funeralMourners";
import FamilyMembers from "../components/funeral/familyMembers";
import FuneralTime from "../components/funeral/funeralTime";
import EventTypeSelector from "../components/Radio_Button";
import WeddingForm from "../components/wedding/personalDetails";
import FuneralForm from "../components/funeral/funeralForm";
import ValidDocs from "../components/wedding/Docs";
import BrideDetails from "../components/wedding/brideDetails";
import CeremonyDetails from "../components/wedding/ceremonyDetails";
// import BirthdayForm from "../components/birthday/birthdayForm"; // optional
// import OthersForm from "../components/others/othersForm"; // optional

// Define the steps per event type
const funeralSteps = [
  "Deceased Details",
  "Chief Mourners",
  "Family Members",
  "Schedule",
];
const weddingSteps = [
  "Grooms Details",
  "Brides Details",
  "Valid Docs",
  "Ceremony Details",
];
const birthdaySteps = ["Birthday Info"];
const othersSteps = ["Other Event Info"];

const Event_Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [eventType, setEventType] = useState(""); // Track selected event type
  const navigate = useNavigate();

  // Determine which steps to show
  const getSteps = () => {
    switch (eventType) {
      case "Funeral":
        return funeralSteps;
      case "Wedding":
        return weddingSteps;
      case "Birthday":
        return birthdaySteps;
      case "Others":
        return othersSteps;
      default:
        return [];
    }
  };

  const steps = getSteps();

  const handleClick = (direction) => {
    let newStep = currentStep;
    if (direction === "next") newStep++;
    else newStep--;

    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }

    if (newStep > steps.length) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    navigate("/poster_template");
  };

  const displayStep = () => {
    switch (eventType) {
      case "Funeral":
        switch (currentStep) {
          case 1:
            return <FuneralForm />;
          case 2:
            return <ChiefMourners />;
          case 3:
            return <FamilyMembers />;
          case 4:
            return <FuneralTime />;
          default:
            return null;
        }
      case "Wedding":
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
      case "Birthday":
        return <BirthdayForm />;
      case "Others":
        return <OthersForm />;
      default:
        return (
          <div className="text-center text-gray-500">
            Please select an event type above.
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-3">
      {/* Header bar */}
      <div className="flex flex-row justify-between">
        <div className="h-16 w-3/4 bg-slate-700 flex justify-center items-center">
          <h1 className="text-xl font-semibold text-gray-100">
            Register Your Event
          </h1>
        </div>
        <div className="h-16 w-1/4 bg-orange-600"></div>
      </div>

      {/* Event type selector - always at the top */}
      <div className="bg-gray-100 p-3 rounded shadow-md mx-auto max-w-3xl w-full mt-4">
        <EventTypeSelector setEventType={setEventType} />
      </div>

      {/* Stepper and Step content */}
      {eventType && steps.length > 0 && (
        <div className="bg-gray-50 p-4 rounded shadow-md mx-auto max-w-3xl w-full mt-6">
          <Stepper steps={steps} currentStep={currentStep} />
          <div className="my-6">{displayStep()}</div>
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      )}
    </div>
  );
};

export default Event_Form;
