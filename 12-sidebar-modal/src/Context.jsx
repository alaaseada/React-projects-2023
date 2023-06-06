import { useContext, createContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [closeSidebar, setCloseSidebar] = useState(true);
  const [closeModal, setCloseModal] = useState(true);
  const toggle = () => {
    setCloseSidebar(!closeSidebar);
  };

  return (
    <GlobalContext.Provider
      value={{
        closeSidebar,
        closeModal,
        setCloseSidebar,
        setCloseModal,
        toggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
