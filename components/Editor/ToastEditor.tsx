import React, { useCallback, useEffect, useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import exifr from 'exifr';
import SquareBtn from '../Button/SquareBtn';
import { ToastEditorStyle } from './styles';
import { useRouter } from 'next/router';
import usePost from '../../modules/post/hooks';
import useUser from '../../modules/user/hooks';
import _delay from 'lodash/delay';
import useModal from '../../hooks/useModal';
import ConfirmModal from '../Modal/ConfirmModal';
import { useThemeState } from '../../hooks/ThemeContext';

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
  const theme = useThemeState();
  const [TempSubmitModal, toggleConfirmModal] = useModal(ConfirmModal, {
    content: '임시저장항목으로 저장하시겠습니까?',
    onConfirm: useCallback(() => {
      setContent(EditorRef.current?.getInstance().getHtml() as string);
      temporarySave(EditorRef.current?.getInstance().getHtml() as string);
      router.replace(`/user/drawer/save`);
    }, [EditorRef.current, temporarySave]),
  });

  const onFinalSubmit = useCallback(() => {
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
    await _delay(() => callback(`${data.src}`, `${data.imageId}`), 3500);
  }, []);

  useEffect(() => {
    EditorRef.current?.getInstance().setHtml(content);
  }, [content]);

  useEffect(() => {
    if (preSavePost.data) {
      if (
        router.query.postId === 'new' ||
        preSavePost.data.postId === +(router.query.postId as string)
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
