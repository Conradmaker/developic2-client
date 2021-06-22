import styled from '@emotion/styled';

export const BlogUserInfoContainer = styled.section`
  max-width: 850px;
  margin: 0 auto;
  font-family: 'Noto Serif KR';
`;

export const BlogPicstoryContainer = styled.section`
  max-width: 850px;
  margin: 0 auto;
`;

export const PicstoryDetailContainer = styled.section`
  max-width: 850px;
  margin: 0 auto;
  font-family: 'Noto Serif KR';
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 700;
    text-align: center;
    margin-bottom: 25px;
    cursor: pointer;
    color: ${({ theme }) => theme.textColor.initial};
  }
  .empty_content {
    text-align: center;
  }
`;

export const NotAllowComment = styled.div`
  max-width: 800px;
  margin: 0 auto 100px auto;
  text-align: center;
  font-family: 'Noto Serif KR';
`;

export const BlogPostContainer = styled.section`
  max-width: 850px;
  margin: 0 auto;
`;
