import React, { useCallback, useRef, useState } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import exifr from 'exifr';
import SquareBtn from '../Button/SquareBtn';
import { ToastEditorStyle } from './styles';

type ToastEditorPropsType = {
  changeProg: (prog: 1 | 2) => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  temporarySave: (editorContent: string) => void;
};

export default function ToastEditor({
  changeProg,
  content,
  setContent,
  temporarySave,
}: ToastEditorPropsType): JSX.Element {
  const [imageList, setImageList] = useState<{ id: number; src: string }[]>([]);
  const EditorRef = useRef<null | Editor>(null);

  const onTempSubmit = () => {
    setContent(EditorRef.current?.getInstance().getHtml() as string);
    temporarySave(EditorRef.current?.getInstance().getHtml() as string);
  };
  const onFinalSubmit = () => {
    setContent(EditorRef.current?.getInstance().getHtml() as string);
    changeProg(2);
  };

  const uploadImageToServer = async (image: Blob | File) => {
    const formData = new FormData();
    formData.append('image', image);
    const res = await axios.post(`http://localhost:8000/upload/postimage/${1}`, formData);
    setImageList(imageList.concat(res.data));
    return res.data;
  };

  const updateMetaData = async (image: Blob | File, PostImageId: number) => {
    const metaData = await exifr.parse(image, { exif: true, gps: true });
    const computedMeta = {
      manufacturer: metaData.Make,
      model: metaData.Model,
      fValue: metaData.FNumber,
      resolutionX: metaData.ImageWidth,
      resolutionY: metaData.ImageHeight,
      location: `${metaData.latitude}/${metaData.longitude}`,
      exposureTime: metaData.ExposureTime,
      size: image.size,
      shutterSpeed: metaData.ShutterSpeedValue,
      ISO: metaData.ISO,
      PostImageId,
    };
    await axios.post('http://localhost:8000/upload/exif', computedMeta);
  };

  const onUpload = useCallback(async (image: Blob | File, callback) => {
    const data = await uploadImageToServer(image);
    await updateMetaData(image, data.imageId);
    EditorRef.current?.getInstance().moveCursorToEnd();
    callback(`http://localhost:8000/image/post/${data.src}`, `${data.imageId}`);
  }, []);
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
        <SquareBtn onClick={onTempSubmit}>임시저장</SquareBtn>
        <SquareBtn onClick={onFinalSubmit}>제출</SquareBtn>
      </div>
    </ToastEditorStyle>
  );
}
