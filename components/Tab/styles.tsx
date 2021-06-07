import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
  ul {
    margin-bottom: 20px;
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

export const SearhSortOptionContainer = styled.div<{
  currentTheme: null | string;
}>`
  position: relative;
  .option__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      margin-left: 8px;
    }
  }
  .sort__dropdown {
    right: 0;
    text-align: center;
    visibility: hidden;
  }
  .dropdown {
    border: 1px solid ${({ theme }) => theme.grayScale[4]};
    border-radius: 3px;
    background-color: #fff;
    position: absolute;
    margin-top: 15px;
    z-index: 9999;
  }
  .dropdown.sort-active {
    visibility: visible;
  }
  ul {
    padding: 20px 22px;
    ${({ currentTheme, theme }) =>
      currentTheme === 'dark' &&
      css`
        & {
          color: ${theme.textColor.reverse};
          box-shadow: 0px 0px 2px 1px #e0e0e0;
        }
      `};
    li {
      white-space: nowrap;
      cursor: pointer;
      padding: 7px 0;
      &:hover {
        color: ${({ theme }) => theme.primary[1]};
      }
      &.item-active {
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.primary[1]};
      }
    }
  }
`;
