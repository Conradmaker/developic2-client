import React from 'react';
import { Viewer } from '@toast-ui/react-editor';

type ToastViewerPropsType = {
  contentData: string;
};
export default function ToastViewer({ contentData }: ToastViewerPropsType): JSX.Element {
  return (
    <>
      <Viewer initialValue={contentData} />
    </>
  );
}
