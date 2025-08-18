import React from "react";

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: "#333", 
      color: "#fff", 
      padding: "10px", 
      textAlign: "center",
      position: "relative",
      left: 0,
      zIndex: 1000,
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      fontFamily: "'Roboto', sans-serif",
      boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
      borderTop: "1px solid #e5e7eb",
      marginTop: "20px",
      bottom: 0,
      width: "100%"
      
    }}>
      <p>© 2025 Fitness-Tracking. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
