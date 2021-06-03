import React, { useCallback, useEffect, useState } from 'react';
import Layout from './Layout';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BlogNavData } from '../../utils/data';
import { BlogTabBox } from '../Tab/styles';
import FollowBtn from '../Button/FollowBtn';
import { BlogUserProfile } from './styles';
import useBlog from '../../modules/blog/hooks';
import useUser from '../../modules/user/hooks';
import { RoundCornerBtnBox } from '../Button/styles';
import Head from 'next/head';

const BlogwithProfileContainer = styled.div`
  margin: 40px auto;
  max-width: 850px;
  position: relative;
  .blog__tab {
    margin: 0 auto;
  }
`;

type BlogWithNavLayoutPropsType = {
  children: React.ReactNode;
};
export default function BlogWithNavLayout({
  children,
}: BlogWithNavLayoutPropsType): JSX.Element {
  const router = useRouter();
  const { userId } = router.query;
  const { loadBlogUserDispatch, blogUserData } = useBlog();
  const { userData, subscribeDispatch, unSubscribeDispatch } = useUser();
  const [isFollowing, setIsFollowing] = useState(false);

  const onFollowToggle = useCallback(() => {
    if (!userData) return alert('로그인해주세요');
    if (!blogUserData) return;
    if (isFollowing) {
      unSubscribeDispatch({ writerId: blogUserData.id, subscriberId: userData.id });
    } else {
      subscribeDispatch({ writerId: blogUserData.id, subscriberId: userData.id });
    }
  }, [userData, isFollowing, blogUserData]);

  useEffect(() => {
    loadBlogUserDispatch(userId as string);
  }, [userId]);

  useEffect(() => {
    if (!userData) return;
    if (!blogUserData) return;
    setIsFollowing(
      userData.writers.findIndex(following => following.id === +(userId as string)) !== -1
    );
  }, [userData]);

  if (!blogUserData) return <></>;

  return (
    <Layout>
      <Head>
        <title>{blogUserData.nickname}님의 블로그</title>
      </Head>
      <BlogwithProfileContainer>
        <div className="blog__tab">
          <BlogUserProfile>
            <div className="profile__top">
              <img src={blogUserData.avatar} alt="profile" />
              <h1>{blogUserData.nickname}</h1>
              <p>{blogUserData.introduce}</p>
              {blogUserData.id !== userData?.id && (
                <FollowBtn
                  isFollow={isFollowing}
                  text={isFollowing ? '구독해지' : '구독'}
                  onClick={onFollowToggle}
                ></FollowBtn>
              )}
              {blogUserData.id === userData?.id && (
                <Link href="/user/setting/info">
                  <RoundCornerBtnBox>프로필 수정</RoundCornerBtnBox>
                </Link>
              )}
            </div>
            <div className="profile__bottom">
              <div className="follower">
                <strong>구독자</strong>
                <span>{blogUserData.suberCount ? blogUserData.suberCount : 0}</span>
              </div>
              <div className="following">
                <strong>관심작가</strong>
                <span>{blogUserData.writerCount ? blogUserData.writerCount : 0}</span>
              </div>
            </div>
          </BlogUserProfile>
          <BlogTabBox>
            {BlogNavData.map(navItem => (
              <Link href={`/${userId + navItem.link}`}>
                <li
                  className={
                    router.asPath === `/${userId + navItem.link}` ? 'nav--active' : ''
                  }
                >
                  {navItem.name}
                </li>
              </Link>
            ))}
          </BlogTabBox>
        </div>
        {children}
      </BlogwithProfileContainer>
    </Layout>
  );
}
