import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideUp = keyframes`
from{
    transform:translate(-30px,30px);
    opacity:0;
}
to{
    transform:translate(0);
    opacity:1;
}
`;
const Btn = styled.button`
  font-family: 'Noto Serif KR';
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const FloatingButtonBox = styled(Btn)`
  position: fixed;
  bottom: 50px;
  right: 30px;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary[1]};
  color: #fff;
  cursor: pointer;
`;
export const DarkModeBox = styled(FloatingButtonBox)`
  font-size: 25px;
  box-shadow: 3px 3px 10px ${({ theme }) => theme.primary[1]},
    -3px -3px 10px ${({ theme }) => theme.primary.pLight};
  svg {
    animation: ${slideUp} 0.3s;
  }
`;

export const SquareBtnBox = styled(Btn)`
  display: inline-block;
  padding: 3px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.grayScale[1]};
  border: 1px solid ${({ theme }) => theme.grayScale[2]};
  &:hover {
    background-color: ${({ theme }) => theme.grayScale[3]};
  }
`;
export const ButtonBox = styled.div<{
  width: undefined | string;
  height: undefined | string;
  bar: null | boolean;
}>`
  button {
    font-family: 'Noto Serif KR';
    width: ${props => (props.width ? `${props.width}` : '160px')};
    height: ${props => (props.height ? `${props.height}` : '35px')};
    color: ${({ theme }) => theme.textColor.initial};
    background: none;
    outline: none;
    border: 1px solid ${({ theme }) => theme.textColor.initial};
    font-size: ${({ theme }) => theme.fontSize.base};
    &:active {
      border: 1px solid ${({ theme }) => theme.textColor.lighten};
      color: ${({ theme }) => theme.textColor.lighten};
    }
    ${props => {
      if (props.bar) {
        return css`
          width: ${props.width ? props.width : 'auto'};
          padding: 1px 10px;
          border: none;
          border-bottom: 1px solid ${props.theme.textColor.initial};
          font-size: ${props.theme.fontSize.lg};
          &:active {
            border: none;
            border-bottom: 1px solid ${props.theme.textColor.lighten};
          }
        `;
      }
    }}
  }
`;

export const CheckBtnBox = styled.div`
  .ck__btn__outline {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.textColor.initial};
    display: flex;
    justify-content: center;
    align-items: center;
    .ck__btn__inside {
      width: 17px;
      height: 17px;
      border-radius: 50%;
      border: none;
      background-color: ${({ theme }) => theme.primary[1]};
    }
  }
  label {
  }
`;

export const HashTagBox = styled.li`
  border: 1px solid ${({ theme }) => theme.textColor.initial};
  padding: 0 10px;
  color: ${({ theme }) => theme.textColor.lighten};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.textColor.lighten};
  }
`;
