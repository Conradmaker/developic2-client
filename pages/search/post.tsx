import styled from '@emotion/styled';
import React from 'react';

import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import { PageWithNavContainer } from '../../components/Layout/PageWithNavLayout';
import PostCardList from '../../components/List/PostCardList';
import PageNavigation from '../../components/Nav/PageNavigation';
import SortTab from '../../components/Tab/SortTab';
import { SearchNavData } from '../../utils/data';
import { PostData } from '../../utils/postData';

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
        <PostCardList data={PostData} />
      </Wrapper>
    </Layout>
  );
}
