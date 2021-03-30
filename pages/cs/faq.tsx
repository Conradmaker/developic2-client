import styled from '@emotion/styled';
import React from 'react';
import PageLabel from '../../components/Label/PageLabel';
import PageWithNavLayout from '../../components/Layout/PageWithNavLayout';
import NoticeList from '../../components/List/NoticeList';
import { CSNavData } from '../../utils/data';

const FaqContainer = styled.section`
  min-height: 550px;
`;

export default function Faq(): JSX.Element {
  return (
    <PageWithNavLayout pageName="고객센터" pageDesc="Customer Center" navData={CSNavData}>
      <FaqContainer>
        <div className="cs__left">
          <PageLabel
            width={490}
            text="궁금한게 있으신가요?"
            desc="오른쪽에 해답이 있을수도.."
          />
        </div>
        <div className="cs__right">
          <NoticeList hasWriter={false} />
        </div>
      </FaqContainer>
    </PageWithNavLayout>
  );
}
