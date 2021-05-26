import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import CommonPostCard from '../../components/Card/CommonPostCard';
import RecentUserCard from '../../components/Card/RecentUserCard';
import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import useFollowListModal from '../../hooks/useFollowListModal';
import useList from '../../modules/list/hooks';
import useUser from '../../modules/user/hooks';
import { useRouter } from 'next/router';
import { FeedPageDataType } from '../../modules/list';

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
    & > ul {
      display: flex;
      justify-content: space-between;
      height: 100px;
      padding: 0 50px;
      margin-top: 30px;
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
      li:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
`;
export default function index(): JSX.Element {
  const { userData } = useUser();
  const { getFeedPostDispatch, pageData, getWriterListDispatch } = useList();
  const router = useRouter();
  const [followListOpen, toggleFollowList, FollowListModal] = useFollowListModal();
  useEffect(() => {
    if (!userData) router.replace('/');
    if (userData) {
      getFeedPostDispatch({ UserId: userData.id });
      getWriterListDispatch({ userId: userData.id, type: 'suber' });
    }
  }, [userData]);
  if (!pageData.post || !(pageData as FeedPageDataType).writer) return <></>;
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | FEED</title>
      </Head>
      <FeedContainer>
        <TitleLabel title="피드" desc="Posts by your followers" />
        <section className="feed__users">
          <h1>최근 활동 구독작가</h1>
          <ul>
            {(pageData as FeedPageDataType).writer.map(user => (
              <RecentUserCard key={user.id} userData={user} />
            ))}
            <li className="more__recent__users" onClick={toggleFollowList}>
              <div>
                <BiRightArrow />
              </div>
              <p>더 많은 작가</p>
            </li>
          </ul>
        </section>
        <section className="feed__posts">
          <h1>구독한 작가의 글</h1>
          <ul>
            {pageData.post.map(post => (
              <CommonPostCard key={post.id} postData={post} />
            ))}
          </ul>
        </section>
      </FeedContainer>
      {followListOpen && <FollowListModal />}
    </Layout>
  );
}
