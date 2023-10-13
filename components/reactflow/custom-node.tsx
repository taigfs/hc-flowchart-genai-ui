import React, { useCallback } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

interface CustomNodeProps extends NodeProps {
  data: any;
}

export const CustomNode = ({ data, type }: CustomNodeProps) => {
  return (
    <div className='react-flow__node-default'>
      <div className='py-2'>
        <span
          className='absolute top-0 left-0 pl-1 text-gray-600 text-xs'
          style={{ fontSize: '80%' }}
        >
          {type}
        </span>
        {/* Conteúdo do nó */}
        {data.label}
      </div>

      {/* Porta de entrada (input) */}
      <Handle
        type='source'
        position={Position.Top}
        id='a'
        style={{ background: '#555' }}
      />

      <Handle
        type='target'
        position={Position.Bottom}
        id='b'
        style={{ background: '#555' }}
      />
    </div>
  );
};
