import Head from 'next/head';
import React, { useEffect } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import CommonPostCard from 'components/Card/CommonPostCard';
import RecentUserCard from 'components/Card/RecentUserCard';
import TitleLabel from 'components/Label/TitleLabel';
import Layout from 'components/Layout';
import { FeedPageDataType } from 'modules/list';
import useFetchMore from 'hooks/useFetchMore';
import _FollowListModal from 'components/Modal/FollowListModal';
import { useAuth, useList, useModal } from 'hooks';
import { FeedContainer } from 'styles/pages/feed';

export default function index(): JSX.Element {
  const { userData } = useAuth({ replace: true });
  const { getFeedPostDispatch, getWriterListDispatch, pageData, hasMore } = useList();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);
  const [FollowListModal, toggleFollowList] = useModal(_FollowListModal, {});

  useEffect(() => {
    if (!userData) return;
    getWriterListDispatch({ userId: userData.id, type: 'suber' });
  }, [userData]);

  useEffect(() => {
    if (!userData) return;
    if (!hasMore && page > 0) return;
    getFeedPostDispatch({ UserId: userData.id, offset: page * 12, limit: 12 });
  }, [page, userData, hasMore]);

  if (!userData) return <></>;
  return (
    <Layout>
      <Head>
        <title>FEED | {userData?.nickname}님의 피드</title>
      </Head>
      <FeedContainer>
        <TitleLabel title="피드" desc="Posts by your followers" />
        <section className="feed__users">
          <h1>최근 활동 구독작가</h1>
          <div className="user__list">
            <ul>
              {(pageData as FeedPageDataType).writer &&
                (pageData as FeedPageDataType).writer.map(
                  (user, i) => i < 8 && <RecentUserCard key={user.id} userData={user} />
                )}
            </ul>
            <li className="more__recent__users" onClick={toggleFollowList}>
              <div>
                <BiRightArrow />
              </div>
              <p>더 많은 작가</p>
            </li>
          </div>
        </section>
        <section className="feed__posts">
          <h1>구독한 작가의 글</h1>
          {pageData.post && (
            <>
              <ul>
                {pageData.post.map(post => (
                  <CommonPostCard key={post.id} postData={post} />
                ))}
              </ul>
              <FetchMoreTrigger />
            </>
          )}
        </section>
      </FeedContainer>
      <FollowListModal />
    </Layout>
  );
}
