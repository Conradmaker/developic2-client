/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { BlogPicstoryListContainer } from 'components/List/styles';
import SearchPageWithNavLayout from 'components/Layout/SearchPageNavLayout';
import { SearchContentBox } from 'styles/pages/search';
import BlogPistoryCard from 'components/Card/BlogPistoryCard';
import { SearchPageData, useList } from 'modules/list';
import EmptyContent from 'components/Result/EmptyContent';
import { useAuth, useFetchMore } from 'hooks';

function PicstoryResult({ children }: { children?: React.ReactNode }) {
  const { pageData } = useList();

  if (
    !(pageData as SearchPageData).picstory ||
    (pageData as SearchPageData).picstory!.length < 1
  )
    return <EmptyContent message={'검색된 픽스토리가 없습니다.'} />;

  return (
    <>
      <BlogPicstoryListContainer>
        {(pageData as SearchPageData).picstory!.map(picstoryItem => (
          <BlogPistoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
        ))}
      </BlogPicstoryListContainer>
      {children}
    </>
  );
}

export default function SearchPicstory(): JSX.Element {
  useAuth({ replace: false });
  const { getSearchListDispatch, hasMore } = useList();
  const { query } = useRouter();
  const [FetchMoreTrigger, page, setPage] = useFetchMore(hasMore);

  useEffect(() => {
    setPage(0);
  }, [query.keyword]);

  useEffect(() => {
    if (query.keyword) {
      getSearchListDispatch({
        query: query.keyword as string,
        type: 'picstory',
        limit: 12,
        offset: page * 12,
      });
    }
  }, [query.keyword]);

  return (
    <SearchPageWithNavLayout>
      <Head>
        <title>검색 | 픽스토리</title>
      </Head>
      <SearchContentBox>
        <PicstoryResult>
          <FetchMoreTrigger />
        </PicstoryResult>
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
