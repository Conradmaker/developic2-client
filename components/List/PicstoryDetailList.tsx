import React from 'react';
import Masonry from 'react-masonry-css';
import { blogPicstoryDetailData, BlogPost } from '../../modules/blog';
import BlogPostCard from '../Card/BlogPostCard';
import { BlogPostListContainer } from './styles';

type BlogPostCardListPropsType = { picstoryDetailPostData: blogPicstoryDetailData };
export default function PicstoryDetailList({
  picstoryDetailPostData,
}: BlogPostCardListPropsType): JSX.Element {
  return (
    <>
      <BlogPostListContainer>
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {picstoryDetailPostData &&
            picstoryDetailPostData.Posts.map((blogPostItem: BlogPost) => (
              <BlogPostCard key={blogPostItem.id} data={blogPostItem} />
            ))}
        </Masonry>
      </BlogPostListContainer>
    </>
  );
}
