import Head from 'next/head';
import React, { useEffect } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import CommonPostCard from 'components/Card/CommonPostCard';
import RecentUserCard from 'components/Card/RecentUserCard';
import TitleLabel from 'components/Label/TitleLabel';
import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import {
  FeedPageDataType,
  getFeedPostAction,
  getHashtagListAction,
  getWriterListAction,
} from 'modules/list';
import useFetchMore from 'hooks/useFetchMore';
import wrapper from 'modules/store';
import { authServersiceAction } from 'utils/getServerSidePropsTemplate';
import _FollowListModal from 'components/Modal/FollowListModal';
import { useList, useModal, useUser } from 'hooks';
import { FeedContainer } from 'styles/pages/feed';

export default function index(): JSX.Element {
  const { userData } = useUser();
  const { getFeedPostDispatch, pageData, hasMore } = useList();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);
  const router = useRouter();
  const [FollowListModal, toggleFollowList] = useModal(_FollowListModal, {});

  useEffect(() => {
    if (!userData) {
      router.back();
      return;
    }
    if (hasMore && page > 0)
      getFeedPostDispatch({ UserId: userData.id, offset: page * 12, limit: 12 });
  }, [page]);

  if (!(pageData as FeedPageDataType).post || !(pageData as FeedPageDataType).writer)
    return <></>;

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
              {(pageData as FeedPageDataType).writer.map(
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
          <ul>
            {pageData.post.map(post => (
              <CommonPostCard key={post.id} postData={post} />
            ))}
          </ul>
          <FetchMoreTrigger />
        </section>
      </FeedContainer>
      <FollowListModal />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await authServersiceAction(context);
  await context.store.dispatch(
    getHashtagListAction({ sort: 'popular', term: 'month', limit: 18 })
  );
  const store = context.store.getState();
  if (store.user.userData) {
    const userId = store.user.userData.id;
    await context.store.dispatch(getFeedPostAction({ UserId: userId, limit: 12 }));
    await context.store.dispatch(getWriterListAction({ userId: userId, type: 'suber' }));
  }
});
