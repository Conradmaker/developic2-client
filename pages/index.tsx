import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import PageLabel from '../components/Label/PageLabel';
import Layout from '../components/Layout';
import TitleLabel from '../components/Label/TitleLabel';
import PopularPostCard from '../components/Card/PopularPostCard';
import UserProfileCard from '../components/Card/UserProfileCard';
import Exhibition from '../components/Card/Exhibition';
import { DarkModeBtn } from '../components/Button/FloatingBtn';
import { useEffect } from 'react';
import axios from 'axios';
import wrapper from '../modules/store';
import { authAction } from '../modules/user';
import useList from '../modules/list/hooks';
import { MainPageDataType } from '../modules/list';
import Carousel from '../components/List/Carousel';

const MainContainer = styled.main`
  width: 1150px;
  margin: 0 auto;
  margin-top: 50px;
  .banner__image {
    margin-top: 30px;
    margin-bottom: 150px;
    width: 1150px;
    height: 436px;
    background-color: #111;
    img {
      width: 100%;
    }
  }
  .main__nav {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-bottom: 100px;
    & > li {
      cursor: pointer;
      &:hover {
        text-shadow: 0 0 3px ${({ theme }) => theme.grayScale[2]};
      }
    }
  }
  section {
    margin: 50px 0 100px 0;
    h3 {
      color: ${({ theme }) => theme.textColor.initial};
      font-family: 'Nanum Myeongjo';
      font-size: 30px;
      margin-bottom: 40px;
    }
    & > .post__section {
      display: inline-flex;
      flex-wrap: wrap;
    }
  }
  .circle {
    position: absolute;
    z-index: -0;
    top: 1000px;
    left: -240px;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary[2]};
  }
`;
function Home(): JSX.Element {
  const {
    pageData,
    getArchiveListDispatch,
    getWriterListDispatch,
    getPostListDispatch,
  } = useList();
  useEffect(() => {
    getArchiveListDispatch({ limit: 12 });
    getWriterListDispatch({ type: 'all', limit: 5 });
    getPostListDispatch({ sort: 'popular', term: 'month', limit: 15 });
  }, []);
  if (!(pageData as MainPageDataType).archive) return <></>;
  if (!(pageData as MainPageDataType).writer) return <></>;
  if (!(pageData as MainPageDataType).post) return <></>;
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | HOME</title>
      </Head>
      <MainContainer>
        <PageLabel text="디비디 바비디 부 벨소리 울려라" desc="지금은 새벽 4시 반" />
        <div className="banner__image">
          <img src="main_banner.png" alt="banner" />
        </div>
        <ul className="main__nav">
          <Link href="/feed">
            <li>
              <TitleLabel title="피드" desc="Posts by your followers" />
            </li>
          </Link>
          <Link href="/discovery">
            <li>
              <TitleLabel title="탐색" desc="Discover interesting posts" />
            </li>
          </Link>
          <Link href="/feed">
            <li>
              <TitleLabel title="아카이브" desc="Archive for exhibition" />
            </li>
          </Link>
          <Link href="/cs/notice">
            <li>
              <TitleLabel title="고객센터" desc="customer center" />
            </li>
          </Link>
        </ul>
        <section>
          <h3>전시 아카이브</h3>
          <Carousel
            width={230}
            height={490}
            listLength={(pageData as MainPageDataType).archive.length}
          >
            {[
              ...(pageData as MainPageDataType).archive,
              ...(pageData as MainPageDataType).archive,
              ...(pageData as MainPageDataType).archive,
            ].map((archive, i) => (
              <Exhibition key={archive.id + 'ex' + i} archiveData={archive} />
            ))}
          </Carousel>
        </section>
        <section>
          <h3>추천작가</h3>
          <Carousel
            width={220}
            height={220}
            listLength={(pageData as MainPageDataType).writer.length}
          >
            {[
              ...(pageData as MainPageDataType).writer,
              ...(pageData as MainPageDataType).writer,
              ...(pageData as MainPageDataType).writer,
            ].map((userData, i) => (
              <UserProfileCard key={userData.id + 'writer' + i} userData={userData} />
            ))}
          </Carousel>
        </section>
        <section>
          <h3>인기글</h3>
          <div className="post__section">
            {(pageData as MainPageDataType).post.map(postData => (
              <PopularPostCard key={postData.id} postData={postData} />
            ))}
          </div>
        </section>
      </MainContainer>
      <DarkModeBtn />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  console.log('SSR시작');
  console.log(context.req.headers);
  //쿠키 전달
  const cookie = context.req ? context.req.headers.cookie : ''; //이 안에 쿠키 들어있음.
  //쿠키 공유 방지
  axios.defaults.headers.Cookie = ''; //아닐때는 쿠키 제거
  if (context.req && cookie) {
    //서버일때 & 쿠키가 있을때만
    axios.defaults.headers.Cookie = cookie; //쿠키를 넣어주고
  }
  await context.store.dispatch(authAction(null));
  console.log('SSR끝');
});
export default Home;
