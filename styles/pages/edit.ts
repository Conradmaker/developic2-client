import styled from '@emotion/styled';

export const EditContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
  }
`;

export const EditInfoPostContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 50px;
  display: flex;
  font-family: 'Noto Serif KR';
  h5 {
    margin: 35px 0 15px 0;
    font-size: 18px;
    color: ${({ theme }) => theme.textColor.initial};
  }
  .left__section {
    flex: 1;
    padding-right: 50px;
    border-right: 1px solid ${({ theme }) => theme.grayScale[2]};
    & > span {
      margin-top: 5px;
      display: block;
      text-align: center;
      font-size: 14px;
      color: ${({ theme }) => theme.grayScale[2]};
    }
    textarea {
      outline: none;
      padding: 5px;
      line-height: 1.5;
      border: 1px solid ${({ theme }) => theme.grayScale[2]};
      width: 400px;
      height: 100px;
      resize: none;
      font-size: 16px;
      font-family: san-serif;
    }
  }
  .right__section {
    flex: 1;
    padding-left: 50px;
    .check__group {
      display: flex;
    }
    .license__group {
      li {
        margin-bottom: 7.5px;
      }
    }
    .btn__group {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      button + button {
        margin-left: 20px;
      }
    }
    .btn__group.left {
      justify-content: flex-start;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
    flex-direction: column;
    .left__section {
      padding-right: 0;
      border-right: none;
      textarea {
        width: 100%;
      }
    }
    .right__section {
      padding-left: 0;
    }
  }
`;
