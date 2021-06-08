import { css } from '@emotion/react';
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
    font-family: 'Noto Serif KR', serif;
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
    font-family: 'Noto Serif KR', serif;
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

export const CustomDateInputBox = styled.div`
  input {
    font-family: 'Noto Serif KR', serif;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
    outline: none;
    background: none;
    font-size: 15px;
    padding: 5px 5px;
    color: ${({ theme }) => theme.textColor.initial};
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

export const SearchInputBox = styled.form<{
  currentTheme: null | string;
}>`
  // border: 0.5px solid ${({ theme }) => theme.grayScale[2]};
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0.75em;
  padding-left: 0;
  margin-bottom: 1.2em;
  transition: all 0.15s ease-in;
  max-width: 100%;
  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.grayScale[1]};
    margin-right: 0.5em;
    transition: all 0.125s ease-in;
    margin-top: 3px;
  }
  input {
    font-family: 'Noto Serif KR', serif;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    flex: 1;
    display: block;
    line-height: 32px;
    height: 30px;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    transition: all 0.125s ease-in;
    color: ${({ theme }) => theme.grayScale[1]};
    &::placeholder {
      color: ${({ theme }) => theme.grayScale[2]};
      ${({ currentTheme, theme }) =>
        currentTheme === 'dark' &&
        css`
          & {
            color: ${theme.textColor.initial};
          }
        `};
    }
  }
  input:focus,
  input:focus + svg {
    fill: black;
    color: black;
    ${({ currentTheme, theme }) =>
      currentTheme === 'dark' &&
      css`
        & {
          color: ${theme.textColor.initial};
          fill: ${theme.textColor.initial};
        }
      `};
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
    width: 19px;
    height: 19px;
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
    font-size: 14px;
    color: ${({ theme }) => theme.textColor.initial};
  }
`;

export const ImageDropZoneContainer = styled.div<{
  width?: number;
  height?: number;
  background?: string;
}>`
  width: 400px;
  height: 250px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
  cursor: pointer;
  section {
    height: 100%;
    div {
      color: ${({ theme }) => theme.grayScale[2]};
      text-shadow: 0 0 2px #fff;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      span:nth-child(2) {
        font-size: 30px;
      }
      span {
        color: 1px solid ${({ theme }) => theme.grayScale[4]};
        font-size: 14px;
      }
    }
  }
  ${({ background }) =>
    background &&
    css`
      background-image: url('${background}');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `};
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
`;
