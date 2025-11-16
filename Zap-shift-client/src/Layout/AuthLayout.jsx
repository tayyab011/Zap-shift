import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../components/Logo';

const AuthLayout = () => {
    return (
      <div className="w-11/12 mx-auto">
        <Logo></Logo>
        <div className="md:flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <Outlet />
          </div>

          <div className="flex-1">
            
            <img src="/authImage.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default AuthLayout;