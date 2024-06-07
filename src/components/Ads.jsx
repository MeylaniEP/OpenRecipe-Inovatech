import React from "react";

function Ads() {
  return (
    <div
      className="d-flex flex-row justify-content-center align-items-start"
      style={{ width: "100%" }}
    >
      <div
        className="d-flex flex-row justify-content-center align-items-center mb-2"
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: "1rem 1rem 1rem 1rem",
          boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
          width: "100%",
          minHeight: "500px",
        }}
      >
        ads
      </div>
    </div>
  );
}

export default Ads;
