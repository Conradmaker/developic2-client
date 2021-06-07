import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import SquareBtn from '../../../components/Button/SquareBtn';
import CustomInput from '../../../components/Input/CustomInput';
import CustomSelect from '../../../components/Input/CustomSelect';
import PageLabel from '../../../components/Label/PageLabel';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
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
    justify-content: flex-end;
    form {
      width: 450px;
      justify-content: flex-end;
      & > div {
        margin-bottom: 15px;
      }
      & > p {
        margin: 0 0 20px 0;
        font-size: 14px;
        color: #b92961;
        text-align: right;
      }
      & > button {
        width: 100%;
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
    updateUser,
    destroyUser,
    updateUserInfoDispatch,
    updatePasswordDispatch,
    destroyUserDispatch,
  } = useUser();
  const [userDestroyOpen, setUserDestroyOpen] = useState(false);
  const [nickname, onChangeNickname] = useInput(userData?.nickname);
  const [birth, onChangeBirth] = useInput(userData?.birth);
  const [gender, onChangeGender] = useInput(userData?.gender);
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    password: '',
    passwordCheck: '',
  });
  const [passwordError, setPasswordError] = useState<string | boolean>(true);
  const [passwordCheckError, setPasswordCheckError] = useState<string | boolean>(true);

  const onChangePasswords = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setPasswords({ ...passwords, [name]: value });
      if (name === 'password') {
        !/^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{8,24}$/.test(value)
          ? setPasswordError('8~24자 영문대소문자, 숫자, 특수문자 혼합해주세요.')
          : setPasswordError('');
      } else if (name === 'passwordCheck') {
        value === passwords.password
          ? setPasswordCheckError('')
          : setPasswordCheckError('비밀번호와 동일하게 입력해주세요.');
      }
    },
    [passwords]
  );

  const onUpdateInfo = useCallback(() => {
    if (!userData) return;
    updateUserInfoDispatch({ UserId: userData.id, nickname, birth, gender });
  }, [nickname, birth, gender]);

  const onUpdatePassword = useCallback(() => {
    if (!userData) return;
    updatePasswordDispatch({
      UserId: userData.id,
      currentPassword: passwords.currentPassword,
      newPassword: passwords.password,
    });
  }, [passwords]);

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
            <CustomInput title="이메일" value={userData.email} onChange={e => null} />
            <CustomInput title="이름" value={userData.name} onChange={e => null} />
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
          <form>
            <CustomInput
              title="현재 비밀번호"
              type="password"
              value={passwords.currentPassword}
              name="currentPassword"
              onChange={onChangePasswords}
            />
            <CustomInput
              title="비밀번호 변경"
              type="password"
              value={passwords.password}
              name="password"
              onChange={onChangePasswords}
            />
            <p>{passwordError}</p>
            <CustomInput
              title="비밀번호 확인"
              type="password"
              name="passwordCheck"
              value={passwords.passwordCheck}
              onChange={onChangePasswords}
            />
            <p>{passwordCheckError}</p>
            <SquareBtn type="button" onClick={onUpdatePassword}>
              비밀번호 변경
            </SquareBtn>
            <div className="btn__group">
              <button type="button" onClick={onUpdateInfo}>
                저장
              </button>
              <button type="button" onClick={() => setUserDestroyOpen(true)}>
                회원탈퇴
              </button>
            </div>
          </form>
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
    </PageWithNavLayout>
  );
}
