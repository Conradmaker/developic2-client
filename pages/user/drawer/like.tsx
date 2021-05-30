import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import LikeList from '../../../components/List/LikeList';
import useDrawer from '../../../modules/drawer/hooks';
import useUser from '../../../modules/user/hooks';
import { DrawerNavData } from '../../../utils/data';

const LikeListContainer = styled.section`
  min-height: 450px;
`;

export default function like(): JSX.Element {
  const { userData } = useUser();
  const { getLikeListDispatch } = useDrawer();
  useEffect(() => {
    if (!userData) return;
    getLikeListDispatch({ userId: userData.id, limit: 12 });
  }, [userData]);

  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <LikeListContainer>
        <LikeList />
      </LikeListContainer>
    </PageWithNavLayout>
  );
}
