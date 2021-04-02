import styled from '@emotion/styled';
import React from 'react';
import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import { PageWithNavContainer } from '../../components/Layout/PageWithNavLayout';
import UserCardList from '../../components/List/UserCardList';
import PageNavigation from '../../components/Nav/PageNavigation';
import SortTab from '../../components/Tab/SortTab';
import { SearchNavData } from '../../utils/data';
import { UserInfoData } from '../../utils/userData';

const SearchPageWithNavContainer = styled(PageWithNavContainer)``;

const Wrapper = styled.section`
  width: 1240px;
  margin: 0 auto;
  position: relative;
  .list__Container {
    padding: 0.766em;
    margin: 3.125em 0 0 0;
  }
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
        <div className="list__Container">
          <UserCardList data={UserInfoData}></UserCardList>
        </div>
      </Wrapper>
    </Layout>
  );
}
