import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../useHooks/useAuth';
import useAxiosSecure from '../../useHooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
    const useaxiosSecure=useAxiosSecure();
    const {user}=useAuth()
    const {data:parcels=[],refetch} = useQuery({
      queryKey: ["parcels", user?.email, "driver_assigned"],
      queryFn:async()=>{
const res = await useaxiosSecure.get(
  `/parcels/riders?riderEmail=${user?.email}&deliveryStatus=driver_assigned`
);
console.log(res.data)
return res.data
      }
    });
    const handleAcceptDelivery=(parcel,status)=>{
const statusInfo = {
  deliveryStatus: status,
  trackingId: parcel.trackingId,
};
useaxiosSecure.put(`/parcels/${parcel?._id}/status/${user?.email}`, statusInfo).then(res=>{
    if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          title:` parcel status is updated with ${status} `,
          icon: "success",
          showConfirmButton:false,
          timer: 2000,
        });
    }
})
    }
    return (
      <div>
        <h2>parcels pending pickup {parcels.length}</h2>
        <div className=" overflow-x-auto ">
          <table className="table table-zebra ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Customer Name</th>
                <th>Customer District</th>
                <th>Confirm</th>
                <th>Other Actions</th>
              </tr>
            </thead>
            <tbody>
              {parcels?.map((parcel, index) => (
                <tr key={parcel?._id}>
                  <th>{index + 1}</th>
                  <td>{parcel?.parcelName}</td>
                  <td>{parcel?.senderName}</td>
                  <td>{parcel?.senderDistrict}</td>
                  <td
                    className={`flex gap-3 items-center ${
                      parcel.deliveryStatus === "rider_arriving" ||  parcel.deliveryStatus === "parcel_pickedup" ||
                      parcel.deliveryStatus === "parcel_delivered"
                        ? "text-green-400 font-bold lg:mt-3 mt-7 sm:mt-3"
                        : "text-red-500 font-bold  lg:mt-3 mt-7 sm:mt-3"
                    }`}
                  >
                    {parcel.deliveryStatus === "driver_assigned" ? (
                      <>
                        <button
                          onClick={() =>
                            handleAcceptDelivery(parcel, "rider_arriving")
                          }
                          className="btn btn-primary text-white fontsemibold hover:text-black"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() =>
                            handleAcceptDelivery(parcel, "pending-pickup")
                          }
                          className="btn btn-error text-white fontsemibold hover:text-black"
                        >
                          Reject
                        </button>
                      </>
                    ) : parcel.deliveryStatus === "rider_arriving" ||
                      parcel.deliveryStatus === "parcel_pickedup" ||
                      parcel.deliveryStatus === "parcel_delivered" ? (
                      "Accepted"
                    ) : (
                      "Rejected"
                    )}
                  </td>
                  <td className="  ">
                    {parcel.deliveryStatus !== "pending-pickup" ? (
                      <>
                        <button
                          onClick={() =>
                            handleAcceptDelivery(parcel, "parcel_pickedup")
                          }
                          className="btn btn-primary text-white fontsemibold hover:text-black mr-2 mb-2 sm:mb-0"
                        >
                          Mark as Picked up
                        </button>
                        <button
                          onClick={() =>
                            handleAcceptDelivery(parcel, "parcel_delivered")
                          }
                          className="btn btn-primary text-white fontsemibold hover:text-black"
                        >
                          Mark as Delivered
                        </button>
                      </>
                    ) : (
                      "no action for this parcel"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AssignedDeliveries;