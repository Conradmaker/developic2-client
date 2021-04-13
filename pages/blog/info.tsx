import styled from '@emotion/styled';
import React from 'react';
import BlogWithNavLayout from '../../components/Layout/BlogWithNavLayout';
import BlogWorkList from '../../components/List/BlogWorkList';
import { PostData } from '../../utils/data';

const BlogUserInfoContainer = styled.section`
  min-height: 550px;
  width: 850px;
  margin: 0 auto;
`;

export default function Picstory(): JSX.Element {
  return (
    <BlogWithNavLayout>
      <BlogUserInfoContainer>
        <BlogWorkList data={PostData} />
      </BlogUserInfoContainer>
    </BlogWithNavLayout>
  );
}
