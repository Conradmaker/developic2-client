import styled from '@emotion/styled';
import React from 'react';
import dynamic from 'next/dynamic';
import TitleInput from '../Input/EditPageInput';
import HashTagInstant from '../Editor/HashTagInstant';
const EditContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const ToastEditorWithNoSSR = dynamic(
  () => import('../../components/Editor/ToastEditor'),
  {
    ssr: false,
  }
);

type EditPostPropsType = {
  changeProg: (prog: 1 | 2) => void;
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
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  temporarySave: (editorContent: string) => void;
};
export default function EditPost({
  changeProg,
  setTagList,
  tagList,
  title,
  setTitle,
  content,
  setContent,
  temporarySave,
}: EditPostPropsType): JSX.Element {
  return (
    <EditContainer>
      <TitleInput title={title} setTitle={setTitle} />
      <HashTagInstant setTagList={setTagList} tagList={tagList} />
      <ToastEditorWithNoSSR
        changeProg={changeProg}
        content={content}
        setContent={setContent}
        temporarySave={temporarySave}
      />
    </EditContainer>
  );
}
