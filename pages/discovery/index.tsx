import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useState } from 'react';
import CommonPostCard from '../../components/Card/CommonPostCard';
import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';
import { discoveryData } from '../../utils/discoveryData';
import { hashTag } from '../../utils/hashTagData';

const DiscoveryContainer = styled.div`
  width: 1240px;
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
      li {
        color: ${({ theme }) => theme.textColor.initial};
        font-size: ${({ theme }) => theme.fontSize.xl};
        padding: 5px 5px;
        margin-left: 60px;
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
        width: 291px;
        padding: 1.786em 0;
        margin-right: 1.786em;
      }
      li:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
`;
type CurrentTagPropsType = {
  id: string;
  name: string;
};
export default function discovery(): JSX.Element {
  const [currentTag, setCurrentTag] = useState<CurrentTagPropsType | null>(null);
  const onClickHashTag = (state: CurrentTagPropsType): void => {
    setCurrentTag(state);
  };
  // if(currentTag !== null){
  //   dispatch();
  // }
  return (
    <Layout>
      <Head>DEVELOPIC | discovery</Head>
      <DiscoveryContainer>
        <section className="discovery__head">
          <TitleLabel title="인기태그" desc="Popular Tags" />
          <ul>
            {hashTag.map(v => (
              <li key={v.id} onClick={() => onClickHashTag(v)}>{`# ${v.name}`}</li>
            ))}
          </ul>
        </section>
        <section className="discovery__main">
          <h1>{currentTag === null ? '인기글' : `# ${currentTag.name}`}</h1>
          <ul>
            {discoveryData.map(v => (
              <CommonPostCard key={v.id} data={v} />
            ))}
          </ul>
        </section>
      </DiscoveryContainer>
    </Layout>
  );
}
