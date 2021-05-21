import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout';
import Link from 'next/link';
import useArchive from '../../modules/archive/hooks';
import { useRouter } from 'next/router';

const ArchiveDetailContainer = styled.div`
  max-width: 900px;
  margin: 40px auto 100px auto;
  b {
    font-family: 'Montserrat';
  }
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
    margin-top: 60px;
    border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
    font-family: 'Noto Serif KR';
    color: ${({ theme }) => theme.textColor.initial};
    h1 {
      margin: 40px 0 30px 0;
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
        min-width: 210px;
        max-width: 300px;
        .detail__by {
          display: flex;
          width: 100%;
          span {
            font-family: 'Montserrat';
            width: 40px;
          }
          ul {
            flex: 1;
            li {
              font-size: ${({ theme }) => theme.fontSize.lg};
              text-align: end;
            }
            li + li {
              margin-top: 10px;
            }
          }
        }
        .detail__link {
          text-decoration: underline;
          cursor: pointer;
          &:hover {
            color: ${({ theme }) => theme.textColor.lighten};
          }
        }
        & > li + li {
          margin-top: 35px;
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
      li {
        word-break: break-all;
        text-align: end;
      }
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
      padding: 0 50px;
      text-align: center;
      color: ${({ theme }) => theme.textColor.initial};
      & > p {
        display: inline-block;
        font-size: ${({ theme }) => theme.fontSize.lg};
        font-weight: 500;
        word-break: break-word;
        img {
          width: 100%;
          height: 450px;
          object-fit: contain;
        }
      }
    }
  }
  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    button {
      cursor: pointer;
    }
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
        border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
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
        border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
        width: 12px;
        transform-origin: left;
        transform: translate(0, -17px) rotate(-135deg);
      }
    }
  }
`;
export default function archiveId(): JSX.Element {
  const router = useRouter();
  const { exhibitionId } = router.query;
  const { getArchiveDetail, getArchiveDetailDispatch } = useArchive();
  useEffect(() => {
    if (exhibitionId) {
      getArchiveDetailDispatch(parseInt(exhibitionId as string));
    }
  }, [exhibitionId]);
  if (getArchiveDetail.loading) return <div>로딩중</div>;
  if (getArchiveDetail.error) return <div></div>;
  if (getArchiveDetail.data === null) return <div></div>;
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | archive</title>
      </Head>
      <ArchiveDetailContainer>
        <div className="detail__poster__wrapper">
          <img src={getArchiveDetail.data.poster} alt="poster" />
        </div>
        <section className="detail__summary">
          <h1>{getArchiveDetail.data.title}</h1>
          <p>
            <b>{`${getArchiveDetail.data.startDate} - ${getArchiveDetail.data.endDate}`}</b>
          </p>
          <p>{getArchiveDetail.data.address}</p>
          <div>
            <ul>
              <li className="detail__by">
                <span>By</span>
                <ul>
                  {getArchiveDetail.data.author.split(',').map(name => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </li>
              <Link href={`${getArchiveDetail.data.webPage}`}>
                <li className="detail__link">사이트로 이동</li>
              </Link>
              <li>
                {getArchiveDetail.data.cost === 0
                  ? '무료관람'
                  : `₩ ${getArchiveDetail.data.cost.toLocaleString()}`}
              </li>
            </ul>
          </div>
        </section>
        <section className="detail__contact">
          <p>전시지원</p>
          <ul>
            <li>{getArchiveDetail.data.User.name}</li>
            <li>{getArchiveDetail.data.contact}</li>
            <li>
              <b>{getArchiveDetail.data.email}</b>
            </li>
          </ul>
        </section>
        <section className="detail__info">
          <p>Info</p>
          <article
            dangerouslySetInnerHTML={{ __html: getArchiveDetail.data.description }}
          ></article>
        </section>
        <ul>
          <Link href="/archive">
            <li className="list__btn">
              <Button text="목록" bar width="100px" />
            </li>
          </Link>
          <Link href="/cs/inquery">
            <li className="edit__btn">
              <Button text="수정요청" bar width="100px" />
            </li>
          </Link>
        </ul>
      </ArchiveDetailContainer>
    </Layout>
  );
}
