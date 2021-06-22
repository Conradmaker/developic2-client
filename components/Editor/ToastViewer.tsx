import { Viewer } from '@toast-ui/react-editor';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useUI } from 'hooks';
import PhotoDetailModal from '../Modal/PhotoDetailModal';

type ToastViewerPropsType = {
  content: string;
};

export default function ToastViewer({ content }: ToastViewerPropsType): JSX.Element {
  const { toastOpenDispatch } = useUI();
  const contentRef = useRef<HTMLDivElement>(null);
  const imageArrRef = useRef<NodeListOf<HTMLImageElement> | []>([]);
  const [currentImageId, setCurrentImageId] = useState<null | number>(null);
  const onRightClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    toastOpenDispatch('우클릭이 방지되었습니다.');
  }, []);

  const onClickImage = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    if ((e.target as HTMLImageElement).localName === 'img') {
      setCurrentImageId(+((e.target as HTMLImageElement).alt as string));
    }
  }, []);

  const onCloseImage = useCallback(() => {
    setCurrentImageId(null);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    imageArrRef.current = contentRef.current.querySelectorAll('img');
  }, [contentRef.current]);
  return (
    <>
      <div onClick={onClickImage} onContextMenu={onRightClick} ref={contentRef}>
        <Viewer
          initialValue={content}
          hooks={{ previewBeforeHook: content => content }}
        />
      </div>
      {currentImageId && (
        <PhotoDetailModal photoId={currentImageId} onClose={onCloseImage} />
      )}
    </>
  );
}
