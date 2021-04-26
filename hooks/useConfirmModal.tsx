import React, { useState } from 'react';
import ConfirmModal from '../components/Modal/ConfirmModal';

export default function useConfirmModal(
  onConfirm: () => void,
  content: string
): [boolean, () => void, () => JSX.Element] {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const ConfirmModalComp = (): JSX.Element => (
    <ConfirmModal
      onConfirm={onConfirm}
      onClose={toggleModal}
      content={content}
    ></ConfirmModal>
  );

  return [modalOpen, toggleModal, ConfirmModalComp];
}
