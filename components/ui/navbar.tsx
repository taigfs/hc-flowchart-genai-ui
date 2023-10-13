import { UserNav } from './user-nav';

export const Navbar = () => {
  return (
    <div className='border-b'>
      <div className='mx-auto max-w-7xl sm:px-6'>
        <div className='flex h-16 items-center px-4'>
          <img
            className='h-8 w-auto'
            src='https://hookcaptain.s3.sa-east-1.amazonaws.com/hc-logo.png'
            alt='Hook Captain'
          />
          <span className='ml-3 text-lg text-gray-200 font-bold'>
            AI Flowchart Generator
          </span>
          {/* <TeamSwitcher /> */}
          {/* <MainNav className="mx-6" /> */}
          <div className='ml-auto flex items-center space-x-4'>
            {/* <Search /> */}
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
};
