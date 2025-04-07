// src/components/ComplaintStepper.jsx
import React, { useState } from "react";
import { Button } from "@cmsgov/design-system";
import { ComplainantDetailsForm } from "./StepperForms/ComplainantDetailsForm";
import { FAEDetailsForm } from "./StepperForms/FAEDetailsForm";
import { ComplaintDetailsForm } from "./StepperForms/ComplaintDetailsForm";
import { ReviewComplaintForm } from "./StepperForms/ReviewComplaintForm";
import { SubmissionConfirmation } from "./StepperForms/SubmissionConfirmation";
import ComplaintTypeForm from "./StepperForms/ComplaintTypeForm";

const ComplaintStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { number: 1, title: "Complaint Type" },
    { number: 2, title: "Complainant Details" },
    { number: 3, title: "FAE Details" },
    { number: 4, title: "Complaint Details" },
    { number: 5, title: "Review Complaint" },
    { number: 6, title: "Submitted" },
  ];

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="ds-u-padding-y--5">
      {/* Stepper */}
      <div className="ds-c-step-indicator ds-u-margin-bottom--5">
        <div className="ds-u-display--flex ds-u-justify-content--center ds-c-step-indicator__steps">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`ds-u-display--flex ds-u-align-items--center ds-u-margin-x--2 ds-c-step-indicator__step ${
                currentStep > step.number
                  ? "ds-c-step-indicator__step--complete"
                  : ""
              } ${
                currentStep === step.number
                  ? "ds-c-step-indicator__step--current"
                  : ""
              }`}
            >
              <div className="ds-u-border--1 ds-u-radius--circle ds-u-padding--05 ds-u-padding-x--1 ds-c-step-indicator__step-circle">
                {currentStep > step.number ? "✓" : step.number}
              </div>
              <div className="ds-c-step-indicator__step-label">
                <span className="ds-text-heading--sm">{step.title}</span>
              </div>
              {step.number < 6 && (
                <div className="ds-c-step-indicator__connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="ds-u-margin-top--4">
        {currentStep === 1 && <ComplaintTypeForm />}
        {currentStep === 2 && <ComplainantDetailsForm />}
        {currentStep === 3 && <FAEDetailsForm />}
        {currentStep === 4 && <ComplaintDetailsForm />}
        {currentStep === 5 && <ReviewComplaintForm />}
        {currentStep === 6 && <SubmissionConfirmation />}

        {/* Navigation Controls */}
        {currentStep < 6 && (
          <div className="ds-u-display--flex ds-u-justify-content--end ds-u-gap--2 ds-u-margin-top--4">
            {currentStep > 1 && (
              <Button
                onClick={handlePrev}
                className="ds-c-button ds-c-button--transparent"
              >
                Previous
              </Button>
            )}
            <Button
              onClick={handleNext}
              className="ds-c-button ds-c-button--primary"
            >
              {currentStep === 5 ? "Submit Complaint" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplaintStepper;
