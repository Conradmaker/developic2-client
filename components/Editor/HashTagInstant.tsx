import React, { useCallback, useEffect, useState } from 'react';
import _debounce from 'lodash/debounce';
import { addHashAPI, getHashAPI } from '../../utils/fakeApi';
import { HashInputContainer } from '../Input/EditPageInput';
import { HashTagSearchContainer } from './styles';

type SearchListPropsType = {
  resultList: { id: number; name: string }[];
  addTagList: (tag: { id: number; name: string }) => void;
};
function SearchList({ resultList, addTagList }: SearchListPropsType) {
  return (
    <ul className="result__list">
      {resultList.map(tag => (
        <li key={tag.id} onClick={() => addTagList(tag)}>
          {tag.name}
        </li>
      ))}
    </ul>
  );
}

type HashTagInstantPropsType = {
  setTagList: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;
  tagList: {
    id: number;
    name: string;
  }[];
};
export default function HashTagInstant({
  tagList,
  setTagList,
}: HashTagInstantPropsType): JSX.Element {
  const [instantMode, setInstantMode] = useState(false);
  const [tagValue, setTagValue] = useState('');
  const [searchResult, setSearchResult] = useState<{ id: number; name: string }[]>([]);

  const onChangeTagValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = useCallback(
    _debounce(async (keyword: string) => {
      const resultData = await getHashAPI(keyword.replace('#', ''));
      setSearchResult(resultData);
    }, 500),
    []
  );

  const onAddTag = async () => {
    if (tagList.findIndex(tag => tag.name === tagValue.replace('#', '')) !== -1)
      return window.alert('이미 적용된 태그입니다.');

    const tag = await addHashAPI(tagValue.replace('#', ''));
    setTagList(tagList.concat(tag));
    setTagValue('');
  };

  const onRemoveTag = (name: string) => {
    setTagList(tagList.filter(tag => tag.name !== name));
  };

  const onKeypress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (tagValue.replace('#', '').trim() === '')
        return window.alert('올바른 태그를 입력해주세요.');
      onAddTag();
      setInstantMode(false);
    } else if (e.key === '#') {
      setInstantMode(true);
    }
  };

  const onClickAddTag = (tag: { id: number; name: string }) => {
    setTagList(tagList.concat(tag));
    setTagValue('');
    setInstantMode(false);
  };

  useEffect(() => {
    const clickEvent = (e: MouseEvent) => {
      if ((e.target as HTMLBodyElement).tagName !== 'LI') {
        setInstantMode(false);
        setTagValue('');
      }
    };
    document.body.addEventListener('click', clickEvent);
    return () => {
      document.body.removeEventListener('click', clickEvent);
    };
  }, []);

  return (
    <HashTagSearchContainer>
      <HashInputContainer>
        <span>해시태그</span>

        <input
          placeholder="#를 통해 구분해 주세요."
          type="text"
          onChange={onChangeTagValue}
          value={tagValue}
          onKeyPress={onKeypress}
        />
        {instantMode && (
          <SearchList resultList={searchResult} addTagList={onClickAddTag} />
        )}
      </HashInputContainer>
      <ul>
        {tagList.map(tag => (
          <li key={tag.id} onClick={() => onRemoveTag(tag.name)}>
            {tag.name}
          </li>
        ))}
      </ul>
      {tagList.length !== 0 && <p>태그를 눌러 삭제</p>}
    </HashTagSearchContainer>
  );
}
