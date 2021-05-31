import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useFetchMore from '../../hooks/useFetchMore';
import useList from '../../modules/list/hooks';
import CommonPostCard from '../Card/CommonPostCard';

export default function DiscoverList(): JSX.Element {
  const { pageData, hasMore, getTaggedPostListDispatch, getPostListDispatch } = useList();
  const router = useRouter();
  const currentTag = router.query.tag;
  const [FetchMoreTrigger, page, setPage] = useFetchMore(hasMore);

  useEffect(() => {
    setPage(0);
  }, [currentTag]);

  useEffect(() => {
    if (hasMore) {
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
