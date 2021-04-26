import React from 'react';
import Masonry from 'react-masonry-css';
import { PicstoryDataType } from '../../utils/data';
import BlogPostCard from '../Card/BlogPostCard';
import { BlogPostListContainer } from './styles';

type BlogPostCardListPropsType = { data: PicstoryDataType };
export default function PicstoryDetailList({
  data,
}: BlogPostCardListPropsType): JSX.Element {
  return (
    <>
      <BlogPostListContainer>
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data[0].Posts &&
            data[0].Posts.map(blogPostItem => (
              <BlogPostCard key={blogPostItem.id} data={blogPostItem} />
            ))}
        </Masonry>
      </BlogPostListContainer>
    </>
  );
}
