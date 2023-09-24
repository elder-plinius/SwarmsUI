// components/AgentInitializer.tsx
import React from 'react';

const AgentInitializer: React.FC = () => {
  return (
    <div>
      <h2>Agent Initialization</h2>
      <button>Load TaskFlow</button>
      <button>Load Prompt</button>
      <button>Upload Data File</button>
    </div>
  );
};

export default AgentInitializer;
