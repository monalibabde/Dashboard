import React from "react";

const DisposalStepThree = () => {
  const handleBackClick = () => {
    // You can define the logic for going back here, like using React Router's useHistory or a custom callback
    window.history.back(); // This goes back to the previous page
  };

  return (
    <div>
      <h2>🎉 Reward Earned!</h2>
      <p>Thank you for recycling responsibly. You’ve earned 50 EcoPoints!</p>

      <button 
        onClick={handleBackClick} 
        style={{
          marginTop: "20px", 
          padding: "10px 20px", 
          fontSize: "16px", 
          backgroundColor: "#4CAF50", 
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer"
        }}
      >
        Back
      </button>
    </div>
  );
};

export default DisposalStepThree;
