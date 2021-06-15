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
export const ModalLayout = styled.div<{ background?: 'darker' | 'lighter' }>`
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
  z-index: 2000;
  ${({ background }) =>
    background === 'darker' &&
    css`
      background-color: rgba(10, 10, 10, 0.7);
    `};
  ${({ background }) =>
    background === 'lighter' &&
    css`
      background-color: rgba(10, 10, 10, 0.2);
    `}
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    min-width: auto;
    min-height: auto;
    padding: 20px 20px;
  }
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
      svg {
        fill: ${({ theme }) => theme.textColor.initial};
      }
    }
    .sign-up__wrapper {
      font-size: 14px;
      display: flex;
      justify-content: center;
      color: ${({ theme }) => theme.textColor.initial};
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 95%;
    min-height: 580px;
    .login--left {
      width: 100%;
      padding: 10px;
      form {
        padding: 0;
      }
    }
    .login--right {
      display: none;
    }
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 95%;
  }
`;

export const ConfirmRemoveModalBox = styled(ModalBox)<{ valid: boolean }>`
  min-height: 300px;
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  & > .modal__content {
    padding: 20px 0 20px 0;
    & > span {
      font-size: 16px;
      line-height: 2;
      font-weight: 300;
    }
    & > p {
      margin: 20px 0;
      font-weight: 300;
      strong {
        font-size: 16px;
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
      .modal__content > .btn__group > button:nth-child(2) {
        background-color: #c9c4c4;
        cursor: not-allowed;
      }
    `}
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 95%;
  }
`;

export const SignupAuthModalBox = styled(ModalBox)`
  position: relative;
  & > div {
    height: 44px;
  }
  .auth__input {
    div {
      width: 300px;
      margin: 70px auto 40px auto;
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 95%;
    .auth__input {
      div {
        width: 100%;
        margin: 20px auto 20px auto;
        input {
          margin-bottom: 10px;
        }
      }
    }
    .auth__btn {
      position: relative;
      bottom: 0;
      margin: 20px auto 0 auto;
    }
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

export const PicstoryModalBox = styled(ModalBox)<{ makeMode: boolean }>`
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
  .modal__left .mobile-btn__box,
  .modal__right .mobile-btn__box {
    display: none;
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    flex-direction: column;
    padding: 0 20px 20px 20px;
    width: 95%;
    height: auto;
    .title__label {
      h4 {
        font-size: 20px;
      }
    }
    .modal__left {
      padding: 0;
      & > button {
        display: initial;
        width: 100%;
      }
    }
    .modal__right {
      padding: 0;
      display: none;
      .btn__group {
        display: none;
      }
    }
  }
  .mobile-btn__box {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    button + button {
      margin-left: 20px;
    }
  }

  ${({ makeMode }) =>
    makeMode &&
    css`
      .modal__left {
        display: none;
      }
      .modal__right {
        display: initial;
      }
    `}
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
    overflow-x: hidden;
    padding: 20px 0;
    max-height: 360px;
    margin: 25px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  .btn__group {
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
export const FollowingItemBox = styled.li`
  margin: 10px 0 30px 0;
  width: 220px;
  height: 50px;
  display: flex;
  position: relative;
  img {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  & > .user__info {
    width: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    font-family: 'Noto Serif KR';
    span {
      cursor: pointer;
      display: block;
      font-size: 15px;
    }
    & > ul > li {
      cursor: pointer;
      font-size: 12px;
      small {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        font-size: 12px;
      }
    }
  }
  .unSub__btn {
    position: absolute;
    right: 0;
    top: -10px;
    font-size: 12px;
    background: #fff;
    display: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    &:hover {
      background-color: ${({ theme }) => theme.grayScale[4]};
    }
    svg {
      transform: rotate(40deg);
    }
  }
  &:hover {
    .unSub__btn {
      display: inline-flex;
    }
    span,
    ul > li {
      text-decoration: underline;
    }
  }
`;

export const PhotoDetailBox = styled.div<{ infoOpen: boolean }>`
  position: relative;
  width: 90vh;
  height: 70vh;
  perspective: 2100px;
  display: flex;
  align-items: center;
  justify-content: center;
  .front,
  .back {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
    backface-visibility: hidden;
    transition: 0.5s;
    position: absolute;
  }
  .front {
    transform: rotateY(0deg);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ theme }) =>
      theme.background &&
      css`
        background-color: ${theme.background.modal};
      `};
    img {
      max-width: 90vh;
      max-height: 70vh;
    }
  }
  .back {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.background.initial};
    color: ${({ theme }) => theme.textColor.initial};
    font-family: 'Noto Serif KR';
    font-weight: 100;
    font-size: 14px;
    line-height: 1.5;
    transform: rotateY(-180deg);
  }

  ${({ infoOpen }) =>
    infoOpen &&
    css`
      .front {
        transform: rotateY(180deg);
      }
      .back {
        transform: rotateY(0deg);
      }
    `}
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 97%;
    .front {
      img {
        max-width: 100%;
        max-height: 70vh;
      }
    }
  }
`;

export const PhotoModalBtnBox = styled.div`
  position: fixed;
  top: 25px;
  right: 40px;
  width: 110px;
  height: 35px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 50px;
  box-shadow: 0 1px 5px #eee;
  i {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    top: 25px;
    right: 20px;
  }
`;

export const MakeBinderModalMox = styled(ModalBox)<{ makeMode: boolean }>`
  .double__section {
    display: flex;
    padding-top: 20px;
    height: 320px;
    font-family: 'Noto Serif KR';
    h5 {
      margin: 5px 0 10px 0;
    }
    .section__left {
      width: 300px;
      border-right: 1px solid ${({ theme }) => theme.textColor.initial};
      padding-right: 30px;
      overflow-y: scroll;
      ul {
        li {
          margin: 10px 0;
        }
      }
    }
    .section__right {
      width: 300px;
      padding-left: 30px;
      div:nth-child(3) {
        margin-top: 10px;
      }
      textarea {
        height: 150px;
      }
      & > button {
        margin-top: 10px;
        width: 100%;
      }
      button:last-child {
        display: none;
      }
    }
  }
  & > button {
    width: 110px;
    display: block;
    margin: 30px 0 0 auto;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .title__label {
      h4 {
        font-size: 24px;
      }
    }
    width: 95%;
    .double__section {
      height: auto;
      .section__left {
        width: 100%;
        border-right: none;
        padding-right: 0px;
        ul > li {
          margin: 15px 0;
        }
      }
      .section__right {
        width: 100%;
        padding-left: 0;
        display: none;
        button:last-child {
          display: initial;
        }
      }
    }
    & > button {
      width: 100%;
      display: block;
      margin: 10px 0 0 auto;
    }
    ${({ makeMode }) =>
      makeMode &&
      css`
        & > button {
          display: none;
        }
        .double__section > .section__left {
          display: none;
        }
        .double__section > .section__right {
          display: block;
        }
      `}
  }
`;

export const ChangePasswordModalBox = styled(ModalBox)`
  height: auto;
  min-height: auto;
  form {
    margin-top: 30px;
    width: 400px;
    & > div {
      margin-bottom: 20px;
    }
    & > p {
      margin: 0 0 30px 0;
      font-size: 14px;
      color: #b92961;
      text-align: right;
    }
    .btn__group {
      display: flex;
      justify-content: flex-end;
      button + button {
        margin-left: 20px;
      }
      button {
        height: 35px;
      }
    }
  }
`;
