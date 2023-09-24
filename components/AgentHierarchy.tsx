// components/AgentHierarchy.tsx

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialAgents = [
  { id: '1', name: 'Agent 1', temperature: 0.5, model: 'GPT-3', subprompts: [] },
  { id: '2', name: 'Agent 2', temperature: 0.7, model: 'GPT-4', subprompts: [] },
  // Add more agents
];

const AgentHierarchy: React.FC = () => {
  const [agents, setAgents] = useState(initialAgents);
  const [notifications, setNotifications] = useState<string[]>([]);

  const handleDragEnd = (result: any) => {
    // Logic for reordering agents
  };

  const updateAgent = (id: string, changes: any) => {
    const updatedAgents = agents.map(agent =>
      agent.id === id ? { ...agent, ...changes } : agent
    );
    setAgents(updatedAgents);
    setNotifications([...notifications, `Updated agent ${id}`]);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {agents.map((agent, index) => (
                <Draggable key={agent.id} draggableId={agent.id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {agent.name}
                      <button onClick={() => updateAgent(agent.id, { temperature: 0.9 })}>Set Temp to 0.9</button>
                      <button onClick={() => updateAgent(agent.id, { model: 'New Model' })}>Set Model</button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AgentHierarchy;
