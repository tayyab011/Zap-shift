import React from 'react';
import Logo from '../components/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../useHooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const link = (
    <>
      <NavLink
        className="hover:bg-green-500 rounded-md px-4 py-2"
        to="/services"
      >
        Services
      </NavLink>
      <NavLink
        className="hover:bg-green-500 rounded-md px-4 py-2"
        to="/coverage"
      >
        Coverage
      </NavLink>
      <NavLink
        className="hover:bg-green-500 rounded-md px-4 py-2"
        to="/aboutus"
      >
        About Us
      </NavLink>
      <NavLink
        className="hover:bg-green-500 rounded-md px-4 py-2"
        to="/sendparcel"
      >
        Send Parcel
      </NavLink>
      <NavLink
        className="hover:bg-green-500 rounded-md px-4 py-2"
        to="/pricing"
      >
        Pricing
      </NavLink>
      <NavLink className="hover:bg-green-500 rounded-md px-4 py-2" to="/rider">
        Be a Rider
      </NavLink>

      {user && (
        <NavLink
          to="/dashboard/mypercels"
          className="hover:bg-green-500 rounded-md px-4 py-2"
         
        >
          My Percel
        </NavLink>
      )}
    </>
  );
    return (
      <div className="navbar bg-base-100 shadow-sm items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-green-100 rounded-box min-h-full z-1 mt-3 text-center w-52 p-5 shadow space-y-3"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl  items-center">
            <Logo />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex  items-center">
          <ul className="menu menu-horizontal ">{link}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <Link onClick={logout} className="btn">
              Logout
            </Link>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
          <Link to="/rider" className="btn">
            Be A Rider
          </Link>
        </div>
      </div>
    );
};

export default Navbar;