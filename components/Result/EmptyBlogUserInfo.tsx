import Link from 'next/link';
import React from 'react';

import { RoundCornerBtnBox } from '../Button/styles';
import { EmptyBlogUserInfoBox } from './styles';

type EmptyBlogUserInfoPropsType = {
  blogUserId: number | null;
  userId: number | null;
};
export default function EmptyBlogUserInfo({
  blogUserId,
  userId,
}: EmptyBlogUserInfoPropsType): JSX.Element {
  return (
    <EmptyBlogUserInfoBox>
      <img src="/not_found.png" alt="not_found" />
      <p className="userInfo-empty">아직 작성된 소개가 없습니다.</p>
      {blogUserId === userId && (
        <Link href="/user/setting/intro">
          <RoundCornerBtnBox>소개 작성</RoundCornerBtnBox>
        </Link>
      )}
    </EmptyBlogUserInfoBox>
  );
}
