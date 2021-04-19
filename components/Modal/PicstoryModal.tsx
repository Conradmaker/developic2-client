import React, { useState } from 'react';
import { MdCancel, MdCheck } from 'react-icons/md';
import useInput from '../../hooks/useInput';
import { fakePicstoryList } from '../../utils/data';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import ImageDropZone from '../Input/ImageDropZone';
import TitleLabel from '../Label/TitleLabel';
import { ModalLayout, PicstoryModalBox } from './styles';

type PicstoryListItemPropsType = {
  checked: boolean;
  addPicstory: (id: number) => void;
  removePicstory: (id: number) => void;
  picstoryData: { id: number; name: string };
};
function PicstoryListItem({
  checked,
  addPicstory,
  removePicstory,
  picstoryData,
}: PicstoryListItemPropsType): JSX.Element {
  return (
    <li onClick={() => addPicstory(picstoryData.id)}>
      <div className="checked">{checked && <MdCheck />}</div>
      <p>{picstoryData.name}</p>
      <span onClick={() => removePicstory(picstoryData.id)}>
        <MdCancel />
      </span>
    </li>
  );
}

type PicstoryModalPropsType = {
  onClose: () => void;
  picstoryList: number[];
  setPicstoryList: React.Dispatch<React.SetStateAction<number[]>>;
};
export default function PicstoryModal({
  onClose,
  picstoryList,
  setPicstoryList,
}: PicstoryModalPropsType): JSX.Element {
  const [usersPicstoryList, setUsersPicstoryList] = useState(fakePicstoryList);
  const [title, onChangeTitle, setTitle] = useInput('');
  const [desc, onChangeDesc, setDesc] = useInput('');
  const [thumbnail, setThumbnail] = useState('');
  const onClickBG = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };
  const addPicstory = (id: number) => {
    const isExist = picstoryList.findIndex(picid => picid === id) !== -1;
    isExist
      ? setPicstoryList(picstoryList.filter(picid => picid !== id))
      : setPicstoryList([...picstoryList, id]);
  };
  const removePicstory = (id: number) => {
    setUsersPicstoryList(usersPicstoryList.filter(pic => pic.id !== id));
  };
  const onCreatePicstory = () => {
    if (!title.trim()) return alert('제목을 입력해주세요.');
    if (!thumbnail.trim()) return alert('썸네일 이미지를 등록해주세요.');
    setTitle('');
    setDesc('');
    setUsersPicstoryList([...usersPicstoryList, { id: 100, name: title }]);
  };
  return (
    <ModalLayout onClick={onClickBG}>
      <PicstoryModalBox width={800} height={600}>
        <div className="modal__left">
          <TitleLabel title="픽스토리" desc="Picstory" />
          <h4>내 픽스토리</h4>
          <ul>
            {usersPicstoryList.map(picstory => (
              <PicstoryListItem
                key={picstory.id}
                checked={picstoryList.findIndex(pic => picstory.id === pic) !== -1}
                addPicstory={addPicstory}
                picstoryData={picstory}
                removePicstory={removePicstory}
              />
            ))}
          </ul>
        </div>
        <div className="modal__right">
          <h4>새 픽스토리</h4>
          <CustomInput title="제목" onChange={onChangeTitle} value={title} />
          <h5>썸네일</h5>
          <ImageDropZone
            width={300}
            height={170}
            image={thumbnail}
            setImage={setThumbnail}
          />
          <h5>설명</h5>
          <textarea onChange={onChangeDesc} value={desc}></textarea>
          <div className="btn__group">
            <SquareBtn onClick={onClose}>취소</SquareBtn>
            <SquareBtn onClick={onCreatePicstory}>생성</SquareBtn>
          </div>
        </div>
      </PicstoryModalBox>
    </ModalLayout>
  );
}
