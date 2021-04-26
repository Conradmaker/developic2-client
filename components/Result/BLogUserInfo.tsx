import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import { UserDataType } from '../../utils/data';
import { RoundCornerBtnBox } from '../Button/styles';
import { EmptyBlogUserInfoBox, BlogUserInfoBox } from './styles';

// 스타일 파일 안으로 빼는게 좋을것 같아요.
const CreateInfoButton = styled(RoundCornerBtnBox)``;

type BlogUserInfoPropsType = {
  data: UserDataType;
};
export default function BlogUserInfo({ data }: BlogUserInfoPropsType): JSX.Element {
  return (
    <>
      <BlogUserInfoBox>
        <div className="user__info">
          <strong>소개</strong>
          <p>{data[0].BlogUserInfo[0].info}</p>
        </div>
        <div className="user__info">
          <strong>주 사용기기</strong>
          <p>{data[0].BlogUserInfo[0].mainEquipment}</p>
        </div>
        <div className="user__info">
          <strong>웹 사이트</strong>
          <p>{data[0].BlogUserInfo[0].website}</p>
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
