import React, { useState } from 'react';
import FollowListModal from '../components/Modal/FollowListModal';

export default function useFollowListModal(): [boolean, () => void, () => JSX.Element] {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const ConfirmModalComp = (): JSX.Element => (
    <FollowListModal onClose={toggleModal}></FollowListModal>
  );

  return [modalOpen, toggleModal, ConfirmModalComp];
}
