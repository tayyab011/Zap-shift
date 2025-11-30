import React from 'react';
import useAuth from '../useHooks/useAuth';
import useRole from '../useHooks/useRole';
import Loading from '../components/Loading';

const RiderPrivate = ({children}) => {
    const { user, loading } = useAuth();
    const { role, isLoading } = useRole();

    if (loading || isLoading || !user) {
      return <Loading />;
    }
    if (role !== "rider") {
      return <Forbidden />;
    }

    return children;
};

export default RiderPrivate;