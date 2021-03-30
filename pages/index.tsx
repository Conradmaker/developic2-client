import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import PageLabel from '../components/Label/PageLabel';
import Layout from '../components/Layout';
import TitleLabel from '../components/Label/TitleLabel';
import PopularPostCard from '../components/Card/PopularPostCard';
import UserProfilrCard from '../components/Card/UserProfilrCard';
import Exhibition from '../components/Card/Exhibition';
import { DarkModeBtn } from '../components/Button/FloatingBtn';

const MainContainer = styled.main`
  width: 1240px;
  margin: 0 auto;
  margin-top: 50px;
  .banner__image {
    margin-top: 30px;
    margin-bottom: 150px;
    width: 1240px;
    height: 473px;
    background-color: #111;
    img {
      height: 100%;
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
export default function Home(): JSX.Element {
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
              <TitleLabel title="피드" desc="Posts by you’r followers" />
            </li>
          </Link>
          <Link href="/feed">
            <li>
              <TitleLabel title="탐색" desc="Discover interesting posts" />
            </li>
          </Link>
          <Link href="/feed">
            <li>
              <TitleLabel title="아카이브" desc="Achieve for exhibition" />
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
          <Exhibition />
        </section>
        <section>
          <h3>추천작가</h3>
          <UserProfilrCard />
        </section>
        <section>
          <h3>인기글</h3>
          <PopularPostCard />
        </section>
      </MainContainer>
      <DarkModeBtn />
    </Layout>
  );
}
