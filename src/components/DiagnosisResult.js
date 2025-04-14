import React from "react";

function DiagnosisResult({ onDecision }) {
  return (
    <div>
      <h2 style={{ color: "#1e90ff" }}>E-Waste Diagnosis Result</h2>
      <p>The item has been classified. What would you like to do?</p>
      
      <div className="button-group">
        <button className="action-button" onClick={() => onDecision("repair")}>
          🛠️ Repair
        </button>
        <button className="action-button" onClick={() => onDecision("disposal")}>
          ♻️ Dispose
        </button>
      </div>
    </div>
  );
}

export default DiagnosisResult;
