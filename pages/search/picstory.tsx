import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import BlogPicstoryList from '../../components/List/BlogPicstoryList';
import SearchPageNav from '../../components/Nav/SearchPageNav';
import Incomplete from '../../components/Result/Incomplete';
import SortTab from '../../components/Tab/SortTab';
import { PicstoryData, PostData, SearchListOptions } from '../../utils/data';

const SearchTagContainer = styled.section`
  width: 1150px;
  margin: 0 auto;
`;

export default function SearchPicstory(): JSX.Element {
  const [currentSort, setCurrentSort] = useState(SearchListOptions.Popular);
  const { query } = useRouter();
  useEffect(() => {
    console.log('서버로 태그 데이터 요청', query.keyword);
  }, [query]);
  return (
    <Layout>
      <SearchTagContainer>
        <SearchPageNav />
        <SortTab currentSort={currentSort} setCurrentSort={setCurrentSort} />
        <BlogPicstoryList data={PicstoryData} />
      </SearchTagContainer>
    </Layout>
  );
}
