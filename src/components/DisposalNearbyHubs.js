import React from "react";
import { useNavigate } from "react-router-dom";
import "./DisposalNearbyHubs.css";

const DisposalNearbyHubs = () => {
  const navigate = useNavigate();

  // Static selected hub data (preselected)
  const selectedHub = {
    id: 1,
    name: "Green Cycle Hub",
    distance: "1.2 km",
    address: "123 Green Street, Eco City",
    hours: "9 AM - 6 PM",
    contact: "9876543210"
  };

  const handleBack = () => {
    navigate("/dashboard"); // Navigate back to Dashboard
  };

  return (
    <div className="disposal-container">
      <h1>Selected Recycle Hub</h1>

      <div className="hub-details">
        <h2>{selectedHub.name}</h2>
        <p><strong>Address:</strong> {selectedHub.address}</p>
        <p><strong>Distance:</strong> {selectedHub.distance}</p>
        <p><strong>Working Hours:</strong> {selectedHub.hours}</p>
        <p><strong>Contact:</strong> {selectedHub.contact}</p>
      </div>

      <div className="button-group">
        <button onClick={handleBack} className="back-btn">
          ⬅ Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default DisposalNearbyHubs;
