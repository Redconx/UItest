import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";
import { Button } from "@cmsgov/design-system";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="ds-l-container ds-u-padding-y--5">
      <div className="ds-u-display--flex ds-u-flex-direction--column ds-u-align-items--center">
        <h1 className="ds-text-heading--2xl ds-u-margin-bottom--4 ds-u-justify-content--center">
          Administrative Simplification Enforcement and Testing Tool (ASETT)
        </h1>

        <h2 className="ds-text-heading--xl ds-u-margin-bottom--3">
          Follow the steps below to file your complaint
        </h2>

        <div className="ds-c-alert ds-c-alert--warning ds-u-margin-bottom--4">
          <div className="ds-c-alert__body">
            <strong>Disclaimer:</strong> If you file a complaint without
            registration, you will not be able to view your complaints, upload
            supporting documents, correspond electronically, or test
            transactions.
          </div>
        </div>

        <p className="ds-text--lead ds-u-measure--wide ds-u-margin-bottom--6">
          The following are the steps to file a complaint regarding HIPAA
          Transactions and Code Sets, Unique Identifiers, and/or Operating
          Rules. If you wish to file a Health Insurance Privacy complaint,
          please visit the Office for Civil Rights (OCR) website.
        </p>
      </div>

      <Stepper />

      <div className="ds-u-display--flex ds-u-justify-content--between ds-u-gap--2 ds-u-margin-top--4">
        <Button className="ds-c-button ds-c-button--transparent ds-u-font-weight--bold">
          Cancel
        </Button>
        <Button
          className="ds-c-button ds-c-button--primary ds-u-font-weight--bold"
          onClick={() => navigate("/start-complaint")}
        >
          Start Complaint Process
        </Button>
      </div>
    </main>
  );
};

export default Home;
