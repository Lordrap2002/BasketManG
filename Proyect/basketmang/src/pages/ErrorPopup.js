// ErrorPopup.js
import React from 'react';

const ErrorPopup = ({ message, onClose }) => {
  return (
    <div className="error-popup-overlay">
      <div className="error-popup">
        <div className="popup-content">
          <p>{message}</p>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
