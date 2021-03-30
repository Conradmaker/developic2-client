import styled from '@emotion/styled';
import React from 'react';
import PageLabel from '../../components/Label/PageLabel';
import PageWithNavLayout from '../../components/Layout/PageWithNavLayout';
import NoticeList from '../../components/List/NoticeList';
import { CSNavData } from '../../utils/data';

const NoticeContainer = styled.section`
  min-height: 550px;
`;

export default function Inquery(): JSX.Element {
  return (
    <PageWithNavLayout pageName="고객센터" pageDesc="Customer Center" navData={CSNavData}>
      <NoticeContainer>
        <div className="cs__left">
          <PageLabel
            width={450}
            text="작가와 독자분들에게 알릴게 있어요"
            desc="그게 뭔지는 몰라도."
          />
        </div>
        <div className="cs__right">
          <NoticeList />
        </div>
      </NoticeContainer>
    </PageWithNavLayout>
  );
}
