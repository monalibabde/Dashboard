import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import DisposalOption from "./components/DisposalOption";
import RepairOption from "./components/RepairOption";
import FixEwaste from "./components/FixEwaste";
import TransportAgent from "./components/TransportAgent";
import RecycleHub from "./components/RecycleHub";
import EarnReward from "./components/EarnReward";
import Emart from "./components/Emart";
import DisposalNearbyHubs from "./components/DisposalNearbyHubs";
import DiagnosisReport from "./components/DiagnosisReport";

import "./App.css";

function RepairFlow() {
  const [step, setStep] = useState(0);
  const handleNext = () => setStep((prev) => prev + 1);

  switch (step) {
    case 0: return <DiagnosisReport onNext={handleNext} />;
    case 1: return <DisposalNearbyHubs onNext={handleNext} />;
    case 2: return <RepairOption onNext={handleNext} />;
    case 3: return <FixEwaste onNext={handleNext} />;
    case 4: return <TransportAgent onNext={handleNext} />;
    case 5: return <RecycleHub onNext={handleNext} />;
    case 6: return <EarnReward />;
    default: return <Navigate to="/" />;
  }
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/disposalRecyclehub" element={<DisposalNearbyHubs />} />
      <Route path="/dispose" element={<DisposalOption />} />
      <Route path="/disposalRecyclehub" element={<DisposalNearbyHubs />} />
      <Route path="/repair" element={<RepairFlow />} />
      <Route path="/rewards" element={<EarnReward />} />
      <Route path="/emart" element={<Emart />} />
      <Route path="/recyclehub" element={<RecycleHub />} />
      <Route
        path="*"
        element={
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>404 - Page Not Found</h2>
            <p>
              Go back to{" "}
              <a href="/" style={{ color: "#10b981", textDecoration: "none" }}>
                EcoBot Dashboard
              </a>
            </p>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
