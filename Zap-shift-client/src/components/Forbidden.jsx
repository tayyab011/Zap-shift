import React from "react";
import { Link } from "react-router";
import { FaBan } from "react-icons/fa";

const Forbidden = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
      <div className="p-8 rounded-2xl shadow-xl bg-base-100 max-w-md">
        <FaBan className="text-6xl text-red-500 mx-auto mb-4" />

        <h1 className="text-4xl font-bold text-error mb-3">403 Forbidden</h1>

        <p className="text-gray-600 text-lg mb-6">
          You do not have permission to access this page.
          <br />
          Please login with the correct account or contact support.
        </p>

        <Link to="/login" className="btn btn-error text-white btn-wide">
          Go to Login
        </Link>

        <div className="mt-4">
          <Link to="/" className="link link-primary">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
