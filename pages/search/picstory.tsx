import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import BlogPicstoryList from '../../components/List/BlogPicstoryList';
import SearchPageWithNavLayout from '../../components/Nav/SearchPageNav';
import EmptyContent from '../../components/Result/EmptyContent';
import SearchResultCount from '../../components/Result/SearchResultCount';
import { SearchContentBox } from '../../components/Result/styles';
import { SearchPageData } from '../../modules/list';
import useList from '../../modules/list/hooks';
import { SearchNavData } from '../../utils/data';

export default function SearchPicstory(): JSX.Element {
  const { pageData, loadSearchListDispatch } = useList();
  const { query } = useRouter();
  useEffect(() => {
    if (query.keyword) {
      loadSearchListDispatch({ query: query.keyword, type: 'picstory' });
    }
  }, [query]);

  return (
    <SearchPageWithNavLayout>
      <SearchContentBox>
        {(pageData as SearchPageData['picstory']) &&
          (pageData as SearchPageData['picstory']).length < 1 && (
            <EmptyContent message={'검색된 픽스토리가 없습니다.'} />
          )}
        {(pageData as SearchPageData['picstory']) &&
          (pageData as SearchPageData['picstory']).length >= 1 && (
            <>
              <SearchResultCount
                searchTitle={SearchNavData[2].name}
                resultCount={(pageData as SearchPageData['picstory']).length}
              />
              <BlogPicstoryList
                searchPicstoryData={pageData as SearchPageData['picstory']}
              />
            </>
          )}
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
