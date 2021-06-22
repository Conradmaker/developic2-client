import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout';
import Link from 'next/link';
import useArchive from '../../modules/archive/hooks';
import { useRouter } from 'next/router';
import { calcImageSrc } from '../../utils/calcImageSrc';

const ArchiveDetailContainer = styled.div`
  max-width: 900px;
  margin: 40px auto 40px auto;
  color: ${({ theme }) => theme.textColor.initial};
  font-family: 'Noto Serif KR';
  b {
    font-family: 'Montserrat';
  }
  .detail__poster__wrapper {
    margin: 40px auto;
    max-width: 430px;
    img {
      width: 100%;
      max-height: 610px;
      object-fit: contain;
    }
  }
  .detail__summary {
    border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
    h1 {
      margin: 30px 0;
      font-size: ${({ theme }) => theme.fontSize.titleSize};
      font-weight: 500;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      margin-bottom: 16px;
    }
    & > ul {
      margin: 70px 0 0 auto;
      border-left: 1px solid ${({ theme }) => theme.grayScale[2]};
      padding: 10px 0 10px 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      min-width: 210px;
      max-width: 260px;
      .detail__by {
        display: flex;
        width: 100%;
        ul {
          flex: 1;
          li {
            font-size: ${({ theme }) => theme.fontSize.lg};
            text-align: end;
          }
          li + li {
            margin-top: 7px;
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
  section > p {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: 500;
  }
  .detail__contact {
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      li {
        white-space: nowrap;
        text-align: end;
      }
      li + li {
        margin-top: 25px;
      }
    }
  }
  .detail__info {
    margin-top: 150px;
    & > article {
      margin-top: 50px;
      word-break: keep-all;
      padding: 0 50px;
      text-align: center;
      & > p {
        display: inline-block;
        font-size: ${({ theme }) => theme.fontSize.lg};
        img {
          width: 100%;
          max-height: 450px;
          object-fit: contain;
        }
      }
    }
  }
  .btn__group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    & > div {
      display: flex;
      position: relative;
      line-height: 70px;
    }
    .list__btn > div::before,
    .edit__btn > div::after {
      position: absolute;
      bottom: 0;
      content: '';
      display: inline-block;
      border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
      width: 12px;
      transform-origin: left;
    }
    .list__btn > div::before {
      transform: translate(0, -17px) rotate(-45deg);
    }
    .edit__btn > div::after {
      transform: translate(0, -17px) rotate(-135deg);
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    section:not(.detail__info) {
      padding: 0 10px;
    }
    .detail__poster__wrapper {
      max-width: 90%;
      img {
        max-height: auto;
      }
    }
    .detail__summary {
      h1 {
        margin: 20px 0;
        font-size: 24px;
        font-weight: 500;
      }
      p {
        font-size: 16px;
        margin-bottom: 8px;
      }
      & > ul {
        padding: 10px 0 10px 10px;
        & > li + li {
          margin-top: 15px;
        }
      }
    }
    section > p {
      font-size: 20px;
      font-weight: 500;
    }
    .detail__contact ul > li + li {
      margin-top: 15px;
    }
    .detail__info {
      p {
        margin-left: 10px;
      }
      article {
        margin-top: 30px;
        p {
          font-size: 16px;
          line-height: 1.5;
        }
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
  if (getArchiveDetail.error) return <></>;
  if (!getArchiveDetail.data) return <></>;
  return (
    <Layout>
      <Head>
        <title>ARCHIVE | {getArchiveDetail.data.title}</title>
      </Head>
      <ArchiveDetailContainer>
        <div className="detail__poster__wrapper">
          <img src={calcImageSrc(600, getArchiveDetail.data.poster)} alt="poster" />
        </div>
        <section className="detail__summary">
          <h1>{getArchiveDetail.data.title}</h1>
          <p>
            <b>{`${getArchiveDetail.data.startDate} - ${getArchiveDetail.data.endDate}`}</b>
          </p>
          <p>{getArchiveDetail.data.address}</p>
          <ul>
            <li className="detail__by">
              <b>By</b>
              <ul>
                {getArchiveDetail.data.author.split(',').map(name => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </li>
            <li
              className="detail__link"
              onClick={() => window.open(`https://${getArchiveDetail.data?.webPage}`)}
            >
              사이트로 이동
            </li>
            <li>
              {getArchiveDetail.data.cost === 0
                ? '무료관람'
                : `₩ ${getArchiveDetail.data.cost.toLocaleString()}`}
            </li>
          </ul>
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
        <div className="btn__group">
          <Link href="/archive">
            <div className="list__btn">
              <Button text="목록" bar width="100px" />
            </div>
          </Link>
          <Link href="/cs/inquery">
            <div className="edit__btn">
              <Button text="수정요청" bar width="100px" />
            </div>
          </Link>
        </div>
      </ArchiveDetailContainer>
    </Layout>
  );
}
