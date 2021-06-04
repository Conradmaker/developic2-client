import React from 'react';
import Masonry from 'react-masonry-css';
import { BlogPost, BlogPostListData } from '../../modules/blog';
import BlogPostCard from '../Card/BlogPostCard';
import Incomplete from '../Result/Incomplete';
import { BlogPostListContainer } from './styles';

type BlogPostCardListPropsType = {
  blogPostListData: BlogPostListData['blogPosts'];
};

export default function BlogPostList({
  blogPostListData,
}: BlogPostCardListPropsType): JSX.Element {
  if (!blogPostListData) return <Incomplete type="notData" title="아직 글이 없어요." />;

  return (
    <BlogPostListContainer>
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {blogPostListData.map((blogPostItem: BlogPost) => (
          <BlogPostCard key={blogPostItem.id} postData={blogPostItem} />
        ))}
      </Masonry>
    </BlogPostListContainer>
  );
}
