import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import React from 'react';
import TitleInput, { HashInput } from '../../components/Input/EditPageInput';
import Layout from '../../components/Layout';

const EditContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const ToastEditorWithNoSSR = dynamic(
  () => import('../../components/Editor/ToastEditor'),
  {
    ssr: false,
  }
);

export default function edit(): JSX.Element {
  return (
    <Layout>
      <EditContainer>
        <TitleInput />
        <HashInput />
        <ToastEditorWithNoSSR />
      </EditContainer>
    </Layout>
  );
}
