import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../store/formSlice";

export const ComplainantDetailsForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateFormData({
        complainantDetails: {
          ...formData.complainantDetails,
          [name]: value,
        },
      })
    );
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      updateFormData({
        complainantDetails: {
          ...formData.complainantDetails,
          address: {
            ...formData.complainantDetails?.address,
            [name]: value,
          },
        },
      })
    );
  };

  return (
    <div className="ds-c-form">
      <h1 className="ds-text-heading--xl ds-u-margin-bottom--3">
        Organization Information
      </h1>

      <div className="ds-u-measure--wide">
        {/* Organization Name */}
        <div className="ds-u-margin-bottom--3">
          <h2 className="ds-text-heading--lg ds-u-margin-bottom--1">
            Complainant Organization Name *
          </h2>
          <input
            type="text"
            name="organizationName"
            value={formData.complainantDetails?.organizationName || ""}
            onChange={handleChange}
            placeholder="Enter organization name"
            className="ds-c-input"
          />
        </div>

        {/* Organization Type */}
        <div className="ds-u-margin-bottom--3">
          <h2 className="ds-text-heading--lg ds-u-margin-bottom--1">
            Complainant Organization Type (Other)
          </h2>
          <input
            type="text"
            name="organizationType"
            value={formData.complainantDetails?.organizationType || ""}
            onChange={handleChange}
            placeholder="Enter other organization type"
            className="ds-c-input"
          />
        </div>

        {/* Email */}
        <div className="ds-u-margin-bottom--3">
          <h2 className="ds-text-heading--lg ds-u-margin-bottom--1">
            Complainant Email Address *
          </h2>
          <input
            type="email"
            name="email"
            value={formData.complainantDetails?.email || ""}
            onChange={handleChange}
            placeholder="Enter your email"
            className="ds-c-input"
          />
        </div>

        {/* Address */}
        <div className="ds-u-margin-bottom--3">
          <h2 className="ds-text-heading--lg ds-u-margin-bottom--1">
            Address *
          </h2>
          <input
            type="text"
            name="street"
            value={formData.complainantDetails?.address?.street || ""}
            onChange={handleAddressChange}
            placeholder="Enter your address"
            className="ds-c-input"
          />
        </div>

        {/* City/State/Zip */}
        <div className="ds-u-margin-bottom--3">
          <h2 className="ds-text-heading--lg ds-u-margin-bottom--1">
            Complainant City/ Territory *
          </h2>
          <div className="ds-l-row ds-u-margin-bottom--1">
            <div className="ds-l-col--6 ds-u-padding-right--1">
              <input
                type="text"
                name="city"
                value={formData.complainantDetails?.address?.city || ""}
                onChange={handleAddressChange}
                placeholder="Enter city"
                className="ds-c-input"
              />
            </div>
            <div className="ds-l-col--6 ds-u-padding-left--1">
              <input
                type="text"
                name="state"
                value={formData.complainantDetails?.address?.state || ""}
                onChange={handleAddressChange}
                placeholder="Enter state"
                className="ds-c-input"
              />
            </div>
          </div>
          <div className="ds-l-col--6 ds-u-padding-right--1">
            <input
              type="text"
              name="zipCode"
              value={formData.complainantDetails?.address?.zipCode || ""}
              onChange={handleAddressChange}
              placeholder="Enter Zip code"
              className="ds-c-input"
            />
          </div>
        </div>

        {/* Country */}
        <div className="ds-u-margin-bottom--3">
          <h2 className="ds-text-heading--lg ds-u-margin-bottom--1">
            Country *
          </h2>
          <select
            name="country"
            value={formData.complainantDetails?.country || ""}
            onChange={handleChange}
            className="ds-c-select"
          >
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            {/* Add more countries as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};
