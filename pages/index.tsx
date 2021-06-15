import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import { RiArrowDownSLine } from 'react-icons/ri';
import PageLabel from '../components/Label/PageLabel';
import Layout from '../components/Layout';
import TitleLabel from '../components/Label/TitleLabel';
import PopularPostCard from '../components/Card/PopularPostCard';
import UserProfileCard from '../components/Card/UserProfileCard';
import Exhibition from '../components/Card/Exhibition';
import useList from '../modules/list/hooks';
import {
  getArchiveListAction,
  getPostListAction,
  getWriterListAction,
  MainPageDataType,
} from '../modules/list';
import Carousel from '../components/List/Carousel';
import { authServersiceAction } from '../utils/getServerSidePropsTemplate';
import wrapper from '../modules/store';

const MainContainer = styled.main`
  max-width: 1150px;
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
  .scroll__down {
    display: none;
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
  .more__btn {
    margin: 0 auto;
    font-family: 'Montserrat';
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.grayScale[1]};
    width: 120px;
    height: 35px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.grayScale[1]};
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &::after {
      content: 'MORE';
    }
    &:hover {
      border: 4px solid ${({ theme }) => theme.primary[1]};
      color: ${({ theme }) => theme.primary[1]};
      &::after {
        content: 'DISCOVER';
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding-top: 100vh;
    .page__label {
      height: 436px;
      position: absolute;
      z-index: 10;
      top: 15vh;
      padding: 0 20px;
      h1 {
        text-shadow: 1px 1px 10px black;
        font-size: 42px;
        color: #eee;
      }
      p {
        text-shadow: 1px 1px 10px black;
        color: #aaa;
      }
    }
    .banner__image {
      background: linear-gradient(
        8deg,
        #64daff,
        #ccf3ff,
        #40d04f,
        #273bb9,
        #091355,
        #091355
      );
      background-size: 1200% 1200%;
      animation: GradientBackground 8s ease infinite;

      @keyframes GradientBackground {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      position: absolute;
      top: 0;
      z-index: 0;
      width: 100%;
      height: 100vh;
      img {
        display: none;
      }
      border-bottom-left-radius: 50% 10%;
      border-bottom-right-radius: 50% 10%;
    }
    .scroll__down {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 85vh;
      left: 0;
      right: 0;
      color: #fff;
      font-size: 30px;
      span {
        font-family: 'Montserrat';
        font-size: 12px;
      }
      animation: MoveUp 1s ease-in-out infinite alternate;

      @keyframes MoveUp {
        0% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    }
    .main__nav {
      position: absolute;
      top: 60vh;
      padding: 0 10px;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 100px;
      & > li {
        h4 {
          color: #fff;
        }
        p {
          color: #aaa;
        }

        margin-bottom: 40px;
        width: 48%;
      }
    }
    section {
      h3 {
        text-align: center;
      }
      & > .post__section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 10px;
        .popular-post__card {
          width: 100%;
          max-width: auto;
          margin: 0 0px 50px 0;
          img {
            max-height: 400px;
          }
        }
      }
    }
  }
`;

export default function Home(): JSX.Element {
  const { pageData } = useList();
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
  await authServersiceAction(context);
  await context.store.dispatch(getArchiveListAction({ limit: 12 }));
  await context.store.dispatch(getWriterListAction({ type: 'all', limit: 12 }));
  await context.store.dispatch(
    getPostListAction({ sort: 'popular', term: 'week', limit: 15 })
  );
});
