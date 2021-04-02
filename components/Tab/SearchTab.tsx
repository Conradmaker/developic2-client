import React from 'react';
import { SearchTabBox } from './styles';

export default function SeachTab(): JSX.Element {
  return (
    <SearchTabBox>
      <a className="active" href="/">
        글
      </a>
      <a href="">작가</a>
      <a href="">해시태그</a>
    </SearchTabBox>
  );
}
