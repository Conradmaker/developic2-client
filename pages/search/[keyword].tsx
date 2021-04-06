import styled from '@emotion/styled';
import React from 'react';
import Layout from '../../components/Layout';
import Incomplete from '../../components/Result/Incomplete';
import SearchPageNav from '../../components/Nav/SearchPageNav';

const Wrapper = styled.section`
  width: 1240px;
  margin: 0 auto;
`;

export default function SearchWithNavLayout(): JSX.Element {
  return (
    <Layout>
      <Wrapper>
        <SearchPageNav />
        <Incomplete width={330} title="검색어를 입력해주세요" desc="" />
      </Wrapper>
    </Layout>
  );
}
