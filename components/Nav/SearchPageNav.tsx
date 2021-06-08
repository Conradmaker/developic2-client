import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import _debounce from 'lodash/debounce';
import React, { useCallback, useState } from 'react';
import SearchInput from '../Input/SearchInput';
import TitleLabel from '../Label/TitleLabel';
import { PageWithNavContainer } from '../Layout/PageWithNavLayout';
import Layout from '../Layout';
import SearchPageNavigation from './SearchPageNavigation';

const SearchPageWithNavContainer = styled(PageWithNavContainer)`
  color: ${({ theme }) => theme.textColor.initial};
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

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    debounce(e.target.value);
  };
  const debounce = useCallback(
    _debounce(searchValue => {
      router.push(`${router.pathname}?keyword=${searchValue}`);
    }, 500),
    [router]
  );

  return (
    <Layout>
      <SearchPageWithNavContainer>
        <div className="title">
          <TitleLabel title="검색" desc="Search" />
        </div>
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
