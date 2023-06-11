import { useGlobalContext } from './Context';
import sublinks from './data';

function Submenu() {
  const { openedPageId, isSubmenuOpen } = useGlobalContext();
  return (
    <div className={`submenu-panel ${isSubmenuOpen ? 'submenu-show' : ''}`}>
      {sublinks.map((item) => {
        if (item.pageId === openedPageId) {
          console.log(item);
          return (
            <ul key={item.pageId}>
              {item.links.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.url}>
                      {item.icon}
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          );
        }
      })}
    </div>
  );
}

export default Submenu;
