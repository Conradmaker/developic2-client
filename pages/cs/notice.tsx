import Head from 'next/head';
import React, { useEffect } from 'react';
import PageLabel from 'components/Label/PageLabel';
import PageWithNavLayout from 'components/Layout/PageWithNavLayout';
import NoticeList from 'components/List/NoticeList';
import { CSNavData } from 'utils/data';
import { useAuth, useCS } from 'hooks';
import { NoticeContainer } from 'styles/pages/cs';

export default function Notice(): JSX.Element {
  const { getNoticeDispatch, getCs } = useCS();
  useAuth({ replace: false });

  useEffect(() => {
    getNoticeDispatch({ limit: 5 });
  }, []);

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
        </div>
      </NoticeContainer>
    </PageWithNavLayout>
  );
}
