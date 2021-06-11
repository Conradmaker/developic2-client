import styled from '@emotion/styled';
import React from 'react';
import TitleLabel from '../Label/TitleLabel';
import Layout from '.';
import PageNavigation from '../Nav/PageNavigation';
import { NavDataType } from '../../utils/data';

export const PageWithNavContainer = styled.main`
  width: 1150px;
  margin: 0 auto;
  .title {
    margin: 30px 0;
  }
  & > section {
    display: flex;
    justify-content: space-between;
    .cs__left {
      flex: 1;
      img {
        margin-top: 50px;
        margin-left: 30px;
        width: 500px;
      }
    }
    .cs__right {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;

type PageWithNavLayoutPropsType = {
  children: React.ReactNode;
  navData: NavDataType;
  pageName: string;
  pageDesc: string;
};
export default function PageWithNavLayout({
  pageName = '',
  pageDesc = '',
  navData,
  children,
}: PageWithNavLayoutPropsType): JSX.Element {
  return (
    <Layout>
      <PageWithNavContainer>
        <div className="title">
          <TitleLabel title={pageName} desc={pageDesc} />
        </div>
        <PageNavigation data={navData} />
        {children}
      </PageWithNavContainer>
    </Layout>
  );
}
