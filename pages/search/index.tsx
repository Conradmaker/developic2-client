import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PostCardList from '../../components/List/CommonPostCardList';
import SearchPageWithNavLayout from '../../components/Nav/SearchPageNav';
import EmptyContent from '../../components/Result/EmptyContent';
import SearchResultCount from '../../components/Result/SearchResultCount';
import SortOption from '../../components/Tab/SortOption';
import { SearchPageData } from '../../modules/list';
import useList from '../../modules/list/hooks';
import { SearchNavData } from '../../utils/data';

export const sortOptionData = [
  { name: '인기순', value: 'popular' },
  { name: '최신순', value: 'recent' },
];

export const dateOptionData = [
  { name: '모든 기간', value: 'all' },
  { name: '최근 24시간', value: 'day' },
  { name: '최근 1주일', value: 'week' },
  { name: '최근 1개월', value: 'month' },
];

export const SearchContentBox = styled.div`
  .sort-option {
    display: flex;
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.fontSize.base};
    position: relative;
    margin-bottom: 20px;
    & > div:first-of-type {
      margin-right: 15px;
    }
  }
`;

export default function SearchPost(): JSX.Element {
  const { pageData, loadSearchListDispatch } = useList();
  const [currentSort, setCurrentSort] = useState(sortOptionData[0]);
  const { query } = useRouter();

  // const [currentSort, setCurrentSort] = useState(sortOptionData[0]);
  const [currentDate, setCurrentDate] = useState(dateOptionData[0]);

  useEffect(() => {
    if (query.keyword) {
      loadSearchListDispatch({
        query: query.keyword,
        sort: currentSort.value as 'popular' | 'recent',
        type: 'post',
        term: currentDate.value as 'all' | 'day' | 'week' | 'month',
      });
    }
  }, [query, currentSort, currentDate]);

  return (
    <SearchPageWithNavLayout>
      <SearchContentBox>
        {(pageData as SearchPageData['post']) &&
          (pageData as SearchPageData['post']).length < 1 && (
            <EmptyContent message={'검색된 글이 없습니다.'} />
          )}
        {(pageData as SearchPageData['post']) &&
          (pageData as SearchPageData['post']).length >= 1 && (
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
                searchTitle={SearchNavData[0].name}
                resultCount={(pageData as SearchPageData['post']).length}
              />
              <PostCardList searchPostListData={pageData as SearchPageData['post']} />
            </>
          )}
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
