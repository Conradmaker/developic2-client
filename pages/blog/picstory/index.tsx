import styled from '@emotion/styled';
import React from 'react';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogPicstoryList from '../../../components/List/BlogPicstoryList';
import { PostData } from '../../../utils/data';

const BlogPicstoryContainer = styled.section`
  min-height: 550px;
  width: 850px;
  margin: 0 auto;
`;

export default function Picstory(): JSX.Element {
  return (
    <BlogWithNavLayout>
      <BlogPicstoryContainer>
        <BlogPicstoryList data={PostData} />
      </BlogPicstoryContainer>
    </BlogWithNavLayout>
  );
}
