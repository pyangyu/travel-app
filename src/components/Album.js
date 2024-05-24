// src/components/Album.js
import React from 'react';
import './Album.css';
// import Fireworks from './Fireworks';

export default function Album({ location }) {
  const importAll = (r) => r.keys().map(r);
  let images = [];

  if (location === "Illinois") {
    images = importAll(require.context('../../public/assets/illinois', false, /\.(png|jpe?g|svg)$/));
  }

  if (location === "Minnesota") {
    images = importAll(require.context('../../public/assets/Minnesota', false, /\.(png|jpe?g|svg)$/));
  }

  if (location === "Missouri") {
    images = importAll(require.context('../../public/assets/Missouri', false, /\.(png|jpe?g|svg)$/));
  }

  if (location === "New York") {
    images = importAll(require.context('../../public/assets/New York', false, /\.(png|jpe?g|svg)$/));
  }

  if (location === "Indiana") {
    images = importAll(require.context('../../public/assets/Indiana', false, /\.(png|jpe?g|svg)$/));
  }

  if (location === "Iowa") {
    images = importAll(require.context('../../public/assets/Iowa', false, /\.(png|jpe?g|svg)$/));
  }

  if (location === "Wisconsin") {
    images = importAll(require.context('../../public/assets/wisconsin', false, /\.(png|jpe?g|svg)$/));
  }

 return (
    <div className="album-container">
      {location && (
        <p className="location-text">
          PP <span className="plain-text-emoji">👦🏽</span> and YY <span className="plain-text-emoji">👧🏻</span> {location === "Illinois" ? "met" : "were"} here: {location}
        </p>
      )}
      <div className="album-gallery">
        {images.map((image, index) => (
          <div key={index} className="photo-frame"> 
            <img src={image} alt={`Album ${index}`} className="album-image" />
          </div>
        ))}
      </div>
      {/* {location === "Illinois" && <Fireworks />} */}
    </div>
  );
}