import React, { useCallback, useRef, useState } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import exifr from 'exifr';
import SquareBtn from '../Button/SquareBtn';
import { ToastEditorStyle } from './styles';
import useConfirmModal from '../../hooks/useConfirmModal';
import { useRouter } from 'next/router';

type ToastEditorPropsType = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  temporarySave: (editorContent: string) => void;
};

export default function ToastEditor({
  content,
  setContent,
  temporarySave,
}: ToastEditorPropsType): JSX.Element {
  const router = useRouter();
  const [imageList, setImageList] = useState<{ id: number; src: string }[]>([]);
  const EditorRef = useRef<null | Editor>(null);

  const onTempSubmit = async () => {
    setContent(EditorRef.current?.getInstance().getHtml() as string);
    temporarySave(EditorRef.current?.getInstance().getHtml() as string);
    router.replace(`/user/drawer/save`);
  };
  const onFinalSubmit = async () => {
    setContent(EditorRef.current?.getInstance().getHtml() as string);
    const postId = await temporarySave(
      EditorRef.current?.getInstance().getHtml() as string
    );
    router.push(`/edit/info/${postId}`);
  };
  const [confirmModalOpen, toggleConfirmModal, ConfirmModal] = useConfirmModal(
    onTempSubmit,
    '임시저장항목으로 저장하시겠습니까?'
  );

  const uploadImageToServer = async (image: Blob | File) => {
    const formData = new FormData();
    formData.append('image', image);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/upload/postimage/${1}`,
      formData
    );
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
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_HOST}/upload/exif`, computedMeta);
  };

  const onUpload = useCallback(async (image: Blob | File, callback) => {
    const data = await uploadImageToServer(image);
    await updateMetaData(image, data.imageId);
    EditorRef.current?.getInstance().moveCursorToEnd();
    callback(
      `process.env.NEXT_PUBLIC_SERVER_HOST/image/post/${data.src}`,
      `${data.imageId}`
    );
  }, []);
  return (
    <>
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
          <SquareBtn onClick={toggleConfirmModal}>임시저장</SquareBtn>
          <SquareBtn onClick={onFinalSubmit}>제출</SquareBtn>
        </div>
      </ToastEditorStyle>
      {confirmModalOpen && <ConfirmModal />}
    </>
  );
}
