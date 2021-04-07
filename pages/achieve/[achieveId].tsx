import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import React, { LegacyRef, useRef } from 'react';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout';
import { AchieveItemPropsType } from './inquiry';

const AchieveDetailContainer = styled.div`
  width: 900px;
  margin: 0 auto;
  .detail__poster__wrapper {
    width: 430px;
    max-height: 610px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: auto;
    }
  }
  .detail__summary {
    margin-top: 50px;
    border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
    font-family: 'Noto Serif KR';
    color: ${({ theme }) => theme.textColor.initial};
    h1 {
      margin-top: 38px;
      margin-bottom: 25px;
      font-size: ${({ theme }) => theme.fontSize.titleSize};
      font-weight: 500;
      line-height: 60px;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      margin-top: 15px;
    }
    & > div {
      display: flex;
      justify-content: flex-end;
      margin-top: 70px;
      & > ul {
        border-left: 1px solid ${({ theme }) => theme.grayScale[2]};
        padding: 10px 0 10px 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .detail__by {
          display: flex;
          span {
            font-family: 'Montserrat';
            width: 40px;
          }
          li {
            font-size: ${({ theme }) => theme.fontSize.lg};
          }
          li + li {
            margin-top: 10px;
          }
        }
        & > li + li {
          margin-top: 25px;
        }
      }
    }
  }
  .detail__contact {
    font-family: 'Noto Serif KR';
    color: ${({ theme }) => theme.textColor.initial};
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    p {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      font-weight: 600;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      li + li {
        margin-top: 25px;
      }
    }
  }
  .detail__info {
    font-family: 'Noto Serif KR';
    color: ${({ theme }) => theme.textColor.initial};
    margin-top: 150px;
    p {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      font-weight: 600;
    }
    & > article {
      margin-top: 50px;
      line-height: 35px;
      word-break: keep-all;
      padding: 10px;
      h1 {
        font-size: ${({ theme }) => theme.fontSize.xxxl};
        color: ${({ theme }) => theme.textColor.initial};
        font-weight: 600;
      }
      h2 {
        font-size: ${({ theme }) => theme.fontSize.xxl};
        color: ${({ theme }) => theme.textColor.initial};
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.basel};
        color: ${({ theme }) => theme.textColor.initial};
        font-weight: 500;
      }
    }
  }
  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 130px 0;
    li {
      display: flex;
      position: relative;
      line-height: 70px;
    }
    .list__btn {
      div::before {
        position: absolute;
        bottom: 0;
        content: '';
        display: inline-block;
        border-bottom: 1px solid white;
        width: 12px;
        transform-origin: left;
        transform: translate(0, -17px) rotate(-45deg);
      }
    }
    .edit__btn {
      div::after {
        position: absolute;
        bottom: 0;
        content: '';
        display: inline-block;
        border-bottom: 1px solid white;
        width: 12px;
        transform-origin: left;
        transform: translate(0, -17px) rotate(-135deg);
      }
    }
  }
`;
const achieveItem: AchieveItemPropsType = {
  id: 1,
  price: '무료관람',
  title: '퓰리처상 사진전 - SHOOTING THE PULITZER',
  by: [
    { id: 1, name: '누구누구' },
    { id: 2, name: '자까' },
    { id: 3, name: '풔뤄그뤠풔' },
  ],
  date: ['2021.03.01', '2021.04.09'],
  place: '한가람디자인미술관',
  src: 'https://www.m-i.kr/news/photo/202009/748842_528632_4051.jpg',
  url: 'www.naver.com',
  manager: '김담당',
  phone: '010-1212-3434',
  email: 'damdang_k@naver.com',
  info: (
    <>
      <h1>윌리엄 진서가 자전적 글을 쓰는 방법을 말하는 책</h1>
      <br />
      <h2>
        스스로의 회고록은 글쓰기 고전으로 펴아받는 글쓰기 생각쓰기의 저자 윌리엄 진서가
        자전적 글을 쓰는 방법을 말하는 책이다.
      </h2>
      <br />
      <p>
        진서는 자서전, 회ㅗ록, 개인사 가족사 기록 등 형식과 관계없ㅇ 스스로의 삶에 대한
        기록을 남기는 것은 인간의 본능적인 행동이라고 말한다. 꼭 책으ㅗㄹ 펴내지 않더라도
        삶을 글로 정리하고 보존하는 것은 개인적인 만족감을 준다.
      </p>
      <br />
      <p>
        자전적 글쓰기의 요령은 일반적인 글쓰기 방법ㅂ과는 다소 다르다. 책은 글이 무엇에
        대한 것인지 섣불리 정하지 말라고 말한다. 글을 쓰기도 전에 글의 구성과 주제에 대해
        미리 정하지 말고 어떤 모습으로 완성될지도 미리 상상하지 말라고한다. 기억이 하나씩
        되살아나면서 전혀 생각지 못했던 옛날 기억이 모습을 드러낼 수 있는 만큼 그때그때
        흥미가 느껴지는 소재에 대해 글을 쓰면 된다는 이야기다.
      </p>
      <br />
      <p>
        자전적 글쓰기의 요령은 일반적인 글쓰기 방법ㅂ과는 다소 다르다. 책은 글이 무엇에
        대한 것인지 섣불리 정하지 말라고 말한다. 글을 쓰기도 전에 글의 구성과 주제에 대해
        미리 정하지 말고 어떤 모습으로 완성될지도 미리 상상하지 말라고한다. 기억이 하나씩
        되살아나면서 전혀 생각지 못했던 옛날 기억이 모습을 드러낼 수 있는 만큼 그때그때
        흥미가 느껴지는 소재에 대해 글을 쓰면 된다는 이야기다.
      </p>
    </>
  ),
};
export default function achieveId(): JSX.Element {
  // const queryId = useRouter();
  // const { achieveId } = queryId.query;
  // console.log(achieveId);
  // console.log(queryId.query);
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | achieve</title>
      </Head>
      <AchieveDetailContainer>
        <div className="detail__poster__wrapper">
          <img
            src="https://www.m-i.kr/news/photo/202009/748842_528632_4051.jpg"
            alt="poster"
          />
        </div>
        <section className="detail__summary">
          <h1>{achieveItem.title}</h1>
          <p>{`${achieveItem.date[0]} - ${achieveItem.date[1]}`}</p>
          <p>{achieveItem.place}</p>
          <div>
            <ul>
              <li className="detail__by">
                <span>By</span>
                <ul>
                  {achieveItem.by.map(v => (
                    <li key={v.id}>{v.name}</li>
                  ))}
                </ul>
              </li>
              <li>{achieveItem.url}</li>
              <li>
                {achieveItem.price === '무료관람'
                  ? achieveItem.price
                  : `₩ ${parseInt(achieveItem.price).toLocaleString()}`}
              </li>
            </ul>
          </div>
        </section>
        <section className="detail__contact">
          <p>전시지원</p>
          <ul>
            <li>{achieveItem.manager}</li>
            <li>{achieveItem.phone}</li>
            <li>{achieveItem.email}</li>
          </ul>
        </section>
        <section className="detail__info">
          <p>Info</p>
          <article className="infoinfo">{achieveItem.info}</article>
        </section>
        <ul>
          <li className="list__btn">
            <Button text="목록" bar width="100px" />
          </li>
          <li className="edit__btn">
            <Button text="수정요청" bar width="100px" />
          </li>
        </ul>
      </AchieveDetailContainer>
    </Layout>
  );
}
