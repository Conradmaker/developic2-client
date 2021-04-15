import React, { useCallback, useRef, useState } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';

export default function ToastEditor(): JSX.Element {
  const [imageList, setImageList] = useState<{ id: number; src: string }[]>([]);
  const EditorRef = useRef<null | Editor>(null);

  const onSubmit = () => {
    //결과물 저장
    console.dir(EditorRef.current?.getInstance().getHtml());
  };
  const uploadImageToServer = async (image: Blob | File) => {
    const formData = new FormData();
    formData.append('image', image);

    const res = await axios.post(
      `http://localhost:8000/upload/postimage/${'유저아이디'}`,
      formData
    );
    setImageList(imageList.concat(res.data));
    return res.data;
  };
  const onUpload = useCallback(async (image: Blob | File, callback) => {
    const data = await uploadImageToServer(image);
    EditorRef.current?.getInstance().moveCursorToEnd();
    callback(data.src, '대체');
  }, []);
  return (
    <>
      <Editor
        initialValue="글을 입력해주센ㅇㅁㄴㅇ"
        previewStyle="vertical"
        height="800px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        ref={EditorRef}
        hooks={{ addImageBlobHook: onUpload }}
      />
      <button onClick={onSubmit}>임시저장</button>
      <button onClick={onSubmit}>제출</button>
    </>
  );
}
