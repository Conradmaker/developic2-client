import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const slideDown = keyframes`
from{
height:0;
}
to{
height:100px;
}
`;

export const PostSearchListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px 20px;
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 00px;
  }
`;

export const UserCardListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 30px;
  .empty_content {
    text-align: center;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 00px;
  }
`;

export const NoticeListContainer = styled.ul`
  width: 90%;
  li {
    border-bottom: 0.5px solid ${({ theme }) => theme.grayScale[4]};
    font-family: 'Noto Serif KR';
    width: 100%;
    display: flex;
    align-items: flex-start;
    .icon {
      margin: 10px 20px 10px 0;
      color: ${({ theme }) => theme.textColor.initial};
      svg {
        font-size: 25px;
      }
    }
    .content {
      width: 100%;
      h2 {
        color: ${({ theme }) => theme.textColor.initial};
        cursor: pointer;
        height: 25px;
        font-size: 18px;
        line-height: 25px;
        margin: 10px 0;
      }
      article {
        overflow: hidden;
        animation: ${slideDown} 0.4s;
        color: ${({ theme }) => theme.textColor.initial};
        .info {
          margin: 10px 0 20px 0;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: ${({ theme }) => theme.textColor.lighten};
          span {
          }
        }
        p {
          border-left: 2px solid ${({ theme }) => theme.grayScale[2]};
          padding-left: 10px;
          margin: 10px 0;
          line-height: 1.5;
        }
      }
    }
  }
`;

export const PhotoBinderGalleryContainer = styled.div`
  width: 100%;
  z-index: 0;
  .my-masonry-grid {
    width: 100%;
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 10px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column {
    & > div {
    }
  }
`;

export const ImgItemBox = styled.div<{ selected: boolean }>`
  z-index: 0;
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
  & > .img__layer {
    position: absolute;
    top: 0;
    bottom: 2px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.layerColor.imageLayer};
    display: none;
  }
  img {
    width: 100%;
  }
  .check__circle {
    display: none;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.grayScale[4]};
    }
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
  }
  &:hover {
    .check__circle {
      display: flex;
    }
  }
  ${({ selected }) =>
    selected &&
    css`
      .img__layer {
        display: block;
      }
      .check__circle {
        display: flex;
        background-color: #8c30f5;
      }
    `}
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .check__circle {
      display: flex;
      border: 1px solid #aaa;
      &:hover {
        background-color: #8c30f5;
      }
    }
  }
`;

export const BlogPicstoryListContainer = styled.ul`
  margin-bottom: 60px;
  .empty_content {
    text-align: center;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
  }
`;
export const BlogPostListContainer = styled.ul`
  margin-bottom: 100px;
  .empty_content {
    text-align: center;
  }
  .my-masonry-grid {
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column > li {
    margin-bottom: 50px;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
  }
`;

export const PostCommentListContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 50px 175px 0 175px;
  border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
  & > p {
    color: ${({ theme }) => theme.textColor.initial};
    font-family: 'Noto Serif KR';
  }
  & > form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    textarea {
      resize: none;
      border: none;
      outline: none;
      width: 800px;
      height: 95px;
      margin-top: 10px;
      padding: 10px;
      line-height: 24px;
      font-family: 'Noto Serif KR';
      font-size: ${({ theme }) => theme.fontSize.base};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
    }
  }
  & > ul {
    margin-bottom: 100px;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 30px 10px;
    & > form > textarea {
      width: 100%;
    }
  }
`;
