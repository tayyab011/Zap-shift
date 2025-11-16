import React from 'react';
import useAuth from '../useHooks/useAuth';
import Loading from '../components/Loading';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()

    if (loading) {
        return <Loading/>
    }else if(!user){
        return <Navigate to="/login"/>
    }else{
 return children
    }
   
};

export default PrivateRoute;