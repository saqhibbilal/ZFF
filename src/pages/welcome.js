import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleRedirect = () => {
    navigate("/plans"); // Redirect to the Plans page
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#F4F4F4",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleRedirect} style={buttonStyle}>
        Get Started
      </button>
    </div>
  );
};

// Inline style for the button
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  transition: "background-color 0.3s",
};

export default Welcome;
