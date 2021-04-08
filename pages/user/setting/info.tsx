import styled from '@emotion/styled';
import React from 'react';
import SquareBtn from '../../../components/Button/SquareBtn';
import CustomInput from '../../../components/Input/CustomInput';
import CustomSelect from '../../../components/Input/CustomSelect';
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
      width: 450px;
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

export default function Info(): JSX.Element {
  return (
    <PageWithNavLayout pageName="설정" pageDesc="Settings" navData={SettingNavData}>
      <InfoContainer>
        <div className="cs__left">
          <PageLabel
            width={300}
            text={`반가워요. ${'naasdasdme'}님`}
            desc="작가님의 소중한 정보."
          />
          <form>
            <CustomInput title="이메일" value="yhg0337@gmail.com" />
            <CustomInput title="이름" value="dnjs" />
            <CustomInput title="필명" />
            <CustomInput title="생년월일" />
            <CustomSelect title="성별" />
          </form>
        </div>
        <div className="cs__right">
          <form>
            <CustomInput title="비밀번호 변경" />
            <CustomInput title="비밀번호 확인" />
            <SquareBtn>비밀번호 변경</SquareBtn>
            <div className="btn__group">
              <button>저장</button>
              <button type="reset">회원탈퇴</button>
            </div>
          </form>
        </div>
      </InfoContainer>
    </PageWithNavLayout>
  );
}
