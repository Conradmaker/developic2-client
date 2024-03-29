/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import SearchPageWithNavLayout from 'components/Layout/SearchPageNavLayout';
import EmptyContent from 'components/Result/EmptyContent';
import SortOption from 'components/Tab/SortOption';
import { SearchPageData, useList } from 'modules/list';
import { PostSearchListContainer } from 'components/List/styles';
import CommonPostCard from 'components/Card/CommonPostCard';
import { searchDateOptionData, searchSortOptionData } from 'utils/data';
import { useAuth, useFetchMore } from 'hooks';
import { SearchContentBox } from 'styles/pages/search';

function PostResult({ children }: { children?: React.ReactNode }): JSX.Element {
  const { pageData } = useList();

  if (!(pageData as SearchPageData).post || (pageData as SearchPageData).post!.length < 1)
    return <EmptyContent message={'검색된 게시글이 없습니다.'} />;

  return (
    <>
      <PostSearchListContainer>
        {(pageData as SearchPageData).post!.map(postItem => (
          <CommonPostCard key={postItem.id} postData={postItem} />
        ))}
      </PostSearchListContainer>
      {children}
    </>
  );
}

export default function SearchPost(): JSX.Element {
  const { getSearchListDispatch, hasMore } = useList();
  const { query } = useRouter();
  const [currentSort, setCurrentSort] = useState(searchSortOptionData[0]);
  const [currentDate, setCurrentDate] = useState(searchDateOptionData[0]);
  const [FetchMoreTrigger, page, setPage] = useFetchMore(hasMore);
  useAuth({ replace: false });

  useEffect(() => {
    setPage(0);
  }, [query.keyword, currentSort, currentDate]);

  useEffect(() => {
    if (query.keyword) {
      getSearchListDispatch({
        query: query.keyword as string,
        sort: currentSort.value as 'popular' | 'recent',
        type: 'post',
        term: currentDate.value as 'all' | 'day' | 'week' | 'month',
        limit: 12,
        offset: page * 12,
      });
    }
  }, [page, currentSort, currentDate, query.keyword]);

  return (
    <SearchPageWithNavLayout>
      <Head>
        <title>검색 | 게시글</title>
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
        <PostResult>
          <FetchMoreTrigger />
        </PostResult>
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
