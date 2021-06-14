import styled from '@emotion/styled';

export const TitleLabelBox = styled.div`
  height: 62px;
  border-left: 2px solid ${({ theme }) => theme.primary[1]};
  padding-left: 16px;
  justify-self: flex-start;
  div {
    line-height: 1.43;
    h4 {
      font-family: 'Noto Serif KR', serif;
      font-size: 28px;
      color: ${({ theme }) => theme.textColor.initial};
    }
    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 28px;
      font-size: 16px;
      color: ${({ theme }) => theme.textColor.lighten};
    }
  }
`;

export const PageLabelBox = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  font-family: 'Nanum Myeongjo', serif;
  h1 {
    font-size: 48px;
    line-height: 1.31;
    color: ${({ theme }) => theme.textColor.initial};
  }
  p {
    line-height: 1.78;
    color: ${({ theme }) => theme.textColor.lighten};
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
    padding: 10px;
  }
`;
