import styled from '@emotion/styled';

export const FaqContainer = styled.section`
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
    .cs__left {
      div {
        padding-left: 0;
      }
      h1 {
        font-size: 32px;
      }
    }
    .cs__right {
      margin: 20px 0 30px 0;
    }
  }
`;

export const InqueryContainer = styled.section`
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
      & > p {
        position: relative;
        top: -10px;
        color: #b93939;
        text-align: end;
        font-size: ${({ theme }) => theme.fontSize.small};
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
    flex-direction: column;
    .cs__left {
      div {
        padding-left: 0;
        h1 {
          font-size: 32px;
        }
      }
      img {
        display: none;
      }
    }
    .cs__right {
      margin: 20px 0 30px 0;
    }
  }
`;

export const NoticeContainer = styled.section`
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
    .cs__left {
      div {
        padding-left: 0;
      }
      h1 {
        font-size: 32px;
      }
      p {
      }
    }
    .cs__right {
      margin: 20px 0 30px 0;
    }
  }
`;

export const TermContainer = styled.section`
  min-height: 450px;
`;
