import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import AvatarUpdateInput from 'components/Input/AvatarUpdateInput';
import CustomInput from 'components/Input/CustomInput';
import CustomSelect from 'components/Input/CustomSelect';
import PageLabel from 'components/Label/PageLabel';
import PageWithNavLayout from 'components/Layout/PageWithNavLayout';
import _ChangePasswordModal from 'components/Modal/ChangePasswordModal';
import ConfirmRemoveModal from 'components/Modal/ConfirmRemoveModal';
import { SettingNavData } from 'utils/data';
import { useAuth, useInput, useModal, useUser } from 'hooks';
import { SettingInfoContainer } from 'styles/pages/user';

const genderData = [
  { id: 1, value: '' },
  { id: 2, value: '남성' },
  { id: 3, value: '여성' },
];
export default function Info(): JSX.Element {
  const { userData } = useAuth({ replace: true });
  const router = useRouter();
  const { destroyUser, updateUserInfoDispatch, destroyUserDispatch } = useUser();
  const [nickname, onChangeNickname] = useInput(userData?.nickname);
  const [birth, onChangeBirth] = useInput(userData?.birth);
  const [gender, onChangeGender] = useInput(userData?.gender);
  const [avatar, setAvatar] = useState(userData?.avatar || '');
  const [UserDestroyModal, toggleDestroyModal] = useModal(ConfirmRemoveModal, {
    title: '회원탈퇴',
    description: '삭제된 회원 정보는 복구되지 않습니다.',
    onConfirm: useCallback(() => {
      if (!userData) return;
      destroyUserDispatch(userData.id);
    }, []),
  });
  const [ChangePasswordModal, togglePasswordModal] = useModal(_ChangePasswordModal, {});

  const onUpdateInfo = useCallback(() => {
    if (!userData) return;
    updateUserInfoDispatch({ UserId: userData.id, nickname, birth, gender, avatar });
  }, [nickname, birth, gender, avatar]);

  useEffect(() => {
    if (!userData) router.replace('/');
  }, [userData, destroyUser]);

  if (!userData) return <></>;

  return (
    <PageWithNavLayout pageName="설정" pageDesc="Settings" navData={SettingNavData}>
      <Head>
        <title>내정보 | 계정정보 수정</title>
      </Head>
      <SettingInfoContainer>
        <div className="cs__left">
          <PageLabel
            width={300}
            text={`${userData?.nickname}님`}
            desc="작가님의 소중한 정보."
          />
          <form>
            <CustomInput title="이메일" value={userData.email} onChange={() => null} />
            <CustomInput title="이름" value={userData.name} onChange={() => null} />
            <CustomInput title="필명" value={nickname} onChange={onChangeNickname} />
            <CustomInput title="생년월일" value={birth} onChange={onChangeBirth} />
            <CustomSelect
              title="성별"
              value={gender}
              data={genderData}
              onChange={onChangeGender}
            />
          </form>
        </div>
        <div className="cs__right">
          <AvatarUpdateInput avatar={avatar} setAvatar={setAvatar} />
          <div className="avatar-update__form"></div>
          <div className="btn__group">
            <button type="button" onClick={onUpdateInfo}>
              저장
            </button>
            <button type="button" onClick={togglePasswordModal}>
              비밀번호 변경
            </button>
            <button type="button" onClick={toggleDestroyModal}>
              회원탈퇴
            </button>
          </div>
        </div>
      </SettingInfoContainer>
      <UserDestroyModal />
      <ChangePasswordModal />
    </PageWithNavLayout>
  );
}
