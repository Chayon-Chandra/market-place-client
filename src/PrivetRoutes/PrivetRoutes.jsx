import React, { use } from 'react';
import { AuthConText } from '../Context/AuthConText';
import { Navigate, useLocation } from 'react-router';

const PrivetRoutes = ({children}) => {
    const {user, loading} = use(AuthConText);
    const location = useLocation();
    if(loading){
          return <span className="loading loading-spinner text-success"></span>
    };
    if(user){
        return children;
    }

    return (
        <div>
            <Navigate state={location.pathname} to ="/login"></Navigate>
        </div>
    );
};

export default PrivetRoutes;