import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { userName, user_photoURL, reviews, user_email } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-md p-6 rounded-xl border border-gray-200">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-teal-300 mb-4" />

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed mb-6">{reviews}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={user_photoURL}
          className="w-12 h-12 bg-teal-800 rounded-full"
        ></img>

        <div>
          <h3 className="font-semibold text-teal-900 text-lg">{userName}</h3>
          <p className="text-sm text-gray-500">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;