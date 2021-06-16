import styled from '@emotion/styled';
import React from 'react';

const WelcomeContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(8deg, #64daff, #ccf3ff, #40d04f, #273bb9, #091355, #091355);
  background-size: 1200% 1200%;
  animation: GradientBackground 8s ease infinite;
  z-index: 0;
  @keyframes GradientBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  div {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    display: block;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    letter-spacing: 2.88px;
    opacity: 0;
  }
  @keyframes SlideUp {
    0% {
      transform: translateY(50vh);
    }
    100% {
      transform: translateY(000px);
      opacity: 1;
    }
  }
  .first {
    font-size: 28px;
    font-weight: 400;
    top: 38vh;
    animation: SlideUp 1s ease-in-out 0.5s forwards;
  }
  .second {
    font-size: 36px;
    font-weight: 600;
    top: 44vh;
    animation: SlideUp 1s ease-in-out 1.5s forwards;
  }
  .last {
    font-size: 28px;
    font-weight: 400;
    top: 52vh;
    animation: SlideUp 1s ease-in-out 2.5s forwards;
  }
`;
export default function Welcome(): JSX.Element {
  return (
    <WelcomeContainer>
      <div className="logo second">DEVELOPIC</div>
      <div className="first">어서오세요</div>
      <div className="last">입니다.</div>
    </WelcomeContainer>
  );
}
