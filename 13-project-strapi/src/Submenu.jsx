import { useGlobalContext } from './Context';
import sublinks from './data';

function Submenu() {
  const { openedPageId, isSubmenuOpen, closeSubmenu } = useGlobalContext();
  const openedItem =
    sublinks.find((item) => item.pageId === openedPageId) || null;

  return (
    <div
      className={`submenu-panel ${isSubmenuOpen ? 'submenu-show' : ''}`}
      onMouseLeave={closeSubmenu}
    >
      {openedItem && (
        <div className='submenu-wrapper'>
          <h5>{openedItem.page}</h5>
          <div
            className='submenu-links'
            style={{
              gridTemplateColumns:
                openedItem.links.length > 3 ? 'repeat(2, 1fr)' : '1fr',
            }}
          >
            {openedItem.links?.map((item) => {
              return (
                <a key={item.id} className='submenu-link' href={item.url}>
                  {item.icon}
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Submenu;
