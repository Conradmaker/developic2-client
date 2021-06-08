import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideUp = keyframes`
from{
  transform:translateY(100px)
}
to{
  transform:translateY(0)
}
`;
const slideToRight = keyframes`
from{
  transform:translateX(-270px)
}
to{
  transform:translateX(0)
}
`;
const slideDown = keyframes`
from{
  transform:translateY(0)
}
to{
  transform:translateY(100px)
}
`;

export const BlogUserInfoBox = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto;
  .user__info {
    strong {
      display: block;
      font-weight: 600;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 70px;
    }
  }
`;

export const EmptyContentContainer = styled.section`
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  margin: 0 auto;
  text-align: center;
  margin-top: 120px;
  .empty_message {
    margin-top: 50px;
  }
`;

export const EmptyBlogUserInfoBox = styled.div`
  margin-bottom: 100px;
  text-align: center;
  color: ${({ theme }) => theme.textColor.initial};
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
  margin: 100px 0;
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

export const ToastPopUpBox = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 270px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.primary[1]};
  color: #fff;
  font-size: 14px;

  animation: ${slideUp} 0.5s;
  overflow: hidden;
  box-shadow: 0 3px 5px #aaa;
  &::after {
    content: '';
    display: block;
    width: 270px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    animation: ${slideToRight} 3s;
  }
  ${props =>
    props.visible &&
    css`
      animation: ${slideDown} 0.5s;
    `}
`;

export const SearchCountBox = styled.div`
  font-family: 'Noto Serif KR';
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.grayScale[1]};
`;
