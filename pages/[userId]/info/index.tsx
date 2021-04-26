import styled from '@emotion/styled';
import React from 'react';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogUserInfo from '../../../components/Result/BlogUserInfo';
import { UserInfoData } from '../../../utils/data';

const BlogUserInfoContainer = styled.section`
  min-height: 550px;
  width: 850px;
  margin: 0 auto;
  font-family: 'Noto Serif KR';
`;

export default function Picstory(): JSX.Element {
  return (
    <BlogWithNavLayout data={UserInfoData}>
      <BlogUserInfoContainer>
        <BlogUserInfo data={UserInfoData} />
      </BlogUserInfoContainer>
    </BlogWithNavLayout>
  );
}
