import styled from '@emotion/styled';
import React from 'react';

const CommonInputContainer = styled.div`
  font-family: 'Noto Serif KR';
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  span {
    color: ${({ theme }) => theme.textColor.initial};
    display: inline-block;
    width: 100px;
  }
  input {
    outline: none;
    padding: 6px 5px;
    border-radius: 0;
    color: ${({ theme }) => theme.textColor.initial};
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
  }
`;
const HashInputContainer = styled(CommonInputContainer)`
  margin: 30px 0;

  input {
    flex: 1;
  }
`;
export function HashInput(): JSX.Element {
  return (
    <HashInputContainer>
      <span>해시태그</span>
      <input type="text" />
    </HashInputContainer>
  );
}

const TitleInputContainer = styled(CommonInputContainer)`
  margin-top: 50px;
  input {
    width: 500px;
    border-bottom: 2px solid ${({ theme }) => theme.textColor.initial};
  }
`;
export default function TitleInput(): JSX.Element {
  return (
    <TitleInputContainer>
      <span>제목</span>
      <input type="text" />
    </TitleInputContainer>
  );
}
