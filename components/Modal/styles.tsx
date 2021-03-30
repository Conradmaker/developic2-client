import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
from{
    opacity:0;
}
to{
    opacity:1;
}
`;
const slideUp = keyframes`
from{
    transform:translateY(500px) scale(0.4);
}
to{
    transform:translateY(0px)
}
`;
export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.layerColor.modalLayer};
  animation: ${fadeIn} 0.4s;
  z-index: 10;
`;

export const ModalBox = styled.div`
  min-width: 500px;
  min-height: 500px;
  padding: 35px 50px;
  background-color: ${({ theme }) => theme.background.modal};
  animation: ${slideUp} 0.4s;
  position: relative;
`;

export const LoginModalBox = styled(ModalBox)`
  display: flex;
  width: 850px;
  .login--left {
    width: 50%;
    form {
      width: 100%;
      padding-right: 50px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
  }
  .login--right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background-image: url('https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80');
  }
`;
