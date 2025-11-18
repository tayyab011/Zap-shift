import React from 'react';
import useAuth from './../../useHooks/useAuth';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../../useHooks/useAxiosSecure';
const MyPercels = () => {
const {user}=useAuth();
const axiosSecure=useAxiosSecure()
    const {data:parcels=[]}=useQuery({
        queryKey:['myparcels',user.email],
        queryFn :async()=>{
 const res = await axiosSecure.get(`/parcels?email=${user?.email}`)

 console.log(res.data)
 return res.data
        }
    })
    return (
        <div>
            all percels {parcels.length}
        </div>
    );
};

export default MyPercels;