'use client';

import React, { useMemo } from 'react';
import { useState, useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  EdgeChange,
  Node,
  NodeChange,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  Connection,
  Edge,
} from 'reactflow';
import { CustomNode } from './custom-node';

const Diagram = () => {
  const initialNodes: Node[] = [
    {
      id: '1',
      position: { x: 0, y: 0 },
      data: { label: 'Start', value: 123 },
      type: 'startEvent',
    },
    {
      id: '2',
      position: { x: 100, y: 100 },
      data: { label: 'Run' },
      type: 'activity',
    },
    {
      id: '3',
      position: { x: 200, y: 200 },
      data: { label: 'End' },
      type: 'endEvent',
    },
  ];

  const initialEdges: Edge[] = [
    // { id: '1-2', source: '1', target: '2' }
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const nodeTypes = useMemo(
    () => ({
      startEvent: CustomNode,
      endEvent: CustomNode,
      activity: CustomNode,
    }),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default Diagram;
