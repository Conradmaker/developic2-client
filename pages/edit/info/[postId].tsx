import React, { useEffect, useState } from 'react';
import { copyRightData } from 'utils/data';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ImageDropZone from 'components/Input/ImageDropZone';
import SquareBtn from 'components/Button/SquareBtn';
import CustomCheckBox from 'components/Input/CustomCheckBox';
import PicstoryModal from 'components/Modal/PicstoryModal';
import Layout from 'components/Layout';
import { useAuth, useInput, usePost, useUI } from 'hooks';
import { EditInfoPostContainer } from 'styles/pages/edit';

export default function InfoPost(): JSX.Element {
  const { tempPost, submitPostDispatch, getTempPostDispatch, submitPost } = usePost();
  const { userData } = useAuth({ replace: false });

  const router = useRouter();
  const [picstoryOpen, setPicstoryOpen] = useState(false);
  const [allowComment, setAllowComment] = useState(tempPost.data?.allowComment === 1);
  const [summary, onChangeSummary, setSummary] = useInput(
    tempPost.data?.summary
      ? tempPost.data?.summary
      : tempPost.data?.content.replace(/(<([^>]+)>)/gi, '').substr(0, 100)
  );
  const [isPublic, setIsPublic] = useState(tempPost.data?.isPublic === 1);
  const [copyRight, setCopyRight] = useState(
    tempPost.data?.lisence ? tempPost.data.lisence : 'Copyright © All Rights Reserved'
  );
  const [thumbnail, setThumbnail] = useState(
    tempPost.data?.thumbnail ? tempPost.data.thumbnail : ''
  );
  const { toastOpenDispatch } = useUI();
  const goBack = () => {
    router.replace(`/edit/content/${router.query.postId}`);
  };

  const onSubmitPost = () => {
    if (!summary.trim()) return toastOpenDispatch('요약글을 넣어주세요.');
    if (!thumbnail.trim()) return toastOpenDispatch('썸내일을 넣어주세요.');

    const data = {
      allowComment: allowComment ? 1 : 0,
      isPublic: isPublic ? 1 : 0,
      thumbnail,
      summary,
      license: copyRight,
      PostId: router.query.postId as string,
    };
    submitPostDispatch(data);
  };

  useEffect(() => {
    if (!userData) return;
    if (submitPost.data && submitPost.data.id === +(router.query.postId as string)) {
      router.replace(`/${userData.id}/post`);
    }
  }, [submitPost.data, router.query]);

  useEffect(() => {
    getTempPostDispatch(router.query.postId as string);
  }, [router.query]);
  useEffect(() => {
    if (tempPost.data) {
      setSummary(tempPost.data.content.replace(/(<([^>]+)>)/gi, '').substr(0, 100));
    }
  }, [tempPost.data]);

  if (!tempPost.data) return <></>;

  return (
    <Layout>
      <Head>
        <title>글쓰기 | {tempPost.data.title} 정보입력</title>
      </Head>
      <EditInfoPostContainer>
        <div className="left__section">
          <h5>썸네일</h5>
          <ImageDropZone image={thumbnail} setImage={setThumbnail} />
          <span>위 비율로 화면에 나타나게 됩니다.</span>
          <h5>요약</h5>
          <textarea onChange={onChangeSummary} value={summary} maxLength={100}></textarea>
          <span>최대 100글자를 입력할 수 있습니다.</span>
        </div>
        <div className="right__section">
          <h5>픽스토리</h5>
          <div className="btn__group left">
            <SquareBtn onClick={() => setPicstoryOpen(true)}>픽스토리 선택</SquareBtn>
          </div>
          <h5>댓글허용여부</h5>
          <div className="check__group">
            <CustomCheckBox
              title="허용"
              value={allowComment}
              onChange={() => setAllowComment(true)}
            />
            <CustomCheckBox
              title="비허용"
              value={!allowComment}
              onChange={() => setAllowComment(false)}
            />
          </div>
          <h5>비공개여부</h5>
          <div className="check__group">
            <CustomCheckBox
              title="공개"
              value={isPublic}
              onChange={() => setIsPublic(true)}
            />
            <CustomCheckBox
              title="비공개"
              value={!isPublic}
              onChange={() => setIsPublic(false)}
            />
          </div>
          <h5>저작권 및 라이센스</h5>
          <ul className="license__group">
            {copyRightData.map((license, index) => (
              <li key={license + index}>
                <CustomCheckBox
                  title={license}
                  value={copyRight === license}
                  onChange={() => setCopyRight(license)}
                />
              </li>
            ))}
          </ul>

          <div className="btn__group">
            <SquareBtn onClick={goBack}>취소</SquareBtn>
            <SquareBtn onClick={onSubmitPost}>발행</SquareBtn>
          </div>
        </div>
      </EditInfoPostContainer>
      {picstoryOpen && (
        <PicstoryModal
          onClose={() => setPicstoryOpen(false)}
          picstoryList={tempPost.data.PicStories as number[]}
          postId={tempPost.data.id as number}
        />
      )}
    </Layout>
  );
}
