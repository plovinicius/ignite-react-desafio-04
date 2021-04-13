import { ReactChildren, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  children: any
}

interface ModalPrevProps {
  isOpen: boolean
}

export function Modal(props: ModalProps) {
  const { isOpen, setIsOpen } = props;

  // TODO: Ajustar a funcao abaixo
  // function componentDidUpdate(prevProps: ModalPrevProps) {
  //   if (prevProps.isOpen !== isOpen) {
  //     // console.log(props)
  //     setIsOpen(isOpen);
  //   }
  // }

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={() => setIsOpen(false)}
      isOpen={isOpen}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {props.children}
    </ReactModal>
  );
}
