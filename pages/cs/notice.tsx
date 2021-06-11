import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useEffect } from 'react';
import PageLabel from '../../components/Label/PageLabel';
import PageWithNavLayout from '../../components/Layout/PageWithNavLayout';
import NoticeList from '../../components/List/NoticeList';
import useFetchMore from '../../hooks/useFetchMore';
import { getNoticeAction } from '../../modules/cs';
import useCS from '../../modules/cs/hooks';
import wrapper from '../../modules/store';
import { CSNavData } from '../../utils/data';
import { authServersiceAction } from '../../utils/getServerSidePropsTemplate';

const NoticeContainer = styled.section`
  min-height: 550px;
`;

export default function Notice(): JSX.Element {
  const { getNoticeDispatch, getCs, hasMore } = useCS();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  useEffect(() => {
    if (hasMore && page > 0) {
      getNoticeDispatch({ limit: 8, offset: page * 8 });
    }
  }, [page]);
  if (!getCs.data) return <></>;
  return (
    <PageWithNavLayout pageName="고객센터" pageDesc="Customer Center" navData={CSNavData}>
      <Head>
        <title>고객센터 | 공지사항</title>
      </Head>
      <NoticeContainer>
        <div className="cs__left">
          <PageLabel
            width={450}
            text="작가와 독자분들에게 알릴게 있어요"
            desc="그게 뭔지는 몰라도."
          />
        </div>
        <div className="cs__right">
          <NoticeList data={getCs.data} />
          <FetchMoreTrigger />
        </div>
      </NoticeContainer>
    </PageWithNavLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await authServersiceAction(context);
  await context.store.dispatch(getNoticeAction({ limit: 8, offset: 0 }));
});
