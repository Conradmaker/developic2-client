import React from 'react';
import { SearchCountBox } from './styles';

type SearchResultCountPropsType = {
  searchTitle: string;
  resultCount: number | boolean;
};
export default function SearchResultCount({
  searchTitle,
  resultCount,
}: SearchResultCountPropsType): JSX.Element {
  return (
    <SearchCountBox>
      {searchTitle} 검색 결과 {resultCount}건
    </SearchCountBox>
  );
}
