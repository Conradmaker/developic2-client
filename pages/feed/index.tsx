import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { BiRightArrow } from 'react-icons/bi';
import CommonPostCard from '../../components/Card/CommonPostCard';
import RecentUserCard from '../../components/Card/RecentUserCard';
import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import { discoveryData } from '../../utils/discoveryData';
import { recentUsers } from '../../utils/data';
import useFollowListModal from '../../hooks/useFollowListModal';

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
  const [followListOpen, toggleFollowList, FollowListModal] = useFollowListModal();
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | feed</title>
      </Head>
      <FeedContainer>
        <TitleLabel title="피드" desc="Posts by your followers" />
        <section className="feed__users">
          <h1>최근 활동 작가</h1>
          <ul>
            {recentUsers.map(v => (
              <Link href="/feed">
                <RecentUserCard key={v.id} data={v} />
              </Link>
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
            {discoveryData.map(v => (
              <CommonPostCard key={v.id} data={v} />
            ))}
          </ul>
        </section>
      </FeedContainer>
      {followListOpen && <FollowListModal />}
    </Layout>
  );
}