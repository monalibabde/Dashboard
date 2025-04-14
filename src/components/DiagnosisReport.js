import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DiagnosisReport.css';

const DiagnosisReport = ({ report = {} }) => {
  const navigate = useNavigate(); // ✅ useNavigate inside the component

  return (
    <div className="report-container">
      <h1>Repair Diagnosis Report</h1>
      <p><strong>Diagnosis Status:</strong> {report.status || "Complete"}</p>
      <p><strong>Time Taken for Diagnosis:</strong> {report.timeTaken || "5 mins"}</p>
      <p><strong>Estimated Repair Cost:</strong> ${report.estimatedCost || "50"}</p>
      <p><strong>Estimated Repair Time:</strong> {report.estimatedTime || "2 hours"}</p>

      <button onClick={() => navigate('/')}>Back to Dashboard</button>
    </div>
  );
};

export default DiagnosisReport;
