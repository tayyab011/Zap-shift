import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
      <Link to="/" className="flex items-end">
        <img className="md:h-12 h-10" src="/logo.png" alt="" />
        <h3 className="font-bold -ms-2.5 md:text-3xl text-xl">ZapShift</h3>
      </Link>
    );
};

export default Logo;