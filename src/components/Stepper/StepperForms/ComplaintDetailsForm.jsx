import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../store/formSlice";

export const ComplaintDetailsForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateFormData({
        complaintDetails: {
          ...formData.complaintDetails,
          [name]: value,
        },
      })
    );
  };

  return (
    <div className="ds-c-form">
      <h1 className="ds-text-heading--xl ds-u-margin-bottom--3">
        Complaint Details
      </h1>
      <p className="ds-text--lead ds-u-margin-bottom--4">
        Please provide information about your complaint below
      </p>

      <div className="ds-u-measure--wide">
        <h2 className="ds-text-heading--lg ds-u-margin-bottom--3">
          Incident Information
        </h2>

        {/* Incident Date */}
        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label ds-u-font-weight--bold">
            Incident occurred date *
          </label>
          <input
            type="date"
            name="incidentDate"
            value={formData.complaintDetails?.incidentDate || ""}
            onChange={handleChange}
            className="ds-c-input"
            placeholder="dd/mm/yyyy"
          />
        </div>

        {/* Unique Identifier Type */}
        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label ds-u-font-weight--bold">
            Complaint Unique Identifier Type
          </label>
          <select
            name="uniqueIdentifierType"
            value={formData.complaintDetails?.uniqueIdentifierType || ""}
            onChange={handleChange}
            className="ds-c-select"
          >
            <option value="">--None--</option>
            <option value="npi">NPI</option>
            <option value="ein">EIN</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Complaint Subject */}
        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label ds-u-font-weight--bold">
            Complaint Subject **
          </label>
          <input
            type="text"
            name="subject"
            value={formData.complaintDetails?.subject || ""}
            onChange={handleChange}
            placeholder="Enter location"
            className="ds-c-input"
          />
        </div>

        {/* Title */}
        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label ds-u-font-weight--bold">Title **</label>
          <input
            type="text"
            name="title"
            value={formData.complaintDetails?.title || ""}
            onChange={handleChange}
            placeholder="Enter complaint title"
            className="ds-c-input"
          />
        </div>

        {/* Description */}
        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label ds-u-font-weight--bold">
            Description **
          </label>
          <textarea
            name="description"
            value={formData.complaintDetails?.description || ""}
            onChange={handleChange}
            placeholder="Enter complaint description"
            className="ds-c-input"
            rows="5"
          />
        </div>
      </div>
    </div>
  );
};
