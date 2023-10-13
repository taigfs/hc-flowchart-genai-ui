'use client';

import { Navbar } from '@/components/ui/navbar';
import Diagram from '@/components/reactflow/diagram';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useCompletion } from 'ai/react';

export default function Protected() {
  const { completion, input, handleInputChange, handleSubmit } =
    useCompletion();
  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className='mx-auto max-w-7xl px-1 sm:px-6 lg:px-8 flex py-3'
        style={{ height: 'calc(100% - 110px)' }}
      >
        <div className='grid grid-cols-2 gap-4 w-full h-full'>
          <div className='bg-gray-900 p-4 rounded'>
            <div className='flex flex-col h-full'>
              <Textarea
                placeholder='Type here...'
                className='flex-grow rounded-b-none focus:outline-none'
                value={input}
                onChange={handleInputChange}
              />
              <div>{completion}</div>
              <Button className='rounded-t-none' type='submit'>
                Submit
              </Button>
            </div>
          </div>
          <div className='bg-gray-900 p-4 rounded'>
            <Diagram />
          </div>
        </div>
      </form>
      <div className='text-center text-gray-500 text-sm pt-2'>
        Created by{' '}
        <a href='https://hookcaptain.com' className='underline'>
          HookCaptain
        </a>
        .
      </div>
    </>
  );
}
