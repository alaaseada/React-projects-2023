import { GrFormClose } from 'react-icons/gr';
import { useGlobalContext } from './Context';

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${isModalOpen ? 'show-modal' : ''}`}>
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
