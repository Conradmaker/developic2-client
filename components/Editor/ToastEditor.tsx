import React, { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import _delay from 'lodash/delay';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import axios from 'axios';
import exifr from 'exifr';
import { Editor } from '@toast-ui/react-editor';
import SquareBtn from '../Button/SquareBtn';
import { ToastEditorStyle } from './styles';
import ConfirmModal from '../Modal/ConfirmModal';
import { useModal, usePost, useUser } from 'hooks';
import { useState } from 'react';

type ToastEditorPropsType = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setImageList: React.Dispatch<React.SetStateAction<{ imageId: number; src: string }[]>>;
  temporarySave: (editorContent: string) => void;
};

export default function ToastEditor({
  content,
  setContent,
  temporarySave,
  setImageList,
}: ToastEditorPropsType): JSX.Element {
  const { userData } = useUser();
  const { preSavePost } = usePost();
  const router = useRouter();
  const EditorRef = useRef<null | Editor>(null);
  const [saveType, setSaveType] = useState<'tempSave' | 'submit' | ''>('');
  const [TempSubmitModal, toggleConfirmModal] = useModal(ConfirmModal, {
    content: '임시저장항목으로 저장하시겠습니까?',
    onConfirm: useCallback(() => {
      setSaveType('tempSave');
      setContent(EditorRef.current?.getInstance().getHtml() as string);
      temporarySave(EditorRef.current?.getInstance().getHtml() as string);
    }, [EditorRef.current, temporarySave]),
  });

  const onFinalSubmit = useCallback(() => {
    setSaveType('submit');
    setContent(EditorRef.current?.getInstance().getHtml() as string);
    temporarySave(EditorRef.current?.getInstance().getHtml() as string);
  }, [EditorRef.current, temporarySave]);

  const uploadImageToServer = useCallback(async (image: Blob | File) => {
    if (!userData) return;
    const formData = new FormData();
    formData.append('image', image);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/upload/postimage/${userData.id}`,
      formData
    );
    setImageList(current => current.concat(res.data));
    return res.data;
  }, []);

  const updateMetaData = useCallback(async (image: Blob | File, PostImageId: number) => {
    const metaData = await exifr.parse(image, { exif: true, gps: true });
    const computedMeta = {
      manufacturer: metaData ? metaData.Make : null,
      model: metaData ? metaData.Model : null,
      fValue: metaData ? metaData.FNumber : null,
      resolutionX: metaData ? metaData.ImageWidth : null,
      resolutionY: metaData ? metaData.ImageHeight : null,
      location: `${metaData ? metaData.latitude : null}/${
        metaData ? metaData.longitude : null
      }`,
      exposureTime: metaData ? metaData.ExposureTime : null,
      size: image.size,
      shutterSpeed: metaData ? metaData.ShutterSpeedValue : null,
      ISO: metaData ? metaData.ISO : null,
      PostImageId,
    };
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_HOST}/upload/exif`, computedMeta);
  }, []);

  const onUpload = useCallback(async (image: Blob | File, callback) => {
    const data = await uploadImageToServer(image);
    await updateMetaData(image, data.imageId);
    EditorRef.current?.getInstance().moveCursorToEnd();
    await _delay(() => callback(`${data.src}`, `${data.imageId}`), 4000);
  }, []);

  useEffect(() => {
    EditorRef.current?.getInstance().setHtml(content);
  }, [content]);

  useEffect(() => {
    if (preSavePost.data) {
      if (saveType === 'tempSave') {
        router.replace(`/user/drawer/save`);
      } else if (
        (router.query.postId === 'new' && saveType === 'submit') ||
        (preSavePost.data.postId === +(router.query.postId as string) &&
          saveType === 'submit')
      )
        router.replace(`/edit/info/${preSavePost.data.postId}`);
    }
  }, [preSavePost.data, router.query]);

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
      <TempSubmitModal />
    </>
  );
}
