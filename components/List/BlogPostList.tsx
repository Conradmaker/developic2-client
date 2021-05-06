import React from 'react';
import Masonry from 'react-masonry-css';
import { BlogPost, BlogPostListData } from '../../modules/blog';
import BlogPostCard from '../Card/BlogPostCard';
import { BlogPostListContainer } from './styles';

type BlogPostCardListPropsType = {
  blogPostListData: BlogPostListData['blogPosts'];
};

export default function BlogPostList({
  blogPostListData,
}: BlogPostCardListPropsType): JSX.Element {
  return (
    <BlogPostListContainer>
      <div className="empty_content">
        {blogPostListData.length < 1 && '등록된 글이 없습니다.'}
      </div>
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {blogPostListData &&
          blogPostListData.map((blogPostItem: BlogPost) => (
            <BlogPostCard key={blogPostItem.id} data={blogPostItem} />
          ))}
      </Masonry>
    </BlogPostListContainer>
  );
}
