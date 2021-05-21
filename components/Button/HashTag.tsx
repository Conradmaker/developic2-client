import Link from 'next/link';
import React from 'react';
import { HashTagBox } from './styles';

type HashTagPropsType = {
  name: string;
};
export default function HashTag({ name }: HashTagPropsType): JSX.Element {
  return (
    <Link href={`/discovery?tag=${name}`}>
      <HashTagBox>{`# ${name}`}</HashTagBox>
    </Link>
  );
}
