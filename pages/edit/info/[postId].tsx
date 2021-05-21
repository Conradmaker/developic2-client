import React, { useEffect, useState } from 'react';
import { copyRightData } from '../../../utils/data';
import styled from '@emotion/styled';
import ImageDropZone from '../../../components/Input/ImageDropZone';
import SquareBtn from '../../../components/Button/SquareBtn';
import CustomCheckBox from '../../../components/Input/CustomCheckBox';
import PicstoryModal from '../../../components/Modal/PicstoryModal';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';
import useInput from '../../../hooks/useInput';
import usePost from '../../../modules/post/hooks';
import useUser from '../../../modules/user/hooks';

export const InfoPostContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 50px;
  display: flex;
  font-family: 'Noto Serif KR';
  h5 {
    margin: 35px 0 15px 0;
    font-size: 18px;
  }
  .left__section {
    flex: 1;
    padding-right: 50px;
    border-right: 1px solid ${({ theme }) => theme.grayScale[2]};
    & > span {
      margin-top: 5px;
      display: block;
      text-align: center;
      font-size: 14px;
      color: ${({ theme }) => theme.grayScale[2]};
    }
    textarea {
      outline: none;
      padding: 5px;
      border: 1px solid ${({ theme }) => theme.grayScale[2]};
      width: 400px;
      height: 200px;
      resize: none;
      font-size: 16px;
      font-family: san-serif;
    }
  }
  .right__section {
    flex: 1;
    padding-left: 50px;
    .check__group {
      display: flex;
    }
    .license__group {
      li {
        margin-bottom: 7.5px;
      }
    }
    .btn__group {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      button + button {
        margin-left: 20px;
      }
    }
    .btn__group.left {
      justify-content: flex-start;
    }
  }
`;

export default function InfoPost(): JSX.Element {
  const { tempPost, submitPostDispatch, getTempPostDispatch, submitPost } = usePost();
  const { userData } = useUser();

  const router = useRouter();
  const [picstoryOpen, setPicstoryOpen] = useState(false);
  const [allowComment, setAllowComment] = useState(tempPost.data?.allowComment === 1);
  const [summary, onChangeSummary] = useInput(
    tempPost.data?.summary ? tempPost.data.summary : ''
  );
  const [isPublic, setIsPublic] = useState(tempPost.data?.isPublic === 1);
  const [copyRight, setCopyRight] = useState(
    tempPost.data?.lisence ? tempPost.data.lisence : 'Copyright © All Rights Reserved'
  );
  const [thumbnail, setThumbnail] = useState(
    tempPost.data?.thumbnail ? tempPost.data.thumbnail : ''
  );

  const goBack = () => {
    router.replace(`/edit/content/${router.query.postId}`);
  };
  const onSubmitPost = () => {
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
  if (!tempPost.data) return <></>;
  return (
    <Layout>
      <InfoPostContainer>
        <div className="left__section">
          <h5>썸네일</h5>
          <ImageDropZone image={thumbnail} setImage={setThumbnail} />
          <span>위 비율로 화면에 나타나게 됩니다.</span>
          <h5>요약</h5>
          <textarea onChange={onChangeSummary} value={summary}></textarea>
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
      </InfoPostContainer>
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
