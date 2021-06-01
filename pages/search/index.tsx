import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PostCardList from '../../components/List/CommonPostCardList';
import SearchPageWithNavLayout from '../../components/Nav/SearchPageNav';
import EmptyContent from '../../components/Result/EmptyContent';
import SearchResultCount from '../../components/Result/SearchResultCount';
import { SearchContentBox } from '../../components/Result/styles';
import SortTab from '../../components/Tab/SortTab';
import { SearchPageData } from '../../modules/list';
import useList from '../../modules/list/hooks';
import { SearchListOptions, SearchNavData } from '../../utils/data';

export default function SearchPost(): JSX.Element {
  const { pageData, loadSearchListDispatch } = useList();
  const [currentSort, setCurrentSort] = useState(SearchListOptions.Popular);
  const { query } = useRouter();

  useEffect(() => {
    if (query.keyword && currentSort === SearchListOptions.Popular) {
      loadSearchListDispatch({ query: query.keyword, sort: 'popular', type: 'post' });
    } else if (query.keyword && currentSort === SearchListOptions.Recent) {
      loadSearchListDispatch({ query: query.keyword, sort: 'recent', type: 'post' });
    }
  }, [query, currentSort]);
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
              <SortTab currentSort={currentSort} setCurrentSort={setCurrentSort} />
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
