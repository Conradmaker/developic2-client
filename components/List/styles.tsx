import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideDown = keyframes`
from{
height:0;
}
to{
height:100px;
}
`;

export const NoticeListContainer = styled.ul`
  width: 90%;
  li {
    border-bottom: 0.5px solid ${({ theme }) => theme.grayScale[4]};
    font-family: 'Noto Serif KR';
    width: 100%;
    display: flex;
    align-items: flex-start;
    .icon {
      margin: 10px 20px 10px 0;
      color: ${({ theme }) => theme.textColor.initial};
      svg {
        font-size: 25px;
      }
    }
    .content {
      width: 100%;
      h2 {
        color: ${({ theme }) => theme.textColor.initial};
        cursor: pointer;
        height: 25px;
        font-size: 18px;
        line-height: 25px;
        margin: 10px 0;
      }
      article {
        overflow: hidden;
        animation: ${slideDown} 0.4s;
        color: ${({ theme }) => theme.textColor.initial};
        .info {
          margin: 10px 0 20px 0;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: ${({ theme }) => theme.textColor.lighten};
          span {
          }
        }
        p {
          border-left: 2px solid ${({ theme }) => theme.grayScale[2]};
          padding-left: 10px;
          margin: 10px 0;
          line-height: 1.5;
        }
      }
    }
  }
`;
export const RecentViewListContainer = styled.ul`
  width: 100%;
  font-family: 'Noto Serif KR';

  & > li {
    .date {
      margin-top: 50px;
      margin-bottom: 30px;
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
      display: flex;
      flex-wrap: wrap;
      & > li {
        margin-right: 53.3px;
        margin-bottom: 50px;
      }
      li:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
`;
export const LikeListContainer = styled.div`
  width: 100%;
  font-family: 'Noto Serif KR';
  .total_like_count {
    margin-bottom: 30px;
    span {
      color: ${({ theme }) => theme.textColor.initial};
      strong {
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    & > li {
      margin-right: 53.3px;
      margin-bottom: 100px;
    }
    li:nth-child(4n) {
      margin-right: 0;
    }
  }
`;
