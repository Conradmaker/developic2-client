import styled from '@emotion/styled';
import React from 'react';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import RecentViewList from '../../../components/List/RecentViewList';
import { getRecentViewsAction } from '../../../modules/drawer';
import wrapper from '../../../modules/store';
import { DrawerNavData } from '../../../utils/data';
import { authServersiceAction } from '../../../utils/getServerSidePropsTemplate';

const RecentListContainer = styled.section`
  min-height: 450px;
`;

export default function recent(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <RecentListContainer>
        <RecentViewList />
      </RecentListContainer>
    </PageWithNavLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const {
    store: { dispatch, getState },
  } = context;
  await authServersiceAction(context);

  const state = getState();
  if (state.user.userData) {
    await dispatch(
      getRecentViewsAction({ userId: state.user.userData?.id, limit: 12, offset: 0 })
    );
  }
});
