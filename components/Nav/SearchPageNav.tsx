import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import _debounce from 'lodash/debounce';
import React, { useCallback, useState } from 'react';
import SearchInput from '../Input/SearchInput';
import TitleLabel from '../Label/TitleLabel';
import { PageWithNavContainer } from '../Layout/PageWithNavLayout';
import { PageNavigationBox } from './styles';
import { SearchNavData } from '../../utils/data';

const SearchPageWithNavContainer = styled(PageWithNavContainer)``;

export default function SearchPageNav(): JSX.Element {
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
    <SearchPageWithNavContainer>
      <div className="title">
        <TitleLabel title="검색" desc="Search" />
      </div>
      <SearchInput
        value={keyword || ''}
        onChange={onChangeKeyword}
        onKeyPress={onKeyPress}
      />
      {
        <PageNavigationBox>
          <ul>
            <Link href={`/search?keyword=${router.query.keyword}`}>
              <li
                className={router.pathname === SearchNavData[0].link ? 'nav--active' : ''}
              >
                글
              </li>
            </Link>
            <Link href={`/search/writer?keyword=${router.query.keyword}`}>
              <li
                className={router.pathname === SearchNavData[1].link ? 'nav--active' : ''}
              >
                작가
              </li>
            </Link>
            <Link href={`/search/picstory?keyword=${router.query.keyword}`}>
              <li
                className={router.pathname === SearchNavData[2].link ? 'nav--active' : ''}
              >
                픽스토리
              </li>
            </Link>
          </ul>
        </PageNavigationBox>
      }
    </SearchPageWithNavContainer>
  );
}
