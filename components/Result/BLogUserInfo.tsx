import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import { RoundCornerBtnBox } from '../Button/styles';
import { EmptyBlogUserInfoBox, BlogUserInfoBox } from './styles';

const CreateInfoButton = styled(RoundCornerBtnBox)``;

export default function BlogUserInfo(): JSX.Element {
  return (
    <>
      <BlogUserInfoBox>
        <div className="user__info">
          <strong>소개</strong>
          <p>
            황금시대의 피부가 이상 두기 밝은 쓸쓸하랴? 풀이 놀이 용기가 관현악이며, 너의
            타오르고 스며들어 듣는다. 것이다.보라, 그들의 풍부하게 끝까지 주는
            그리하였는가? 황금시대의 피부가 이상 두기 밝은 쓸쓸하랴? 풀이 놀이 용기가
            황금시대다. 미묘한 품에 그들에게 귀는 관현악이며, 스며들어 듣는다.
            것이다.보라, 그들의 풍부하게 끝까지 주는 그리하였는가?
          </p>
        </div>
        <div className="user__info">
          <strong>주 사용기기</strong>
          <p>Canon AE-1</p>
        </div>
        <div className="user__info">
          <strong>웹 사이트</strong>
          <p>www.myportfolio.com</p>
        </div>
      </BlogUserInfoBox>
      {/* <EmptyBlogUserInfoBox>
        <img src="/not_found.png" alt="not_found" />
        <p className="userInfo-empty">아직 작성된 소개가 없습니다.</p>
        <Link href="/user/setting/intro">
          <CreateInfoButton>소개 작성</CreateInfoButton>
        </Link>
      </EmptyBlogUserInfoBox> */}
    </>
  );
}
