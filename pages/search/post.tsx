/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SearchPageWithNavLayout from '../../components/Layout/SearchPageNavLayout';
import EmptyContent from '../../components/Result/EmptyContent';
import SortOption from '../../components/Tab/SortOption';
import { SearchPageData } from '../../modules/list';
import useList from '../../modules/list/hooks';
import { PostSearchListContainer } from '../../components/List/styles';
import CommonPostCard from '../../components/Card/CommonPostCard';
import { searchDateOptionData, searchSortOptionData } from '../../utils/data';
import Head from 'next/head';

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

function PostResult(): JSX.Element {
  const { pageData } = useList();

  if (!(pageData as SearchPageData).post || (pageData as SearchPageData).post!.length < 1)
    return <EmptyContent message={'검색된 게시글이 없습니다.'} />;

  return (
    <PostSearchListContainer>
      {(pageData as SearchPageData).post!.map(postItem => (
        <CommonPostCard key={postItem.id} postData={postItem} />
      ))}
    </PostSearchListContainer>
  );
}

export default function SearchPost(): JSX.Element {
  const { getSearchListDispatch } = useList();
  const { query } = useRouter();

  const [currentSort, setCurrentSort] = useState(searchSortOptionData[0]);
  const [currentDate, setCurrentDate] = useState(searchDateOptionData[0]);

  useEffect(() => {
    if (query.keyword) {
      getSearchListDispatch({
        query: query.keyword as string,
        sort: currentSort.value as 'popular' | 'recent',
        type: 'post',
        term: currentDate.value as 'all' | 'day' | 'week' | 'month',
      });
    }
  }, [query, currentSort, currentDate]);

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
        <PostResult />
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
