import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import { Global, css } from '@emotion/react';
import ModeProvider from '../hooks/ThemeContext';
const globalStyle = css`
  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ModeProvider>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ModeProvider>
  );
}

export default MyApp;
