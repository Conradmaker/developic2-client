import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import SearchPageNav from '../../components/Nav/SearchPageNav';
import Incomplete from '../../components/Result/Incomplete';
import SortTab from '../../components/Tab/SortTab';
import { SearchListOptions } from '../../utils/data';

const Wrapper = styled.section`
  width: 1240px;
  margin: 0 auto;
`;

export default function SearchTag(): JSX.Element {
  const [currentSort, setCurrentSort] = useState(SearchListOptions.Popular);
  const { query } = useRouter();
  useEffect(() => {
    console.log('서버로 태그 데이터 요청', query.keyword);
  }, [query]);
  return (
    <Layout>
      <Wrapper>
        <SearchPageNav />
        <SortTab currentSort={currentSort} setCurrentSort={setCurrentSort} />
        <Incomplete width={330} title="아직 준비중인 페이지에요." desc="물러가세요" />
      </Wrapper>
    </Layout>
  );
}
