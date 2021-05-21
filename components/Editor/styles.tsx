import styled from '@emotion/styled';
import { MentionsInput } from 'react-mentions';

export const ToastEditorStyle = styled.div`
  z-index: 0;
  .tui-editor-contents {
    font-family: 'Noto Serif KR';
  }
  .btn_group {
    margin: 30px 0 60px 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button + button {
      margin-left: 20px;
    }
  }
`;

export const MentionsTextarea = styled(MentionsInput)`
  width: 100%;
  flex: 1;
  padding: 8px 0;
  & ul {
    left: 0;
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 300px;
  }
`;
export const EachMention = styled.button<{ focus: boolean }>`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;
  ${({ focus }) =>
    focus &&
    `
    background: #1264a3;
    color: white;
  `};
`;

export const HashTagContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  font-family: 'Noto Serif KR';
  span {
    color: ${({ theme }) => theme.textColor.initial};
    display: inline-block;
    width: 100px;
  }
  & input {
    outline: none;
    padding: 6px 5px;
    border-radius: 0;
    color: ${({ theme }) => theme.textColor.initial};
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
    .mention__box {
      display: none;
    }
  }
`;

export const HashTagSearchContainer = styled.div`
  font-family: 'Noto Serif KR';
  margin-bottom: 30px;
  .result__list {
    border: 1px solid ${({ theme }) => theme.grayScale[4]};
    width: 400px;
    background-color: #fff;
    position: absolute;
    top: 28px;
    left: 110px;
    z-index: 10;
    li {
      cursor: pointer;
      padding: 5px 10px;
      &:hover {
        background-color: ${({ theme }) => theme.grayScale[4]};
      }
    }
  }
  & > ul {
    display: flex;
    li + li {
      margin-left: 10px;
    }
    li {
      cursor: pointer;
      font-size: 14px;
      padding: 3px 5px;
      border: 1px solid ${({ theme }) => theme.grayScale[2]};
      &:hover {
        background-color: ${({ theme }) => theme.grayScale[4]};
      }
    }
  }
  & > p {
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.grayScale[2]};
  }
`;

export const PostContentViewerContainer = styled.article`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 100px;
  color: ${({ theme }) => theme.textColor.initial};
  font-size: ${({ theme }) => theme.fontSize.base};
  img {
    max-height: 440px;
    object-fit: contain;
    margin: 20px auto;
    cursor: pointer;
    display: block;
    transition: 0.3s;
    &:hover {
      box-shadow: 0 0 10px ${({ theme }) => theme.grayScale[2]};
    }
  }
`;
