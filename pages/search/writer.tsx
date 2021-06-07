import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { dateOptionData, SearchContentBox, sortOptionData } from '.';
import UserCardList from '../../components/List/UserCardList';
import SearchPageWithNavLayout from '../../components/Nav/SearchPageNav';
import EmptyContent from '../../components/Result/EmptyContent';
import SearchResultCount from '../../components/Result/SearchResultCount';
import SortOption from '../../components/Tab/SortOption';
import { SearchPageData } from '../../modules/list';
import useList from '../../modules/list/hooks';
import { SearchNavData } from '../../utils/data';

export default function SearchWriter(): JSX.Element {
  const { pageData, loadSearchListDispatch } = useList();
  const { query } = useRouter();

  const [currentSort, setCurrentSort] = useState(sortOptionData[0]);
  const [currentDate, setCurrentDate] = useState(dateOptionData[0]);

  useEffect(() => {
    if (query.keyword) {
      loadSearchListDispatch({
        query: query.keyword,
        sort: currentSort.value as 'popular' | 'recent',
        type: 'writer',
        term: currentDate.value as 'all' | 'day' | 'week' | 'month',
      });
    }
  }, [query, currentSort, currentDate]);

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
              <div className="sort-option">
                <SortOption
                  sortOptionData={sortOptionData}
                  setCurrentSort={setCurrentSort}
                  currentSort={currentSort}
                />
                {currentSort.value === sortOptionData[0].value && (
                  <SortOption
                    sortOptionData={dateOptionData}
                    setCurrentSort={setCurrentDate}
                    currentSort={currentDate}
                  />
                )}
              </div>
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
