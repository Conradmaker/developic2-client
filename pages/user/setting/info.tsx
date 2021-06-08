import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import AvatarUpdateInput from '../../../components/Input/AvatarUpdateInput';
import CustomInput from '../../../components/Input/CustomInput';
import CustomSelect from '../../../components/Input/CustomSelect';
import PageLabel from '../../../components/Label/PageLabel';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import ChangePasswordModal from '../../../components/Modal/ChangePasswordModal';
import ConfirmRemoveModal from '../../../components/Modal/ConfirmRemoveModal';
import useInput from '../../../hooks/useInput';
import useUser from '../../../modules/user/hooks';
import { SettingNavData } from '../../../utils/data';

const InfoContainer = styled.section`
  display: flex;
  margin-bottom: 100px;
  .cs__left {
    flex: 1;
    form {
      margin-top: 50px;
      & > div {
        margin-top: 30px;
      }
    }
  }
  .cs__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .avatar-update__form {
      width: 450px;
    }
    .btn__group {
      margin-top: 50px;
      display: flex;
      justify-content: flex-end;
      button {
        color: ${({ theme }) => theme.textColor.initial};
        padding: 5px 10px;
        cursor: pointer;
        font-size: 16px;
        outline: none;
        border: none;
        border-radius: 0;
        background: none;
        border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
        &:hover {
          font-weight: 600;
        }
      }
      button + button {
        margin-left: 30px;
      }
    }
  }
`;
const genderData = [
  { id: 1, value: '' },
  { id: 2, value: '남성' },
  { id: 3, value: '여성' },
];
export default function Info(): JSX.Element {
  const router = useRouter();
  const {
    userData,
    destroyUser,
    updateUserInfoDispatch,
    destroyUserDispatch,
  } = useUser();
  const [userDestroyOpen, setUserDestroyOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [nickname, onChangeNickname] = useInput(userData?.nickname);
  const [birth, onChangeBirth] = useInput(userData?.birth);
  const [gender, onChangeGender] = useInput(userData?.gender);
  const [avatar, setAvatar] = useState(userData?.avatar || '');

  const onUpdateInfo = useCallback(() => {
    if (!userData) return;
    updateUserInfoDispatch({ UserId: userData.id, nickname, birth, gender, avatar });
  }, [nickname, birth, gender, avatar]);

  const onDestroyUser = useCallback(() => {
    if (!userData) return;
    destroyUserDispatch(userData.id);
  }, []);

  useEffect(() => {
    if (!userData) router.replace('/');
  }, [userData, destroyUser]);

  if (!userData) return <></>;

  return (
    <PageWithNavLayout pageName="설정" pageDesc="Settings" navData={SettingNavData}>
      <Head>
        <title>내정보 | 계정정보 수정</title>
      </Head>
      <InfoContainer>
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
            <button type="button" onClick={() => setChangePasswordOpen(true)}>
              비밀번호 변경
            </button>
            <button type="button" onClick={() => setUserDestroyOpen(true)}>
              회원탈퇴
            </button>
          </div>
        </div>
      </InfoContainer>
      {userDestroyOpen && (
        <ConfirmRemoveModal
          onClose={() => setUserDestroyOpen(false)}
          title="회원탈퇴"
          description="삭제된 회원 정보는 복구되지 않습니다."
          onConfirm={onDestroyUser}
        />
      )}
      {changePasswordOpen && (
        <ChangePasswordModal onClose={() => setChangePasswordOpen(false)} />
      )}
    </PageWithNavLayout>
  );
}
