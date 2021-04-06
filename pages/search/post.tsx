import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import PostCardList from '../../components/List/CommonPostCardList';
import SearchPageNav from '../../components/Nav/SearchPageNav';
import SortTab from '../../components/Tab/SortTab';
import { PostData, SearchListOptions } from '../../utils/data';

const SearchPostContainer = styled.section`
  width: 1150px;
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
      <SearchPostContainer>
        <SearchPageNav />
        <SortTab currentSort={currentSort} setCurrentSort={setCurrentSort} />
        <PostCardList data={PostData} />
      </SearchPostContainer>
    </Layout>
  );
}
