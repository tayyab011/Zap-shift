import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../useHooks/useAxiosSecure";
import { useState } from "react";

const PaymentSuccess = () => {
  const axiossecure=useAxiosSecure()
  const [paymentinfo,setPaymentinfo]=useState({})
  const [searchParams] = useSearchParams(); //query string dhorar jonne
/*   console.log(searchParams) */
  const sessionId = searchParams.get('session_id')
/*   console.log(sessionId) */
  useEffect(() => {
    if (sessionId) {
      axiossecure
        .patch(`/paymentSuccess?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data)
         setPaymentinfo({
           transaction: res.data.transaction,
           trackingId: res.data.trackingId,
         }); 
        });
    }
  }, [sessionId]);
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
        <p className="text-base-content/70 mb-6">
          Yoyr transection id{" "}
           : <span className="text-xs font-bold text-green-400">{paymentinfo?.transaction}</span>
        </p>
        <p className="text-base-content/70 mb-6">
          Yoyr traking id : <span className="text-xs font-bold text-green-400">{paymentinfo?.trackingId}</span>
        </p>

        {/* Button */}
        <a href="/" className="btn btn-primary text-black hover:font-bold w-full rounded-full">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
