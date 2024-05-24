// src/App.js
import React from 'react';
import './App.css';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="console-container">
          Our Travel
        </div>
      </header>
      <main>
        <MapComponent />
      </main>
    </div>
  );
}

export default App;
