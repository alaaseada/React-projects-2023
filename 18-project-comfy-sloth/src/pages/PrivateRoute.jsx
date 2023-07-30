import React, { Children, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children }) => {
  const { loggedInUser } = useUserContext();
  console.log(loggedInUser);
  if (!loggedInUser) {
    return <Navigate to='/' />;
  }
  return children;
};
export default PrivateRoute;
