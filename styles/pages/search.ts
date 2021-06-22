import styled from '@emotion/styled';

export const SearchContentBox = styled.div`
  margin-bottom: 85px;
  .sort-option {
    display: flex;
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.fontSize.base};
    position: relative;
    margin-bottom: 30px;
    & > div:first-of-type {
      margin-right: 15px;
    }
  }
`;
