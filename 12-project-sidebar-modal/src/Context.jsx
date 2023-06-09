import { useContext, createContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <GlobalContext.Provider
      value={{
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
        toggleSidebar,
        isSidebarOpen,
        isModalOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
