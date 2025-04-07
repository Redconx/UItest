// src/pages/ComplaintProcess.jsx

import ComplaintStepper from "../components/Stepper/ComplaintStepper";

const ComplaintProcess = () => {
  return (
    <div className="ds-base">
      <div className="ds-l-container ds-u-padding-y--5">
        <h1 className="ds-text-heading--2xl ds-u-margin-bottom--4">
          File a HIPAA/ACA Complaint
        </h1>
        <ComplaintStepper />
      </div>
    </div>
  );
};

export default ComplaintProcess;
