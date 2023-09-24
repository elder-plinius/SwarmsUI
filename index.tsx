// pages/index.tsx
import React from 'react';
import AgentInitializer from '../components/AgentInitializer';
import ApiKeyManager from '../components/ApiKeyManager';
import Configuration from '../components/Configuration';
import FilespaceVisualizer from '../components/FilespaceVisualizer';
import AgentTaskVisualizer from '../components/AgentTaskVisualizer';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Multi-Agent Autonomous AI System</h1>
      <AgentInitializer />
      <ApiKeyManager />
      <Configuration />
      <FilespaceVisualizer />
      <AgentTaskVisualizer />
    </div>
  );
};

export default HomePage;
