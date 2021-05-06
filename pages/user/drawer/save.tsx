import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import UnfinishedPostCard from '../../../components/Card/UnfinishedPostCard';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import useDrawer from '../../../modules/drawer/hooks';
import useUser from '../../../modules/user/hooks';
import { DrawerNavData } from '../../../utils/data';

const SavePageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 50px;
`;
function SaveList(): JSX.Element {
  const router = useRouter();
  const { userData } = useUser();
  const { getTempList, getTempListDispatch } = useDrawer();
  useEffect(() => {
    if (!userData) {
      router.replace('/');
      return;
    }
    getTempListDispatch(userData.id);
  }, [userData]);
  if (!getTempList.data) return <></>;
  return (
    <SavePageContainer>
      {getTempList.data.map(tempItem => (
        <UnfinishedPostCard id={tempItem.id} tempPostData={tempItem} />
      ))}
    </SavePageContainer>
  );
}
export default function save(): JSX.Element {
  return (
    <PageWithNavLayout pageName="내 서랍" pageDesc="My Drawer" navData={DrawerNavData}>
      <SaveList></SaveList>
    </PageWithNavLayout>
  );
}
