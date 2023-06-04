import logo from './assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header({ onMenuClick }) {
  const handleMenuButtonClick = () => {
    onMenuClick();
  };
  return (
    <div className='nav-header'>
      <img src={logo} alt='logo' className='logo' />
      <button className='nav-toggle' onClick={handleMenuButtonClick}>
        <GiHamburgerMenu />
      </button>
    </div>
  );
}

export default Header;
