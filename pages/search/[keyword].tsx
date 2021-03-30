import React, { useEffect, useState } from 'react';
import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import { PageWithNavContainer } from '../../components/Layout/PageWithNavLayout';
import PageNavigation from '../../components/Nav/PageNavigation';

const SearchContainer = styled(PageWithNavContainer)`
  .title {
    input {
    }
  }
`;

export default function SearchPage(): JSX.Element {
  const [keywords, setKeywords] = useState('');
  useEffect(() => {}, []);
  return (
    <Layout>
      <PageWithNavContainer>
        <div className="title">
          <TitleLabel title="검색" desc="search page" />
          input
        </div>
        <PageNavigation data={navData} />
        {}
      </PageWithNavContainer>
    </Layout>
  );
}
