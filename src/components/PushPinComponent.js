// src/components/PushPinComponent.js
import React from 'react';
import './PushPinComponent.css';

export default function PushPinComponent({ className, name, onClick, isActive }) {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className="push-pin-wrapper">
      <button
        onClick={handleClick}
        className={`push-pin-button ${className} ${isActive ? 'active' : ''}`}
      >
        <img src="assets/round-pushpin.png" alt="Push Pin" className="push-pin-image" />
      </button>
      {isActive && <div className="pin-dot"></div>}
    </div>
  );
}
