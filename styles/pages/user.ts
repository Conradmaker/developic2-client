import styled from '@emotion/styled';

export const BinderPageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 47px;
  margin-bottom: 40px;
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 50px 0px;
  }
`;

export const BinderDetailContainer = styled.div`
  display: flex;
  .left__section {
    position: relative;
    width: 372px;
    margin-right: 50px;
    article {
      position: sticky;
      top: 90px;
      width: 100%;
      font-family: 'Noto Serif KR';
      color: ${({ theme }) => theme.textColor.initial};

      h2 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      p {
        line-height: 2;
        color: ${({ theme }) => theme.textColor.lighten};
      }
      span {
        font-size: 14px;
        color: ${({ theme }) => theme.textColor.lighten};
      }
      .btn__group {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .binder__detail__img__list {
    flex: 1;
    position: relative;
    margin-bottom: 100px;
    .is-empty {
      margin-top: 40px;
      text-align: center;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    flex-direction: column;
    .left__section {
      width: 100%;
      margin-right: 0px;
    }
    .binder__detail__img__list {
      margin-top: 20px;
    }
  }
`;

export const LikeListContainer = styled.div`
  width: 100%;
  font-family: 'Noto Serif KR';
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 70px 24px;
    margin-bottom: 100px;
  }

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px 10px;
    }
  }
`;

export const RecentViewListContainer = styled.ul`
  width: 100%;
  font-family: 'Noto Serif KR';
  & > li {
    .date {
      margin-top: 70px;
      margin-bottom: 50px;
      color: ${({ theme }) => theme.grayScale[1]};
      position: relative;
      display: block;
      width: 100%;
      height: 1px;
      border-top: 1px solid ${({ theme }) => theme.grayScale[1]};
      span {
        display: inline-block;
        letter-spacing: 1.3px;
        padding: 0 20px;
        font-size: 18px;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${({ theme }) => theme.background.initial};
      }
    }
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 50px 24px;
      margin-bottom: 100px;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    & > li {
      .date {
        margin: 50px 0 30px 0;
      }
      ul {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px 10px;
      }
    }
  }
`;

export const SavePageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 50px;

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SettingInfoContainer = styled.section`
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
    flex-direction: column;
    align-items: flex-end;

    .avatar-update__form {
      width: 450px;
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .page__label {
      h1 {
        font-size: 32px;
      }
    }
    .cs__left {
      form {
        margin-top: 0px;
      }
    }
    .cs__right {
      margin-top: 30px;
      align-items: flex-start;
      .avatar-update__form {
        width: 100%;
      }
      .btn__group {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;

export const SettingIntroContainer = styled.section`
  display: flex;
  margin-bottom: 100px;
  .cs__left {
    flex: 1;
    form {
      margin-top: 50px;
      & > div {
        margin-top: 25px;
      }
      & > p {
        font-size: 12px;
        color: #a35757;
        text-align: end;
        padding-top: 8px;
      }
    }
  }
  .cs__right {
    display: flex;
    justify-content: flex-end;
    form {
      margin-left: 50px;
      width: 600px;
      justify-content: flex-end;
      & > span {
        display: block;
        margin-bottom: 30px;
        font-size: 16px;
        font-family: 'Noto Serif KR';
        color: ${({ theme }) => theme.textColor.initial};
      }
      & > div {
        margin-bottom: 30px;
      }
      & > button {
        width: 100%;
      }
      textarea {
        resize: none;
        width: 100%;
        height: 250px;
        padding: 5px;
        font-family: 'san-serif';
        line-height: 1.2;
        font-size: 15px;
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .page__label {
      h1 {
        font-size: 32px;
      }
    }
    .cs__left {
      form {
        margin-top: 0px;
      }
    }
    .cs__right {
      margin-top: 30px;
      align-items: flex-start;
      form {
        margin-left: 0px;
        width: 100%;
        .btn__group {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
`;

export const SignupContainer = styled.div`
  max-width: 1150px;
  margin: 60px auto;
  .signup__container {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    form {
      width: 350px;
      margin-left: 60px;
      margin-top: 10px;
      .signup__form {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        & > div {
          margin-bottom: 5px;
        }
        & > p {
          font-size: 12px;
          color: #b92961;
          text-align: right;
          height: 15px;
          margin-bottom: 5px;
        }
      }
      article {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: auto;
        }
        a {
          color: ${({ theme }) => theme.textColor.lighten};
          font-size: ${({ theme }) => theme.fontSize.small};
          padding-top: 5px;
          margin-left: 10px;
        }
      }
      .btn__wrapper {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        button {
          flex: 1;
          height: 35px;
        }
        button + button {
          margin-left: 30px;
        }
      }
    }
    section {
      width: 500px;
      margin-right: 60px;
      img {
        padding-top: 30px;
        width: 100%;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    margin: 20px auto;
    padding: 0 10px;
    .signup__container {
      margin-top: 20px;
      flex-direction: column;
      form {
        width: 100%;
        margin-left: 0;
      }
      section {
        display: none;
      }
    }
  }
`;

export const SocialAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .banner {
    margin: 50px 0;
    width: 550px;
  }
  .loading {
    width: 70px;
  }
  p {
    margin: 20px 0 100px 0;
    font-size: 20px;
    font-family: 'Noto Serif KR';
    color: ${({ theme }) => theme.textColor.initial};
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .banner {
      margin: 50px 0;
      width: 100%;
    }
  }
`;
