import logo from './assets/logo.svg';
import MenuLinks from './MenuLinks';
import SocialLinks from './SocialLinks';
import { GrFormClose } from 'react-icons/gr';
import { useGlobalContext } from './Context';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={`sidebar-container ${isSidebarOpen ? 'show' : ''}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <GrFormClose />
        </button>
      </div>
      <MenuLinks />
      <SocialLinks />
    </div>
  );
}

export default Sidebar;
