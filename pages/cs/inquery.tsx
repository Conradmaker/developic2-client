import styled from '@emotion/styled';
import React from 'react';
import CustomInput from '../../components/Input/CustomInput';
import CustomSelect from '../../components/Input/CustomSelect';
import CustomTextarea from '../../components/Input/CustomTextarea';
import PageLabel from '../../components/Label/PageLabel';
import PageWithNavLayout from '../../components/Layout/PageWithNavLayout';
import useInput from '../../hooks/useInput';
import { CSNavData } from '../../utils/data';

const InqueryContainer = styled.section`
  display: flex;
  margin-bottom: 100px;
  .cs__left {
    flex: 1;
  }
  .cs__right {
    display: flex;
    justify-content: flex-end;
    form {
      width: 450px;
      & > div {
        margin-bottom: 20px;
      }
      .btn__group {
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

const inquiryType = [
  { id: 1, value: '1번유형' },
  { id: 2, value: '2번유형' },
];
export default function Inquery(): JSX.Element {
  const [email, onChangeEmail] = useInput('');
  const [phone, onChangePhone] = useInput('');
  const [content, onChangeContent] = useInput('');
  return (
    <PageWithNavLayout pageName="고객센터" pageDesc="Customer Center" navData={CSNavData}>
      <InqueryContainer>
        <div className="cs__left">
          <PageLabel
            width={490}
            text="여러분의 소중한 의견을 전달해 주세요"
            desc="빠른 시일 내에 응답해 드리겠습니다."
          />
          <img src="/cs_banner.png" alt="cs_banner.png" />
        </div>
        <div className="cs__right">
          <form>
            <CustomInput title="이메일" value={email} onChange={onChangeEmail} />
            <CustomInput title="연락처" value={phone} onChange={onChangePhone} />
            <CustomSelect
              title="문의유형"
              value={inquiryType[1].value}
              onChange={() => null}
              data={inquiryType}
            />
            <CustomTextarea title="문의내용" value={content} onChange={onChangeContent} />
            <div className="btn__group">
              <button>전송</button>
              <button type="reset">초기화</button>
            </div>
          </form>
        </div>
      </InqueryContainer>
    </PageWithNavLayout>
  );
}
