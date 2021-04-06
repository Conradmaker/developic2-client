import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import PostCardList from '../../components/List/PostCardList';
import SearchPageNav from '../../components/Nav/SearchPageNav';
import SortTab from '../../components/Tab/SortTab';
import { PostData, SearchListOptions } from '../../utils/data';

const Wrapper = styled.section`
  width: 1240px;
  margin: 0 auto;
`;

export default function SearchPost(): JSX.Element {
  const [currentSort, setCurrentSort] = useState(SearchListOptions.Popular);
  const { query } = useRouter();
  useEffect(() => {
    console.log('서버로 요청');
  }, [query]);
  return (
    <Layout>
      <Wrapper>
        <SearchPageNav />
        <SortTab currentSort={currentSort} setCurrentSort={setCurrentSort} />
        <PostCardList data={PostData} />
      </Wrapper>
    </Layout>
  );
}
