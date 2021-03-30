import styled from '@emotion/styled';
import React from 'react';
import PageWithNavLayout from '../../components/Layout/PageWithNavLayout';
import Incomplete from '../../components/Result/Incomplete';
import { CSNavData } from '../../utils/data';

const TermContainer = styled.section`
  min-height: 450px;
`;

export default function Term(): JSX.Element {
  return (
    <PageWithNavLayout pageName="고객센터" pageDesc="Customer Center" navData={CSNavData}>
      <TermContainer>
        <Incomplete width={330} title="아직 준비중인 페이지에요." desc="물러가세요" />
      </TermContainer>
    </PageWithNavLayout>
  );
}
