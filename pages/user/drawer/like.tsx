import styled from '@emotion/styled';
import React from 'react';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import LikeList from '../../../components/List/LikeList';
import { DrawerNavData } from '../../../utils/data';

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
