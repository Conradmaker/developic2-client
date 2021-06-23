import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import CustomInput from 'components/Input/CustomInput';
import PageLabel from 'components/Label/PageLabel';
import PageWithNavLayout from 'components/Layout/PageWithNavLayout';
import { SettingNavData } from 'utils/data';
import { useAuth, useInput, useUser } from 'hooks';
import { SettingIntroContainer } from 'styles/pages/user';

export default function Intro(): JSX.Element {
  const { userData } = useAuth({ replace: true });
  const { userIntro, getUserIntroDispatch, updateUserIntroDispatch } = useUser();
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
    if (!userData) return;
    getUserIntroDispatch({ userId: userData.id });
  }, [userData]);

  useEffect(() => {
    if (userIntro.data) {
      setWebsite(userIntro.data?.website);
      setInfo((userData?.introduce as unknown) as string);
      setIntro(userIntro.data.introduction);
      setModel(userIntro.data.mostlyUseModel);
    }
  }, [userIntro]);

  return (
    <PageWithNavLayout pageName="설정" pageDesc="Settings" navData={SettingNavData}>
      <Head>
        <title>내정보 | 내 소개 수정</title>
      </Head>
      <SettingIntroContainer>
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
      </SettingIntroContainer>
    </PageWithNavLayout>
  );
}
