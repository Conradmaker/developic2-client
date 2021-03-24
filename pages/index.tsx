import Head from 'next/head';
import styled from '@emotion/styled';

const MainC = styled('button')`
  background-color: ${props => props.theme.dark.background};
`;

export default function Home(): JSX.Element {
  return (
    <MainC>
      <Head>
        <title>DEVELOPIC</title>
      </Head>
      <h1>제목</h1>
      <h1>asdasdasdasdasklfhgalskhklashglkashgkashglkashglasgasg</h1>
    </MainC>
  );
}
