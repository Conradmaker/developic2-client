import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import PhotoBinderCard from '../../../../components/Card/PhotoBinderCard';
import PageWithNavLayout from '../../../../components/Layout/PageWithNavLayout';
import Incomplete from '../../../../components/Result/Incomplete';
import useFetchMore from '../../../../hooks/useFetchMore';
import { getPhotoBinderListAction } from '../../../../modules/drawer';
import useDrawer from '../../../../modules/drawer/hooks';
import wrapper from '../../../../modules/store';
import useUser from '../../../../modules/user/hooks';
import { DrawerNavData } from '../../../../utils/data';
import { authServersiceAction } from '../../../../utils/getServerSidePropsTemplate';

const BinderPageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 47px;
  margin-bottom: 40px;
`;

function BinderList(): JSX.Element {
  const router = useRouter();
  const { userData } = useUser();
  const { getBinderList, getPhotoBinderListDispatch, hasMore } = useDrawer();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  useEffect(() => {
    if (!userData) {
      router.replace('/');
      return;
    }
    if (hasMore && page > 0) {
      getPhotoBinderListDispatch({ userId: userData.id, limit: 9, offset: page * 9 });
    }
  }, [page]);

  if (getBinderList.error)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
  if (!getBinderList.data)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
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

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { dispatch, getState } = context.store;
  await authServersiceAction(context);
  const state = getState();
  if (state.user.userData) {
    await dispatch(
      getPhotoBinderListAction({ userId: state.user.userData.id, limit: 9, offset: 0 })
    );
  }
});
