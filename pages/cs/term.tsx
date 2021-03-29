import styled from '@emotion/styled';
import React from 'react';
import CSPageLayout from '../../components/Layout/CSPageLayout';
import Incomplete from '../../components/Result/Incomplete';

const TermContainer = styled.section`
  min-height: 450px;
`;

export default function Term(): JSX.Element {
  return (
    <CSPageLayout>
      <TermContainer>
        <Incomplete width={330} title="아직 준비중인 페이지에요." desc="물러가세요" />
      </TermContainer>
    </CSPageLayout>
  );
}
