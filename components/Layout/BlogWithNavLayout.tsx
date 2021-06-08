import React, { useCallback, useEffect } from 'react';
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
import { UpdateInfoButton } from '../Button/styles';
const BlogwithProfileContainer = styled.main`
  margin: 40px auto;
  width: 850px;
  position: relative;
  color: ${({ theme }) => theme.textColor.initial};
`;

const UserProfileWithTabContainer = styled.section`
  margin: 0 auto;
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

  const blogUserId = blogUserData?.id;

  useEffect(() => {
    if (userId) {
      loadBlogUserDispatch(userId);
    }
  }, [userId]);

  const isFollowing = userData?.writers?.find(
    following => following.id === blogUserData?.id
  ); // 구독 여부, 일치하면 isFollowing

  const onFollowToggle = useCallback(() => {
    if (!userData) return console.log('로그인해주세요');
    // 로그인모달창 띄우기(모달창 띄우는 함수 만들기)
    if (userData && isFollowing && blogUserId) {
      unSubscribeDispatch({ writerId: blogUserId, subscriberId: userData.id });
    } else if (userData && !isFollowing && blogUserId) {
      subscribeDispatch({ writerId: blogUserId, subscriberId: userData.id });
    }
  }, [userData, isFollowing]);

  if (!blogUserData) return <></>;
  return (
    <Layout>
      <BlogwithProfileContainer>
        <UserProfileWithTabContainer>
          <BlogUserProfile>
            <div className="profile__top">
              <img src={blogUserData?.avatar} alt="profile" />
              <h1>{blogUserData && blogUserData.nickname}</h1>
              <p>{blogUserData && blogUserData.introduce}</p>
              {blogUserId !== userData?.id && (
                <FollowBtn
                  isFollow={isFollowing && isFollowing}
                  text={isFollowing ? '구독해지' : '구독'}
                  onClick={onFollowToggle}
                ></FollowBtn>
              )}
              {blogUserId === userData?.id && (
                <Link href="/user/setting/info">
                  <UpdateInfoButton>프로필 수정</UpdateInfoButton>
                </Link>
              )}
            </div>
            <div className="profile__bottom">
              <div className="follower">
                <strong>구독자</strong>
                <span>
                  {blogUserData && blogUserData.suberCount ? blogUserData.suberCount : 0}
                </span>
              </div>
              <div className="following">
                <strong>관심작가</strong>
                <span>
                  {blogUserData && blogUserData.writerCount
                    ? blogUserData.writerCount
                    : 0}
                </span>
              </div>
            </div>
          </BlogUserProfile>
          <BlogTabBox>
            <Link href={`/${userId}/post`}>
              <li
                className={router.pathname === BlogNavData[0].link ? 'nav--active' : ''}
              >
                글
              </li>
            </Link>
            <Link href={`/${userId}/picstory`}>
              <li
                className={router.pathname === BlogNavData[1].link ? 'nav--active' : ''}
              >
                픽스토리
              </li>
            </Link>
            <Link href={`/${userId}/info`}>
              <li
                className={router.pathname === BlogNavData[2].link ? 'nav--active' : ''}
              >
                소개
              </li>
            </Link>
          </BlogTabBox>
        </UserProfileWithTabContainer>
        {children}
      </BlogwithProfileContainer>
    </Layout>
  );
}
