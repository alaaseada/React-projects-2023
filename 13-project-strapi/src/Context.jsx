import { useContext, createContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [openedPageId, setOpenedPageId] = useState(null);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const openSubmenu = (id) => {
    setIsSubmenuOpen(true);
    setOpenedPageId(id);
  };
  const closeSubmenu = () => setIsSubmenuOpen(false);

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        openedPageId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
