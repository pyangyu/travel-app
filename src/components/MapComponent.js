// src/components/MapComponent.js
import React, { useState } from 'react';
import './MapComponent.css';
import PushPinComponent from './PushPinComponent';
import Album from './Album';

export default function MapComponent() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [activePin, setActivePin] = useState("");

  const handlePinClick = (name) => {
    setCurrentLocation(name);
    setActivePin(name);
  };

  return (
    <div className="main-container">
      <div className="map-container">
        <img src="/assets/us-map.png" alt="US Map showing various travel locations" className="map-image" />
        <PushPinComponent 
          className="pushpin pushpin-illinois" 
          name="Illinois" 
          onClick={handlePinClick} 
          isActive={activePin === "Illinois"}
        />
        <PushPinComponent 
          className="pushpin pushpin-iowa" 
          name="Iowa" 
          onClick={handlePinClick} 
          isActive={activePin === "Iowa"}
        />
        <PushPinComponent 
          className="pushpin pushpin-wisconsin" 
          name="Wisconsin" 
          onClick={handlePinClick} 
          isActive={activePin === "Wisconsin"}
        />
        <PushPinComponent 
          className="pushpin pushpin-minnesota" 
          name="Minnesota" 
          onClick={handlePinClick} 
          isActive={activePin === "Minnesota"}
        />
        <PushPinComponent 
          className="pushpin pushpin-missouri" 
          name="Missouri" 
          onClick={handlePinClick} 
          isActive={activePin === "Missouri"}
        />
        <PushPinComponent 
          className="pushpin pushpin-newyork" 
          name="New York" 
          onClick={handlePinClick} 
          isActive={activePin === "New York"}
        />
        <PushPinComponent 
          className="pushpin pushpin-indiana" 
          name="Indiana" 
          onClick={handlePinClick} 
          isActive={activePin === "Indiana"}
        />
      </div>
      <div className="album-container">
        <Album location={currentLocation} />
      </div>
    </div>
  );
}
