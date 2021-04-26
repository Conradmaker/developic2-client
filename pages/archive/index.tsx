import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import Button from '../../components/Button/Button';
import ArchiveItem from '../../components/Card/ArchiveItem';
import TitleLabel from '../../components/Label/TitleLabel';
import Layout from '../../components/Layout';

const ArchiveContainer = styled.div`
  max-width: 1150px;
  margin: 50px auto 100px auto;
  & > section {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
  }
  & > ul {
  }
`;
type ByPropsType = {
  id: number;
  name: string;
};
export type ArchiveItemPropsType = {
  id: number;
  price: string;
  title: string;
  by: ByPropsType[];
  date: string[];
  place: string;
  src: string;
  url?: string;
  manager?: string;
  phone?: string;
  email?: string;
  info?: JSX.Element;
};
type ArchiveItemsPropsType = ArchiveItemPropsType[];
const archiveItems: ArchiveItemsPropsType = [
  {
    id: 1,
    price: '무료',
    title: '퓰리처상 사진전 - SHOOTING THE PULITZER SHOOTING THE PULITZER',
    by: [
      { id: 1, name: '진짜' },
      { id: 2, name: '너무나' },
      { id: 3, name: '디벨' },
      { id: 4, name: '로픽' },
    ],
    date: ['2021.03.01', '2021.04.09'],
    place: '예술의 전당',
    src: 'https://www.m-i.kr/news/photo/202009/748842_528632_4051.jpg',
  },
  {
    id: 2,
    price: '20000',
    title: '퓰리처상 사진전 - SHOOTING THE PULITZER',
    by: [
      { id: 1, name: '야야' },
      { id: 2, name: '요요' },
      { id: 3, name: '호호' },
      { id: 4, name: '뿌뿌' },
    ],
    date: ['2021.03.01', '2021.04.09'],
    place: '예술의 전당',
    src: 'https://i.pinimg.com/originals/86/9d/00/869d004089a3618b955c940dda8a76a9.png',
  },
  {
    id: 3,
    price: '무료',
    title: '퓰리처상 사진전 - SHOOTING THE PULITZER',
    by: [
      { id: 1, name: '뜨아' },
      { id: 2, name: '아바라' },
      { id: 3, name: '에스프레소' },
      { id: 4, name: '원두' },
    ],
    date: ['2021.03.01', '2021.04.09'],
    place: '예술의 전당',
    src:
      // 'https://contents.sixshop.com/thumbnails/uploadedFiles/96396/product/image_1611894523266_750.jpg',
      'https://storage.googleapis.com/brique/2020/10/f7503837-%EC%9D%84%EC%A7%80%EB%A1%9C%EC%82%AC%EC%A7%84%EC%A0%84%ED%8F%AC%EC%8A%A4%ED%84%B0_%EA%B0%80%EB%A1%9C-scaled.jpg',
  },
  {
    id: 4,
    price: '무료',
    title: '퓰리처상 사진전 - SHOOTING THE PULITZER',
    by: [
      { id: 1, name: '뜨아' },
      { id: 2, name: '아바라' },
      { id: 3, name: '에스프레소' },
      { id: 4, name: '원두' },
    ],
    date: ['2021.03.01', '2021.04.09'],
    place: '예술의 전당',
    src:
      'https://contents.sixshop.com/thumbnails/uploadedFiles/96396/product/image_1611894523266_750.jpg',
  },
  {
    id: 5,
    price: '무료',
    title: '퓰리처상 사진전 - SHOOTING THE PULITZER',
    by: [
      { id: 1, name: '뜨아' },
      { id: 2, name: '아바라' },
      { id: 3, name: '에스프레소' },
      { id: 4, name: '원두' },
    ],
    date: ['2021.03.01', '2021.04.09'],
    place: '예술의 전당',
    src:
      'https://post-phinf.pstatic.net/MjAyMDAxMjBfMTU3/MDAxNTc5NDkwODg5Mjky._McrNa9NQm2Mwh10TCp-N2gURDQ0Kjc6dROZQB5iS4gg.bF25U0fkZ4ltaJAF28XpHWM2xDtXFNjnVSRVqa_mZZkg.JPEG/%28%EB%B6%99%EC%9E%844%29_%ED%98%B8%ED%85%94%EC%82%AC%ED%9A%8C_%ED%8F%AC%EC%8A%A4%ED%84%B0_%E2%93%92%EC%9B%8C%ED%81%AC%EB%A3%B8.jpg?type=w1200',
  },
];
export default function archive(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | Archive</title>
      </Head>
      <ArchiveContainer>
        <section>
          <TitleLabel title="전시정보" desc="Exhibition Archive" />
          <Button text="전시 등록" width="140px" />
        </section>
        <ul>
          {archiveItems.map(v => (
            <ArchiveItem
              key={v.id}
              id={v.id}
              price={v.price}
              title={v.title}
              by={v.by}
              date={v.date}
              place={v.place}
              src={v.src}
            />
          ))}
        </ul>
      </ArchiveContainer>
    </Layout>
  );
}
