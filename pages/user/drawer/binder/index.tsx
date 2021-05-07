import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import SquareBtn from '../../../../components/Button/SquareBtn';
import PhotoBinderCard from '../../../../components/Card/PhotoBinderCard';
import PageWithNavLayout from '../../../../components/Layout/PageWithNavLayout';
import useDrawer from '../../../../modules/drawer/hooks';
import useUser from '../../../../modules/user/hooks';
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
function BinderList(): JSX.Element {
  const router = useRouter();
  const { userData } = useUser();
  const { getBinderList, getPhotoBinderListDispatch } = useDrawer();
  useEffect(() => {
    if (!userData) {
      router.replace('/');
      return;
    }
    getPhotoBinderListDispatch(userData.id);
  }, [userData]);
  if (!getBinderList.data) return <></>;
  return (
    <BinderPageContainer>
      {getBinderList.data.map(binder => (
        <PhotoBinderCard id={binder.id} binderData={binder} />
      ))}
      <SquareBtn>포토바인더 생성</SquareBtn>
    </BinderPageContainer>
  );
}
export default function binder(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <BinderList />
    </PageWithNavLayout>
  );
}
