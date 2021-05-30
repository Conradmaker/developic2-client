import React, { useEffect } from 'react';
import useFetchMore from '../../hooks/useFetchMore';
import useDrawer from '../../modules/drawer/hooks';
import useUser from '../../modules/user/hooks';
import DrawerPostCard from '../Card/DrawerPostCard';
import { LikeListContainer } from './styles';

export default function LikeList(): JSX.Element {
  const { getLikeList, removeLikeItemDispatch } = useDrawer();
  const { userData } = useUser();
  const { getLikeListDispatch, hasMore } = useDrawer();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  const makeDeleteFn = (postId: number) => {
    if (!userData) return () => null;
    return () => {
      removeLikeItemDispatch({ postId, userId: userData.id });
    };
  };

  useEffect(() => {
    if (hasMore && page > 0 && userData) {
      getLikeListDispatch({ userId: userData.id, limit: 12, offset: page * 12 });
    }
  }, [page]);

  if (!getLikeList.data) return <></>;

  return (
    <LikeListContainer>
      <ul>
        {getLikeList.data.map(likeItem => (
          <DrawerPostCard
            key={likeItem.id}
            postData={likeItem}
            onDeleteCb={makeDeleteFn(likeItem.id)}
          />
        ))}
      </ul>
      <FetchMoreTrigger />
    </LikeListContainer>
  );
}
