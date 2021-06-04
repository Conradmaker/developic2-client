import React from 'react';
import Masonry from 'react-masonry-css';
import useBlog from '../../modules/blog/hooks';
import BlogPostCard from '../Card/BlogPostCard';
import { BlogPostListContainer } from './styles';

export default function PicstoryDetailList(): JSX.Element {
  const { loadBlogPicstoryDetail } = useBlog();

  if (!loadBlogPicstoryDetail.data) return <></>;

  return (
    <>
      <BlogPostListContainer>
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {loadBlogPicstoryDetail.data.Posts.map(blogPostItem => (
            <BlogPostCard key={blogPostItem.id} postData={blogPostItem} />
          ))}
        </Masonry>
      </BlogPostListContainer>
    </>
  );
}
