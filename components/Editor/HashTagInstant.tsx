import React, { useCallback, useEffect, useState } from 'react';
import _debounce from 'lodash/debounce';
import { HashInputContainer } from '../Input/EditPageInput';
import { HashTagSearchContainer } from './styles';
import { Hashtag } from '../../modules/post';
import usePost from '../../modules/post/hooks';
import useUI from '../../modules/ui/hooks';

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
  setTagList: React.Dispatch<React.SetStateAction<Hashtag[]>>;
  tagList: Hashtag[];
};
export default function HashTagInstant({
  tagList,
  setTagList,
}: HashTagInstantPropsType): JSX.Element {
  const [instantMode, setInstantMode] = useState(false);
  const [tagValue, setTagValue] = useState('');
  const {
    searchHashtagDispatch,
    hashtagSearch,
    createHashtag,
    createHashtagDispatch,
  } = usePost();
  const { toastOpenDispatch } = useUI();

  const onChangeTagValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
    debouncedSearch(e.target.value);
  }, []);

  const debouncedSearch = useCallback(
    _debounce((keyword: string) => {
      searchHashtagDispatch(keyword.replace('#', ''));
    }, 500),
    []
  );

  const onAddTag = useCallback(() => {
    if (tagList.findIndex(tag => tag.name === tagValue.replace('#', '')) !== -1)
      return toastOpenDispatch('이미 적용된 태그입니다.');
    createHashtagDispatch(tagValue.replace('#', ''));
    setTagValue('');
  }, [tagList, tagValue]);

  const onRemoveTag = useCallback((name: string) => {
    setTagList(tagList => tagList.filter(tag => tag.name !== name));
  }, []);

  const onKeypress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (tagValue.replace('#', '').trim() === '')
          return toastOpenDispatch('올바른 태그를 입력해주세요.');
        onAddTag();
        setInstantMode(false);
      } else if (e.key === '#') {
        setInstantMode(true);
      }
    },
    [tagValue]
  );

  const onClickAddTag = useCallback(
    (tag: Hashtag) => {
      console.log(tag, tagList);
      if (tagList.findIndex(tagItem => tagItem.name === tag.name) !== -1)
        return toastOpenDispatch('이미 적용된 태그입니다.');
      setTagList(tagList.concat(tag));
      setTagValue('');
      setInstantMode(false);
    },
    [tagList, tagValue]
  );

  useEffect(() => {
    if (createHashtag.data) {
      setTagList([...tagList, createHashtag.data]);
    }
  }, [createHashtag.data]);

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
          <SearchList resultList={hashtagSearch.data || []} addTagList={onClickAddTag} />
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
