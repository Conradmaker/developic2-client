import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC</title>
      </Head>
      <h1>메인페이지</h1>
      <span>/</span>
    </Layout>
  );
}
