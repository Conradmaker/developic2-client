import Head from 'next/head';
import React, { useEffect } from 'react';
import PhotoBinderCard from 'components/Card/PhotoBinderCard';
import PageWithNavLayout from 'components/Layout/PageWithNavLayout';
import Incomplete from 'components/Result/Incomplete';
import { useAuth, useDrawer, useFetchMore } from 'hooks';
import { DrawerNavData } from 'utils/data';
import { BinderPageContainer } from 'styles/pages/user';

function BinderList(): JSX.Element {
  const { userData } = useAuth({ replace: true });
  const { getBinderList, getPhotoBinderListDispatch, hasMore } = useDrawer();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  useEffect(() => {
    if (!userData) return;
    if (!hasMore && page > 0) return;
    getPhotoBinderListDispatch({ userId: userData.id, limit: 9, offset: page * 9 });
  }, [userData, page, hasMore]);

  if (getBinderList.error)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
  if (!getBinderList.data) return <></>;
  if (getBinderList.data.length === 0)
    return (
      <Incomplete
        title="생성한 바인더가 없습니다."
        desc="마음에 드는 사진을 담아보세요!"
        type="notData"
      />
    );

  return (
    <>
      <BinderPageContainer>
        {getBinderList.data.map(binder => (
          <PhotoBinderCard id={binder.id} binderData={binder} />
        ))}
      </BinderPageContainer>
      <FetchMoreTrigger />
    </>
  );
}

export default function binder(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <Head>
        <title>내서랍 | 포토바인더</title>
      </Head>
      <BinderList />
    </PageWithNavLayout>
  );
}
