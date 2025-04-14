import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const DisposalLocation = ({ onLocationSelect, onBack }) => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Pimpri-Chinchwad");
  const [isLoading, setIsLoading] = useState(false);
  const [availability, setAvailability] = useState(null);
  const [hubs, setHubs] = useState([]);
  const [showContinue, setShowContinue] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const navigate = useNavigate();


  const fetchHubs = (locationToSearch) => {
    setIsLoading(true);
    setNetworkError(false);
    setTimeout(() => {
      const sampleHubs = [
        { name: "EcoHub 1", location: "Pimpri-Chinchwad" },
        { name: "EcoHub 2", location: "Pimpri-Chinchwad" }
      ];
      setHubs(sampleHubs);
      const isAvailable = sampleHubs.some(hub =>
        hub.location.toLowerCase().includes(locationToSearch.toLowerCase())
      );
      setAvailability(isAvailable ? "available" : "unavailable");
      setShowContinue(isAvailable);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (search.trim() === "") return;

    const debounceTimer = setTimeout(() => {
      if (search !== selectedLocation) {
        fetchHubs(search);
        setSelectedLocation(search);
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [search, selectedLocation]);

  const handleUseCurrentLocation = () => {
    setIsLoading(true);
    setNetworkError(false);
    setTimeout(() => {
      const locationName = "Pimpri-Chinchwad";
      setSearch(locationName);
      setSelectedLocation(locationName);
      onLocationSelect && onLocationSelect(locationName);

      const currentHubs = [
        { name: "EcoHub A", location: "Pimpri-Chinchwad" },
        { name: "EcoHub B", location: "Pimpri-Chinchwad" }
      ];
      setHubs(currentHubs);
      const isAvailable = currentHubs.length > 0;
      setAvailability(isAvailable ? "available" : "unavailable");
      setShowContinue(isAvailable);
      setIsLoading(false);
    }, 1000);
  };

  const handleSearchSubmit = () => {
    if (search.trim() !== "") {
      fetchHubs(search);
      setSelectedLocation(search);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.subtitle}>Select Pickup Location</h2>

      <div style={styles.selectedLocationCard}>
        <span style={styles.locationIcon}>📍</span>
        <strong>{selectedLocation}</strong>
        <span style={styles.selectedBadge}>Currently Selected</span>
      </div>

      <div style={styles.bigSearchContainer}>
        <input
          type="text"
          placeholder="Type your location to check availability..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.bigSearchInput}
        />
        <button onClick={handleSearchSubmit} style={styles.enterButton}>
          Enter
        </button>

        {search && !isLoading && availability && (
          <div
            style={
              availability === "available"
                ? styles.availableIndicator
                : styles.unavailableIndicator
            }
          >
            {availability === "available" ? (
              <>✅ Available in this area</>
            ) : (
              <>❌ Service not available here</>
            )}
          </div>
        )}
      </div>

      <button
        onClick={handleUseCurrentLocation}
        style={styles.currentLocationButton}
        disabled={isLoading}
      >
        {isLoading ? "⌛ Detecting..." : "📍 Use Current Location"}
      </button>

      {availability === "available" && hubs.length > 0 && (
        <div style={styles.hubList}>
          <h3>Nearby Recycling Hubs:</h3>
          {hubs.map((hub, index) => (
            <div key={index} style={styles.hubCard}>
              <strong>{hub.name}</strong>
              <p>{hub.location}</p>
            </div>
          ))}
        </div>
      )}

      {showContinue && (
        <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>

      )}

      {networkError && (
        <div style={styles.networkError}>
          ⚠️ There was an error fetching the data. Please try again later.
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  subtitle: {
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "20px",
  },
  selectedLocationCard: {
    padding: "10px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  locationIcon: {
    fontSize: "1.2rem",
  },
  selectedBadge: {
    marginLeft: "10px",
    backgroundColor: "#c8e6c9",
    color: "#2e7d32",
    padding: "5px 10px",
    borderRadius: "12px",
    fontSize: "0.8rem",
  },
  bigSearchContainer: {
    margin: "20px 0",
    width: "100%",
    display: "flex",
    gap: "10px",
  },
  bigSearchInput: {
    flex: 1,
    padding: "15px",
    fontSize: "16px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    boxSizing: "border-box",
  },
  enterButton: {
    padding: "15px 20px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  availableIndicator: {
    marginTop: "8px",
    padding: "10px",
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    borderRadius: "8px",
    textAlign: "center",
    width: "100%",
  },
  unavailableIndicator: {
    marginTop: "8px",
    padding: "10px",
    backgroundColor: "#ffebee",
    color: "#c62828",
    borderRadius: "8px",
    textAlign: "center",
    width: "100%",
  },
  currentLocationButton: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#4caf50",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
  },
  hubList: {
    marginTop: "30px",
    padding: "10px",
    borderTop: "1px solid #ccc",
  },
  hubCard: {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
  },
  continueButton: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#4caf50",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
  },
  networkError: {
    padding: "10px",
    backgroundColor: "#ffebee",
    color: "#c62828",
    borderRadius: "8px",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default DisposalLocation;
