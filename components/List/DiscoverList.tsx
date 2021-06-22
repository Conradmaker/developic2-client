import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import CommonPostCard from '../Card/CommonPostCard';
import Incomplete from '../Result/Incomplete';
import { useFetchMore, useList } from 'hooks';

export default function DiscoverList(): JSX.Element {
  const { pageData, hasMore, getTaggedPostListDispatch, getPostListDispatch } = useList();
  const router = useRouter();
  const currentTag = router.query.tag;
  const [FetchMoreTrigger, page, setPage] = useFetchMore(hasMore);

  useEffect(() => {
    setPage(0);
  }, [currentTag]);

  useEffect(() => {
    if (hasMore && page > 0) {
      if (!currentTag) {
        getPostListDispatch({
          sort: 'popular',
          term: 'month',
          limit: 12,
          offset: page * 12,
        });
      } else {
        getTaggedPostListDispatch({
          HashtagName: currentTag as string,
          sort: 'popular',
          limit: 12,
          offset: page * 12,
        });
      }
    }
  }, [page]);

  if (!pageData.post)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );

  return (
    <section className="discovery__main">
      <h1>{!currentTag ? '인기글' : `# ${currentTag}`}</h1>
      <ul>
        {pageData.post.map(post => (
          <CommonPostCard key={post.id} postData={post} />
        ))}
      </ul>
      <FetchMoreTrigger />
    </section>
  );
}
