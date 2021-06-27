import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Button from 'components/Button/Button';
import Layout from 'components/Layout';
import { useArchive } from 'hooks';
import { calcImageSrc } from 'utils/calcImageSrc';
import { ArchiveDetailContainer } from 'styles/pages/archive';
import wrapper from 'modules/store';
import { authServersiceAction } from 'utils/getServerSidePropsTemplate';
import { getArchiveDetailAction } from 'modules/archive';
import { PostContentViewerContainer } from 'components/Editor/styles';

export default function archiveId(): JSX.Element {
  const { getArchiveDetail } = useArchive();

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
          <PostContentViewerContainer>
            <article
              dangerouslySetInnerHTML={{ __html: getArchiveDetail.data.description }}
            ></article>
          </PostContentViewerContainer>
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

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { dispatch } = context.store;
  await Promise.allSettled([
    authServersiceAction(context),
    dispatch(getArchiveDetailAction(+(context.params?.exhibitionId as string))),
  ]);
});
