import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SingleColor({ color }) {
  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(color.hexString());
        toast.success('The color has been copied to clipboard!');
      } catch (err) {
        toast.error(`An error occurred! ${err}`);
      }
    } else {
      toast.error('Clipboard is unavailable now.');
    }
  };

  return (
    <article
      onClick={copyToClipboard}
      className={`color ${color.type === 'tint' ? 'false' : 'color-light'}`}
      style={{ backgroundColor: `rgb(${color.rgb.join(',')})` }}
    >
      <p className='percent-value'>{color.weight}%</p>
      <p className='color-value'>{color.hexString()}</p>
    </article>
  );
}

export default SingleColor;
