import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MdSearch } from 'react-icons/md';
import useInput from './useInput';
import useToggle from './useToggle';

const SearchInputBox = styled.div<{ focus: boolean }>`
  border: 1px solid ${({ theme }) => theme.textColor.initial};
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0.75em;
  margin-bottom: 3em;
  transition: all 0.15s ease-in;
  max-width: 50%;
  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.textColor.initial};
    margin-right: 0.5em;
    transition: all 0.125s ease-in;
  }
  input {
    font-size: ${({ theme }) => theme.fontSize.medium};
    flex: 1;
    display: block;
    line-height: 25px;
    height: 25px;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    transition: all 0.125s ease-in;
    &::placeholder {
      color: ${({ theme }) => theme.grayScale[2]};
    }
  }
  ${props =>
    props.focus &&
    `border: 1px solid black;
      svg {
        fill: black;
      }
      input {
        color: black;
      }
    `}
`;

type SearchInputPropsType = {
  onSearch: (value: string) => void;
};
export default function SearchInput({ onSearch }: SearchInputPropsType): JSX.Element {
  const [focus, toggleFocus] = useToggle(false);
  const inputRef = useRef<HTMLInputElement>(null);
  //  const [value, onChange] = useInput(initial);

  const localStorage =
    typeof window !== 'undefined'
      ? JSON.parse(window.localStorage.getItem('value'))
      : null;
  console.log(`localStorage: ${localStorage}`);

  const [value, setValue] = useState(localStorage);

  const onChange = e => {
    console.log(`e: ${e.target.value}`);
    setValue(e.target.value);
  };

  const onClick = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const handleOnSeach = (value: string) => {
    onSearch(value);
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  };

  useEffect(() => {
    console.log(`vvv: ${value}`);
    window.localStorage.setItem('value', JSON.stringify(value));
    handleOnSeach(value);
  }, [value]);

  return (
    <SearchInputBox focus={focus} onClick={onClick}>
      <MdSearch onClick={handleOnSeach} />
      <input
        placeholder="검색어를 입력하세요"
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        onKeyPress={onKeyPress}
        ref={inputRef}
        onChange={onChange}
        value={value}
        autoFocus
      />
    </SearchInputBox>
  );
}
