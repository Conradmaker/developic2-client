import React, { useEffect, useRef, useState } from 'react';
import PhotoDetailModal from '../Modal/PhotoDetailModal';
import { PostContentViewerContainer } from './styles';
type PostContentViewerPropsType = {
  content: string;
};
export default function PostContentViewer({
  content,
}: PostContentViewerPropsType): JSX.Element {
  const contentRef = useRef<HTMLElement>(null);
  const imageArrRef = useRef<NodeListOf<HTMLImageElement> | []>([]);
  const [currentImageId, setCurrentImageId] = useState<null | number>(null);
  const onRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('우클릭이 방지되었습니다.');
  };
  const onClickImage = (e: React.MouseEvent<HTMLImageElement>) => {
    if ((e.target as HTMLImageElement).localName === 'img') {
      setCurrentImageId(+((e.target as HTMLImageElement).alt as string));
    }
  };
  const onCloseImage = () => {
    setCurrentImageId(null);
  };
  useEffect(() => {
    if (!contentRef.current) return;
    imageArrRef.current = contentRef.current.querySelectorAll('img');
  }, [contentRef.current]);
  return (
    <>
      <PostContentViewerContainer
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: content }}
        onContextMenu={onRightClick}
        onSelect={e => e.preventDefault()}
        onClick={onClickImage}
      ></PostContentViewerContainer>
      {currentImageId && (
        <PhotoDetailModal photoId={currentImageId} onClose={onCloseImage} />
      )}
    </>
  );
}
