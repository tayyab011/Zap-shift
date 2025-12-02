import React from 'react';
import useRole from '../../useHooks/useRole';
import Loading from '../../components/Loading';
import AdminDashboardHome from './AdminDashboardHome';
import RiderDashboardHome from './RiderDashboardHome';
import UserDashboardHome from './UserDashboardHome';

const DashBoardHome = () => {
    const{role,isLoading}=useRole()
  if (isLoading) {
    return<Loading/>
  }
  if (role ==="admin") {
    return <AdminDashboardHome/>
  }
   if (role === "rider") {
     return <RiderDashboardHome/>;
   }
    if (role === "user") {
      return <UserDashboardHome/>;
    }
};

export default DashBoardHome;