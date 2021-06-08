import React from 'react';
import { MdSearch } from 'react-icons/md';
import { useThemeState } from '../../hooks/ThemeContext';
import { SearchInputBox } from './styles';

type SearchInputPropsType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export default function SearchInput({
  onKeyPress,
  onChange,
  value,
}: SearchInputPropsType): JSX.Element {
  const currentTheme = useThemeState();

  return (
    <SearchInputBox currentTheme={currentTheme}>
      <input
        placeholder="검색어를 입력해주세요."
        onChange={onChange}
        value={value}
        autoFocus
        onKeyPress={onKeyPress}
      />
      <MdSearch />
    </SearchInputBox>
  );
}
