import React, { useState } from "react";
import DisposalLocation from "./DisposalLocation";
import NearbyHub from "./NearbyHub";
import ConfirmDisposal from "./ConfirmDisposal";

const DisposalOption = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState(null);

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setStep(2);
  };

  const goBack = () => setStep(step - 1);

  const resetFlow = () => {
    // If you want to exit the flow or go back to homepage or previous module
    setLocation(null);
    setStep(1);
  };

  return (
    <div>
      {/* ✅ Add onBack to Step 1 */}
      {step === 1 && (
        <DisposalLocation
          onLocationSelect={handleLocationSelect}
          onBack={resetFlow} // You can replace this with any custom logic like navigation
        />
      )}
      {step === 2 && (
        <NearbyHub
          location={location}
          onNext={() => setStep(3)}
          onBack={goBack}
        />
      )}
      {step === 3 && <ConfirmDisposal onBack={goBack} />}
    </div>
  );
};

export default DisposalOption;
