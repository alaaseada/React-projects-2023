import { social } from './data';
function SocialLinks() {
  return (
    <div className='social-links'>
      <ul>
        {social.map((platform) => {
          return (
            <li key={`socialicon-${platform.id}`}>
              <a href={platform.url}>{platform.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
