import { keyframes } from '@emotion/react';
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
export const FloatingButtonBox = styled.button`
  position: fixed;
  bottom: 50px;
  right: 30px;
  border: none;
  outline: none;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary[1]};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
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
export const ButtonBox = styled.div<{ width: number; height: number }>`
  button {
    border: 1px solid ${({ theme }) => theme.textColor.initial};
    color: ${({ theme }) => theme.textColor.initial};
    background: none;
    width: ${props => (props.width ? `${props.width}px` : '150px')};
    height: ${props => (props.height ? `${props.height}px` : '30px')};
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
