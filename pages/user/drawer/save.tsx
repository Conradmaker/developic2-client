import Head from 'next/head';
import React, { useEffect } from 'react';
import UnfinishedPostCard from 'components/Card/UnfinishedPostCard';
import PageWithNavLayout from 'components/Layout/PageWithNavLayout';
import Incomplete from 'components/Result/Incomplete';
import { useAuth, useDrawer, useFetchMore } from 'hooks';
import { DrawerNavData } from 'utils/data';
import { SavePageContainer } from 'styles/pages/user';

function SaveList(): JSX.Element {
  const { getTempList, getTempListDispatch, hasMore } = useDrawer();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);
  const { userData } = useAuth({ replace: true });

  useEffect(() => {
    if (!userData) return;
    if (!hasMore && page > 0) return;
    getTempListDispatch({ userId: userData.id, limit: 12, offset: 0 });
  }, [page, userData, hasMore]);

  if (getTempList.error)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
  if (getTempList.loading || !getTempList.data) return <></>;
  if (getTempList.data.length === 0)
    return (
      <Incomplete
        title="작성중인 게시글이 없습니다."
        desc="게시글을 작성해주세요!"
        type="notData"
      />
    );

  return (
    <>
      <SavePageContainer>
        {getTempList.data.map(tempItem => (
          <UnfinishedPostCard id={tempItem.id} tempPostData={tempItem} />
        ))}
      </SavePageContainer>
      <FetchMoreTrigger />
    </>
  );
}

export default function save(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <Head>
        <title>내서랍 | 임시저장 게시글</title>
      </Head>
      <SaveList />
    </PageWithNavLayout>
  );
}
