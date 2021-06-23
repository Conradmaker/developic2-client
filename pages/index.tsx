import Head from 'next/head';
import Link from 'next/link';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import PageLabel from 'components/Label/PageLabel';
import Layout from 'components/Layout';
import TitleLabel from 'components/Label/TitleLabel';
import PopularPostCard from 'components/Card/PopularPostCard';
import UserProfileCard from 'components/Card/UserProfileCard';
import Exhibition from 'components/Card/Exhibition';
import useList from 'modules/list/hooks';
import { MainPageDataType } from 'modules/list';
import Carousel from 'components/List/Carousel';
import { authServersiceAction } from 'utils/getServerSidePropsTemplate';
import wrapper from 'modules/store';
import Welcome from 'components/Result/Welcome';
import { MainContainer } from 'styles/pages';

export default function Home(): JSX.Element {
  const {
    pageData,
    getArchiveListDispatch,
    getWriterListDispatch,
    getPostListDispatch,
  } = useList();

  const [welcome, setWelcome] = useState(false);
  useEffect(() => {
    if (sessionStorage) {
      const visited = sessionStorage.getItem('visited');
      if (!visited) {
        sessionStorage.setItem('visited', '1');
        setWelcome(true);
      }
    }
    const timeout = setTimeout(() => setWelcome(false), 4300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    getArchiveListDispatch({ limit: 12 });
    getWriterListDispatch({ type: 'all', limit: 12 });
    getPostListDispatch({ sort: 'popular', term: 'week', limit: 15 });
  }, []);

  if (welcome) return <Welcome />;

  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | 디펠로픽</title>
      </Head>
      <MainContainer>
        <PageLabel text="디비디 바비디 부 벨소리 울려라" desc="찍고 쓰는 디벨로픽" />
        <div className="banner__image">
          <img src="main_banner.png" alt="banner" />
        </div>
        <div className="scroll__down">
          <RiArrowDownSLine />
          <span>SCROLL DOWN</span>
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
          {(pageData as MainPageDataType).archive && (
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
          )}
        </section>
        <section>
          <h3>추천작가</h3>
          {(pageData as MainPageDataType).writer && (
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
          )}
        </section>
        <section>
          <h3>인기글</h3>
          <div className="post__section">
            {(pageData as MainPageDataType).post &&
              (pageData as MainPageDataType).post.map(postData => (
                <PopularPostCard key={postData.id + 'post'} postData={postData} />
              ))}
          </div>
          <Link href="/discovery">
            <div className="more__btn"></div>
          </Link>
        </section>
      </MainContainer>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  authServersiceAction(context);
});
