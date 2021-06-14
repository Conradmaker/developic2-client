import styled from '@emotion/styled';

export const PageNavigationBox = styled.nav`
  border-top: 0.5px solid ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.textColor.initial};
  ul {
    display: flex;
    margin-bottom: 50px;
    li {
      position: relative;
      top: -1px;
      min-width: 90px;
      text-align: center;
      margin-right: 60px;
      font-family: 'Noto Serif KR';
      font-size: 18px;
      cursor: pointer;
      line-height: 2;
      &:hover {
        font-weight: 600;
      }
    }
    li.nav--active {
      font-weight: 600;
      border-top: 3px solid ${({ theme }) => theme.primary[1]};
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    ul {
      justify-content: space-between;
      li {
        flex: 1;
        margin: 0;
        font-size: 16px;
      }
    }
  }
`;
