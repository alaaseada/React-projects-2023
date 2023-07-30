import React, { Children, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  // localStorage.getItem('user')
  //   ? JSON.parse(localStorage.getItem('user'))
  //   : null;
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};
export default PrivateRoute;
