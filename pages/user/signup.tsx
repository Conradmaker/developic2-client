import React, { useCallback, useState } from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';
import styled from '@emotion/styled';
import PageLabel from '../../components/Label/PageLabel';
import TitleLabel from '../../components/Label/TitleLabel';
import Button from '../../components/Button/Button';
import CustomInput from '../../components/Input/CustomInput';
import CustomCheckBox from '../../components/Input/CustomCheckBox';
import SignupAuthModal from '../../components/Modal/SignupAuthModal';
// import SignupPenNameModal from '../../components/Modal/SignupPenNameModal';

const SignupContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
  .signup__container {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    form {
      width: 350px;
      margin-left: 60px;
      margin-top: 10px;
      .signup__form {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        & > div {
          margin-bottom: 20px;
        }
      }
      article {
        display: flex;
        justify-content: center;
        align-content: center;
        div {
          width: auto;
        }
        a {
          color: ${({ theme }) => theme.textColor.lighten};
          font-size: ${({ theme }) => theme.fontSize.small};
          padding-top: 5px;
          margin-left: 10px;
        }
      }
      .signup__btn {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
      }
    }
    section {
      width: 500px;
      margin-right: 60px;
      img {
        padding-top: 30px;
        width: 100%;
      }
    }
  }
`;
export default function signup(): JSX.Element {
  const [term, setTerm] = useState<boolean>(false);
  const [authOpen, setAuthOpen] = useState<boolean>(false);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthOpen(state => !state);
  }, []);
  const onChangeTerm = useCallback(() => {
    setTerm(current => !current);
  }, []);
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | Signup</title>
      </Head>
      <SignupContainer>
        <TitleLabel title="회원가입" desc="Sign up" />
        <div className="signup__container">
          <form onSubmit={onSubmit}>
            <div className="signup__form">
              <CustomInput title="이메일" />
              <CustomInput title="비밀번호" />
              <CustomInput title="비밀번호 확인" />
              <CustomInput title="필명" />
              <CustomInput title="이름" />
            </div>
            <article>
              <CustomCheckBox
                title="약관에 동의합니다."
                onChange={onChangeTerm}
                value={term}
              />
              <a href="">이용약관</a>
            </article>
            <div className="signup__btn">
              <Button text="뒤로가기" />
              <Button text="회원가입" type="submit" />
            </div>
          </form>
          <section>
            <PageLabel text="디비디 바비디 부 벨소리 울려라" desc="유산균 먹기" />
            <img src="/cs_banner.png" alt="image" />
          </section>
        </div>
      </SignupContainer>
      {authOpen && <SignupAuthModal setAuthOpen={setAuthOpen} />}
      {/* {authOpen && <SignupPenNameModal setModalOpen={setAuthOpen} />} */}
    </Layout>
  );
}
