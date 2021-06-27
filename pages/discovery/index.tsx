import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import TitleLabel from 'components/Label/TitleLabel';
import Layout from 'components/Layout';
import DiscoverList from 'components/List/DiscoverList';
import {
  DiscoverPageDataType,
  getHashtagListAction,
  getPostListAction,
  getTaggedPostListAction,
  useList,
} from 'modules/list';
import wrapper from 'modules/store';
import { authServersiceAction } from 'utils/getServerSidePropsTemplate';
import { DiscoveryContainer } from 'styles/pages/discovery';

export default function discovery(): JSX.Element {
  const { pageData } = useList();

  const router = useRouter();
  const currentTag = router.query.tag;

  return (
    <Layout>
      <Head>
        <title>DISCOVER | {!currentTag ? '인기글' : `# ${currentTag}`}</title>
      </Head>
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
            {(pageData as DiscoverPageDataType).hashtag &&
              (pageData as DiscoverPageDataType).hashtag.map(tag => (
                <li
                  key={tag.id}
                  className={tag.name === currentTag ? 'tag--active' : ''}
                  onClick={() => router.push(`/discovery?tag=${tag.name}`)}
                >{`# ${tag.name}`}</li>
              ))}
          </ul>
        </section>
        <DiscoverList />
      </DiscoveryContainer>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { dispatch } = context.store;

  if (!context.query.tag) {
    await Promise.allSettled([
      authServersiceAction(context),
      dispatch(getHashtagListAction({ sort: 'popular', term: 'month', limit: 18 })),
      dispatch(getPostListAction({ sort: 'popular', term: 'month', limit: 12 })),
    ]);
  } else {
    await Promise.allSettled([
      authServersiceAction(context),
      dispatch(getHashtagListAction({ sort: 'popular', term: 'month', limit: 18 })),
      dispatch(
        getTaggedPostListAction({
          HashtagName: context.query.tag as string,
          limit: 12,
          offset: 0,
          sort: 'popular',
        })
      ),
    ]);
  }
});
