/* eslint-disable react/prop-types */
function Clearer(props) {
  return (
    <button type="button" className="btn btn-block" onClick={props.clearList}>
      clear all
    </button>
  )
}

export default Clearer
