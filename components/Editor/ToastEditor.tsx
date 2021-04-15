import React, { useCallback, useRef, useState } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import exifr from 'exifr';

export default function ToastEditor(): JSX.Element {
  const [imageList, setImageList] = useState<{ id: number; src: string }[]>([]);
  const EditorRef = useRef<null | Editor>(null);

  const onSubmit = () => {
    console.dir(EditorRef.current?.getInstance().getHtml());
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
