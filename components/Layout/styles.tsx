import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const slideToLeft = keyframes`
from{
  transform:translateX(500px)
}
to{
  transform:translateX(0)
}
`;

export const LayoutContainer = styled.div`
  transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.background.initial};
  padding-top: 72px;
`;
export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.primary[1]};
  color: #fff;
  .inner {
    max-width: 1150px;
    height: 150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu__list {
      .logo {
        display: block;
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 2.88px;
      }
      p {
        margin: 10px 0;
        font-size: 12px;
      }
      ul {
        font-size: 12px;
        display: flex;
        li {
          margin-right: 10px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .social__list {
      display: flex;
      gap: 25px;
      li {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.primary.pLight};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
      }
    }
  }
`;
export const HeaderContainer = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.background.initial};
  transition: background-color 0.3s;
  .inner {
    max-width: 1150px;
    height: 72px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header--left {
      display: flex;
      align-items: center;
      .logo {
        display: block;
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-weight: 600;
        color: ${({ theme }) => theme.textColor.initial};
        letter-spacing: 2.88px;
      }
      ul {
        margin-left: 20px;
        display: flex;
        align-items: center;
        li {
          display: inline-flex;
          align-items: center;
          padding: 5px 10px;
          cursor: pointer;
          color: ${({ theme }) => theme.textColor.initial};
          &:hover {
            text-decoration: underline;
          }
          svg {
          }
        }
      }
    }
    .header--right {
      display: flex;
      align-items: center;
      padding-top: 5px;
      span {
        color: ${({ theme }) => theme.textColor.initial};
        display: inline-block;
        padding: 5px 10px;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      img {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
`;

export const UserMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  z-index: 10;
  .user-menu__drawer {
    font-family: 'Noto Serif KR', serif;
    cursor: initial;
    position: absolute;
    height: 100%;
    width: 340px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.background.modal};
    color: ${({ theme }) => theme.textColor.initial};
    animation: ${slideToLeft} 0.4s;
    box-shadow: 0 0 2px #777;
    & > h2 {
      margin: 20px 0;
      width: 200px;
      text-align: end;
      line-height: 1.5;
      font-size: 18px;
      strong {
        font-size: 20px;
      }
    }
    & > p {
      cursor: pointer;
      display: flex;
      width: 200px;
      padding: 15px 0;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
      svg {
        transition: 0.3s;
      }
      &:hover {
        svg {
          transform: translateX(20px);
        }
      }
    }
    & > ul {
      width: 200px;
      li {
        h3 {
          font-size: 18px;
          line-height: 1.44;
          margin-top: 20px;
          padding: 10px 0;
          border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
        }
        ul {
          width: 100%;
          li {
            cursor: pointer;
            padding: 5px 0;
            text-align: end;
            line-height: 1.86;
            font-size: 14px;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      & > li:last-child {
        cursor: pointer;
        color: #e96363;
        &:hover {
        }
      }
    }
  }
`;

export const BlogUserProfile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.base};
  .profile__top {
    text-align: center;
    margin-bottom: 30px;
    img {
      border-radius: 45px;
      width: 90px;
      height: 90px;
      margin-bottom: 15px;
    }
    h1 {
      margin-bottom: 25px;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.medium};
    }
    p {
      margin-bottom: 15px;
    }
  }
  .profile__bottom {
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    strong {
      margin-bottom: 5px;
    }
    span {
    }
    .follower {
      margin-right: 60px;
      strong {
      }
      span {
      }
    }
    .following {
      strong {
      }
      span {
      }
    }
  }
`;
export const PostDetailContainer = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-bottom: 100px;
  .blog__head {
    color: ${({ theme }) => theme.textColor.initial};
    font-family: 'Noto Serif KR';
    padding-top: 150px;
    & > h1 {
      font-size: ${({ theme }) => theme.fontSize.titleSize};
    }
    & > article {
      display: flex;
      align-items: center;
      margin-top: 40px;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
      }
      strong {
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        margin-left: 10px;
      }
      span {
        font-size: ${({ theme }) => theme.fontSize.base};
        color: ${({ theme }) => theme.textColor.lighten};
        transform: translateY(3px);
        margin-left: 10px;
      }
    }
    & > div {
      display: flex;
      justify-content: space-between;
      & > ul {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        min-height: 70px;
        align-items: flex-end;
        padding-top: 30px;
      }
      & > .post__menu {
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        p {
          text-align: end;
          color: ${({ theme }) => theme.textColor.lighten};
          font-size: ${({ theme }) => theme.fontSize.base};
        }
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          font-size: ${({ theme }) => theme.fontSize.base};
          li {
            cursor: pointer;
            display: flex;
            align-items: center;
            padding: 5px 10px 5px 10px;
            svg {
              margin-right: 5px;
            }
          }
          li + li {
            border-left: 1px solid ${({ theme }) => theme.textColor.initial};
          }
        }
      }
    }
  }
  .blog__posting {
    margin-top: 35px;
    & > img {
      width: 900px;
      height: 450px;
      object-fit: cover;
      margin-bottom: 50px;
    }
  }
`;

export const ScrollBar = styled.div<{ width: number }>`
  position: fixed;
  height: 5px;
  left: 0;
  right: 0;
  top: 0;
  width: 0;
  background-color: ${({ theme }) => theme.primary[1]};
  transition: 0.4s;
  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `}
`;
