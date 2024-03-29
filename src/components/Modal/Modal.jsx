import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ModalStyles } from './Modal.styled';
import { IoClose } from 'react-icons/io5';

const modalRoot = document.getElementById('modal-backdrop');

export const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    function onEsc({ code }) {
      if (code !== 'Escape') {
        return;
      }

      closeModal(false);
    }
    document.body.style.overflow = 'hidden';
    const paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';

    document.body.style.paddingRight = paddingOffSet;
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, [closeModal]);

  const onBackdrop = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }
    closeModal();
  };

  return createPortal(
    <ModalStyles onClick={onBackdrop}>
      <div className="modal">
        <button
          type="button"
          className="close-btn"
          onClick={() => closeModal(false)}
        >
          <IoClose className="close-modal" size={24} />
        </button>
        {children}
      </div>
    </ModalStyles>,
    modalRoot
  );
};
