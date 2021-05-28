import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import CommonPostCard from '../../components/Card/CommonPostCard';
import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import { DiscoverPageDataType } from '../../modules/list';
import useList from '../../modules/list/hooks';

const DiscoveryContainer = styled.div`
  width: 1150px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
  .discovery__head {
    display: flex;
    padding-bottom: 16px;
    margin-bottom: 36px;
    border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
    & > div {
      width: 250px;
    }
    & > ul {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      width: auto;
      font-family: 'Noto Serif KR';
      li:first-child {
        color: #522424;
        font-weight: 600;
      }
      li.tag--active {
        text-decoration: underline;
      }
      li {
        color: ${({ theme }) => theme.textColor.initial};
        font-size: ${({ theme }) => theme.fontSize.xl};
        padding: 5px 5px;
        margin-left: 40px;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.primary[1]};
        }
        &:active {
          color: ${({ theme }) => theme.primary.pLight};
        }
      }
    }
  }
  .discovery__main {
    h1 {
      font-family: 'Noto Serif KR';
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      color: ${({ theme }) => theme.textColor.initial};
      margin-bottom: 15px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 268px;
        padding: 1.786em 0;
        margin-right: 1.786em;
      }
      li:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
`;
export default function discovery(): JSX.Element {
  const {
    pageData,
    getTaggedPostListDispatch,
    getHashtagListDispatch,
    getPostListDispatch,
  } = useList();
  const router = useRouter();
  const currentTag = router.query.tag;
  useEffect(() => {
    getHashtagListDispatch({ sort: 'popular', term: 'month' });
  }, []);
  useEffect(() => {
    if (!currentTag) {
      getPostListDispatch({ sort: 'popular', term: 'month', limit: 12 });
    } else {
      getTaggedPostListDispatch({ HashtagName: currentTag as string });
    }
  }, [currentTag]);
  if (!(pageData as DiscoverPageDataType).hashtag || !pageData.post) return <></>;
  return (
    <Layout>
      <Head>DEVELOPIC | DISCOVER</Head>
      <DiscoveryContainer>
        <section className="discovery__head">
          <TitleLabel title="인기태그" desc="Popular Tags" />
          <ul>
            <li
              className={!currentTag ? 'tag--active' : ''}
              onClick={() => router.push('/discovery')}
            >
              인기글
            </li>
            {(pageData as DiscoverPageDataType).hashtag.map(tag => (
              <li
                key={tag.id}
                className={tag.name === currentTag ? 'tag--active' : ''}
                onClick={() => router.push(`/discovery?tag=${tag.name}`)}
              >{`# ${tag.name}`}</li>
            ))}
          </ul>
        </section>
        <section className="discovery__main">
          <h1>{!currentTag ? '인기글' : `# ${currentTag}`}</h1>
          <ul>
            {pageData.post.map(post => (
              <CommonPostCard key={post.id} postData={post} />
            ))}
          </ul>
        </section>
      </DiscoveryContainer>
    </Layout>
  );
}
