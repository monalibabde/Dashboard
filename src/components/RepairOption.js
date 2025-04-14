// components/RepairOption.js
import React, { useState } from "react";
// import FixEwaste from "./FixEwaste";
// import TransportAgent from "./TransportAgent";
// import RecycleHub from "./RecycleHub";
// import EarnReward from "./EarnReward";
import DisposalLocation from "./DisposalLocation";

const RepairOption = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const steps = [
    <DisposalLocation onNext={nextStep} />
  ];

  return <div>{steps[step]}</div>;
};

export default RepairOption;
