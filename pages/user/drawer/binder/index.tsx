import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import SquareBtn from '../../../../components/Button/SquareBtn';
import PhotoBinderCard from '../../../../components/Card/PhotoBinderCard';
import PageWithNavLayout from '../../../../components/Layout/PageWithNavLayout';
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
  & > button {
    position: absolute;
    top: -40px;
    right: 0;
  }
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
      getPhotoBinderListDispatch({ userId: userData.id, limit: 12, offset: page * 12 });
    }
  }, [page]);
  if (getBinderList.error) return <></>;
  if (!getBinderList.data) return <></>;
  if (getBinderList.data.length === 0) return <></>;
  return (
    <>
      <BinderPageContainer>
        {getBinderList.data.map(binder => (
          <PhotoBinderCard id={binder.id} binderData={binder} />
        ))}
        <SquareBtn>포토바인더 생성</SquareBtn>
      </BinderPageContainer>
      <FetchMoreTrigger />
    </>
  );
}

export default function binder(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
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
      getPhotoBinderListAction({ userId: state.user.userData.id, limit: 12, offset: 0 })
    );
  }
});
