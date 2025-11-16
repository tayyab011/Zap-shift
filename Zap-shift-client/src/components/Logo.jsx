import React from 'react';

const Logo = () => {
    return (
      <div className="flex items-end">
        <img className="md:h-12 h-10" src="/logo.png" alt="" />
        <h3 className="font-bold -ms-2.5 md:text-3xl text-xl">ZapShift</h3>
      </div>
    );
};

export default Logo;