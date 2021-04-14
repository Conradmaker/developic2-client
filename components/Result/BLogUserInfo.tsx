import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import { RoundCornerBtnBox } from '../Button/styles';
import { EmptyBLogUserInfo } from './styles';

const CreateInfoButton = styled(RoundCornerBtnBox)``;
const BLogUserInfoBox = styled.div``;

export default function BLogUserInfo(): JSX.Element {
  return (
    <BLogUserInfoBox>
      <EmptyBLogUserInfo>
        <img src="/not_found.png" alt="not_found" />
        <p className="userInfo-empty">아직 작성된 소개가 없습니다.</p>
        <Link href="/user/setting/intro">
          <CreateInfoButton>소개 작성</CreateInfoButton>
        </Link>
      </EmptyBLogUserInfo>
    </BLogUserInfoBox>
  );
}
