// components/Configuration.tsx
import React, { useState } from 'react';

const Configuration: React.FC = () => {
  const [temperature, setTemperature] = useState(0.5);
  const [modelType, setModelType] = useState('Type1');

  const handleTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(parseFloat(event.target.value));
  };

  const handleModelTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setModelType(event.target.value);
  };

  return (
    <div>
      <h2>Configuration</h2>
      <label>
        Temperature:
        <input type="range" min="0" max="1" step="0.01" value={temperature} onChange={handleTemperatureChange} />
      </label>
      <label>
        Model Type:
        <select value={modelType} onChange={handleModelTypeChange}>
          <option value="Type1">Type1</option>
          <option value="Type2">Type2</option>
        </select>
      </label>
    </div>
  );
};

export default Configuration;
