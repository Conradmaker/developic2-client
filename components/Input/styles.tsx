import styled from '@emotion/styled';

export const CustomInputBox = styled.div<{ width?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  font-family: 'Noto Serif KR', serif;
  overflow: hidden;
  padding: 5px 0;
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  color: ${({ theme }) => theme.textColor.initial};
  span {
    width: 100px;
  }
  input {
    border: none;
    flex: 1;
    outline: none;
    background: none;
    border-radius: none;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 0;
    color: ${({ theme }) => theme.textColor.initial};
  }

  .line {
    width: 100%;
    transition: 0.3s;
    position: absolute;
    bottom: 0;
    content: '';
    display: block;

    height: 1px;
    background-color: ${({ theme }) => theme.textColor.initial};
  }
  &:focus-within {
    .line {
      transform: translateX(100px);
    }
  }
`;

export const CustomSelectBox = styled.div<{ width?: number }>`
  color: ${({ theme }) => theme.textColor.initial};
  position: relative;
  display: flex;
  align-items: center;
  font-family: 'Noto Serif KR', serif;
  overflow: hidden;
  padding: 5px 0;
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  label {
    width: 100px;
  }
  select {
    outline: none;
    width: 100%;
    padding: 5px 0;
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
    background: url('https://cdn.iconscout.com/icon/free/png-256/down-arrow-1767499-1502567.png')
      no-repeat 99% 50%; /* 화살표 모양의 이미지 */
    background-size: 25px;
    border: none;
    font-size: 16px;
    &::-ms-expand {
      display: none;
    }
  }
  .line {
    width: 100%;
    transition: 0.3s;
    position: absolute;
    bottom: 0;
    content: '';
    display: block;

    height: 1px;
    background-color: ${({ theme }) => theme.textColor.initial};
  }
  &:focus-within {
    .line {
      transform: translateX(100px);
    }
  }
`;

export const CustomTextareaBox = styled.div<{ width: number }>`
  color: ${({ theme }) => theme.textColor.initial};
  position: relative;
  font-family: 'Noto Serif KR', serif;
  overflow: hidden;
  padding: 5px 0;
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  span {
    display: block;
    margin-bottom: 10px;
    width: 100px;
  }
  textarea {
    font-size: 16px;
    transition: 0.3s;
    outline: none;
    border-radius: 0;
    font-family: 'Noto Serif KR', serif;
    padding: 5px;
    background-color: ${({ theme }) => theme.background.initial};
    width: 100%;
    height: 220px;
    resize: none;
    &:focus {
      background-color: ${({ theme }) => theme.background.modal};
    }
  }
`;

export const CustomCheckBoxBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'Noto Serif KR', serif;
  input {
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary[1]};
    margin-right: 12px;
    cursor: pointer;
  }
  input:checked + span::after {
    content: '';
    display: block;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  label {
    color: ${({ theme }) => theme.textColor.initial};
  }
`;
