import React from 'react';
import useAuth from '../../../useHooks/useAuth';
import useAxiosSecure from '../../../useHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const {data:payments=[]}=useQuery({
        queryKey:['payments',user.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`payment?email=${user?.email}`)
            return res.data
        }
    })

    return (
      <div>
        payment history {payments.length}
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Time</th>
                <th>Transection Id </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments?.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}</th>
                  <td>{parcel?.parcelName}</td>
                  <td>{parcel?.amount}</td>
                  <td>{new Date(parcel?.paidAt).toLocaleString()}</td>
                  <td>{parcel?.transaction}</td>
                  <td>
                    {parcel?.paymentStatus === "paid" ? (
                      <span className="text-green-400">paid</span>
                    ) : (
                      <span>
                        <Link
                          to={`/dashboard/payment/${parcel?._id}`}
                          className="btn btn-primary bg-orange-300 border-0 shadow-none text-black"
                        >
                          Pay
                        </Link>
                      </span>
                    )}
                  </td>
                  <td>{parcel?.deliveryStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PaymentHistory;