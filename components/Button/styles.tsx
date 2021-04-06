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
