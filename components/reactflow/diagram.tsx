'use client';

import React from 'react';
import { useState, useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Node,
  applyEdgeChanges,
  applyNodeChanges,
} from 'reactflow';

const Diagram = () => {
  const initialNodes: Node[] = [
    {
      id: '1',
      position: { x: 0, y: 0 },
      data: { label: 'Hello' },
      type: 'input',
    },
    {
      id: '2',
      position: { x: 100, y: 100 },
      data: { label: 'World' },
    },
  ];

  const initialEdges = [{ id: '1-2', source: '1', target: '2' }];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <ReactFlow nodes={nodes} edges={edges}>
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default Diagram;
