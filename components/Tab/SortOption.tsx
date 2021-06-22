import React, { useCallback, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { SearhSortOptionContainer } from './styles';
import { useOutsideClick } from 'hooks';

type SortOptionPropsType = {
  sortOptionData: { name: string; value: string }[];
  setCurrentSort: React.Dispatch<React.SetStateAction<{ name: string; value: string }>>;
  currentSort: { name: string; value: string };
};

export default function SortOption({
  sortOptionData,
  setCurrentSort,
  currentSort,
}: SortOptionPropsType): JSX.Element {
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  const [isSortActive, setIsSortActive] = useOutsideClick(sortDropdownRef, false);
  const onClickSortBtn = useCallback(() => {
    setIsSortActive(prev => !prev);
  }, []);

  return (
    <SearhSortOptionContainer>
      <div className="option__btn" onClick={onClickSortBtn}>
        <span>{currentSort.name}</span>
        <MdKeyboardArrowDown />
      </div>
      <div
        className={`sort__dropdown dropdown ${isSortActive ? 'sort-active' : ''}`}
        ref={sortDropdownRef}
      >
        <ul>
          {sortOptionData.map(sortOption => (
            <li
              key={sortOption.value}
              onClick={() => setCurrentSort(sortOption)}
              className={`${
                currentSort.value === sortOption.value ? 'item-active' : ' '
              }`}
            >
              {sortOption.name}
            </li>
          ))}
        </ul>
      </div>
    </SearhSortOptionContainer>
  );
}
