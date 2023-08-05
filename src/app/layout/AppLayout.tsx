import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className='h-[100vh]'>
      <Outlet />
    </div>
  );
};

export default AppLayout;
