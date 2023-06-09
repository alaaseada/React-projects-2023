import { links } from './data';

function MenuLinks() {
  return (
    <div className='menu-links'>
      <ul>
        {links.map((link) => {
          return (
            <li key={`menulink-${link.id}`}>
              <a href={link.url}>
                {' '}
                {link.icon} {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuLinks;
