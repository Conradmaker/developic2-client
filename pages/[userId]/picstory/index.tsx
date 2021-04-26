import styled from '@emotion/styled';
import React from 'react';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogPicstoryList from '../../../components/List/BlogPicstoryList';
import { PicstoryData, UserInfoData } from '../../../utils/data';

const BlogPicstoryContainer = styled.section`
  min-height: 550px;
  width: 850px;
  margin: 0 auto;
`;

export default function Picstory(): JSX.Element {
  return (
    <BlogWithNavLayout data={UserInfoData}>
      <BlogPicstoryContainer>
        <BlogPicstoryList data={PicstoryData} />
      </BlogPicstoryContainer>
    </BlogWithNavLayout>
  );
}
