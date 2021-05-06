import Link from 'next/link';
import React from 'react';
import { CreateInfoButton } from '../Button/styles';
import { EmptyBlogUserInfoBox } from './styles';

export default function EmptyBlogUserInfo(): JSX.Element {
  return (
    <EmptyBlogUserInfoBox>
      <img src="/not_found.png" alt="not_found" />
      <p className="userInfo-empty">아직 작성된 소개가 없습니다.</p>
      <Link href="/user/setting/intro">
        <CreateInfoButton>소개 작성</CreateInfoButton>
      </Link>
    </EmptyBlogUserInfoBox>
  );
}
