import { social } from './data';

function SocialLinks() {
  return (
    <ul className='social-icons'>
      {social.map((icon) => {
        return (
          <li key={`icon-${icon.id}`}>
            <a href={icon.url}>{icon.icon}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
