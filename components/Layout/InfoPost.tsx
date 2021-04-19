import React, { useState } from 'react';
import { InfoPostContainer } from './styles';
import ImageDropZone from '../Input/ImageDropZone';
import CustomCheckBox from '../Input/CustomCheckBox';
import { copyRightData } from '../../utils/data';
import SquareBtn from '../Button/SquareBtn';
import PicstoryModal from '../Modal/PicstoryModal';

type InfoPostPropsType = { changeProg: (prog: 1 | 2) => void };
export default function InfoPost({ changeProg }: InfoPostPropsType): JSX.Element {
  const [picstoryOpen, setPicstoryOpen] = useState(false);
  const [picstoryList, setPicstoryList] = useState<number[]>([]);
  const [allowComment, setAllowComment] = useState(true);
  const [isPublic, setIsPublic] = useState(true);
  const [copyRight, setCopyRight] = useState('Copyright © All Rights Reserved');
  const [thumbnail, setThumbnail] = useState('');
  return (
    <>
      <InfoPostContainer>
        <div className="left__section">
          <h5>썸네일</h5>
          <ImageDropZone image={thumbnail} setImage={setThumbnail} />
          <span>위 비율로 화면에 나타나게 됩니다.</span>
          <h5>요약</h5>
          <textarea></textarea>
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
            <SquareBtn onClick={() => changeProg(1)}>취소</SquareBtn>
            <SquareBtn>발행</SquareBtn>
          </div>
        </div>
      </InfoPostContainer>
      {picstoryOpen && (
        <PicstoryModal
          onClose={() => setPicstoryOpen(false)}
          picstoryList={picstoryList}
          setPicstoryList={setPicstoryList}
        />
      )}
    </>
  );
}
