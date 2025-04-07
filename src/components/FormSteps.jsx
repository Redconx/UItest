// src/components/FormSteps.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateStep } from "../utils/validate";
import Toast from "./Toast";

const FormSteps = () => {
  const dispatch = useDispatch();
  const { step, formData, errors } = useSelector((state) => state.form);
  const [toast, setToast] = useState(null);

  const handleNext = () => {
    const validationErrors = validateStep(step, formData);
    if (Object.keys(validationErrors).length > 0) {
      dispatch(setErrors(validationErrors));
      setToast({ message: "Please fix errors", type: "error" });
    } else {
      dispatch(nextStep());
    }
  };

  const handleSubmit = () => {
    setToast({ message: "Form submitted!", type: "success" });
    dispatch(resetForm());
  };

  return (
    <div className="ds-l-container">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Step 1: Personal Info */}
      {step === 1 && (
        <div className="ds-c-form">
          <label className="ds-c-label">
            Full Name
            <input
              className={`ds-c-input ${errors.name ? "ds-c-input--error" : ""}`}
              type="text"
              value={formData.personalInfo.name}
              onChange={(e) =>
                dispatch(
                  updateFormData({ personalInfo: { name: e.target.value } })
                )
              }
            />
            {errors.name && (
              <span className="ds-c-error-message">{errors.name}</span>
            )}
          </label>
        </div>
      )}

      {/* Step 2: Contact Info */}
      {step === 2 && (
        <div className="ds-c-form">
          <label className="ds-c-label">
            Email
            <input
              className={`ds-c-input ${
                errors.email ? "ds-c-input--error" : ""
              }`}
              type="email"
              value={formData.contactInfo.email}
              onChange={(e) =>
                dispatch(
                  updateFormData({ contactInfo: { email: e.target.value } })
                )
              }
            />
            {errors.email && (
              <span className="ds-c-error-message">{errors.email}</span>
            )}
          </label>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="ds-c-button-group">
        {step > 1 && (
          <button
            type="button"
            className="ds-c-button"
            onClick={() => dispatch(prevStep())}
          >
            Back
          </button>
        )}
        <button
          type="button"
          className="ds-c-button ds-c-button--primary"
          onClick={step === 2 ? handleSubmit : handleNext}
        >
          {step === 2 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default FormSteps;
