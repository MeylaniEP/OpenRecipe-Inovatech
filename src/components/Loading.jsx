import React from 'react';

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading...</p>
      <style>
        {`
        .loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #343a40;
}

        `}
      </style>
    </div>
  );
}

export default Loading;
