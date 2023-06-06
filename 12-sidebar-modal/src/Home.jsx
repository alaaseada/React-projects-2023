import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';

export function Home() {
  const { toggleSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className='menu-btn' onClick={toggleSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        Show modal
      </button>
    </main>
  );
}
