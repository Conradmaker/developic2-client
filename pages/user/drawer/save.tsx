import styled from '@emotion/styled';
import React from 'react';
import UnfinishedPostCard from '../../../components/Card/UnfinishedPostCard';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import { DrawerNavData } from '../../../utils/data';

const SavePageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 50px;
`;
export default function save(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <SavePageContainer>
        <UnfinishedPostCard />
        <UnfinishedPostCard />
        <UnfinishedPostCard />
        <UnfinishedPostCard />
        <UnfinishedPostCard />
      </SavePageContainer>
    </PageWithNavLayout>
  );
}
