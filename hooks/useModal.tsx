/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useCallback } from 'react';

type UseModalHookType = <T>(
  modalComp: (props: T) => JSX.Element,
  props: T
) => [(props: any) => JSX.Element, () => void, boolean];

const useModal: UseModalHookType = (ModalComp, props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(prev => !prev);
  }, []);

  const Modal = useCallback(
    (): JSX.Element =>
      modalOpen ? <ModalComp onClose={toggleModal} {...props}></ModalComp> : <></>,
    [modalOpen]
  );

  return [Modal, toggleModal, modalOpen];
};
export default useModal;
