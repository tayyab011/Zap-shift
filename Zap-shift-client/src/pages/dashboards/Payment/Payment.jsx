import { useQueries, useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../useHooks/useAxiosSecure';
import Loading from '../../../components/Loading';

const Payment = () => {
    const {id}=useParams();
 /*    console.log(id) */
  const axiosSecure=useAxiosSecure()
 /*    console.log(id) */
    const { data: parcel } = useQuery({
      queryKey: ["parcels", id],
      queryFn: async () => {
        const res = await axiosSecure.get(`/parcels/${id}`);
  /*       console.log(res); */
        return res.data;
      },
    });
   const handlePayment=async ()=>{
const paymentInfo = {
  cost: parcel.cost,
  parcelId: parcel._id,
  senderEmail: parcel.senderEmail,
  parcelName: parcel.parcelName,
  trackingId: parcel.trackingId,
};
const res=await axiosSecure.post('/create-checkout-session',paymentInfo)
console.log(res.data)
window.location.href = res.data.url
   }
      return (
        <div>
          <h1>
            Please Pay {parcel?.cost} for {parcel?.parcelName}
          </h1>
          <button onClick={handlePayment} className="btn btn-success ">
            pay
          </button>
        </div>
      );

};

export default Payment;