import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showActivityOnly, setShowActivityOnly] = useState(false); // New state to track "My Activity"
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulated logout logic: you can clear localStorage/session here
    console.log("User logged out");
    navigate("/"); // Navigate to home or login
  };

  const handleMyActivityClick = () => {
    if (showSubMenu) {
      // If the submenu is already open, hide it and show other options
      setShowSubMenu(false);
      setShowActivityOnly(false);
    } else {
      // If the submenu is not open, show it and hide other options
      setShowSubMenu(true);
      setShowActivityOnly(true);
    }
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      setShowActivityOnly(false); // Reset when dropdown is closed
    }
  };

  return (
    <div className="dashboard">
      <header className="top-bar">
        <div className="left">
          <div className="logo-container">
            <span className="logo-icon">🌿</span>
            <div className="logo-text">
              <h1 className="ecobot">EcoBot</h1>
              <p className="tagline">Smart E-Waste Management</p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="notification" title="Notifications">🔔</div>
          <div className="applications">
            <button className="app-button" onClick={handleDropdownClick}>
              📋 My Account
            </button>

            {showDropdown && (
              <div className="dropdown">
                <ul>
                  <li
                    className="nested"
                    onClick={handleMyActivityClick}
                    style={{ cursor: "pointer" }}
                  >
                    📋 My Activity {showSubMenu ? "▲" : "▾"} {/* Toggle arrow */}
                    {showSubMenu && (
                      <ul className="sub-dropdown">
                        <li><Link to="/repair">🛠️ Repair</Link></li>
                        <li onClick={() => navigate("/disposalRecyclehub")} style={{ cursor: "pointer" }}>
  🗑️ Dispose
</li>



                      </ul>
                    )}
                  </li>
                  {/* Only show Rewards and Logout if we're not in "My Activity" mode */}
                  {!showActivityOnly && (
                    <>
                      <li><Link to="/rewards">🏆 Rewards</Link></li>
                      <li onClick={handleLogout} style={{ cursor: "pointer" }}>🚪 Logout</li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="glass-card">
          <div className="card-content">
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
