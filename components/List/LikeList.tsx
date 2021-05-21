import React from 'react';
import useDrawer from '../../modules/drawer/hooks';
import useUser from '../../modules/user/hooks';
import DrawerPostCard from '../Card/DrawerPostCard';
import { LikeListContainer } from './styles';

export default function LikeList(): JSX.Element {
  const { getLikeList, removeLikeItemDispatch } = useDrawer();
  const { userData } = useUser();
  if (!getLikeList.data) return <></>;
  const makeDeleteFn = (postId: number) => {
    if (!userData) return () => null;
    return () => {
      removeLikeItemDispatch({ postId, userId: userData.id });
    };
  };
  return (
    <LikeListContainer>
      <div className="total_like_count">
        <span>
          총 <strong>{getLikeList.data.length}</strong>개의 좋아요 목록
        </span>
      </div>
      <ul>
        {getLikeList.data.map(likeItem => (
          <DrawerPostCard
            key={likeItem.id}
            postData={likeItem}
            onDeleteCb={makeDeleteFn(likeItem.id)}
          />
        ))}
      </ul>
    </LikeListContainer>
  );
}
