import React from "react";

const LoadingIndicator = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-grow"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingIndicator;
