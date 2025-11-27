import React from 'react';
import useAuth from '../useHooks/useAuth';
import useRole from '../useHooks/useRole';
import Loading from '../components/Loading';
import Forbidden from '../components/Forbidden';

const AdminPrivate = ({children}) => {
    const { user, loading } = useAuth();
    const { role, isLoading } = useRole();

  if (loading ||isLoading) {
    return <Loading/>
  }
  if(role!=='admin'){
    return <Forbidden/>

  }

    return children

};

export default AdminPrivate;