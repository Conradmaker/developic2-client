import styled from '@emotion/styled';

export const DiscoveryContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
  .discovery__head {
    display: flex;
    padding-bottom: 16px;
    margin-bottom: 36px;
    border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
    & > div {
      width: 250px;
    }
    & > ul {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      width: auto;
      font-family: 'Noto Serif KR';
      li:first-of-type {
        color: #522424;
        font-weight: 600;
      }
      li.tag--active {
        text-decoration: underline;
      }
      li {
        color: ${({ theme }) => theme.textColor.initial};
        font-size: ${({ theme }) => theme.fontSize.xl};
        padding: 5px 5px;
        margin-left: 40px;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.primary[1]};
        }
        &:active {
          color: ${({ theme }) => theme.primary.pLight};
        }
      }
    }
  }
  .discovery__main {
    h1 {
      font-family: 'Noto Serif KR';
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      color: ${({ theme }) => theme.textColor.initial};
      margin-bottom: 15px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 268px;
        padding: 1.786em 0;
        margin-right: 1.786em;
      }
      li:nth-of-type(4n) {
        margin-right: 0;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    margin-top: 20px;
    .discovery__head {
      flex-direction: column;
      padding: 0 10px;
      & > ul {
        margin: 20px 0;
        gap: 20px 10px;
        li {
          margin-left: 0;
          margin-bottom: 0px;
        }
      }
    }
    .discovery__main {
      padding: 0 10px;
      ul {
        flex-wrap: wrap;
        li {
          padding: 30px 10px 30px 10px;
          width: 100%;
          margin-right: 0;
          border-bottom: 1px solid ${({ theme }) => theme.grayScale[3]};
        }
        li:last-of-type {
          border-bottom: none;
        }
      }
    }
  }
`;
