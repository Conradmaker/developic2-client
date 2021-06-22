import styled from '@emotion/styled';

export const FeedContainer = styled.div`
  max-width: 1150px;
  margin: 50px auto 100px auto;
  .feed__users,
  .feed__posts {
    padding-top: 30px;
    margin-top: 60px;
    border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
    & > h1 {
      font-family: 'Noto Serif KR';
      line-height: 62px;
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      color: ${({ theme }) => theme.textColor.initial};
    }
  }
  .feed__users {
    .user__list {
      display: flex;
      & > ul {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        height: 100px;
        padding: 0 50px;
        margin-top: 30px;
        li {
          margin: 0 10px;
        }
      }
    }
    .more__recent__users {
      color: ${({ theme }) => theme.textColor.lighten};
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > div {
        width: 40px;
        height: 40px;
        border: 2px solid ${({ theme }) => theme.textColor.lighten};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
          box-shadow: 0 0 3px ${({ theme }) => theme.grayScale[2]};
        }
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.small};
        margin-top: 10px;
      }
    }
  }
  .feed__posts {
    & > ul {
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
    padding: 0 10px;
    margin: 10px auto 50px auto;
    .feed__users {
      margin-top: 30px;
      padding-top: 10px;
      position: relative;
      h1 {
        font-size: 24px;
      }
      .user__list {
        & > ul {
          padding: 0 10px;
          overflow: scroll;
        }
        & > .more__recent__users {
          width: auto;
          position: absolute;
          top: 30px;
          right: 0;
          div {
            display: none;
          }
        }
      }
    }
    .feed__posts {
      h1 {
        font-size: 24px;
      }
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
