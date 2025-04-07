import React from "react";
import { useSelector } from "react-redux";

export const ReviewComplaintForm = () => {
  const formData = useSelector((state) => state.form.formData);

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "Not provided";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // dd/mm/yyyy format
  };

  // Helper function to display empty fields
  const displayValue = (value) => {
    return value || "Not provided";
  };
 
  return (
    <div className="ds-c-form">
      <h1 className="ds-text-heading--xl ds-u-margin-bottom--3">
        Review Complaint
      </h1>
      <p className="ds-text--lead ds-u-margin-bottom--4">
        Please review your complaint details before submission
      </p>

      <div className="ds-u-measure--wide">
        <h2 className="ds-text-heading--lg ds-u-margin-bottom--3">
          Complaint Details
        </h2>

        <table className="ds-c-table ds-u-margin-bottom--5">
          <tbody>
            {/* Complaint Type */}
            <tr>
              <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                Complaint Type
              </td>
              <td className="ds-u-padding-y--2">
                {displayValue(formData.complaintType)}
              </td>
            </tr>

            {/* Complaint Description */}
            <tr>
              <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                Complaint Description
              </td>
              <td className="ds-u-padding-y--2">
                {displayValue(formData.complaintDetails.description)}
              </td>
            </tr>

            {/* Incident Date */}
            <tr>
              <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                Incident Date
              </td>
              <td className="ds-u-padding-y--2">
                {formatDate(formData.complaintDetails.incidentDate)}
              </td>
            </tr>

            {/* Transaction Type */}
            <tr>
              <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                Transaction Type
              </td>
              <td className="ds-u-padding-y--2">
                {displayValue(
                  formData.complaintType === "transactions"
                    ? formData.complaintDetails.subject
                    : "N/A"
                )}
              </td>
            </tr>

            {/* Location */}
            <tr>
              <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                Location
              </td>
              <td className="ds-u-padding-y--2">
                {displayValue(
                  formData.complainantDetails.address?.street &&
                    `${formData.complainantDetails.address.street}, ${formData.complainantDetails.address.city}, ${formData.complainantDetails.address.state} ${formData.complainantDetails.address.zipCode}`
                )}
              </td>
            </tr>

            {/* Title */}
            <tr>
              <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                Title
              </td>
              <td className="ds-u-padding-y--2">
                {displayValue(formData.complaintDetails.title)}
              </td>
            </tr>

            {/* Description */}
            <tr>
              <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                Description
              </td>
              <td className="ds-u-padding-y--2">
                {displayValue(formData.complaintDetails.description)}
              </td>
            </tr>

            {/* Complainant Details Section Header */}
            <tr>
              <td
                colSpan="2"
                className="ds-u-font-weight--bold ds-u-padding-y--2 ds-u-border-top--2"
              >
                Complainant Details
              </td>
            </tr>

            {/* Anonymous */}
            <tr>
              <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                Anonymous
              </td>
              <td className="ds-u-padding-y--2">
                {formData.complainantDetails.organizationName ? "No" : "Yes"}
              </td>
            </tr>

            {/* Organization Name */}
            <tr>
              <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                Organization Name
              </td>
              <td className="ds-u-padding-y--2">
                {displayValue(formData.complainantDetails.organizationName)}
              </td>
            </tr>

            {/* Organization Type */}
            <tr>
              <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                Organization Type
              </td>
              <td className="ds-u-padding-y--2">
                {displayValue(formData.complainantDetails.organizationType)}
              </td>
            </tr>

            {/* Organization Type (Other) */}
            {formData.complainantDetails.organizationType === "other" && (
              <tr>
                <td className="ds-u-font-weight--bold ds-u-padding-y--2">
                  Organization Type (Other)
                </td>
                <td className="ds-u-padding-y--2">
                  {displayValue(
                    formData.complainantDetails.otherOrganizationType
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
