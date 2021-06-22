import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import CustomInput from 'components/Input/CustomInput';
import PageLabel from 'components/Label/PageLabel';
import PageWithNavLayout from 'components/Layout/PageWithNavLayout';
import { SettingNavData } from 'utils/data';
import { useInput, useUser } from 'hooks';

const InfoContainer = styled.section`
  display: flex;
  margin-bottom: 100px;
  .cs__left {
    flex: 1;
    form {
      margin-top: 50px;
      & > div {
        margin-top: 25px;
      }
      & > p {
        font-size: 12px;
        color: #a35757;
        text-align: end;
        padding-top: 8px;
      }
    }
  }
  .cs__right {
    display: flex;
    justify-content: flex-end;
    form {
      margin-left: 50px;
      width: 600px;
      justify-content: flex-end;
      & > span {
        display: block;
        margin-bottom: 30px;
        font-size: 16px;
        font-family: 'Noto Serif KR';
        color: ${({ theme }) => theme.textColor.initial};
      }
      & > div {
        margin-bottom: 30px;
      }
      & > button {
        width: 100%;
      }
      textarea {
        resize: none;
        width: 100%;
        height: 250px;
        padding: 5px;
        font-family: 'san-serif';
        line-height: 1.2;
        font-size: 15px;
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .page__label {
      h1 {
        font-size: 32px;
      }
    }
    .cs__left {
      form {
        margin-top: 0px;
      }
    }
    .cs__right {
      margin-top: 30px;
      align-items: flex-start;
      form {
        margin-left: 0px;
        width: 100%;
        .btn__group {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
`;

export default function Intro(): JSX.Element {
  const {
    userData,
    userIntro,
    getUserIntroDispatch,
    updateUserIntroDispatch,
  } = useUser();
  const [website, onChangeWebsite, setWebsite] = useInput('');
  const [info, setInfo] = useState('');
  const [infoError, setInfoError] = useState('');
  const [intro, onChangeIntro, setIntro] = useInput('');
  const [model, onChangeModel, setModel] = useInput('');

  const onChangeInfo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 40) {
      setInfoError('40글자를 넘길 수 없습니다.');
    } else {
      setInfoError('');
      setInfo(e.target.value);
    }
  }, []);

  const onUpdateUserIntro = () => {
    if (!userData) return;
    updateUserIntroDispatch({
      UserId: userData.id,
      introduction: intro,
      website: website,
      mostlyUseModel: model,
      summary: info,
    });
  };

  useEffect(() => {
    if (userData) {
      getUserIntroDispatch({ userId: userData.id });
    }
  }, [userData]);

  useEffect(() => {
    if (userIntro.data) {
      setWebsite(userIntro.data?.website);
      setInfo((userData?.introduce as unknown) as string);
      setIntro(userIntro.data.introduction);
      setModel(userIntro.data.mostlyUseModel);
    }
  }, [userIntro]);

  if (!userIntro.data) return <></>;

  return (
    <PageWithNavLayout pageName="설정" pageDesc="Settings" navData={SettingNavData}>
      <Head>
        <title>내정보 | 내 소개 수정</title>
      </Head>
      <InfoContainer>
        <div className="cs__left">
          <PageLabel
            width={400}
            text={`${userData?.nickname}님`}
            desc="의 소개를 해주세요."
          />
          <form>
            <CustomInput title="한 줄 소개" value={info} onChange={onChangeInfo} />
            {infoError && <p>{infoError}</p>}
            <CustomInput title="웹사이트" value={website} onChange={onChangeWebsite} />
            <CustomInput title="주 사용 기기" value={model} onChange={onChangeModel} />
          </form>
        </div>
        <div className="cs__right">
          <form>
            <span>자기소개</span>
            <textarea value={intro} onChange={onChangeIntro}></textarea>
            <div className="btn__group">
              <button type="button" onClick={onUpdateUserIntro}>
                저장
              </button>
            </div>
          </form>
        </div>
      </InfoContainer>
    </PageWithNavLayout>
  );
}
