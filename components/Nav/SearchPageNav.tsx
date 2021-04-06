import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import SearchInput from '../Input/SearchInput';
import TitleLabel from '../Label/TitleLabel';
import { PageWithNavContainer } from '../Layout/PageWithNavLayout';
import { PageNavigationBox } from './styles';

const SearchPageWithNavContainer = styled(PageWithNavContainer)``;

export default function SearchPageNav({ value }): JSX.Element {
  // const router = useRouter();
  // const onSearch = keyword => {
  //   router.push(`/search/post?keyword=${keyword}`);
  //   console.log(router.query.keyword);
  //   const query = router.query.keyword;
  // };

  const router = useRouter();

  const onSearch = value => {
    console.log(router);
    console.log(`value: ${value}`);
    const keyword = router.query.keyword;
    console.log(`keyword: ${keyword}`);
    const pathname = router.pathname;
    console.log(pathname);
    if (pathname) {
      switch (pathname) {
        case '/search/[keyword]':
          return router.push(`/search/posts?keyword=`);
        case '/search/post':
          return router.push(`/search/post?keyword=${value}`);
        case '/search/writer':
          return router.push(`/search/writer?keyword=${value}`);
        case '/search/tag':
          return router.push(`/search/tag?keyword=${value}`);
        default:
          return;
      }
    }
  };

  return (
    <SearchPageWithNavContainer>
      <div className="title">
        <TitleLabel title="검색" desc="Search" />
      </div>
      <SearchInput onSearch={onSearch} />
      <PageNavigationBox>
        <ul>
          <Link href="/search/post" as={`/search/post/keyword=${router.query.keyword}`}>
            <li>글</li>
          </Link>
          <Link
            href="/search/writer"
            as={`/search/writer/keyword=${router.query.keyword}`}
          >
            <li>작가</li>
          </Link>
          <Link href="/search/tag" as={`/search/tag/keyword=${router.query.keyword}`}>
            <li>해시태그</li>
          </Link>
        </ul>
      </PageNavigationBox>
    </SearchPageWithNavContainer>
  );
}
