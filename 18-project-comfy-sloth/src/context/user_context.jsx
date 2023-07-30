import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    if (user) {
      setLoggedInUser(user);
      // localStorage.setItem('user', JSON.stringify(user));
    } else {
      setLoggedInUser(null);
      // localStorage.setItem('user', JSON.stringify(null));
    }
  }, [user]);

  const logUserIn = () => {
    loginWithRedirect();
  };

  const logUserOut = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <UserContext.Provider
      value={{
        logUserIn,
        logUserOut,
        loggedInUser,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
