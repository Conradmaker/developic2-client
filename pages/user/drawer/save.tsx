import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import UnfinishedPostCard from '../../../components/Card/UnfinishedPostCard';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import Incomplete from '../../../components/Result/Incomplete';
import useFetchMore from '../../../hooks/useFetchMore';
import { getTempListAction } from '../../../modules/drawer';
import useDrawer from '../../../modules/drawer/hooks';
import wrapper from '../../../modules/store';
import useUser from '../../../modules/user/hooks';
import { DrawerNavData } from '../../../utils/data';
import { authServersiceAction } from '../../../utils/getServerSidePropsTemplate';

const SavePageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 50px;
`;

function SaveList(): JSX.Element {
  const router = useRouter();
  const { userData } = useUser();
  const { getTempList, getTempListDispatch, hasMore } = useDrawer();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  useEffect(() => {
    if (!userData) {
      router.replace('/');
      return;
    }
    if (hasMore && page > 0) {
      getTempListDispatch({ userId: userData.id, limit: 12, offset: 0 });
    }
  }, [userData, page]);

  if (getTempList.error)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
  if (!getTempList.data)
    return (
      <Incomplete title="에러가 발생했어요." desc="다시 시도 해주세요!" type="error" />
    );
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

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { dispatch, getState } = context.store;

  await authServersiceAction(context);
  const state = getState();
  if (state.user.userData) {
    await dispatch(
      getTempListAction({ userId: state.user.userData.id, limit: 12, offset: 0 })
    );
  }
});
