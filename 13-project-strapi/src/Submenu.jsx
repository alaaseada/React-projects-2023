import { useGlobalContext } from './Context';
import sublinks from './data';

function Submenu() {
  const { openedPageId, isSubmenuOpen, closeSubmenu } = useGlobalContext();
  return (
    <div
      className={`submenu-panel ${isSubmenuOpen ? 'submenu-show' : ''}`}
      onMouseLeave={closeSubmenu}
    >
      {sublinks.map((item) => {
        if (item.pageId === openedPageId) {
          return (
            <div className='submenu-wrapper'>
              <h5>{item.page}</h5>
              <div className='submenu-links'>
                {item.links.map((item) => {
                  return (
                    <a key={item.id} className='submenu-link' href={item.url}>
                      {item.icon}
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Submenu;
