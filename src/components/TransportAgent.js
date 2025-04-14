import React from "react";

const DisposalStepOne = ({ onNext }) => {
  return (
    <div>
      <h2>Transport Agent Assigned</h2>
      <p>Your e-waste item will be picked up shortly.</p>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default DisposalStepOne;
