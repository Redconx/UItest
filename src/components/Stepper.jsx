// src/components/Stepper.jsx
import React from "react";
import "./Stepper.css";

const Stepper = () => {
  const steps = [
    "Identify the type of HIPAA/ACA complaint",
    "Provide your contact information",
    "Identify the Filed Against Entity",
    "Describe the HIPAA/ACA violation",
    "Review and Submit",
  ];

  return (
    <div className="ds-u-display--flex ds-u-flex-direction--column ds-u-align-items--center ds-c-step-indicator ds-u-margin-y--4">
      <div className="ds-c-step-indicator__header">
        <h2 className="ds-text-heading--lg">
          Follow these steps to file your complaint
        </h2>
      </div>
      <div className="ds-c-step-indicator__steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className="ds-u-display--flex ds-u-align-items--center ds-u-padding-x--7 ds-u-padding-y--1 ds-u-margin--1 ds-c-step-indicator__step ds-u-border--1 ds-u-radius--2"
          >
            {/* Number Circle with Border and Padding */}
            <div className="ds-c-step-indicator__step-circle ds-u-fill--primary ds-u-width--5 ds-u-height--5 ds-u-display--flex ds-u-align-items--center ds-u-justify-content--center ds-u-radius--circle ds-u-border--2 ds-u-border--white ds-u-padding--2">
              <span className="ds-u-color--white ds-u-font-weight--bold ds-u-font-size--lg">
                {index + 1}
              </span>
            </div>

            {/* Step Label */}
            <div className="ds-c-step-indicator__step-label ds-u-margin-left--2">
              <span className="ds-text-heading--sm">{step}</span>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div className="ds-c-step-indicator__connector"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
