import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/Layout';
import PicstoryDetailList from '../../../components/List/PicstoryDetailList';
import BlogPicstoryDetailBox from '../../../components/Result/BlogPicstoryDetail';
import { PostData } from '../../../utils/data';

const PicstoryDetailContainer = styled.section`
  min-height: 550px;
  width: 850px;
  margin: 0 auto;
  font-family: 'Noto Serif KR';
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 700;
    text-align: center;
    margin-bottom: 25px;
    cursor: pointer;
  }
`;

export default function PicstoryId(): JSX.Element {
  return (
    <Layout>
      <PicstoryDetailContainer>
        <Link href="/blog/picstory">
          <h1>Picstory</h1>
        </Link>
        <BlogPicstoryDetailBox />
        <PicstoryDetailList data={PostData} />
      </PicstoryDetailContainer>
    </Layout>
  );
}
