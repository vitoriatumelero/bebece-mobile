import React from 'react';
import './LocationBar.css';

const LocationBar = ({ location, onChangeLocation }) => {
  return (
    <div className="location-bar">
      <span>
        Você está em: <strong>{location}</strong>
      </span>
      <button onClick={onChangeLocation}>Alterar</button>
    </div>
  );
};

export default LocationBar;
