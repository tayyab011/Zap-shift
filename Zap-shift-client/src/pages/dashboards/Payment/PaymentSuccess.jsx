import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../useHooks/useAxiosSecure";

const PaymentSuccess = () => {
  const axiosSecure=useAxiosSecure()
  const [searchParams] = useSearchParams();
  console.log(searchParams)
  const sessionId = searchParams.get('session_id')
  console.log(sessionId)
  useEffect(()=>{
if (sessionId) {
  axiosSecure.patch(`/paymentSuccess?session_id=${sessionId}`).then(res=>
  {
    console.log(res.data)
  }
  )
}
  },[sessionId])
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md w-full bg-base-100 shadow-xl rounded-2xl p-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl animate-bounce" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Payment Successful!
        </h1>

        {/* Subtitle */}
        <p className="text-base-content/70 mb-6">
          Your payment has been completed successfully. Thank you for choosing
          our service!
        </p>

        {/* Button */}
        <a href="/" className="btn btn-primary w-full rounded-full">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
