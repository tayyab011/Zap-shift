import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const PaymentCancelled = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="max-w-md w-full bg-base-100 shadow-xl rounded-2xl p-8 text-center">
          {/* Cancel Icon */}
          <div className="flex justify-center mb-4">
            <FaTimesCircle className="text-red-500 text-6xl animate-pulse" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-red-600 mb-2">
            Payment Cancelled
          </h1>

          {/* Subtitle */}
          <p className="text-base-content/70 mb-6">
            Your payment could not be completed. Please try again or contact
            support if the issue persists.
          </p>

          {/* Button */}
          <a href="/" className="btn btn-error w-full rounded-full">
            Go to Home
          </a>
        </div>
      </div>
    );
};

export default PaymentCancelled;