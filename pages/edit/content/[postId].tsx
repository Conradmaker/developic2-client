import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import styled from '@emotion/styled';
import HashTagInstant from '../../../components/Editor/HashTagInstant';
import TitleInput from '../../../components/Input/EditPageInput';
import useUser from '../../../modules/user/hooks';
import usePost from '../../../modules/post/hooks';
import Head from 'next/head';
const EditContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
  }
`;

const ToastEditorWithNoSSR = dynamic(
  () => import('../../../components/Editor/ToastEditor'),
  {
    ssr: false,
  }
);

export default function edit(): JSX.Element {
  const { tempPost, postPreSaveDispatch, getTempPostDispatch } = usePost();
  const { userData } = useUser();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [tagList, setTagList] = useState<{ id: number; name: string }[]>([]);
  const [imageList, setImageList] = useState<{ imageId: number; src: string }[]>([]);
  const [content, setContent] = useState('글을 입력해주세요.');

  const temporarySave = React.useCallback(
    (editorContent: string) => {
      if (!userData) return;
      const result = {
        title,
        tagList: tagList.map(tag => tag.id),
        content: editorContent,
        UserId: userData.id,
        PostId: router.query.postId === 'new' ? null : (router.query.postId as string),
        imageList: imageList.map(image => image.imageId),
      };
      postPreSaveDispatch(result);
    },
    [title, tagList, imageList]
  );

  useEffect(() => {
    if (!userData) router.replace('/');
    if (router.query.postId === 'new') return;
    if (router.query.postId) {
      getTempPostDispatch(router.query.postId as string);
    }
  }, [router.query, userData]);

  useEffect(() => {
    if (!tempPost.data) return;
    setTitle(tempPost.data.title);
    setContent(tempPost.data.content);
    setTagList(tempPost.data.tagList);
  }, [tempPost.data]);

  useEffect(() => {
    const filter = ['win16', 'win32', 'win64', 'mac', 'macintel', 'macm1'];
    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
      alert('모바일환경에서는 글쓰기에 최적화되어 있지 않습니다.');
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>글쓰기 | {!tempPost.data ? '새글쓰기' : tempPost.data.title}</title>
      </Head>
      <EditContainer>
        <TitleInput title={title} setTitle={setTitle} />
        <HashTagInstant setTagList={setTagList} tagList={tagList} />
        <ToastEditorWithNoSSR
          content={content}
          setContent={setContent}
          setImageList={setImageList}
          temporarySave={temporarySave}
        />
      </EditContainer>
    </Layout>
  );
}
