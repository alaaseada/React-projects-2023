import logo from './assets/logo.svg';
import MenuLinks from './MenuLinks';
import SocialLinks from './SocialLinks';
import { GrFormClose } from 'react-icons/gr';

function Sidebar({ show, closeMenu }) {
  return (
    <div className={`sidebar-container ${show ? 'show' : ''}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={closeMenu}>
          <GrFormClose />
        </button>
      </div>
      <MenuLinks />
      <SocialLinks />
    </div>
  );
}

export default Sidebar;
