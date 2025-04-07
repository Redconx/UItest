import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./StepperForms.css";
import { updateFormData } from "../../../store/formSlice";

const ComplaintTypeForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const selectedOption = formData.complaintType || "";

  const handleChange = (e) => {
    dispatch(
      updateFormData({
        complaintType: e.target.value,
      })
    );
  };

  return (
    <div className="ds-c-form">
      <h2 className="ds-text-heading--lg ds-u-margin-bottom--3">
        Complaint Type
      </h2>

      <div className="">
        <legend className="ds-c-label ds-u-font-weight--bold ds-u-margin-bottom--2">
          Select the type of violation:
        </legend>

        {/* Transactions Radio */}
        <div className="ds-u-margin-y--2">
          <input
            type="radio"
            id="transactions"
            name="violationType"
            value="transactions"
            checked={selectedOption === "transactions"}
            onChange={handleChange}
            className="ds-c-radio"
          />
          <label htmlFor="transactions" className="ds-c-label">
            <div className="ds-u-padding-left--2">
              <strong className="ds-text-heading--sm">Transactions</strong>
              <p className="ds-u-font-size--base ds-u-color--gray">
                Select if a covered entity is in violation of the following
                transactions: claims and encounter information, payment and
                remittance advice, claims status, eligibility, enrollment and
                disenrollment, referrals and authorizations, coordination of
                benefits and premium payment.
              </p>
            </div>
          </label>
        </div>

        {/* Code Sets Radio */}
        <div className="ds-u-margin-y--2">
          <input
            type="radio"
            id="codeSets"
            name="violationType"
            value="codeSets"
            checked={selectedOption === "codeSets"}
            onChange={handleChange}
            className="ds-c-radio"
          />
          <label htmlFor="codeSets" className="ds-c-label">
            <div className="ds-u-padding-left--2">
              <strong className="ds-text-heading--sm">Code Sets</strong>
              <p className="ds-u-font-size--base ds-u-color--gray">
                Select if a covered entity is in violation of the following Code
                Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians
                Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and
                Hospital Inpatient Procedures), ICD-10 and NDC (National Drug
                Codes).
              </p>
            </div>
          </label>
        </div>

        {/* Unique Identifiers Radio */}
        <div className="ds-u-margin-y--2">
          <input
            type="radio"
            id="uniqueIdentifiers"
            name="violationType"
            value="uniqueIdentifiers"
            checked={selectedOption === "uniqueIdentifiers"}
            onChange={handleChange}
            className="ds-c-radio"
          />
          <label htmlFor="uniqueIdentifiers" className="ds-c-label">
            <div className="ds-u-padding-left--2">
              <strong className="ds-text-heading--sm">
                Unique Identifiers
              </strong>
              <p className="ds-u-font-size--base ds-u-color--gray">
                Select if a covered entity is in violation of the following
                Unique Identifiers: National Provider Identifier (NPI), Employer
                Identification Number (EIN).
              </p>
            </div>
          </label>
        </div>

        {/* None Radio */}
        <div className="ds-u-margin-y--2">
          <input
            type="radio"
            id="none"
            name="violationType"
            value="none"
            checked={selectedOption === "none"}
            onChange={handleChange}
            className="ds-c-radio"
          />
          <label htmlFor="none" className="ds-c-label">
            <div className="ds-u-padding-left--2">
              <strong className="ds-text-heading--sm">None of the above</strong>
            </div>
          </label>
        </div>

        <div className="ds-u-margin-top--3">
          <p className="ds-u-font-size--base ds-u-color--muted">
            Note: If you wish to file a Health Insurance Privacy complaint,
            please visit the Office for Civil Rights (OCR) website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintTypeForm;
