import styled from '@emotion/styled';
import React from 'react';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import LikeList from '../../../components/List/LikeList';
import { getLikeListAction } from '../../../modules/drawer';
import wrapper from '../../../modules/store';
import { DrawerNavData } from '../../../utils/data';
import { authServersiceAction } from '../../../utils/getServerSidePropsTemplate';

const LikeListContainer = styled.section`
  min-height: 450px;
`;

export default function like(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <LikeListContainer>
        <LikeList />
      </LikeListContainer>
    </PageWithNavLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { dispatch, getState } = context.store;
  await authServersiceAction(context);
  const state = getState();
  if (state.user.userData) {
    await dispatch(
      getLikeListAction({ userId: state.user.userData?.id, limit: 12, offset: 0 })
    );
  }
});
