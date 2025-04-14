import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Emart.css';

const Emart = ({ report }) => {
  // Default report in case none is provided
  const defaultReport = {
    status: 'Minor Issue',
    timeTaken: '2 hours',
    estimatedCost: 100,
    estimatedTime: '3 days'
  };

  const diagnosisReport = report || defaultReport;

  const navigate = useNavigate(); // Initialize navigate function

  // Function to go back
  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="emart-container">
      <div className="report-container">
        <h1>Repair Diagnosis Report</h1>
        <p><strong>Diagnosis Status:</strong> {diagnosisReport.status}</p>
        <p><strong>Time Taken for Diagnosis:</strong> {diagnosisReport.timeTaken}</p>
        <p><strong>Estimated Repair Cost:</strong> ${diagnosisReport.estimatedCost}</p>
        <p><strong>Estimated Repair Time:</strong> {diagnosisReport.estimatedTime}</p>
        
        <div className="button-container">
          <button className="next-step-btn">Ok</button>
          <button className="back-step-btn" onClick={goBack}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Emart;
