import React, { useEffect, useState } from 'react';
import { MdCancel, MdCheck } from 'react-icons/md';
import useInput from '../../hooks/useInput';
import {
  createPicstory,
  getPicstoryList,
  destroyPicstoryAPI,
  removePicstoryAPI,
  addPicstoryAPI,
} from '../../utils/fakeApi';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import ImageDropZone from '../Input/ImageDropZone';
import TitleLabel from '../Label/TitleLabel';
import { ModalLayout, PicstoryModalBox } from './styles';

type PicstoryListItemPropsType = {
  checked: boolean;
  addPicstory: (id: number) => void;
  removePicstory: (id: number) => void;
  picstoryData: { id: number; title: string };
};
function PicstoryListItem({
  checked,
  addPicstory,
  removePicstory,
  picstoryData,
}: PicstoryListItemPropsType): JSX.Element {
  const onRemovePicstory = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    removePicstory(picstoryData.id);
  };
  return (
    <li onClick={() => addPicstory(picstoryData.id)}>
      <div className="checked">{checked && <MdCheck />}</div>
      <p>{picstoryData.title}</p>
      <span onClick={onRemovePicstory}>
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
  const [usersPicstoryList, setUsersPicstoryList] = useState<
    {
      id: number;
      title: string;
    }[]
  >([]);
  const [title, onChangeTitle, setTitle] = useInput('');
  const [desc, onChangeDesc, setDesc] = useInput('');
  const [thumbnail, setThumbnail] = useState('');
  const onClickBG = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };
  const addPicstory = async (id: number) => {
    const isExist = picstoryList.findIndex(picid => picid === id) !== -1;
    if (isExist) {
      const res = await removePicstoryAPI({ PostId: 1, PicstoryId: id });
      setPicstoryList(picstoryList.filter(picid => picid !== res.id));
    } else {
      const res = await addPicstoryAPI({ PostId: 1, PicstoryId: id });
      setPicstoryList([...picstoryList, res.id]);
    }
  };
  const destroyPicstory = async (id: number) => {
    //리덕스로
    await destroyPicstoryAPI(id);
    //
    setUsersPicstoryList(usersPicstoryList.filter(pic => pic.id !== id));
  };
  const onCreatePicstory = async () => {
    if (!title.trim()) return alert('제목을 입력해주세요.');
    if (!thumbnail.trim()) return alert('썸네일 이미지를 등록해주세요.');
    //리덕스로
    const newPic = await createPicstory({
      title,
      thumbnail,
      description: desc,
      UserId: 1,
    });
    //
    setTitle('');
    setThumbnail('');
    setDesc('');
    setUsersPicstoryList([...usersPicstoryList, newPic]);
  };

  //NOTE: FAKE
  const getList = async () => {
    const res = await getPicstoryList(1); //UserId
    setUsersPicstoryList(res);
  };

  useEffect(() => {
    //리덕스로
    getList();
  }, []);
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
                removePicstory={destroyPicstory}
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
            <SquareBtn onClick={onClose}>확인</SquareBtn>
            <SquareBtn onClick={onCreatePicstory}>생성</SquareBtn>
          </div>
        </div>
      </PicstoryModalBox>
    </ModalLayout>
  );
}
