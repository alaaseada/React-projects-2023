import { useGlobalContext } from './Context';
import sublinks from './data';
import { FaTimes } from 'react-icons/fa';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'sidebar-show' : ''}`}>
      <div className='sidebar-container'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item) => {
            return (
              <article key={item.pageId}>
                <p className='title'>{item.page}</p>
                <div className='sidebar-sublinks'>
                  {item.links.map((link) => {
                    return (
                      <a key={link.id} href={link.url}>
                        {link.icon}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
