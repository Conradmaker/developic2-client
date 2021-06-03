import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import PageLabel from '../Label/PageLabel';
import { IncompleteContainer } from './styles';

type IncompletePropsType = {
  title: string;
  desc?: string;
  type?: 'error' | 'notData' | 'prepare';
  width?: number;
};
export default function Incomplete({
  title = '',
  desc = '',
  type = 'error',
  width,
}: IncompletePropsType): JSX.Element {
  const router = useRouter();
  const goBack = () => {
    if (type === 'error') return router.reload();
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
          <li onClick={goBack}>{type === 'error' ? '새로고침' : '뒤로가기'}</li>
        </ul>
      </section>
      {type === 'error' && <img src="/not_found.png" alt="not_found" />}
      {type === 'notData' && <img src="/not_data.png" alt="not_data" />}
      {type === 'prepare' && <img src="/prepare.png" alt="prepare" />}
    </IncompleteContainer>
  );
}
