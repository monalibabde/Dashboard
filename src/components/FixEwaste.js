// components/FixEwaste.js
import React from "react";
import { useNavigate } from "react-router-dom";

const FixEwaste = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/disposal-location");
  };

  return (
    <div>
      <h2>🛠️ Fix E-Waste</h2>
      <p>Your e-waste is now being repaired by a certified technician.</p>
      <button onClick={handleNext}>Next: Transport Agent</button>
    </div>
  );
};

export default FixEwaste;
