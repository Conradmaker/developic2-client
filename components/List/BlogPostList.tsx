import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import useFetchMore from '../../hooks/useFetchMore';
import { BlogPost } from '../../modules/blog';
import useBlog from '../../modules/blog/hooks';
import BlogPostCard from '../Card/BlogPostCard';
import Incomplete from '../Result/Incomplete';
import { BlogPostListContainer } from './styles';

export default function BlogPostList(): JSX.Element {
  const { loadBlogPostListDispatch, loadBlogPostList, hasMore } = useBlog();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);
  const router = useRouter();

  useEffect(() => {
    if (hasMore && page > 0) {
      loadBlogPostListDispatch({
        userId: +(router.query.userId as string),
        limit: 12,
        offset: page * 12,
      });
    }
  }, [page]);

  if (!loadBlogPostList.data)
    return (
      <Incomplete
        type="notData"
        title="아직 작성된 글이 없어요."
        desc="다른 작가의 글도 읽어보세요!"
      />
    );

  return (
    <BlogPostListContainer>
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {loadBlogPostList.data.map((blogPostItem: BlogPost) => (
          <BlogPostCard key={blogPostItem.id} postData={blogPostItem} />
        ))}
      </Masonry>
      <FetchMoreTrigger />
    </BlogPostListContainer>
  );
}
