import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import EditPost from '../../components/Layout/EditPost';

export default function edit(): JSX.Element {
  const router = useRouter();
  const [editProg, setEditProg] = useState(1);
  const [title, setTitle] = useState('');
  const [tagList, setTagList] = useState<{ id: number; name: string }[]>([]);
  const [content, setContent] = useState('글을 입력해주세요.');

  const changeProg = (prog: 1 | 2) => {
    setEditProg(prog);
  };

  const temporarySave = (editorContent: string) => {
    console.log({ title, tagList, content: editorContent });
    router.push('/user/drawer/save');
  };
  return (
    <Layout>
      {editProg === 1 ? (
        <EditPost
          changeProg={changeProg}
          setTagList={setTagList}
          tagList={tagList}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          temporarySave={temporarySave}
        />
      ) : (
        <div />
      )}
    </Layout>
  );
}
