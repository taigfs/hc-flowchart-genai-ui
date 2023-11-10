'use client';

import { Navbar } from '@/components/ui/navbar';
import Diagram from '@/components/reactflow/diagram';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useCompletion } from 'ai/react';
import { useSession } from 'next-auth/react';

export default function Protected() {
  const {
    completion: mermaidCode,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useCompletion();

  const session = useSession();
  const user = session?.data?.user;

  if (user?.email !== process.env.ALLOWED_EMAIL) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='text-3xl font-bold'>403</div>
        <div className='text-xl'>Forbidden</div>
      </div>
    );
  }

  const Loading = () => (
    <div className='relative h-full'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        Loading...
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className='mx-auto max-w-7xl px-1 sm:px-6 lg:px-8 flex py-3'
        style={{ height: 'calc(100% - 110px)' }}
      >
        <div className='grid grid-cols-3 gap-4 w-full h-full'>
          <div className='bg-gray-900 p-4 rounded col-span-1'>
            <div className='flex flex-col h-full'>
              <Textarea
                placeholder='Type here...'
                className='flex-grow rounded-b-none focus:outline-none'
                value={input}
                onChange={handleInputChange}
              />
              <Button className='rounded-t-none' type='submit'>
                Submit
              </Button>
            </div>
          </div>
          <div className='bg-gray-900 p-4 rounded col-span-2'>
            {isLoading ? (
              <Loading />
            ) : (
              <Diagram mermaidCode={mermaidCode} isComplete={!isLoading} />
            )}
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
