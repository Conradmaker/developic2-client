/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { BlogPicstoryListContainer } from '../../components/List/styles';
import SearchPageWithNavLayout from '../../components/Layout/SearchPageNavLayout';
import useList from '../../modules/list/hooks';
import { SearchContentBox } from './post';
import BlogPistoryCard from '../../components/Card/BlogPistoryCard';
import { SearchPageData } from '../../modules/list';
import EmptyContent from '../../components/Result/EmptyContent';
import Head from 'next/head';

function PicstoryResult() {
  const { pageData } = useList();

  if (
    !(pageData as SearchPageData).picstory ||
    (pageData as SearchPageData).picstory!.length < 1
  )
    return <EmptyContent message={'검색된 픽스토리가 없습니다.'} />;

  return (
    <BlogPicstoryListContainer>
      {(pageData as SearchPageData).picstory!.map(picstoryItem => (
        <BlogPistoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
      ))}
    </BlogPicstoryListContainer>
  );
}

export default function SearchPicstory(): JSX.Element {
  const { getSearchListDispatch } = useList();
  const { query } = useRouter();

  useEffect(() => {
    if (query.keyword) {
      getSearchListDispatch({ query: query.keyword as string, type: 'picstory' });
    }
  }, [query]);

  return (
    <SearchPageWithNavLayout>
      <Head>
        <title>검색 | 픽스토리</title>
      </Head>
      <SearchContentBox>
        <PicstoryResult />
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
