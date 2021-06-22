import React from 'react';
import { SearchListOptions } from 'utils/data';
import { SortTabBox } from './styles';

type SortTabPropsType = {
  currentSort: string;
  setCurrentSort: React.Dispatch<React.SetStateAction<string>>;
};
export default function SortTab({
  setCurrentSort,
  currentSort,
}: SortTabPropsType): JSX.Element {
  return (
    <SortTabBox>
      <ul>
        <li
          className={`list__Option ${
            currentSort === SearchListOptions.Popular ? 'active' : ''
          }`}
          onClick={() => setCurrentSort(SearchListOptions.Popular)}
        >
          인기순
        </li>
        <li
          className={`list__Option ${
            currentSort === SearchListOptions.Recent ? 'active' : ''
          }`}
          onClick={() => setCurrentSort(SearchListOptions.Recent)}
        >
          최신순
        </li>
      </ul>
    </SortTabBox>
  );
}
