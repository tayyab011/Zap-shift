import React from 'react';
import useAuth from './../../useHooks/useAuth';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../../useHooks/useAxiosSecure';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
const MyPercels = () => {
const {user}=useAuth();
const axiosSecure=useAxiosSecure()
    const {data:parcels=[],refetch}=useQuery({
        queryKey:['myparcels',user?.email],
        queryFn :async()=>{
 const res = await axiosSecure.get(`/parcels?email=${user?.email}`)

/*  console.log(res.data) */
 return res.data
        }
    })
    const parcelDelete=(id)=>{
console.log(id)
Swal.fire({
  title: "Are You Sure?",
  text: ` You Wont be able to undo this`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Delete it!",
}).then((result) => {
  if (result.isConfirmed) {
axiosSecure.delete(`/parcels/${id}`).then(res=>{
    if (res.data.deletedCount) {
        refetch()
        Swal.fire({
          title: "Deleted",
          text: "Your parcel has been Deleted ",
          icon: "success",
        });
    }
}).catch(err=>{
    console.log(err)
})


  }
});
    }
    return (
      <div>
        all percels {parcels.length}
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Cost</th>
                <th>Payment </th>
          
               
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {parcels?.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}</th>
                  <td>{parcel?.parcelName}</td>
                  <td>{parcel?.cost}</td>
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
                  <button className="btn  mr-3">
                    <span>
                      <FaEye />
                    </span>
                  </button>
                  <button className="btn btn-outline btn-success mr-3">
                    <span>
                      <FaEdit />
                    </span>
                  </button>
                  <button
                    onClick={() => parcelDelete(parcel._id)}
                    className="btn btn-outline btn-error "
                  >
                    <span>
                      <FaTrash />
                    </span>
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyPercels;