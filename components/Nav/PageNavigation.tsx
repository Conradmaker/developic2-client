import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { PageNavigationBox } from './styles';

type PageNavigationPropsType = {
  data: {
    name: string;
    link: string;
  }[];
};

export default function PageNavigation({ data }: PageNavigationPropsType): JSX.Element {
  const router = useRouter();
  return (
    <PageNavigationBox>
      <ul>
        {data.map(navItem => (
          <Link href={navItem.link} key={navItem.link + navItem.name}>
            <li className={router.asPath === navItem.link ? 'nav--active' : ''}>
              {navItem.name}
            </li>
          </Link>
        ))}
      </ul>
    </PageNavigationBox>
  );
}
