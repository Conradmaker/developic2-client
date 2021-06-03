import Head from 'next/head';
import React from 'react';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import Incomplete from '../../../components/Result/Incomplete';
import { SettingNavData } from '../../../utils/data';

export default function Stats(): JSX.Element {
  return (
    <PageWithNavLayout pageName="설정" pageDesc="Settings" navData={SettingNavData}>
      <Head>
        <title>내정보 | 계정통계</title>
      </Head>
      <Incomplete width={330} title="아직 준비중인 페이지에요." desc="물러가세요" />
    </PageWithNavLayout>
  );
}
