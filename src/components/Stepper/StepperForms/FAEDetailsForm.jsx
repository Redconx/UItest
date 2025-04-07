import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../store/formSlice";

export const FAEDetailsForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateFormData({
        faeDetails: {
          ...formData.faeDetails,
          [name]: value,
        },
      })
    );
  };

  return (
    <div className="ds-c-form">
      <h1 className="ds-text-heading--xl ds-u-margin-bottom--3">FAE Details</h1>
      <p className="ds-text--lead ds-u-margin-bottom--4">
        Please provide the Filed Against Entity Information below
      </p>

      <div className="ds-u-measure--wide">
        <h2 className="ds-text-heading--lg ds-u-margin-bottom--3">
          Organization Information
        </h2>

        {/* FAE Organization Name */}
        <div className="ds-u-margin-bottom--3">
          <h3 className="ds-text-heading--md ds-u-margin-bottom--1">
            FAE Organization Name *
          </h3>
          <input
            type="text"
            name="organizationName"
            value={formData.faeDetails?.organizationName || ""}
            onChange={handleChange}
            placeholder="Enter organization name"
            className="ds-c-input"
          />
        </div>

        {/* FAE Organization Type */}
        <div className="ds-u-margin-bottom--3">
          <h3 className="ds-text-heading--md ds-u-margin-bottom--1">
            FAE Organization Type
          </h3>
          <select
            name="organizationType"
            value={formData.faeDetails?.organizationType || ""}
            onChange={handleChange}
            className="ds-c-select"
          >
            <option value="">- None -</option>
            <option value="provider">Healthcare Provider</option>
            <option value="payer">Health Plan</option>
            <option value="clearinghouse">Clearinghouse</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Email */}
        <div className="ds-u-margin-bottom--3">
          <h3 className="ds-text-heading--md ds-u-margin-bottom--1">Email *</h3>
          <input
            type="email"
            name="email"
            value={formData.faeDetails?.email || ""}
            onChange={handleChange}
            placeholder="Enter email address"
            className="ds-c-input"
          />
        </div>

        {/* FAQ Organization Type (Other) - Conditional */}
        {formData.faeDetails?.organizationType === "other" && (
          <div className="ds-u-margin-bottom--3">
            <h3 className="ds-text-heading--md ds-u-margin-bottom--1">
              FAQ Organization Type (Other)
            </h3>
            <input
              type="text"
              name="otherOrganizationType"
              value={formData.faeDetails?.otherOrganizationType || ""}
              onChange={handleChange}
              placeholder="Enter other organization type"
              className="ds-c-input"
            />
          </div>
        )}

        {/* Phone */}
        <div className="ds-u-margin-bottom--3">
          <h3 className="ds-text-heading--md ds-u-margin-bottom--1">Phone *</h3>
          <input
            type="tel"
            name="phone"
            value={formData.faeDetails?.phone || ""}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="ds-c-input"
          />
        </div>

        {/* Department */}
        <div className="ds-u-margin-bottom--3">
          <h3 className="ds-text-heading--md ds-u-margin-bottom--1">
            Department *
          </h3>
          <input
            type="text"
            name="department"
            value={formData.faeDetails?.department || ""}
            onChange={handleChange}
            placeholder="Enter department"
            className="ds-c-input"
          />
        </div>
      </div>
    </div>
  );
};
