import React from 'react';
import DiagnosisReport from '../components/DiagnosisReport';

const Dashboard = () => {
  // Sample report data
  const report = {
    status: 'Minor Issue',
    timeTaken: '2 hours',
    estimatedCost: 100,
    estimatedTime: '3 days'
  };

  return (
    <div>
      <DiagnosisReport report={report} />
    </div>
  );
};

export default Dashboard;
