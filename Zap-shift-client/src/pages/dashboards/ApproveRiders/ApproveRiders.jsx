import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../useHooks/useAxiosSecure';
import { RiUserAddFill } from "react-icons/ri";
import { HiUserRemove } from "react-icons/hi";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';


const ApproveRiders = () => {

    const axiossecure=useAxiosSecure()
    const {data :riders=[],refetch}=useQuery({
        queryKey:['riders','pending'],
        queryFn:async()=>{
const res = await axiossecure.get("/riders");
console.log(res)
console.log(res.data)
return res.data
        }
    })
     const updatedStatus = async (rider, data) => {
       const res = await axiossecure.put(`/riders/${rider._id}`, data);
       if (res.data.modifiedCount) {
         refetch();
         Swal.fire({
           position: "top-end",
           title: "order confirmed",
           text: "Your Role updeted successfully",
           icon: "success",
           timer: 2000,
         });
       }
     };
     const handleApproval = (rider) => {
       const data = { status: "approved", email: rider.email };
       updatedStatus(rider, data);
     };
     const handleRemovel = (rider) => {
       const data = { status: "rejected", email: rider.email };
       updatedStatus(rider, data);
     };
    return (
      <div>
        riders {riders.length}
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>District </th>
              <th>Status</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {riders?.map((riders, index) => (
              <tr key={riders._id}>
                <th>{index + 1}</th>
                <td>{riders?.name}</td>
                <td>{riders?.email}</td>
                <td>{riders?.district}</td>

                <td
                  className={` font-bold ${
                    riders.status === "approved"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {riders?.status}
                </td>
                <td>{riders?.workStatus}</td>
                <td className="flex gap-3">
                  <button className="btn">
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleApproval(riders)}
                    className="btn"
                  >
                    <RiUserAddFill />
                  </button>
                  <button onClick={() => handleRemovel(riders)} className="btn">
                    <HiUserRemove />
                  </button>
                  <button className="btn hover:text-red-500">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
      
      </div>
    );
};

export default ApproveRiders;