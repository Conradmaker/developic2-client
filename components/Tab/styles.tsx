import styled from '@emotion/styled';

export const BlogTabBox = styled.ul`
  margin: 45px auto;
  display: flex;
  justify-content: center;
  li {
    text-align: center;
    width: 20%;
    display: inline-block;
    padding: 15px 30px;
    margin-bottom: -1px;
  }
  li:hover {
    cursor: pointer;
    font-weight: bold;
  }
  li.nav--active {
    border-bottom: 2px solid ${({ theme }) => theme.primary[1]};
    font-weight: bold;
  }

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    max-width: 380px;
    li {
      flex: 1;
      white-space: nowrap;
      padding: 15px 00px;
    }
  }
`;

export const SearchTabBox = styled.nav`
  height: 30px;
  margin-top: 50px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
  a {
    width: 100px;
    padding: 12px 20px;
    margin-right: 8px;
    cursor: pointer;
    color: ${({ theme }) => theme.textColor.initial};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    &.active {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      border-bottom: 2px solid ${({ theme }) => theme.primary[1]};
    }
  }
`;

export const SortTabBox = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
  ul {
    margin-bottom: 40px;
    position: relative;
    display: flex;
    width: 110px;
    justify-content: space-between;
    text-align: right;
    li {
      display: inline-block;
      cursor: pointer;
    }
    li:last-of-type {
      margin-left: 10px;
    }
    li.active {
      font-weight: bold;
    }
    li:first-of-type.active:before {
      content: '';
      position: absolute;
      top: 40%;
      left: -10px;
      height: 5px;
      width: 5px;
      border-radius: 2.5px;
      background-color: ${({ theme }) => theme.primary[1]};
    }
    li:last-of-type.active:before {
      content: '';
      position: absolute;
      top: 40%;
      left: 58px;
      height: 5px;
      width: 5px;
      border-radius: 2.5px;
      background-color: ${({ theme }) => theme.primary[1]};
    }
  }
`;
