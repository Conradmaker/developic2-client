import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from 'components/Layout';
import HashTagInstant from 'components/Editor/HashTagInstant';
import TitleInput from 'components/Input/EditPageInput';
import ConfirmModal from 'components/Modal/ConfirmModal';
import { useAuth, useModal, usePost } from 'hooks';
import { EditContainer } from 'styles/pages/edit';

const ToastEditorWithNoSSR = dynamic(
  () => import('../../../components/Editor/ToastEditor'),
  {
    ssr: false,
  }
);

export default function edit(): JSX.Element {
  const { tempPost, postPreSaveDispatch, getTempPostDispatch } = usePost();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [tagList, setTagList] = useState<{ id: number; name: string }[]>([]);
  const [imageList, setImageList] = useState<{ imageId: number; src: string }[]>([]);
  const [content, setContent] = useState('글을 입력해주세요.');
  const { userData } = useAuth({ replace: false });

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

  const [toUrl, setToUrl] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [RunModal, toggleModal] = useModal(ConfirmModal, {
    onConfirm: () => setConfirmed(true),
    content: '변경내용이 사라지게 됩니다. 페이지를 나가시겠습니까',
  });

  useEffect(() => {
    const routeChangeStart = (url: string) => {
      const isNextStep =
        url.split('?')[0].indexOf('edit/info') !== -1 ||
        url.split('?')[0].indexOf('drawer/save') !== -1;
      if (
        router.asPath.split('?')[0] !== url.split('?')[0] &&
        !confirmed &&
        !isNextStep
      ) {
        setToUrl(url);
        toggleModal();
        router.events.emit('routeChangeError');
        throw 'Abort route change. Please ignore this error.';
      }
    };
    router.events.on('routeChangeStart', routeChangeStart);
    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
    };
  }, [confirmed]);

  useEffect(() => {
    if (confirmed) {
      toggleModal();
      router.replace(toUrl);
    }
  }, [toUrl, confirmed]);

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
        <RunModal />
      </EditContainer>
    </Layout>
  );
}
