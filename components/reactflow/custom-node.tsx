import React, { useCallback } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

interface CustomNodeProps extends NodeProps {
  data: any;
}

export const CustomNode = ({ data, type }: CustomNodeProps) => {
  if (type === 'startEvent') {
    return (
      <div className='w-12 h-12 bg-white border-2 border-black rounded-full relative'>
        <Handle
          type='source'
          position={Position.Bottom}
          id='b'
          style={{ background: '#555' }}
        />
      </div>
    );
  }

  if (type === 'endEvent') {
    return (
      <div className='w-12 h-12 bg-white border-2 border-black rounded-full relative'>
        <div className='w-7 h-7 bg-black rounded-full relative m-2'></div>
        <Handle
          type='target'
          position={Position.Top}
          id='a'
          style={{ background: '#555' }}
        />

        <Handle
          type='source'
          position={Position.Bottom}
          id='b'
          style={{ background: '#555' }}
        />
      </div>
    );
  }
  return (
    <div className='react-flow__node-default'>
      <div className='py-2'>
        <span
          className='absolute top-0 left-0 pl-1 text-gray-600 text-xs'
          style={{ fontSize: '80%' }}
        >
          {type}
        </span>
        {data.label}
      </div>
      <Handle
        type='target'
        position={Position.Top}
        id='a'
        style={{ background: '#555' }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id='b'
        style={{ background: '#555' }}
      />
      <Handle
        type='target'
        position={Position.Left}
        id='c'
        style={{ background: '#555' }}
      />
      <Handle
        type='target'
        position={Position.Right}
        id='d'
        style={{ background: '#555' }}
      />
    </div>
  );
};
