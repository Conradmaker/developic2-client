import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import CommonPostCard from '../../components/Card/CommonPostCard';
import RecentUserCard from '../../components/Card/RecentUserCard';
import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import useList from '../../modules/list/hooks';
import useUser from '../../modules/user/hooks';
import { useRouter } from 'next/router';
import {
  FeedPageDataType,
  getFeedPostAction,
  getHashtagListAction,
  getWriterListAction,
} from '../../modules/list';
import useFetchMore from '../../hooks/useFetchMore';
import wrapper from '../../modules/store';
import { authServersiceAction } from '../../utils/getServerSidePropsTemplate';
import useModal from '../../hooks/useModal';
import _FollowListModal from '../../components/Modal/FollowListModal';

const FeedContainer = styled.div`
  max-width: 1150px;
  margin: 50px auto 100px auto;
  .feed__users,
  .feed__posts {
    padding-top: 30px;
    margin-top: 60px;
    border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
    & > h1 {
      font-family: 'Noto Serif KR';
      line-height: 62px;
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      color: ${({ theme }) => theme.textColor.initial};
    }
  }
  .feed__users {
    .user__list {
      display: flex;
      & > ul {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        height: 100px;
        padding: 0 50px;
        margin-top: 30px;
        li {
          margin: 0 10px;
        }
      }
    }
    .more__recent__users {
      color: ${({ theme }) => theme.textColor.lighten};
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > div {
        width: 40px;
        height: 40px;
        border: 2px solid ${({ theme }) => theme.textColor.lighten};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
          box-shadow: 0 0 3px ${({ theme }) => theme.grayScale[2]};
        }
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.small};
        margin-top: 10px;
      }
    }
  }
  .feed__posts {
    & > ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 268px;
        padding: 1.786em 0;
        margin-right: 1.786em;
      }
      li:nth-of-type(4n) {
        margin-right: 0;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
    margin: 10px auto 50px auto;
    .feed__users {
      margin-top: 30px;
      padding-top: 10px;
      position: relative;
      h1 {
        font-size: 24px;
      }
      .user__list {
        & > ul {
          padding: 0 10px;
          overflow: scroll;
        }
        & > .more__recent__users {
          width: auto;
          position: absolute;
          top: 30px;
          right: 0;
          div {
            display: none;
          }
        }
      }
    }
    .feed__posts {
      h1 {
        font-size: 24px;
      }
      ul {
        flex-wrap: wrap;
        li {
          padding: 30px 10px 30px 10px;
          width: 100%;
          margin-right: 0;
          border-bottom: 1px solid ${({ theme }) => theme.grayScale[3]};
        }
        li:last-of-type {
          border-bottom: none;
        }
      }
    }
  }
`;
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
