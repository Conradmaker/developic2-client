import React from 'react';
import Link from 'next/link';
import { HashTagBox } from './styles';

type HashTagPropsType = {
  name: string;
  id?: string;
};
export default function HashTag({ name = '', id }: HashTagPropsType): JSX.Element {
  return (
    <Link href={`/search/${id}?type=hashtag`}>
      <HashTagBox>{name}</HashTagBox>
    </Link>
  );
}
