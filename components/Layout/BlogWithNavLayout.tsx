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

const BlogwithProfileContainer = styled.main`
  margin: 40px auto;
  width: 850px;
  position: relative;
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

  useEffect(() => {
    if (userId) {
      loadBlogUserDispatch(userId);
    }
  }, [userId]);

  const [isFollow, setIsFollow] = useState(false);

  const onFollowToggle = useCallback(() => {
    setIsFollow(!isFollow);
  }, [isFollow]);

  return (
    <Layout>
      <BlogwithProfileContainer>
        <UserProfileWithTabContainer>
          <BlogUserProfile>
            <div className="profile__top">
              <img
                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                alt="profile"
              />
              <h1>{blogUserData && blogUserData.nickname}</h1>
              <p>{blogUserData && blogUserData.introduce}</p>
              <FollowBtn
                isFollow={isFollow}
                text={isFollow ? '구독해지' : '구독'}
                onClick={onFollowToggle}
              ></FollowBtn>
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
