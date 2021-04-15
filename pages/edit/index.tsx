import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
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
  const router = useRouter();
  useEffect(() => {
    return () => {
      console.dir(router);
    };
  }, []);
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
