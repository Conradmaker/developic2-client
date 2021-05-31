import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import UserCardList from '../../components/List/UserCardList';
import SearchPageNav from '../../components/Nav/SearchPageNav';
import EmptyContent from '../../components/Result/EmptyContent';
import { SearchContentBox } from '../../components/Result/styles';
import SortTab from '../../components/Tab/SortTab';
import { SearchPageData } from '../../modules/list';
import useList from '../../modules/list/hooks';
import { SearchListOptions } from '../../utils/data';

const SearchWriterContainer = styled.section`
  width: 1150px;
  margin: 0 auto;
  position: relative;
`;

export default function SearchWriter(): JSX.Element {
  const { pageData, loadSearchListDispatch } = useList();
  const [currentSort, setCurrentSort] = useState(SearchListOptions.Popular);
  const { query } = useRouter();
  useEffect(() => {
    console.log('서버로 작가 검색 요청');
    if (query.keyword && currentSort === SearchListOptions.Popular) {
      loadSearchListDispatch({ query: query.keyword, sort: 'popular', type: 'writer' });
    } else if (query.keyword && currentSort === SearchListOptions.Recent) {
      loadSearchListDispatch({ query: query.keyword, sort: 'recent', type: 'writer' });
    }
  }, [query, currentSort]);

  return (
    <Layout>
      <SearchWriterContainer>
        <SearchPageNav />
        <SearchContentBox>
          {pageData && pageData.length < 1 && (
            <EmptyContent message={'검색된 작가가 없습니다.'} />
          )}
          {pageData && pageData.length >= 1 && (
            <>
              <SortTab currentSort={currentSort} setCurrentSort={setCurrentSort} />
              <UserCardList
                searchUserListData={pageData as SearchPageData['writer']}
              ></UserCardList>
            </>
          )}
        </SearchContentBox>
      </SearchWriterContainer>
    </Layout>
  );
}
