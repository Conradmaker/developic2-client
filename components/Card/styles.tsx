import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PopularPostCardBox = styled.div`
  /* background: ${({ theme }) => theme.background.modal}; */
  display: inline-block;
  cursor: pointer;
  img {
    height: 210px;
  }
  article {
    width: 100%;
    font-family: 'Noto Serif KR';
    padding: 5px 5px;
    margin-top: 1px;
    h5 {
      color: ${({ theme }) => theme.textColor.initial};
      font-size: 20px;
    }
    p {
      margin: 10px 0;
      color: ${({ theme }) => theme.textColor.lighten};
      font-size: 16px;
    }
    ul {
      max-width: 300px;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
  &:hover {
    /* border: 0.5px solid ${({ theme }) => theme.grayScale[4]}; */
    box-shadow: 0 0 10px #eee;
  }
`;

export const UserProfileCardBox = styled.div`
  font-family: 'Noto Serif KR';
  max-width: 245px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  img {
    border-radius: 35px;
    width: 70px;
    height: 70px;
    margin-bottom: 15px;
  }
  p {
    color: ${({ theme }) => theme.textColor.initial};
    font-weight: 500;
    font-size: 18px;
  }
  span {
    color: ${({ theme }) => theme.textColor.lighten};
    font-size: 14px;
  }
  &:hover {
    img {
      box-shadow: 0 0 3px ${({ theme }) => theme.grayScale[1]};
    }
    p {
      text-decoration: underline;
    }
  }
`;

export const HashTagBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 13px;
  font-family: 'Noto Serif KR';
  font-size: 14px;
  border: solid 1px ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.grayScale[1]};
  &:hover {
    background-color: ${({ theme }) => theme.grayScale[4]};
  }
`;

export const ExhibitionCardBox = styled.div`
  cursor: pointer;
  font-family: 'Noto Serif KR';
  width: 233px;
  img {
    width: 100%;
    height: 330px;
  }
  article {
    margin-top: 10px;
    padding: 5px;
    color: ${({ theme }) => theme.textColor.initial};
    h5 {
      font-size: 20px;
    }
    p {
      display: block;
      margin: 10px 0;
      font-size: 16px;
    }
    ul {
      font-family: 'Montserrat';
      li {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 1.2;
        small {
        }
        strong {
        }
      }
    }
  }
`;

export const CommonPostCardBox = styled.li`
  font-family: 'Noto Serif KR';
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: justify;
  position: relative;
  line-height: 1.5;
  width: 273px;
  article {
    cursor: pointer;
    width: 100%;
    & > img {
      width: 100%;
      height: 160px;
      object-fit: cover;
    }
    h3 {
      color: ${({ theme }) => theme.textColor.initial};
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.medium};
      margin: 0.857em 0 0.857em 0;
    }
    p {
      color: ${({ theme }) => theme.grayScale[2]};
      margin-bottom: 1.786em;
    }
    &:hover h3 {
      transition: all 0.25s ease-in-out;
      color: ${({ theme }) => theme.primary[1]};
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .stats {
      color: ${({ theme }) => theme.textColor.initial};
      font-family: 'Montserrat';
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 32%;
      font-size: ${({ theme }) => theme.fontSize.small};
      svg {
        color: ${({ theme }) => theme.grayScale[2]};
        padding-top: 0.071em;
        margin-right: 0.214em;
        font-size: ${({ theme }) => theme.fontSize.base};
      }
    }
  }
`;

export const UserAvatarWithNameBox = styled.div`
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-right: 0.357em;
  }
  strong {
    color: ${({ theme }) => theme.textColor.initial};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin-right: 0.143em;
  }
  span {
    color: ${({ theme }) => theme.grayScale[2]};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const StatsBox = styled.div`
  width: 32%;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: 'Montserrat';
  color: ${({ theme }) => theme.textColor.lighten};
  .post__likes {
    svg {
    }
  }
  .post__views {
    svg {
    }
  }
  svg {
    color: ${({ theme }) => theme.grayScale[1]};
    padding-top: 0.071em;
    margin-right: 0.214em;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

export const UserInfoCardBox = styled.li`
  background-color: #fff;
  border: solid 1px #efefef;
  position: relative;
  width: 390px;
  margin: 0 auto;
  margin-bottom: 3.125em;
  article {
    display: flex;
    flex-direction: column;
    justify-content: Center;
    align-items: center;
    width: 100%;
    &:hover h3 {
      color: ${({ theme }) => theme.primary[1]};
    }
    > img {
      margin-top: 2.357em;
      border-radius: 75px;
      width: 150px;
      height: 150px;
      margin-bottom: 1.071em;
      cursor: pointer;
    }
    h3 {
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      margin: 0.875em 0;
    }
    p {
      cursor: pointer;
      font-size: ${({ theme }) => theme.fontSize.medium};
      color: ${({ theme }) => theme.textColor.initial};
      margin-bottom: 2em;
    }

    .writer__add-info {
      color: ${({ theme }) => theme.textColor.lighten};
      font-size: ${({ theme }) => theme.fontSize.base};
      display: flex;
      justify-content: space-between;
      width: 40%;
      margin-bottom: 2.357em;
      div {
        display: block;
        text-align: center;
        div {
          margin-bottom: 0.357em;
          font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        }
        span {
          font-weight: ${({ theme }) => theme.fontWeight.regular};
        }
      }
    }
    .writer__recent-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .img__box {
        width: 33.3%;
        height: 90px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export const ArchiveItemContainer = styled.li<{
  posterId: number;
  currentTheme: null | string;
}>`
  width: 1020px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  align-items: center;
  ${props =>
    props.posterId % 2 === 0 &&
    css`
      & {
        flex-direction: row-reverse;
      }
    `};
  .img__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 232px;
    height: 350px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-height: 350px;
      overflow: hidden;
      cursor: pointer;
      ${props =>
        props.currentTheme === 'light' &&
        css`
          & {
            box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.15),
              -3px -3px 15px rgba(0, 0, 0, 0.15);
          }
        `};
      ${props =>
        props.currentTheme === 'dark' &&
        css`
          & {
            box-shadow: 3px 3px 15px rgba(255, 255, 255, 0.15),
              -3px -3px 15px rgba(255, 255, 255, 0.15);
          }
        `};
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  article {
    width: 500px;
    margin: 0 100px;
    font-family: 'Noto Serif KR';
    small {
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.textColor.lighten};
    }
    h2 {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.xxl};
      color: ${({ theme }) => theme.textColor.initial};
      margin-top: 28px;
      line-height: 33px;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.textColor.lighten};
      }
    }
    h2 + p {
      margin-top: 28px;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.lg};
      color: ${({ theme }) => theme.textColor.lighten};
      margin-top: 22px;
      span + span::before {
        content: ', ';
      }
    }
    b {
      font-family: 'Montserrat';
    }
  }
`;
