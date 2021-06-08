import React, { useCallback, useState } from 'react';
import useUser from '../../modules/user/hooks';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import TitleLabel from '../Label/TitleLabel';
import { ChangePasswordModalBox, ModalLayout } from './styles';

export default function ChangePasswordModal({
  onClose = () => null,
}: {
  onClose?: () => void;
}): JSX.Element {
  const { userData, updatePasswordDispatch } = useUser();
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
  const onUpdatePassword = useCallback(() => {
    if (!userData) return;
    updatePasswordDispatch({
      UserId: userData.id,
      currentPassword: passwords.currentPassword,
      newPassword: passwords.password,
    });
  }, [passwords]);

  return (
    <ModalLayout>
      <ChangePasswordModalBox>
        <TitleLabel title="비밀번호 변경" desc="Change password"></TitleLabel>
        <form className="change-password__form">
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
          <div className="btn__group">
            <SquareBtn type="submit" onClick={onUpdatePassword}>
              비밀번호 변경
            </SquareBtn>
            <SquareBtn type="button" onClick={onClose}>
              닫기
            </SquareBtn>
          </div>
        </form>
      </ChangePasswordModalBox>
    </ModalLayout>
  );
}
