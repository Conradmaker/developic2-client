import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import _debounce from 'lodash/debounce';
import React, { useCallback, useState } from 'react';
import SearchInput from '../Input/SearchInput';
import TitleLabel from '../Label/TitleLabel';
import { PageWithNavContainer } from './PageWithNavLayout';
import Layout from '.';
import SearchPageNavigation from '../Nav/SearchPageNavigation';

const SearchPageWithNavContainer = styled(PageWithNavContainer)`
  color: ${({ theme }) => theme.textColor.initial};
  .input__search {
    margin: 20px 0;
  }
  .title__label {
    margin-top: 10px;
  }
`;

type SearchPageWithNavPropsType = {
  children: React.ReactNode;
};
export default function SearchPageWithNavLayout({
  children,
}: SearchPageWithNavPropsType): JSX.Element {
  const router = useRouter();
  const [keyword, setKeyword] = useState(router.query.keyword as string);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const debounce = useCallback(
    _debounce(searchValue => {
      router.push(`${router.pathname}?keyword=${searchValue}`);
    }, 500),
    [router.pathname]
  );

  const onChangeKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    debounce(e.target.value);
  }, []);

  return (
    <Layout>
      <SearchPageWithNavContainer>
        <TitleLabel title="검색" desc="Search" />
        <SearchInput
          value={keyword || ''}
          onChange={onChangeKeyword}
          onKeyPress={onKeyPress}
        />
        <SearchPageNavigation />
        {children}
      </SearchPageWithNavContainer>
    </Layout>
  );
}
