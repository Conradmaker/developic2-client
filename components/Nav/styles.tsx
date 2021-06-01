import styled from '@emotion/styled';

export const PageNavigationBox = styled.nav`
  border-top: 0.5px solid ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.textColor.initial};
  ul {
    display: flex;
    margin-bottom: 30px;
    li {
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
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;

export const SearchPageNavigation = styled.nav`
  border-bottom: 0.5px solid ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.textColor.initial};
  margin-bottom: 30px;
  ul {
    display: flex;
    li {
      font-family: 'Noto Serif KR';
      font-size: 16px;
      cursor: pointer;
      padding: 15px 50px 15px 0;
      margin-bottom: -1px;
      margin-right: 5px;
      &:hover {
        font-weight: 600;
      }
    }
    li.nav--active {
      border-bottom: 2px solid ${({ theme }) => theme.primary[1]};
      font-weight: bold;
    }
  }
`;
