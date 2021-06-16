/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SearchContentBox } from './post';
import { UserCardListContainer } from '../../components/List/styles';
import SearchPageWithNavLayout from '../../components/Layout/SearchPageNavLayout';
import EmptyContent from '../../components/Result/EmptyContent';
import SortOption from '../../components/Tab/SortOption';
import { SearchPageData } from '../../modules/list';
import useList from '../../modules/list/hooks';
import UserInfoCard from '../../components/Card/UserInfoCard';
import { searchDateOptionData, searchSortOptionData } from '../../utils/data';
import Head from 'next/head';

function SearchResult(): JSX.Element {
  const { pageData } = useList();

  if (
    !(pageData as SearchPageData).writer ||
    (pageData as SearchPageData).writer!.length < 1
  )
    return <EmptyContent message={'검색된 작가가 없습니다.'} />;

  return (
    <>
      <UserCardListContainer>
        {(pageData as SearchPageData).writer!.map(userInfoItem => (
          <UserInfoCard key={userInfoItem.id} userInfoData={userInfoItem} />
        ))}
      </UserCardListContainer>
    </>
  );
}

export default function SearchWriter(): JSX.Element {
  const { getSearchListDispatch } = useList();
  const { query } = useRouter();
  const [currentSort, setCurrentSort] = useState(searchSortOptionData[0]);
  const [currentDate, setCurrentDate] = useState(searchDateOptionData[0]);

  useEffect(() => {
    if (query.keyword) {
      getSearchListDispatch({
        query: query.keyword as string,
        sort: currentSort.value as 'popular' | 'recent',
        limit: 12,
        type: 'writer',
        term: currentDate.value as 'all' | 'day' | 'week' | 'month',
      });
    }
  }, [query, currentSort, currentDate]);

  return (
    <SearchPageWithNavLayout>
      <Head>
        <title>검색 | 작가</title>
      </Head>
      <SearchContentBox>
        <div className="sort-option">
          <SortOption
            sortOptionData={searchSortOptionData}
            setCurrentSort={setCurrentSort}
            currentSort={currentSort}
          />
          {currentSort.value === searchSortOptionData[0].value && (
            <SortOption
              sortOptionData={searchDateOptionData}
              setCurrentSort={setCurrentDate}
              currentSort={currentDate}
            />
          )}
        </div>
        <SearchResult />
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
