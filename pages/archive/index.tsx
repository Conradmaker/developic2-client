import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import SquareBtn from 'components/Button/SquareBtn';
import ArchiveItem from 'components/Card/ArchiveItem';
import TitleLabel from 'components/Label/TitleLabel';
import Layout from 'components/Layout';
import { useArchive } from 'modules/archive';
import { useAuth, useFetchMore } from 'hooks';
import { ArchiveContainer } from 'styles/pages/archive';

export default function archive(): JSX.Element {
  const { userData } = useAuth({ replace: false });
  const { getArchiveList, getArchiveListDispatch, hasMore } = useArchive();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  useEffect(() => {
    if (!hasMore && page > 0) return;
    getArchiveListDispatch({ limit: 8, offset: page * 8 });
  }, [page]);

  return (
    <Layout>
      <Head>
        <title>ARCHIVE | 전시회 정보</title>
      </Head>
      <ArchiveContainer>
        <section>
          <TitleLabel title="전시정보" desc="Exhibition Archive" />
          {userData && (
            <Link href="/archive/edit">
              <SquareBtn>전시 등록</SquareBtn>
            </Link>
          )}
        </section>
        <ul>
          {getArchiveList.data &&
            getArchiveList.data.map(v => (
              <ArchiveItem key={v.id} data={v} listLength={getArchiveList.data?.length} />
            ))}
        </ul>
        <FetchMoreTrigger />
      </ArchiveContainer>
    </Layout>
  );
}

// 서버 성능 향상시 적용
// export const getServerSideProps = wrapper.getServerSideProps(async context => {
//   authServersiceAction(context);
//   const { dispatch } = context.store;
//   dispatch(getArchiveListAction({ limit: 8, offset: 0 }));
// });
