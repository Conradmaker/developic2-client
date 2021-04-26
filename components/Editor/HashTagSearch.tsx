import React, { useCallback, useState } from 'react';
import { Mention, OnChangeHandlerFunc, SuggestionDataItem } from 'react-mentions';
import { EachMention, HashTagContainer, MentionsTextarea } from './styles';

export default function HashTagSearch(): JSX.Element {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const renderSuggestion: (
    suggestion: SuggestionDataItem,
    search: string,
    highlightedDisplay: React.ReactNode,
    index: number,
    focused: boolean
  ) => React.ReactNode = useCallback(
    (member, search, highlightedDisplay, index, focus) => {
      return (
        <EachMention focus={focus}>
          <span>{highlightedDisplay}</span>
        </EachMention>
      );
    },
    []
  );

  return (
    <HashTagContainer>
      <span>해시태그</span>
      <MentionsTextarea
        id="editor-chat"
        onChange={(onChange as unknown) as OnChangeHandlerFunc}
        allowSuggestionsAboveCursor
        value={value}
        singleLine
      >
        <Mention
          className="mention__box"
          trigger="#"
          appendSpaceOnAdd
          data={Array.from({ length: 5 }).map(tag => ({ id: 1, display: '11' })) || []}
          renderSuggestion={renderSuggestion}
        />
      </MentionsTextarea>
    </HashTagContainer>
  );
}
