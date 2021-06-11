import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import PageLabel from '../../components/Label/PageLabel';
import PageWithNavLayout from '../../components/Layout/PageWithNavLayout';
import NoticeList from '../../components/List/NoticeList';
import useFetchMore from '../../hooks/useFetchMore';
import { getFaqAction } from '../../modules/cs';
import useCS from '../../modules/cs/hooks';
import wrapper from '../../modules/store';
import { CSNavData } from '../../utils/data';
import { authServersiceAction } from '../../utils/getServerSidePropsTemplate';

const FaqContainer = styled.section`
  min-height: 550px;
`;

export default function Faq(): JSX.Element {
  const { getFaqDispatch, getCs, hasMore } = useCS();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);
  useEffect(() => {
    if (hasMore && page > 0) {
      getFaqDispatch({ limit: 8, offset: page * 8 });
    }
  }, [page]);
  if (!getCs.data) return <></>;
  return (
    <PageWithNavLayout pageName="고객센터" pageDesc="Customer Center" navData={CSNavData}>
      <Head>
        <title>고객센터 | FAQ</title>
      </Head>
      <FaqContainer>
        <div className="cs__left">
          <PageLabel
            width={490}
            text="궁금한게 있으신가요?"
            desc="오른쪽에 해답이 있을수도.."
          />
        </div>
        <div className="cs__right">
          <NoticeList data={getCs.data} firstIndex={getCs.data[0].id} />
          <FetchMoreTrigger />
        </div>
      </FaqContainer>
    </PageWithNavLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await authServersiceAction(context);
  await context.store.dispatch(getFaqAction({ limit: 8, offset: 0 }));
});
