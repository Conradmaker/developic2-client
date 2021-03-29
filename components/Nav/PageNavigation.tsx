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
  console.log(router);
  return (
    <PageNavigationBox>
      <ul>
        {data.map(v => (
          <Link href={v.link} key={v.link + v.name}>
            <li className={router.asPath === v.link ? 'nav--active' : ''}>{v.name}</li>
          </Link>
        ))}
      </ul>
    </PageNavigationBox>
  );
}
