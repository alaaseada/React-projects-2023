import { GrFormClose } from 'react-icons/gr';

function Modal({ show, closeModal }) {
  return (
    <div className={`modal-overlay ${show ? 'show-modal' : ''}`}>
      <div className='modal-container'>
        <h3>Modal content</h3>
        <button className='close-btn modal-btn' onClick={closeModal}>
          <GrFormClose />
        </button>
      </div>
    </div>
  );
}

export default Modal;
