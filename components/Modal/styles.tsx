import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
from{
    opacity:0;
}
to{
    opacity:1;
}
`;
const slideUp = keyframes`
from{
    transform:translateY(500px) scale(0.4);
}
to{
    transform:translateY(0px)
}
`;
export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.layerColor.modalLayer};
  animation: ${fadeIn} 0.4s;
  z-index: 10;
`;

export const SearchModalLayout = styled(ModalLayout)`
  background-color: ${({ theme }) => theme.background.initial};
  z-index: 1;
`;

export const SearchModalbox = styled.div`
  width: 1240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalBox = styled.div<{ width?: number; height?: number }>`
  min-width: 500px;
  min-height: 500px;
  padding: 35px 50px;
  background-color: ${({ theme }) => theme.background.modal};
  animation: ${slideUp} 0.4s;
  position: relative;
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

export const LoginModalBox = styled(ModalBox)`
  display: flex;
  width: 850px;
  .login--left {
    width: 50%;
    form {
      width: 100%;
      padding-right: 50px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      & > div {
        margin-top: 30px;
      }
    }

    .social__wrapper {
      display: flex;
      justify-content: space-around;
      margin-top: 70px;
    }
    .sign-up__wrapper {
      font-size: 14px;
      display: flex;
      justify-content: center;
      strong {
        text-indent: 10px;
        text-decoration: underline;
        cursor: pointer;
        font-weight: bold;
      }
    }
    .btn__wrapper {
      display: flex;
      margin-top: 70px;
      button {
        flex: 1;
      }
      button + button {
        margin-left: 40px;
      }
    }
  }
  .login--right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background-image: url('https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80');
  }
`;

export const BinderEditModalBox = styled(ModalBox)`
  color: ${({ theme }) => theme.textColor.initial};
  form {
    padding: 10px 0;
    div:nth-child(2) {
      margin: 15px 0 5px 0;
    }
    .btn__group {
      display: flex;
      justify-content: flex-end;
      button + button {
        margin-left: 20px;
      }
    }
    & > span {
      cursor: pointer;
      font-family: 'Noto Serif KR';
      font-size: 14px;
      border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
      &:hover {
        font-weight: 500;
      }
    }
  }
`;

export const ConfirmRemoveModalBox = styled(ModalBox)<{ valid: boolean }>`
  min-height: 300px;
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  form {
    padding: 20px 0 20px 0;
    & > span {
      font-size: 18px;
      line-height: 1.5;
      font-weight: 300;
    }
    & > p {
      margin: 20px 0;
      font-weight: 300;
      strong {
        font-size: 18px;
        font-weight: 600;
      }
    }
    & > input {
      background: none;
      width: 100%;
      padding: 5px 0;
      border: none;
      outline: none;
      color: ${({ theme }) => theme.textColor.initial};
      border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
      font-size: 16px;
    }
    .btn__group {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      button + button {
        margin-left: 20px;
      }
    }
  }
  ${props =>
    props.valid ||
    css`
      form > .btn__group > button:nth-child(2) {
        background-color: #c9c4c4;
        cursor: not-allowed;
      }
    `}
`;

export const SignupAuthModalBox = styled(ModalBox)`
  position: relative;
  & > div {
    height: 44px;
  }
  .auth__input {
    div {
      width: 300px;
      margin: 0 auto;
      margin-top: 70px;
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;
      input {
        width: 40px;
        height: 50px;
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.xxxl};
        font-weight: 600;
        background-color: ${({ theme }) => theme.background.modal};
        color: ${({ theme }) => theme.primary[1]};
        background: none;
        outline: none;
        border: 0.5px solid ${({ theme }) => theme.textColor.initial};
        border-radius: 4px;
      }
    }
    p {
      text-align: center;
      color: ${({ theme }) => theme.textColor.initial};
      font-size: ${({ theme }) => theme.fontSize.base};
    }
    p + p {
      margin-top: 20px;
    }
  }
  .auth__btn {
    width: 250px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: 70px;
  }
`;

export const SignupPenNameModalBox = styled(ModalBox)`
  position: relative;
  & > div {
    height: 44px;
  }
  form {
    & > div {
      width: 300px;
      margin: 0 auto;
      margin-top: 70px;
      margin-bottom: 50px;
    }
    p {
      margin-top: 20px;
      text-align: center;
      color: ${({ theme }) => theme.textColor.initial};
      font-size: ${({ theme }) => theme.fontSize.base};
    }
    section {
      width: 250px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      bottom: 0;
      margin-bottom: 70px;
    }
  }
`;

export const PicstoryModalBox = styled(ModalBox)`
  display: flex;
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  h4 {
    margin: 25px 0 10px 0;
    font-size: 18px;
  }
  h5 {
    margin: 25px 0 10px 0;
    font-size: 16px;
  }
  .modal__left {
    padding-right: 50px;
    flex: 1;
    ul {
      height: 330px;
      overflow: auto;
      padding-top: 10px;
      li {
        display: flex;
        align-items: center;
        padding: 5px 0;
        height: 35px;
        .checked {
          cursor: pointer;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          background-color: ${({ theme }) => theme.background.initial};
          border: 1px solid ${({ theme }) => theme.textColor.lighten};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            background-color: ${({ theme }) => theme.grayScale[3]};
          }
        }
        p {
          cursor: default;
          height: 19px;
          color: ${({ theme }) => theme.textColor.lighten};
          flex: 1;
          font-size: 14px;
        }
        span {
          cursor: pointer;
          display: none;
          color: #ec5663;
          font-size: 20px;
        }
        &:hover {
          span {
            display: initial;
          }
        }
      }
    }
  }
  .modal__right {
    padding-left: 50px;
    flex: 1;
    & > div {
      &:focus-within {
        .line {
          transform: translateX(60px);
        }
        span {
          width: 60px;
        }
      }
    }
    textarea {
      font-family: 'san-serif';
      font-size: 16px;
      width: 100%;
      height: 100px;
      outline: none;
      resize: none;
      padding: 5px;
      border: 1px solid ${({ theme }) => theme.grayScale[2]};
    }
    .btn__group {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      button + button {
        margin-left: 20px;
      }
    }
  }
`;

export const ConfirmModalBox = styled(ModalBox)`
  min-width: auto;
  min-height: auto;
  width: 370px;
  height: 160px;
  color: ${({ theme }) => theme.textColor.initial};
  font-family: 'Noto Serif KR';
  span {
  }
  .btn__group {
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
    button + button {
      margin-left: 20px;
    }
  }
`;

export const FollowListModalBox = styled(ModalBox)`
  display: flex;
  flex-direction: column;
  div:first-child {
    height: 50px;
  }
  & > div > div > h4 {
    font-size: 20px;
  }
  & > ul {
    overflow-y: auto;
    padding: 20px 0;
    height: 360px;
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    li {
      margin-bottom: 30px;
      width: 200px;
      height: 50px;
      display: flex;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
      & > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 20px;
        span {
          display: block;
          font-size: 15px;
          font-family: 'Noto Serif KR';
        }
        button {
          align-self: flex-end;
          font-size: 12px;
          padding: 2px 10px;
        }
      }
    }
  }
  .btn__group {
    display: flex;
    justify-content: flex-end;
  }
`;
