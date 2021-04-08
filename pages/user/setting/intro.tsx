import styled from '@emotion/styled';
import React from 'react';
import CustomInput from '../../../components/Input/CustomInput';
import PageLabel from '../../../components/Label/PageLabel';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
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
  return (
    <PageWithNavLayout pageName="설정" pageDesc="Settings" navData={SettingNavData}>
      <InfoContainer>
        <div className="cs__left">
          <PageLabel
            width={400}
            text={`${'naasdasdme'}님을 표현할 무언가`}
            desc="작가님의 소중한 정보."
          />
          <form>
            <CustomInput title="한 줄 소개" value="yhg0337@gmail.com" />
            <CustomInput title="웹사이트" value="dnjs" />
            <CustomInput title="주 사용 기기" />
          </form>
        </div>
        <div className="cs__right">
          <form>
            <span>자기소개</span>
            에디터 자리
            <div className="btn__group">
              <button>저장</button>
            </div>
          </form>
        </div>
      </InfoContainer>
    </PageWithNavLayout>
  );
}
