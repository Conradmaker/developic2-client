import React from 'react';
import { SearchPageNavigationContainer } from './styles';
import { SearchNavData } from 'utils/data';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SearchPageNavigation(): JSX.Element {
  const router = useRouter();

  return (
    <SearchPageNavigationContainer>
      {SearchNavData.map(searchNav => (
        <Link
          href={
            !router.query.keyword
              ? `${searchNav.link}?keyword=`
              : `${searchNav.link}?keyword=${router.query.keyword}`
          }
          key={searchNav.link}
        >
          <li className={router.pathname === searchNav.link ? 'nav--active' : ''}>
            {searchNav.name}
          </li>
        </Link>
      ))}
    </SearchPageNavigationContainer>
  );
}
