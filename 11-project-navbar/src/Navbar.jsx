import { useState } from 'react';
import Header from './Header';
import Links from './Links';
import SocialLinks from './SocialLinks';

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const switchMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav>
      <div className='nav-center'>
        <Header onMenuClick={switchMenu} />
        <Links isExpanded={isExpanded} />
        <SocialLinks />
      </div>
    </nav>
  );
}

export default Navbar;
