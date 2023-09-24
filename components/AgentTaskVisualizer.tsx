// components/AgentTaskVisualizer.tsx
import React, { useState } from 'react';

const AgentTaskVisualizer: React.FC = () => {
  const [agents, setAgents] = useState<string[]>([]);

  const addAgent = () => {
    setAgents([...agents, '🤖']);
  };

  const removeAgent = () => {
    const newAgents = [...agents];
    newAgents.pop();
    setAgents(newAgents);
  };

  return (
    <div>
      <h2>Agent Task Visualizer</h2>
      <button onClick={addAgent}>Add Agent</button>
      <button onClick={removeAgent}>Remove Agent</button>
      <ul>
        {agents.map((agent, index) => (
          <li key={index}>{agent}</li>
        ))}
      </ul>
    </div>
  );
};

export default AgentTaskVisualizer;
