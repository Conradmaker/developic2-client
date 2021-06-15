import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import SquareBtn from '../../components/Button/SquareBtn';
import ArchiveItem from '../../components/Card/ArchiveItem';
import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import useFetchMore from '../../hooks/useFetchMore';
import { getArchiveListAction } from '../../modules/archive';
import useArchive from '../../modules/archive/hooks';
import wrapper from '../../modules/store';
import useUser from '../../modules/user/hooks';
import { authServersiceAction } from '../../utils/getServerSidePropsTemplate';

const ArchiveContainer = styled.div`
  max-width: 1150px;
  margin: 50px auto 100px auto;
  & > section {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
    & > button {
      height: 40px;
    }
  }
  & > ul {
    li:nth-child(2n) {
      flex-direction: row-reverse;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
    margin: 30px auto 100px auto;
    & > section {
      padding-bottom: 30px;
    }
    & > ul {
      li:nth-child(2n) {
        flex-direction: column;
      }
    }
  }
`;
export default function archive(): JSX.Element {
  const { userData } = useUser();
  const { getArchiveList, getArchiveListDispatch, hasMore } = useArchive();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  useEffect(() => {
    if (hasMore && page > 0) {
      getArchiveListDispatch({ limit: 8, offset: page * 8 });
    }
  }, [page]);
  if (!getArchiveList.data) return <></>;
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
          {getArchiveList.data.map(v => (
            <ArchiveItem key={v.id} data={v} listLength={getArchiveList.data?.length} />
          ))}
        </ul>
        <FetchMoreTrigger />
      </ArchiveContainer>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await authServersiceAction(context);
  const { dispatch } = context.store;
  await dispatch(getArchiveListAction({ limit: 8, offset: 0 }));
});
