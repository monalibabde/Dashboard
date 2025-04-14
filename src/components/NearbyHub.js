import React from "react";

const NearbyHub = ({ location, onNext, onBack }) => {
  const nearbyHub = {
    name: "Green Future Recycle Hub",
    address: "123, Eco Street, Pune",
    distance: "2.3 km",
    hours: "9 AM - 6 PM",
    contact: "9876543210"
  };

  return (
    <div>
      <h2>Nearest Recycle Hub</h2>
      <ul>
        <li><strong>Name:</strong> {nearbyHub.name}</li>
        <li><strong>Address:</strong> {nearbyHub.address}</li>
        <li><strong>Distance:</strong> {nearbyHub.distance}</li>
        <li><strong>Working Hours:</strong> {nearbyHub.hours}</li>
        <li><strong>Contact:</strong> {nearbyHub.contact}</li>
      </ul>
      <button onClick={onBack}>🔙 Back</button>
      <button onClick={onNext}>Proceed to Dispose</button>
    </div>
  );
};

export default NearbyHub;
