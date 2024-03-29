import Head from 'next/head';
import React, { useEffect } from 'react';
import PageLabel from 'components/Label/PageLabel';
import PageWithNavLayout from 'components/Layout/PageWithNavLayout';
import NoticeList from 'components/List/NoticeList';
import { useAuth, useCS } from 'hooks';
import { CSNavData } from 'utils/data';
import { FaqContainer } from 'styles/pages/cs';

export default function Faq(): JSX.Element {
  const { getCs, getFaqDispatch } = useCS();
  useAuth({ replace: false });

  useEffect(() => {
    getFaqDispatch({ limit: 5 });
  }, []);

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
          <NoticeList data={getCs.data} />
        </div>
      </FaqContainer>
    </PageWithNavLayout>
  );
}
