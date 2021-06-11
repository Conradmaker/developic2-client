import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FeedPageDataType, PostUser } from '../../modules/list';
import useList from '../../modules/list/hooks';
import useUser from '../../modules/user/hooks';
import SquareBtn from '../Button/SquareBtn';
import TitleLabel from '../Label/TitleLabel';
import { FollowingItemBox, FollowListModalBox, ModalLayout } from './styles';

function FollowingItem({ writerData }: { writerData: PostUser }): JSX.Element {
  const { userData, unSubscribeDispatch } = useUser();

  const onRemoveSub = () => {
    if (!userData) return;
    unSubscribeDispatch({ subscriberId: userData.id, writerId: writerData.id });
  };

  return (
    <FollowingItemBox>
      <img src={writerData.avatar} alt="" />
      <div className="user__info">
        <span>{writerData.nickname}</span>
        <ul>
          <li>
            <small>- {writerData.introduce}</small>
          </li>
          <li>
            <small>- {dayjs(writerData.last_post).fromNow()}</small>
          </li>
        </ul>
      </div>
      <div className="unSub__btn" onClick={onRemoveSub}>
        <AiOutlinePlus />
      </div>
    </FollowingItemBox>
  );
}

type FollowListModalPropsType = {
  onClose?: () => void;
};
export default function FollowListModal({
  onClose = () => null,
}: FollowListModalPropsType): JSX.Element {
  const { userData } = useUser();
  const { getWriterListDispatch, pageData } = useList();

  const onClickBG = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  }, []);

  useEffect(() => {
    if (!userData) return;
    if ((pageData as FeedPageDataType).writer) return;
    getWriterListDispatch({ userId: userData.id, type: 'suber' });
  }, [userData]);

  if (!(pageData as FeedPageDataType).writer) return <></>;

  return (
    <ModalLayout onClick={onClickBG}>
      <FollowListModalBox width={600}>
        <TitleLabel title="구독 작가 목록" desc="Subscribe List" />
        <ul>
          {(pageData as FeedPageDataType).writer.map(writer => (
            <FollowingItem writerData={writer} key={writer.id + 'modal'} />
          ))}
        </ul>
        <div className="btn__group">
          <SquareBtn onClick={onClose}>닫기</SquareBtn>
        </div>
      </FollowListModalBox>
    </ModalLayout>
  );
}
