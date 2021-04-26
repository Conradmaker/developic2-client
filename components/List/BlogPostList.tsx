import React from 'react';
import Masonry from 'react-masonry-css';
import { PostDataType } from '../../utils/data';
import BlogPostCard from '../Card/BlogPostCard';
import { BlogPostListContainer } from './styles';

type BlogPostCardListPropsType = {
  data: PostDataType;
};

export default function BlogPostList({ data }: BlogPostCardListPropsType): JSX.Element {
  return (
    <BlogPostListContainer>
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.map(blogPostItem => (
            <BlogPostCard key={blogPostItem.id} data={blogPostItem} />
          ))}
      </Masonry>
    </BlogPostListContainer>
  );
}
