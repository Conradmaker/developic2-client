import React from 'react';
import SearchInput from '../Input/SearchInput';
import { LoginModalBox, SearchModalbox, SearchModalLayout } from './styles';

type LoginModalPropsType = {
  onSearch: (keyword: string) => void;
  onClose: () => void;
  initial: string;
};

export default function SearchModal({
  onClose,
  initial = '',
}: LoginModalPropsType): JSX.Element {
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const onSearch = (keyword) => {
    console.log(keyword);
  };

  return (
    <SearchModalLayout onClick={onClickBg} className="bg">
      <SearchModalbox>
        <SearchInput onSearch={onSearch} initial={initial} />
      </SearchModalbox>
    </SearchModalLayout>
  );
}
