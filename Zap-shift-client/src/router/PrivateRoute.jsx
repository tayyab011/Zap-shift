import React from 'react';
import useAuth from '../useHooks/useAuth';
import Loading from '../components/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
const location=useLocation()
    if (loading) {
        return <Loading/>
    }else if(!user){
        return <Navigate state={location.pathname} to="/login" />;
    }else{
 return children
    }
   
};

export default PrivateRoute;