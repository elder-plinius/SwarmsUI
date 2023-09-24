// components/ApiKeyManager.tsx
import React, { useState } from 'react';

const ApiKeyManager: React.FC = () => {
  const [apiKey, setApiKey] = useState('');

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  return (
    <div>
      <h2>API Keys</h2>
      <input type="text" value={apiKey} onChange={handleApiKeyChange} />
      <button>API Key Manager</button>
    </div>
  );
};

export default ApiKeyManager;
