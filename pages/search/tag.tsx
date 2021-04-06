import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import SearchPageNav from '../../components/Nav/SearchPageNav';
import Incomplete from '../../components/Result/Incomplete';
import SortTab from '../../components/Tab/SortTab';

const Wrapper = styled.section`
  width: 1240px;
  margin: 0 auto;
`;

export default function SearchTag({ value }): JSX.Element {
  return (
    <Layout>
      <Wrapper>
        <SearchPageNav value={value} />
        <SortTab></SortTab>
        <Incomplete width={330} title="아직 준비중인 페이지에요." desc="물러가세요" />
      </Wrapper>
    </Layout>
  );
}
