import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { BlogPicstory, useBlog } from 'modules/blog';
import BlogPistoryCard from '../Card/BlogPistoryCard';
import { BlogPicstoryListContainer } from './styles';
import { useFetchMore } from 'hooks';

export default function BlogPicstoryList(): JSX.Element {
  const router = useRouter();
  const { loadBlogPicstoryListDispatch, loadBlogPicstoryList, hasMore } = useBlog();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  useEffect(() => {
    if (!hasMore && page > 0) return;
    loadBlogPicstoryListDispatch({
      userId: +(router.query.userId as string),
      limit: 12,
      offset: page * 12,
    });
  }, [page, hasMore]);

  if (!loadBlogPicstoryList.data) return <></>;

  return (
    <BlogPicstoryListContainer>
      <div className="empty_content">
        {!hasMore &&
          loadBlogPicstoryList.data.length < 1 &&
          '등록된 픽스토리가 없습니다.'}
      </div>
      {loadBlogPicstoryList.data.map((picstoryItem: BlogPicstory) => (
        <BlogPistoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
      ))}
      <FetchMoreTrigger />
    </BlogPicstoryListContainer>
  );
}
