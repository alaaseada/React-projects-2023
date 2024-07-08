import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

const ColorBox = ({ color }) => {
  const { rgb, weight, type } = color

  const copyColor = () => {
    toast.success('Copied to Clipboard!!')
  }

  return (
    <CopyToClipboard onCopy={copyColor} text={`#${color.hex}`}>
      <article
        className={`color ${type === 'tint' ? 'false' : 'color-light'}`}
        style={{ backgroundColor: `rgb(${rgb.join(',')})` }}
      >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{`#${color.hex}`}</p>
      </article>
    </CopyToClipboard>
  )
}
export default ColorBox
