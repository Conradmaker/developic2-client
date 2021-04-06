import styled from '@emotion/styled';
import React from 'react';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import RecentViewList from '../../../components/List/RecentViewList';
import { DrawerNavData } from '../../../utils/data';
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
