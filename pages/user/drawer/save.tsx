import styled from '@emotion/styled';
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
import initialGetServerSideProps, {
  authServersiceAction,
} from '../../../utils/getServerSidePropsTemplate';

const SavePageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 50px;
`;
function SaveList(): JSX.Element {
  const router = useRouter();
  const { userData } = useUser();
  const { getTempList, getTempListDispatch, hasMore } = useDrawer();
  const [FetchMoreTrigger, page, setPage] = useFetchMore(hasMore);

  useEffect(() => {
    if (!userData) {
      router.replace('/');
      return;
    }

    if (hasMore && page > 0) {
      getTempListDispatch({ userId: userData.id, limit: 12, offset: 0 });
    }
  }, [page]);
  if (!getTempList.data) return <></>;
  // if (getTempList.data.length === 0)
  //   return <Incomplete title="작성중인 게시글이 없습니다." />;
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
      <SaveList />
    </PageWithNavLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { dispatch, getState } = context.store;
  const state = getState();

  await authServersiceAction(context);

  await dispatch(
    getTempListAction({ userId: state.user.userData?.id, limit: 12, offset: 0 })
  );
});
