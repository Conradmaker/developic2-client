import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MdCancel, MdCheck } from 'react-icons/md';
import useInput from '../../hooks/useInput';
import { Picstory } from '../../modules/picstory';
import usePicstory from '../../modules/picstory/hooks';
import useUser from '../../modules/user/hooks';
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
  postId: number;
};
export default function PicstoryModal({
  onClose,
  picstoryList,
  postId,
}: PicstoryModalPropsType): JSX.Element {
  const { userData } = useUser();
  const router = useRouter();
  const {
    getPicstoryList,
    getPicstoryListDispatch,
    createPicstory,
    createPicstoryDispatch,
    removePicstoryDispatch,
    addPicPostDispatch,
    removePicPostDispatch,
  } = usePicstory();

  const [usersPicstoryList, setUsersPicstoryList] = useState<Picstory[]>([]);
  const [title, onChangeTitle, setTitle] = useInput('');
  const [desc, onChangeDesc, setDesc] = useInput('');
  const [thumbnail, setThumbnail] = useState('');
  const onClickBG = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };
  const addPicstory = (id: number) => {
    const isExist = picstoryList.findIndex(picid => picid === id) !== -1;
    if (!isExist) {
      addPicPostDispatch({ PostId: postId, PicstoryId: id });
    } else {
      removePicPostDispatch({ PostId: postId, PicstoryId: id });
    }
  };
  const destroyPicstory = (id: number) => {
    removePicstoryDispatch(id);
  };

  const onCreatePicstory = async () => {
    if (!userData) return;
    if (!title.trim()) return alert('제목을 입력해주세요.');
    if (!thumbnail.trim()) return alert('썸네일 이미지를 등록해주세요.');
    createPicstoryDispatch({
      title,
      thumbnail,
      description: desc,
      UserId: userData.id,
    });
  };

  useEffect(() => {
    if (!userData) {
      router.replace('/');
    } else {
      getPicstoryListDispatch(userData.id);
    }
  }, [userData]);
  useEffect(() => {
    if (getPicstoryList.data) {
      setUsersPicstoryList(getPicstoryList.data);
    }
  }, [getPicstoryList.data]);
  useEffect(() => {
    if (createPicstory.data) {
      setTitle('');
      setThumbnail('');
      setDesc('');
      setUsersPicstoryList([...usersPicstoryList, createPicstory.data]);
    }
  }, [createPicstory.data]);

  return (
    <ModalLayout onClick={onClickBG}>
      <PicstoryModalBox width={800} height={600}>
        <div className="modal__left">
          <TitleLabel title="픽스토리" desc="Picstory" />
          <h4>내 픽스토리</h4>
          <ul>
            {usersPicstoryList &&
              usersPicstoryList.map(picstory => (
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
