import styled from '@emotion/styled';

export const MainContainer = styled.main`
  max-width: 1150px;
  margin: 0 auto;
  margin-top: 50px;
  .banner__image {
    margin-top: 30px;
    margin-bottom: 150px;
    max-width: 1150px;
    height: 436px;
    background-color: #273bb9;
    img {
      width: 100%;
    }
  }
  .main__nav {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-bottom: 100px;
    & > li {
      cursor: pointer;
      &:hover {
        text-shadow: 0 0 3px ${({ theme }) => theme.grayScale[2]};
      }
    }
  }
  .scroll__down {
    display: none;
  }
  section {
    margin: 50px 0 100px 0;
    h3 {
      color: ${({ theme }) => theme.textColor.initial};
      font-family: 'Nanum Myeongjo';
      font-size: 30px;
      margin-bottom: 40px;
    }
    & > .post__section {
      display: inline-flex;
      flex-wrap: wrap;
    }
  }
  .more__btn {
    margin: 0 auto;
    font-family: 'Montserrat';
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.grayScale[1]};
    width: 120px;
    height: 35px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.grayScale[1]};
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &::after {
      content: 'MORE';
    }
    &:hover {
      border: 4px solid ${({ theme }) => theme.primary[1]};
      color: ${({ theme }) => theme.primary[1]};
      &::after {
        content: 'DISCOVER';
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding-top: 100vh;
    .page__label {
      height: 436px;
      position: absolute;
      z-index: 10;
      top: 30vh;
      padding: 0 20px;
      h1 {
        text-shadow: 1px 1px 10px black;
        font-size: 42px;
        color: #eee;
      }
      p {
        text-shadow: 1px 1px 10px black;
        color: #aaa;
      }
    }
    .banner__image {
      position: absolute;
      top: 0;
      z-index: 0;
      width: 100%;
      height: 90vh;
      img {
      }
      border-bottom-left-radius: 50% 10%;
      border-bottom-right-radius: 50% 10%;
    }
    .scroll__down {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 85vh;
      left: 0;
      right: 0;
      color: #fff;
      font-size: 30px;
      span {
        font-family: 'Montserrat';
        font-size: 12px;
      }
      animation: MoveUp 1s ease-in-out infinite alternate;

      @keyframes MoveUp {
        0% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    }
    .main__nav {
      position: absolute;
      top: 60vh;
      padding: 0 10px;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 100px;
      z-index: 11;
      & > li {
        h4 {
          color: #fff;
        }
        p {
          color: #aaa;
        }

        margin-bottom: 40px;
        width: 48%;
      }
    }
    section {
      h3 {
        text-align: center;
      }
      & > .post__section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 10px;
        .popular-post__card {
          width: 100%;
          max-width: auto;
          margin: 0 0px 50px 0;
          img {
            max-height: 400px;
          }
        }
      }
    }
  }
`;
