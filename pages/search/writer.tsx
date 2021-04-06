import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import UserCardList from '../../components/List/UserCardList';
import SearchPageNav from '../../components/Nav/SearchPageNav';
import SortTab from '../../components/Tab/SortTab';
import { UserInfoData, SearchListOptions } from '../../utils/data';

const Wrapper = styled.section`
  width: 1240px;
  margin: 0 auto;
  position: relative;
  .list__Container {
    padding: 0.766em;
    margin: 3.125em 0 0 0;
  }
`;

export default function SearchWriter(): JSX.Element {
  const [currentSort, setCurrentSort] = useState(SearchListOptions.Popular);
  const { query } = useRouter();
  useEffect(() => {
    console.log('서버로 작가 데이터 요청', query.keyword);
  }, [query]);

  return (
    <Layout>
      <Wrapper>
        <SearchPageNav />
        <SortTab currentSort={currentSort} setCurrentSort={setCurrentSort} />
        <div className="list__Container">
          <UserCardList data={UserInfoData}></UserCardList>
        </div>
      </Wrapper>
    </Layout>
  );
}
