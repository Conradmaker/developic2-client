import styled from '@emotion/styled';
import React from 'react';
import TitleLabel from '../Label/TitleLabel';
import Layout from '../Layout';
import PageNavigation from '../Nav/PageNavigation';
const navData = [
  { name: '공지사항', link: '/cs/notice' },
  { name: '자주묻는 질문', link: '/cs/faq' },
  { name: '약관 및 정책', link: '/cs/term' },
  { name: '문의', link: '/cs/inquery' },
];
const CustomerCenterContainer = styled.main`
  width: 1240px;
  margin: 0 auto;
  .title {
    margin: 30px 0;
  }
  section {
    .cs__left {
      img {
        margin-top: 50px;
        margin-left: 30px;
        width: 500px;
      }
    }
  }
`;
type CSPageLayoutPropsType = {
  children: React.ReactNode;
};
export default function CSPageLayout({ children }: CSPageLayoutPropsType): JSX.Element {
  return (
    <Layout>
      <CustomerCenterContainer>
        <div className="title">
          <TitleLabel title="고객센터" desc="Customer Center" />
        </div>
        <PageNavigation data={navData} />
        {children}
      </CustomerCenterContainer>
    </Layout>
  );
}
