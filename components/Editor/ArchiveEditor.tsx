import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import _delay from 'lodash/delay';
import React, { useCallback, useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { useUser } from 'hooks';
import SquareBtn from '../Button/SquareBtn';
import { ToastEditorStyle } from './styles';

type ArchiveEditorPropsType = {
  content: string;
  setImageList: React.Dispatch<React.SetStateAction<{ imageId: number; src: string }[]>>;
  onSubmit: (content: string) => void;
};
export default function ArchiveEditor({
  content,
  setImageList,
  onSubmit,
}: ArchiveEditorPropsType): JSX.Element {
  const { userData } = useUser();
  const EditorRef = useRef<null | Editor>(null);

  const uploadImageToServer = useCallback(async (image: Blob | File) => {
    if (!userData) return;
    const formData = new FormData();
    formData.append('image', image);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/upload/exhibitionimage/${userData.id}`,
      formData
    );
    setImageList(current => current.concat(res.data));
    return res.data;
  }, []);

  const onFinalSubmit = useCallback(() => {
    onSubmit(EditorRef.current?.getInstance().getHtml() as string);
  }, [EditorRef, onSubmit]);

  const onUpload = useCallback(
    async (image: Blob | File, callback) => {
      const data = await uploadImageToServer(image);
      EditorRef.current?.getInstance().moveCursorToEnd();
      await _delay(() => callback(`${data.src}`, `${data.imageId}`), 3500);
    },
    [userData]
  );

  return (
    <ToastEditorStyle>
      <Editor
        initialValue={content}
        previewStyle="vertical"
        height="800px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        ref={EditorRef}
        hooks={{ addImageBlobHook: onUpload }}
      />
      <div className="btn_group">
        <SquareBtn onClick={onFinalSubmit}>제출</SquareBtn>
      </div>
    </ToastEditorStyle>
  );
}
