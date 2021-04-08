import styled from '@emotion/styled';
import React from 'react';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import Incomplete from '../../../components/Result/Incomplete';
import { SettingNavData } from '../../../utils/data';

const StatsContainer = styled.section`
  min-height: 450px;
`;

export default function Stats(): JSX.Element {
  return (
    <PageWithNavLayout pageName="설정" pageDesc="Settings" navData={SettingNavData}>
      <StatsContainer>
        <Incomplete width={330} title="아직 준비중인 페이지에요." desc="물러가세요" />
      </StatsContainer>
    </PageWithNavLayout>
  );
}
