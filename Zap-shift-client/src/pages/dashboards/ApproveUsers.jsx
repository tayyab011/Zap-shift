import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../useHooks/useAxiosSecure';
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineUserRemove } from "react-icons/hi";
import Swal from 'sweetalert2';

const ApproveUsers = () => {
  const [searchtext,setSearchtext]=useState([])
    const useaxiosSecure=useAxiosSecure()
    const {data :users=[],refetch} = useQuery({
      queryKey: ["user-management",searchtext],
      queryFn:async ()=>{
          const res = await useaxiosSecure.get(`/users?searchText=${searchtext}`);
          return res.data
      }
    });
    const addAdmin=async (user)=>{
  const role ={role:"admin"};
 await useaxiosSecure.put(`/users/${user._id}`, role).then(res=>{
  console.log(res)
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
 })
    }

     const removeAdmin = async (user) => {
       const role = { role: "user" };
       await useaxiosSecure.put(`/users/${user._id}`, role).then((res) => {
         console.log(res);
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
       });
     };
    return (
      <div>
      
        <h1 className='font-bold text-2xl'> users {users.length}</h1>
        <input
        onChange={(e)=>setSearchtext(e.target.value)}
          type="text"
          placeholder="Success"
          className="input input-success"
        />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>email</th>
                <th>Admin Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={user.photoURL} alt={user.displayName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.displayName} </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.email}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user.role}
                    </span>
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      <button
                        onClick={() => removeAdmin(user)}
                        className={`btn ${
                          user.role === "admin" && "bg-orange-500"
                        }`}
                      >
                        <HiOutlineUserRemove />
                      </button>
                    ) : (
                      <button
                        onClick={() => addAdmin(user)}
                        className={`btn ${
                          user.role != "admin" && "bg-green-500"
                        }`}
                      >
                        <AiOutlineUserAdd />
                      </button>
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

export default ApproveUsers;