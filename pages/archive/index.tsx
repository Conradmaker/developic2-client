import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import SquareBtn from '../../components/Button/SquareBtn';
import ArchiveItem from '../../components/Card/ArchiveItem';
import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import useArchive from '../../modules/archive/hooks';
import useUser from '../../modules/user/hooks';

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
  }
`;
export default function archive(): JSX.Element {
  const { userData } = useUser();
  const { getArchiveList, getArchiveListDispatch } = useArchive();
  useEffect(() => {
    getArchiveListDispatch();
  }, []);
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | Archive</title>
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
          {getArchiveList.data?.map(v => (
            <ArchiveItem key={v.id} data={v} listLength={getArchiveList.data?.length} />
          ))}
        </ul>
      </ArchiveContainer>
    </Layout>
  );
}
