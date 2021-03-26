import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.background.initial};
  padding-top: 72px;
`;

export const HeaderContainer = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.background.initial};
  transition: background-color 0.3s;
  .inner {
    max-width: 1240px;
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
    }
  }
`;

export const FooterContainer = styled.footer``;
