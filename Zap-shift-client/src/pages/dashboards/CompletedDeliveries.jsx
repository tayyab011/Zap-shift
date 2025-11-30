import React from 'react';
import useAuth from '../../useHooks/useAuth';
import useAxiosSecure from '../../useHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompletedDeliveries = () => {
     const useaxiosSecure = useAxiosSecure();
     const { user } = useAuth();
     const { data: parcels = [], refetch } = useQuery({
       queryKey: ["parcels", user?.email, "driver_assigned"],
       queryFn: async () => {
         const res = await useaxiosSecure.get(
           `/parcels/riders?riderEmail=${user?.email}&deliveryStatus=parcel_delivered`
         );
         console.log(res.data);
         return res.data;
       },
     });
     const calculatePayout =(parcel)=>{
        if (parcel.senderDistrict === parcel?.reciverDistrict) {
            return  parcel.cost *0.8
        }else{
            return parcel.cost * 0.6;
        }
     }
    return (
      <div>
        cd {parcels.length}
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Customer Name</th>
              <th>Pickedup District</th>
              <th>cost</th>
              <th>payout</th>
            </tr>
          </thead>
          <tbody>
            {parcels?.map((parcel, index) => (
              <tr key={parcel?._id}>
                <th>{index + 1}</th>
                <td>{parcel?.parcelName}</td>
                <td>{parcel?.senderName}</td>
                <td>{parcel?.senderDistrict}</td>
                <td>{parcel?.cost}</td>

                <td>{calculatePayout(parcel)}</td>
                <td>
                  <button className='btn btn-primary text-black'>cashout</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default CompletedDeliveries;