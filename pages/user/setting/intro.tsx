import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import CustomInput from '../../../components/Input/CustomInput';
import PageLabel from '../../../components/Label/PageLabel';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import useUser from '../../../modules/user/hooks';
import { SettingNavData } from '../../../utils/data';
import useInput from '../../../hooks/useInput';

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
      & > span {
        display: block;
        margin-bottom: 30px;
        font-size: 16px;
        font-family: 'Noto Serif KR';
        color: ${({ theme }) => theme.textColor.initial};
      }
      margin-left: 50px;
      width: 600px;
      justify-content: flex-end;
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
`;

export default function Intro(): JSX.Element {
  const {
    userData,
    userIntro,
    getUserIntroDispatch,
    updateUserIntroDispatch,
    updateUser,
  } = useUser();
  const [website, onChangeWebsite, setWebsite] = useInput('');
  const [info, onChangeInfo, setInfo] = useInput('');
  const [intro, onChangeIntro, setIntro] = useInput('');
  const [model, onChangeModel, setModel] = useInput('');

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
  useEffect(() => {
    if (updateUser.data === 'success') {
      alert('성공적으로 반영되었습니다.');
    }
  }, [updateUser.data]);
  if (!userIntro.data) return <></>;
  return (
    <PageWithNavLayout pageName="설정" pageDesc="Settings" navData={SettingNavData}>
      <InfoContainer>
        <div className="cs__left">
          <PageLabel
            width={400}
            text={`${userData?.nickname}님`}
            desc="의 소개를 해주세요."
          />
          <form>
            <CustomInput title="한 줄 소개" value={info} onChange={onChangeInfo} />
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
