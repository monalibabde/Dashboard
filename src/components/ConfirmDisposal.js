import React, { useEffect, useState } from "react";

const ConfirmDisposal = ({ onBack, disposalId = "smartphone" }) => {
  const [co2Saved, setCo2Saved] = useState(0);
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    const co2Data = {
      smartphone: { value: 2.5, name: "smartphone" },
      laptop: { value: 6.3, name: "laptop" },
      tablet: { value: 3.1, name: "tablet" },
      television: { value: 8.7, name: "television" },
      default: { value: 2.0, name: "item" },
    };

    const itemData = co2Data[disposalId] || co2Data["default"];
    setCo2Saved(itemData.value);
    setItemName(itemData.name);
  }, [disposalId]);

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1.5rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      maxWidth: '32rem',
      margin: '2.5rem auto 0',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>♻️</div>
      
      <h1 style={{
        fontSize: '1.875rem',
        fontWeight: 'bold',
        color: '#16a34a',
        marginBottom: '0.5rem'
      }}>
        Congratulations! 🎉
      </h1>
      
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#166534',
        marginBottom: '1rem'
      }}>
        EcoBot Disposal Complete!
      </h2>
      
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#374151', 
        marginBottom: '1.5rem',
        fontStyle: 'italic'
      }}>
        "Every small act of recycling adds up to create a greener tomorrow for all."
      </p>
      
      <p style={{ fontSize: '1.125rem', color: '#374151', marginBottom: '1.5rem' }}>
        Your <span style={{ fontWeight: '600' }}>{itemName}</span> has been successfully processed at the EcoHub.
      </p>
      
      <div style={{
        background: 'linear-gradient(to bottom right, #f0fdf4, #f0f9ff)',
        border: '1px solid #bbf7d0',
        borderRadius: '1rem',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#166534',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          🌱 Your Environmental Impact
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
          }}>
            <span style={{ color: '#374151', fontWeight: '500' }}>CO₂ Saved:</span>
            <span style={{ fontWeight: 'bold', color: '#166534' }}>
              {co2Saved} kg <span style={{ fontSize: '0.875rem', fontWeight: 'normal' }}>(≈ planting 1 tree)</span>
            </span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
          }}>
            <span style={{ color: '#374151', fontWeight: '500' }}>Waste Diverted:</span>
            <span style={{ fontWeight: 'bold', color: '#166534' }}>From landfill to recycling ♻️</span>
          </div>
        </div>
      </div>
      
      <p style={{ 
        color: '#4b5563', 
        marginBottom: '1.5rem',
        fontSize: '1.125rem'
      }}>
        Together, we're reducing waste and protecting the planet—one disposal at a time. 🌎
      </p>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '500', color: '#374151', marginBottom: '0.75rem' }}>
          Keep the Green Streak Going!
        </h3>
        {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button style={{
            fontSize: '1rem',
            backgroundColor: '#dcfce7',
            color: '#166534',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease'
          }}>
            📊 Track Your Impact
          </button>
          <button style={{
            fontSize: '1rem',
            backgroundColor: '#dbeafe',
            color: '#1e40af',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease'
          }}>
            📢 Share #EcoHero
          </button>
        </div> */}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button
          onClick={onBack}
          style={{
            backgroundColor: '#16a34a',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '9999px',
            border: 'none',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.125rem',
            fontWeight: '600',
            transition: 'all 0.2s ease'
          }}
        >
          ← Back to Hub
        </button>
        <button style={{
          border: '2px solid #16a34a',
          color: '#16a34a',
          padding: '1rem 2.5rem',
          borderRadius: '9999px',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          fontSize: '1.125rem',
          fontWeight: '600',
          transition: 'all 0.2s ease'
        }}>
          📈 View Your Stats
        </button>
      </div>
    </div>
  );
};

export default ConfirmDisposal;