import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import styled from '@emotion/styled';
import HashTagInstant from '../../../components/Editor/HashTagInstant';
import TitleInput from '../../../components/Input/EditPageInput';
import { getTempPostContent, postPreSave } from '../../../utils/fakeApi';
import useUser from '../../../modules/user/hooks';
const EditContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const ToastEditorWithNoSSR = dynamic(
  () => import('../../../components/Editor/ToastEditor'),
  {
    ssr: false,
  }
);
export default function edit(): JSX.Element {
  const { userData } = useUser();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [tagList, setTagList] = useState<{ id: number; name: string }[]>([]);
  const [content, setContent] = useState('글을 입력해주세요.');
  const temporarySave = async (editorContent: string) => {
    const result = await postPreSave({
      title,
      tagList: tagList.map(tag => tag.id),
      content: editorContent,
      UserId: userData.id,
      PostId: router.query.postId === 'new' ? null : router.query.postId,
    });
    return result.postId;
  };

  //NOTE:FAKE
  const getTemp = async () => {
    const data = await getTempPostContent(router.query.postId);
    setTitle(data.title);
    setContent(data.content);
    setTagList(data.tagList);
  };
  useEffect(() => {
    if (!userData.id) router.replace('/');
    if (router.query.postId === 'new') return; //새로만들때
    if (router.query.postId) {
      getTemp();
    }
  }, [router]);
  return (
    <Layout>
      <EditContainer>
        <TitleInput title={title} setTitle={setTitle} />
        <HashTagInstant setTagList={setTagList} tagList={tagList} />
        <ToastEditorWithNoSSR
          content={content}
          setContent={setContent}
          temporarySave={temporarySave}
        />
      </EditContainer>
    </Layout>
  );
}
