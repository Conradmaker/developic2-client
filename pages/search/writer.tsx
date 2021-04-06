import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import UserCardList from '../../components/List/UserCardList';
import SearchPageNav from '../../components/Nav/SearchPageNav';
import { UserInfoData } from '../../utils/userData';

const Wrapper = styled.section`
  width: 1240px;
  margin: 0 auto;
  position: relative;
  .list__Container {
    padding: 0.766em;
    margin: 3.125em 0 0 0;
  }
`;

export default function SearchWriter({ value }): JSX.Element {
  return (
    <Layout>
      <Wrapper>
        <SearchPageNav value={value} />
        <div className="list__Container">
          <UserCardList data={UserInfoData}></UserCardList>
        </div>
      </Wrapper>
    </Layout>
  );
}
