import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from 'components/Layout';
import PageLabel from 'components/Label/PageLabel';
import TitleLabel from 'components/Label/TitleLabel';
import CustomInput from 'components/Input/CustomInput';
import CustomCheckBox from 'components/Input/CustomCheckBox';
import SignupAuthModal from 'components/Modal/SignupAuthModal';
import SquareBtn from 'components/Button/SquareBtn';
import { useInput, useUI, useUser } from 'hooks';
import { SignupContainer } from 'styles/pages/user';

export default function signup(): JSX.Element {
  const { toastOpenDispatch } = useUI();
  const { signup, signupDispatch } = useUser();
  const [term, setTerm] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | boolean>(true);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | boolean>(true);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState<string | boolean>(true);
  const [name, onChangeName] = useInput('');
  const [nickname, onChangeNickname] = useInput('');

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (
      !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
        e.target.value
      )
    )
      setEmailError('올바른 형식의 이메일을 입력해주세요.');
    else setEmailError('');
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!/^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{8,24}$/.test(e.target.value))
      setPasswordError('8~24자 영문대소문자, 숫자, 특수문자 혼합해주세요.');
    else setPasswordError('');
  }, []);
  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      if (e.target.value !== password)
        setPasswordCheckError('비밀번호와 동일하게 입력해주세요.');
      else setPasswordCheckError('');
    },
    [password]
  );
  const onChangeTerm = useCallback(() => {
    setTerm(current => !current);
  }, []);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailError || passwordError || passwordCheckError || !term) {
      return toastOpenDispatch('항목들을 올바르게 입력해주세요.');
    }
    signupDispatch({ email, password, name, nickname });
  };

  useEffect(() => {
    if (signup.data) {
      setAuthOpen(state => !state);
      toastOpenDispatch('이메일보관함을 확인해주세요.');
    }
  }, [signup]);

  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | 회원가입</title>
      </Head>
      <SignupContainer>
        <TitleLabel title="회원가입" desc="Sign up" />
        <div className="signup__container">
          <form onSubmit={onSubmit}>
            <div className="signup__form">
              <CustomInput
                type="email"
                title="이메일"
                onChange={onChangeEmail}
                value={email}
              />
              <p>{emailError}</p>
              <CustomInput
                type="password"
                title="비밀번호"
                onChange={onChangePassword}
                value={password}
              />
              <p>{passwordError}</p>
              <CustomInput
                type="password"
                title="비밀번호 확인"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              />
              <p>{passwordCheckError}</p>
              <CustomInput title="필명" value={nickname} onChange={onChangeNickname} />
              <p></p>
              <CustomInput title="이름" value={name} onChange={onChangeName} />
              <p></p>
            </div>
            <article>
              <CustomCheckBox
                title="약관에 동의합니다."
                onChange={onChangeTerm}
                value={term}
              />
              <a href="">이용약관</a>
            </article>
            <div className="btn__wrapper">
              <SquareBtn>홈으로</SquareBtn>
              <SquareBtn type="submit">회원가입</SquareBtn>
            </div>
          </form>
          <section>
            <PageLabel text="디비디 바비디 부 벨소리 울려라" desc="유산균 먹기" />
            <img src="/cs_banner.png" alt="image" />
          </section>
        </div>
      </SignupContainer>
      {authOpen && (
        <SignupAuthModal email={email} onClose={() => setAuthOpen(!authOpen)} />
      )}
    </Layout>
  );
}
