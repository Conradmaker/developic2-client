import styled from '@emotion/styled';

export const ArchiveDetailContainer = styled.div`
  max-width: 900px;
  margin: 40px auto 40px auto;
  color: ${({ theme }) => theme.textColor.initial};
  font-family: 'Noto Serif KR';
  b {
    font-family: 'Montserrat';
  }
  .detail__poster__wrapper {
    margin: 40px auto;
    max-width: 430px;
    img {
      width: 100%;
      max-height: 610px;
      object-fit: contain;
    }
  }
  .detail__summary {
    border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
    h1 {
      margin: 30px 0;
      font-size: ${({ theme }) => theme.fontSize.titleSize};
      font-weight: 500;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      margin-bottom: 16px;
    }
    & > ul {
      margin: 70px 0 0 auto;
      border-left: 1px solid ${({ theme }) => theme.grayScale[2]};
      padding: 10px 0 10px 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      min-width: 210px;
      max-width: 260px;
      .detail__by {
        display: flex;
        width: 100%;
        ul {
          flex: 1;
          li {
            font-size: ${({ theme }) => theme.fontSize.lg};
            text-align: end;
          }
          li + li {
            margin-top: 7px;
          }
        }
      }
      .detail__link {
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.textColor.lighten};
        }
      }
      & > li + li {
        margin-top: 35px;
      }
    }
  }
  section > p {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: 500;
  }
  .detail__contact {
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      li {
        white-space: nowrap;
        text-align: end;
      }
      li + li {
        margin-top: 25px;
      }
    }
  }
  .detail__info {
    margin-top: 150px;
    & > article {
      margin-top: 50px;
      word-break: keep-all;
      padding: 0 50px;
      text-align: center;
      & > p {
        display: inline-block;
        font-size: ${({ theme }) => theme.fontSize.lg};
        img {
          width: 100%;
          max-height: 450px;
          object-fit: contain;
        }
      }
    }
  }
  .btn__group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    & > div {
      display: flex;
      position: relative;
      line-height: 70px;
    }
    .list__btn > div::before,
    .edit__btn > div::after {
      position: absolute;
      bottom: 0;
      content: '';
      display: inline-block;
      border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
      width: 12px;
      transform-origin: left;
    }
    .list__btn > div::before {
      transform: translate(0, -17px) rotate(-45deg);
    }
    .edit__btn > div::after {
      transform: translate(0, -17px) rotate(-135deg);
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    section:not(.detail__info) {
      padding: 0 10px;
    }
    .detail__poster__wrapper {
      max-width: 90%;
      img {
        max-height: auto;
      }
    }
    .detail__summary {
      h1 {
        margin: 20px 0;
        font-size: 24px;
        font-weight: 500;
      }
      p {
        font-size: 16px;
        margin-bottom: 8px;
      }
      & > ul {
        padding: 10px 0 10px 10px;
        & > li + li {
          margin-top: 15px;
        }
      }
    }
    section > p {
      font-size: 20px;
      font-weight: 500;
    }
    .detail__contact ul > li + li {
      margin-top: 15px;
    }
    .detail__info {
      p {
        margin-left: 10px;
      }
      article {
        margin-top: 30px;
        p {
          font-size: 16px;
          line-height: 1.5;
        }
      }
    }
  }
`;

export const ArchiveEditContainer = styled.div`
  max-width: 1150px;
  margin: 50px auto 100px auto;
  & > section {
    border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
    margin-top: 50px;
    padding: 0 50px;
    font-family: 'Noto Serif KR';
    & > div {
      & > p {
        font-size: ${({ theme }) => theme.fontSize.xxl};
        color: ${({ theme }) => theme.textColor.initial};
        margin-top: 80px 0 50px 0;
      }
      & > article {
        max-width: 800px;
        margin: 0 auto;
      }
    }
    .archive__poster {
      & > article {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .archive__summary {
      margin-top: 80px;
      border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
      & > article {
        & > div + div {
          margin-top: 35px;
        }
        .archive__fee {
          display: flex;
          & > div {
            display: flex;
            align-items: center;
            & > small {
              transform: translateX(-15px);
            }
          }
          & > span {
            margin-left: 25px;
            display: flex;
          }
        }
        .archive__date {
          display: flex;
          align-items: center;
          padding-top: 5px;
          color: ${({ theme }) => theme.textColor.initial};
          span {
            width: 100px;
          }
          small {
            margin: 0 15px;
          }
        }
        .archive__writer {
          display: flex;
          justify-content: space-between;
          & > div + div {
            margin-left: 20px;
          }
        }
      }
    }
    .archive__detail {
      margin-top: 80px;
      border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
    margin: 20px auto 100px auto;
    & > section {
      margin-top: 20px;
      padding: 0px;
      & > div {
        & > p {
          font-size: 16px;
          margin: 20px 0 10px 0;
        }
      }
      .archive__summary {
        margin-top: 50px;
        & > article {
          & .input__cus {
            span {
              width: 80px;
              font-size: 14px;
            }
          }
          .archive__date {
            display: flex;
            align-items: center;
            small {
              margin: 0 10px;
            }
            span {
              display: block;
              flex: 1;
              font-size: 14px;
            }
            & > div {
              width: 36%;
            }
          }
          & > .archive__fee {
            display: flex;
            & > div {
              flex: 1;
              width: auto;
              display: flex;
              align-items: center;
              .input__cus {
                width: auto;
              }
              & > small {
                transform: translateX(-15px);
              }
            }
            & > span {
              margin-left: 15px;
            }
          }
          & > .archive__writer {
            display: block;
            & > div + div {
              margin: 30px 0 0 0;
            }
          }
          & > div + div {
            margin-top: 30px;
          }
        }
      }
    }
  }
`;

export const ArchiveContainer = styled.div`
  max-width: 1150px;
  margin: 50px auto 100px auto;
  & > section {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
    & > button {
      height: 40px;
    }
  }
  & > ul {
    li:nth-of-type(2n) {
      flex-direction: row-reverse;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
    margin: 30px auto 100px auto;
    & > section {
      padding-bottom: 30px;
    }
    & > ul {
      li:nth-of-type(2n) {
        flex-direction: column;
      }
    }
  }
`;
