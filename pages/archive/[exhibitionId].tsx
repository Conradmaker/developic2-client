import Head from 'next/head';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from 'components/Button/Button';
import Layout from 'components/Layout';
import { useArchive } from 'hooks';
import { calcImageSrc } from 'utils/calcImageSrc';
import { ArchiveDetailContainer } from 'styles/pages/archive';

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
