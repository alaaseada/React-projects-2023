import { useRef } from 'react';
import { links } from './data';

function Links({ isExpanded }) {
  const linksRef = useRef(null);

  const links_style = {
    height: isExpanded
      ? `${linksRef.current?.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <div className='links-container' style={links_style}>
      <ul className='links' ref={linksRef}>
        {links.map((link) => {
          return (
            <li key={`icon-${link.id}`}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Links;
