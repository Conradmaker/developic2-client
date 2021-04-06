import React from 'react';
import { MdSearch } from 'react-icons/md';
import { SearchInputBox } from './styles';

type SearchInputPropsType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function SearchInput({
  onChange,
  value,
}: SearchInputPropsType): JSX.Element {
  return (
    <SearchInputBox>
      <input
        placeholder="검색어를 입력하세요"
        onChange={onChange}
        value={value}
        autoFocus
      />
      <MdSearch />
    </SearchInputBox>
  );
}
