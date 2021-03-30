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
      svg {
        font-size: 25px;
      }
    }
    .content {
      width: 100%;
      h2 {
        cursor: pointer;
        height: 25px;
        font-size: 18px;
        line-height: 25px;
        margin: 10px 0;
      }
      article {
        overflow: hidden;
        animation: ${slideDown} 0.4s;
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
