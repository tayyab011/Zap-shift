import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import Navbar from './../Shared/Navbar';

const Root = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;