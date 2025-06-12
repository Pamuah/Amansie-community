import React, { useState } from "react";
import Stepper from "../components/stepper";
import StepperControl from "../components/stepperControl";
import Service from "../components/steps/service";
import Invoice from "../components/steps/invoice";
import Payment from "../components/steps/payment";
import PersonalDetails from "../components/steps/personalDetails";

export default function GovernmentPage() {
  const [data, setData] = useState({
    service: "",
    buildingForm: {
      type: "",
      description: "",
      estimatedCost: "",
      siteAddress: "",
      proofOwnership: "",
      siteAndSoilReport: false,
      structuralModifications: false,
      servicesInvolved: false,
      fireSafetyDocs: false,
      relationshipToOwner: "",
      registeredProfessionals: "",
      setbacksZoning: "",
      needsZoningPermit: false,
      startDate: "",
      completionDate: "",
      acknowledgeInspections: false,
    },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Personal Details", "Address", "Service/Invoice", "Payment"];

  const displayStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return (
          <Service
            data={data}
            handleChange={handleChange}
            onFormChange={handleBuildingFormChange}
            onFormSubmit={handleBuildingFormSubmit}
          />
        );
      case 3:
        return (
          <Invoice
            data={data}
            handleChange={handleChange}
            onFormChange={handleBuildingFormChange}
            onFormSubmit={handleBuildingFormSubmit}
          />
        );
      case 4:
        return <Payment />;
      default:
        return null;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuildingFormChange = (newForm) => {
    setData((prev) => ({ ...prev, buildingForm: newForm }));
  };

  const handleBuildingFormSubmit = (form) => {
    console.log("Building Permit submitted:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-3xl bg-gray-100 px-8 py-2 rounded-lg shadow-lg">
        {/* Stepper */}
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Step content */}
        <div className="my-10">{displayStepContent()}</div>

        {/* Stepper control */}
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </div>
    </div>
  );
}
