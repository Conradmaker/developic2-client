import styled from '@emotion/styled';
import React from 'react';

import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import { PageWithNavContainer } from '../../components/Layout/PageWithNavLayout';
import PageNavigation from '../../components/Nav/PageNavigation';
import Incomplete from '../../components/Result/Incomplete';
import SortTab from '../../components/Tab/SortTab';
import { SearchNavData } from '../../utils/data';

const SearchPageWithNavContainer = styled(PageWithNavContainer)``;

const Wrapper = styled.section`
  width: 1240px;
  margin: 0 auto;
`;

export default function SearchWithNavLayout(): JSX.Element {
  return (
    <Layout>
      <Wrapper>
        <SearchPageWithNavContainer>
          <div className="title">
            <TitleLabel title="검색" desc="Search" />
          </div>
          <PageNavigation data={SearchNavData} />
        </SearchPageWithNavContainer>
        <SortTab></SortTab>
        <Incomplete width={330} title="검색어를 입력해주세요" desc="" />
      </Wrapper>
    </Layout>
  );
}
