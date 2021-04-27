import React, { useEffect } from 'react';
import SquareBtn from '../Button/SquareBtn';
import TitleLabel from '../Label/TitleLabel';
import { FollowListModalBox, ModalLayout } from './styles';

type FollowingItemPropsType = {};

function FollowingItem(): JSX.Element {
  return (
    <li>
      <img src="/avatar_sample.png" alt="" />
      <div>
        <span>작가1</span>
        <SquareBtn>구독취소</SquareBtn>
      </div>
    </li>
  );
}

type FollowListModalPropsType = {
  onClose: () => void;
};
export default function FollowListModal({
  onClose,
}: FollowListModalPropsType): JSX.Element {
  const onClickBG = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };
  useEffect(() => {
    console.log('리스트 조회');
  }, []);
  return (
    <ModalLayout onClick={onClickBG}>
      <FollowListModalBox width={600}>
        <TitleLabel title="구독중인 작가" desc="Follow List" />
        <ul>
          <FollowingItem />
          <FollowingItem />
          <FollowingItem />
          <FollowingItem />
          <FollowingItem />
          <FollowingItem />
        </ul>
        <div className="btn__group">
          <SquareBtn onClick={onClose}>닫기</SquareBtn>
        </div>
      </FollowListModalBox>
    </ModalLayout>
  );
}
