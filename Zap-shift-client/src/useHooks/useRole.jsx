import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
    const {user}=useAuth();
    const useaxiosSecure=useAxiosSecure();
    const { isLoading, data: role = "user" } = useQuery({
      queryKey: ["user-role"],
      queryFn: async () => {
        const res = await useaxiosSecure.get(`/users/${user?.email}/role`);
        console.log("use role", res.data);
        return res.data.role;
      },
    });
    return {role,isLoading};
};

export default useRole;