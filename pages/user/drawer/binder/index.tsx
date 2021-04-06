import styled from '@emotion/styled';
import React from 'react';
import SquareBtn from '../../../../components/Button/SquareBtn';
import PhotoBinderCard from '../../../../components/Card/PhotoBinderCard';
import PageWithNavLayout from '../../../../components/Layout/PageWithNavLayout';
import { DrawerNavData } from '../../../../utils/data';

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
export default function binder(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <BinderPageContainer>
        <PhotoBinderCard />
        <PhotoBinderCard />
        <PhotoBinderCard />
        <PhotoBinderCard />
        <PhotoBinderCard />
        <SquareBtn>포토바인더 생성</SquareBtn>
      </BinderPageContainer>
    </PageWithNavLayout>
  );
}
