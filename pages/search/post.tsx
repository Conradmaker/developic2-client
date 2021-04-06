import styled from '@emotion/styled';
import React from 'react';
import SearchInput from '../../components/Input/SearchInput';
import Layout from '../../components/Layout';
import PostCardList from '../../components/List/PostCardList';
import SearchPageNav from '../../components/Nav/SearchPageNav';
import SortTab from '../../components/Tab/SortTab';
import { PostData } from '../../utils/postData';

const Wrapper = styled.section`
  width: 1240px;
  margin: 0 auto;
`;

export default function SearchPost({ value }): JSX.Element {
  return (
    <Layout>
      <Wrapper>
        <SearchPageNav value={value} />
        <SortTab></SortTab>
        <PostCardList data={PostData} />
      </Wrapper>
    </Layout>
  );
}
