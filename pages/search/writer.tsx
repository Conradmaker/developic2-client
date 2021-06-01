import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import UserCardList from '../../components/List/UserCardList';
import SearchPageWithNavLayout from '../../components/Nav/SearchPageNav';
import EmptyContent from '../../components/Result/EmptyContent';
import SearchResultCount from '../../components/Result/SearchResultCount';
import { SearchContentBox } from '../../components/Result/styles';
import SortTab from '../../components/Tab/SortTab';
import { SearchPageData } from '../../modules/list';
import useList from '../../modules/list/hooks';
import { SearchListOptions, SearchNavData } from '../../utils/data';

export default function SearchWriter(): JSX.Element {
  const { pageData, loadSearchListDispatch } = useList();
  const [currentSort, setCurrentSort] = useState(SearchListOptions.Popular);
  const { query } = useRouter();
  useEffect(() => {
    if (query.keyword && currentSort === SearchListOptions.Popular) {
      loadSearchListDispatch({ query: query.keyword, sort: 'popular', type: 'writer' });
    } else if (query.keyword && currentSort === SearchListOptions.Recent) {
      loadSearchListDispatch({ query: query.keyword, sort: 'recent', type: 'writer' });
    }
  }, [query, currentSort]);

  return (
    <SearchPageWithNavLayout>
      <SearchContentBox>
        {(pageData as SearchPageData['writer']) &&
          (pageData as SearchPageData['writer']).length < 1 && (
            <EmptyContent message={'검색된 작가가 없습니다.'} />
          )}
        {(pageData as SearchPageData['writer']) &&
          (pageData as SearchPageData['writer']).length >= 1 && (
            <>
              <SortTab currentSort={currentSort} setCurrentSort={setCurrentSort} />
              <SearchResultCount
                searchTitle={SearchNavData[1].name}
                resultCount={(pageData as SearchPageData['writer']).length}
              />
              <UserCardList
                searchUserListData={pageData as SearchPageData['writer']}
              ></UserCardList>
            </>
          )}
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
