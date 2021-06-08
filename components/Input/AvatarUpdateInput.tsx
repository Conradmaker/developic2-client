import axios from 'axios';
import React, { useRef, useState } from 'react';
import { BiPhotoAlbum } from 'react-icons/bi';
import { AvatarInputBox } from './styles';

export default function AvatarUpdateInput({
  avatar,
  setAvatar,
}: {
  avatar: string;
  setAvatar: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  const [computedAvatar, setComputedAvatar] = useState(avatar);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const onChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    formData.append('image', (e.target.files as FileList)[0]);
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_HOST}/upload/avatar`, formData)
      .then(res => {
        setAvatar(res.data);
        res.data.indexOf('/resize/400') !== -1
          ? setComputedAvatar(res.data.replace('/resize/400', '/original'))
          : setComputedAvatar(res.data);
      });
  };

  const onClickSelectBtn = () => imageInputRef.current?.click();

  return (
    <AvatarInputBox encType="multipart/form-data" className="avatar-update__form">
      <h5>아바타 변경</h5>
      <img src={computedAvatar} alt="avatar" />
      <input
        ref={imageInputRef}
        type="file"
        hidden
        onChange={onChangeAvatar}
        multiple={false}
      />
      <div className="img-select__btn" onClick={onClickSelectBtn}>
        <BiPhotoAlbum />
      </div>
    </AvatarInputBox>
  );
}
