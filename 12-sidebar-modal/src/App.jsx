import Sidebar from './Sidebar';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeMenu = () => {
    setShowSidebar(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleMenu = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <main>
        <button className='menu-btn' onClick={toggleMenu}>
          <FaBars />
        </button>
        <button className='btn' onClick={() => setShowModal(true)}>
          Show modal
        </button>
      </main>
      <Modal show={showModal} closeModal={closeModal} />
      <Sidebar show={showSidebar} closeMenu={closeMenu} />
    </>
  );
}

export default App;
