import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import PageLabel from '../Label/PageLabel';
import { IncompleteContainer } from './styles';

type IncompletePropsType = {
  title: string;
  desc?: string;
  width?: number;
};
export default function Incomplete({
  title = '',
  desc = '',
  width,
}: IncompletePropsType): JSX.Element {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <IncompleteContainer>
      <section>
        <PageLabel width={width} text={title} desc={desc} />
        <ul>
          <Link href="/">
            <li>홈으로</li>
          </Link>
          <li onClick={goBack}>뒤로가기</li>
        </ul>
      </section>
      <img src="/not_found.png" alt="not_found" />
    </IncompleteContainer>
  );
}
