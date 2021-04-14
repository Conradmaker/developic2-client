import styled from '@emotion/styled';

export const EmptyBLogUserInfo = styled.div`
  margin-bottom: 100px;
  text-align: center;
  img {
    width: 60%;
  }
  .userInfo-empty {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin: 40px 0;
  }
`;

export const IncompleteContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > section {
    margin-right: 100px;
    ul {
      color: ${({ theme }) => theme.textColor.initial};
      margin-top: 60px;
      display: flex;
      align-items: center;
      li {
        padding: 5px 10px;
        cursor: pointer;
        border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
      }
      li + li {
        font-size: 18px;
        margin-left: 60px;
      }
    }
  }
  img {
    width: 500px;
  }
`;
