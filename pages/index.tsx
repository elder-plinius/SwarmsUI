// pages/index.tsx

import React from 'react';
import AgentHierarchy from '../components/AgentHierarchy';
import ApiKeyManager from '../components/ApiKeyManager';
import Configuration from '../components/Configuration';
import FilespaceVisualizer from '../components/FilespaceVisualizer';
import AgentTaskVisualizer from '../components/AgentTaskVisualizer';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Multi-Agent Autonomous AI System</h1>
      
      <div>
        <h2>Agent Initialization</h2>
        <AgentHierarchy />
      </div>
      
      <div>
        <h2>API Key Manager</h2>
        <ApiKeyManager />
      </div>

      <div>
        <h2>Configuration</h2>
        <Configuration />
      </div>
      
      <div>
        <h2>Filespace Visualizer</h2>
        <FilespaceVisualizer />
      </div>

      <div>
        <h2>Agent Task Visualizer</h2>
        <AgentTaskVisualizer />
      </div>

      {/* Add other components and layout here as needed */}
    </div>
  );
};

export default HomePage;
